const CONSTANTS = require('../../../CONSTANTS')
const fs = require('fs')

const directoriesInDirectory = fs.readdirSync(CONSTANTS.directories.models, { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name)

module.exports = [
  (answers) => {
    return {
      type: 'select',
      name: 'modelName',
      message: 'What model is this component for?',
      choices () {
        return directoriesInDirectory
      },
    }
  },
]
