module.exports = function (source) {
  // console.log(source)
  // console.log(this)
  // console.log(this.query)
  // const msg = source.replace("`", this.query.info)
  // this.callback(null, msg)
  const callback = this.async()
  setTimeout(() => {
    const msg = source.replace("`", this.query.info)
    callback(null, msg)
  }, 2000)
}
