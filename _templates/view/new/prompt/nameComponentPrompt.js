const color = require('ansi-colors')
const changeCase = require('change-case')
const inflection = require('inflection')

const messageFunctionsMap = {
  model: ({ modelName }) => {
    const modelNamePascal = changeCase.pascalCase(modelName)
    const modelNamePascalPlural = inflection.pluralize(modelNamePascal)

    let message = 'Choose a name for the component.\n'
    message += color.red('It should include the ')
    message += color.bold.underline.red('model name')
    message += color.red(' and end with the word ')
    message += color.bold.underline.red('View')

    message += '\n'

    message += 'e.g. '
    message += color.bold.green('Manage')
    message += color.bold.underline.green(modelNamePascalPlural)
    message += color.bold.green('View')
    message += ' or '
    message += color.bold.underline.green(`${modelNamePascal}`)
    message += color.bold.green('Details' + 'View')

    return message
  },
  other: () => {
    let message = 'Choose a name for the component.\n'

    message += color.red('it should end with the word ')
    message += color.bold.underline.red('View')

    message += '\n'

    message += 'e.g. '
    message += color.bold.green('ImportVideosView')
    message += ' or '
    message += color.bold.green('DashingDashboardView')

    return message
  },
}

const validateFunctionsMap = {
  model: (value, { modelName }) => {
    const modelNamePascal = changeCase.pascalCase(modelName)
    const modelNamePascalPlural = inflection.pluralize(modelNamePascal)
    const missingModelsName = !value.includes(modelNamePascal) &&
      !value.includes(modelNamePascalPlural)

    if (missingModelsName) {
      return `component must include either '${modelNamePascal}' or '${modelNamePascalPlural}' in its name`
    }

    if (value.slice(-4) !== 'View') {
      return 'component name must include the word "View"'
    }

    return true
  },
  other: (value) => {
    if (value.slice(-4) !== 'View') {
      return 'component name must include the word "View"'
    }

    return true
  },
}

module.exports = (answers) => {
  return {
    type: 'input',
    name: 'componentName',
    message () {
      return messageFunctionsMap[answers.componentType](answers)
    },
    validate (value, state) {
      return validateFunctionsMap[answers.componentType](value, answers)
    },
  }
}
