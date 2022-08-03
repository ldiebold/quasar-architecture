const path = require('path')

module.exports = {
  directories: {
    models: path.resolve(__dirname, '../src/models'),
    baseComponent: path.resolve(__dirname, '../src/shared/components/base'),
    views: path.resolve(__dirname, '../src/views'),
    components: path.resolve(__dirname, '../src/components'),
  },
}
