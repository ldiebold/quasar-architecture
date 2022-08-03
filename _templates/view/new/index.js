const componentKindPrompt = require('./prompt/componentKindPrompt')
const nameComponentPrompt = require('./prompt/nameComponentPrompt')

const changeCase = require('change-case')

const componentKindPromptMap = require('./prompt/componentKindPromptMap')
const componentDirectoryMakers = require('./componentDirectoryMakers')

function makeComponentDirectory (answers) {
  return componentDirectoryMakers[answers.componentType](answers)
}

module.exports = {
  prompt: async ({ prompter, args }) => {
    // Discover the kind of component
    const answers = await prompter.prompt(componentKindPrompt)

    // If model component, discover model folder
    if (answers.componentType === 'model') {
      for (const prompt of componentKindPromptMap[answers.componentType]) {
        Object.assign(answers, await prompter.prompt(prompt(answers)))
      }
    }

    // Name the component
    Object.assign(answers, await prompter.prompt(nameComponentPrompt(answers)))

    const componentDirectory = makeComponentDirectory(answers)

    return {
      ...answers,
      componentDirectory,
      componentNameKebab: changeCase.paramCase(answers.componentName),
      componentNamePascal: changeCase.pascalCase(answers.componentName),
    }
  },
}
