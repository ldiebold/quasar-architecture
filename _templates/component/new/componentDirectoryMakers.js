const CONSTANTS = require('../../CONSTANTS')

module.exports = {
  model ({ modelName, componentName }) {
    return `${CONSTANTS.directories.models}/${modelName}/components/${componentName}`
  },
  base ({ componentName }) {
    return CONSTANTS.directories.baseComponent + '/' + componentName
  },
  other ({ componentName }) {
    return `${CONSTANTS.directories.components}/${componentName}`
  },
}
