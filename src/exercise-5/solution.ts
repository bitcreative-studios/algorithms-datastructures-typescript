function deepAssignment(obj, keyPath, value) {
  const keys = keyPath
    .split(".")
    .map(str => str.split("["))
    .reduce((prev, next) => (prev = prev.concat(next)), [])
    .map(val => {
      if (val.includes("]")) {
        return { val: +val.replace("]", ""), type: "array" }
      }
      return { val: val, type: "object" }
    })

  return keys.reduce((prev, curr, i, array) => {
    if (array[i + 1] && array[i + 1].type === "object") {
      prev[curr.val] = prev[curr.val] || {}
      return prev[curr.val]
    } else if (array[i + 1] && array[i + 1].type === "array") {
      prev[curr.val] = prev[curr.val] || []
      return prev[curr.val]
    } else {
      prev[curr.val] = value
    }
    return prev
  }, obj)
}
