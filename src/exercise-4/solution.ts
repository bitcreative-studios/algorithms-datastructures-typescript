function findBest(array) {
  let a = array[0],
    b = array[1]
  c = array[2]

  for (let i = 1; i <= array.length; i++) {
    // O(n)
    let absAB = Math.abs(a - b)
    let absAC = Math.abs(a - c)
    let absCB = Math.abs(b - c)
    let maxAbs = Math.max(absAB, absAC, absCB)

    if (absAB === maxAbs) {
      c = array[i]
    } else if (absAC === maxAbs) {
      b = array[i]
    } else if (absCB === maxAbs) {
      a = array[i]
    }
  }

  // Although filter is a loop it has fixed number of iterations, 3
  return [a, b, c].filter(val => val !== undefined)
}

function findBest(sorterArray) {
  return [sorterArray[0], sorterArray[sorterArray.length - 1]]
}
