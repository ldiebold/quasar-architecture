const modelSelectPrompts = require('./modelSelectPrompts')
const baseComponentNamePrompt = require('./baseComponentNamePrompt')
const otherComponentName = require('./otherComponentName')

module.exports = {
  model: modelSelectPrompts,
  base: [baseComponentNamePrompt],
  other: [otherComponentName],
}
