module.exports = function (source) {
  // console.log(source)
  // console.log(this)
  // console.log(this.query)
  // const msg = source.replace("`", this.query.info)
  // this.callback(null, msg)

  const msg = source.replace("js", "你好")
  return msg
}
