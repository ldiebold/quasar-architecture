const CONSTANTS = require('../../CONSTANTS')

module.exports = {
  model ({ modelName, componentName }) {
    return `${CONSTANTS.directories.models}/${modelName}/views/${componentName}`
  },
  other ({ componentName }) {
    return `${CONSTANTS.directories.views}/${componentName}`
  },
}
