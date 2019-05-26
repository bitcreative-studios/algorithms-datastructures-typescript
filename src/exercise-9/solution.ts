function smaller(arr) {
  return arr.reduce((prev, curr, index, arr) => {
    const arrRest = arr.slice(index)
    const times = arrRest.filter(val => val < curr).length
    prev[index] = times
    return prev
  }, [])
}
