function maxSum(arr, range) {
  let maxArr = range.map(rarr =>
    arr.slice(rarr[0], rarr[1] + 1).reduce((prev, next) => prev + next, 0)
  )
  return Math.max(...maxArr)
}
