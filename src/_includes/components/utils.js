function spreadProps(props = {}) {
  const entries = []
  for (let key in props) {
    entries.push([key, props[key]])
  }
  return entries.map(([key, value]) => `${key}="${value}"`).join(' ')
}

module.exports = {
  spreadProps,
}
