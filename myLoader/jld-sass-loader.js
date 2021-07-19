const sass = require("sass")

module.exports = function (source) {
  sass.render(source, (err, output) => {
    this.callback(error, output.css)
  })
}
