const changeCase = require('change-case')
const inflection = require('inflection')
const CONSTANTS = require('../../CONSTANTS')

const modelNamePrompt = require('./prompt/modelNamePrompt')

module.exports = {
  prompt: ({ prompter, args }) => {
    let prompterChain

    if (!args.name) {
      prompterChain = prompter.prompt(modelNamePrompt)
    }

    prompterChain = prompterChain || Promise.resolve({ name: args.name })

    return prompterChain.then(answers => {
      // Here, we can expose additional data to the templates
      const modelPlural = inflection.pluralize(answers.name)
      return {
        ...answers,
        ...CONSTANTS,
        modelPascal: changeCase.pascalCase(answers.name),
        modelKebab: changeCase.pathCase(answers.name),
        modelKebabPlural: changeCase.pathCase(modelPlural),
        modelSnakePlural: changeCase.snakeCase(modelPlural),
        modelCamel: changeCase.camelCase(answers.name),
        modelCamelPlural: changeCase.camelCase(modelPlural),
      }
    })
  },
}
