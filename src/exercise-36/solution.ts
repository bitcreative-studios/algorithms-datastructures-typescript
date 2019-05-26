/**
 * Recursive
 * @param {number} n
 */
const fbn = function(n: number) {
  if (n === 0) return 0
  if (n === 1) return 1
  return fbn(n - 1) + fbn(n - 2)
}

/**
 * Recursive with memoization
 *
 * @param {number} n
 * @returns {number}
 */
const fbnMemo = function(n: number) {
  const memo = {}

  const fbnM = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
  }

  return fbnM(n)
}

/**
 * Recursive Iterative
 *
 * @param {number} n
 * @returns {number}
 */
const fbnIt = function(n: number) {
  let vals = [0, 1]
  if (n === 0) return vals[0]
  if (n === 1) return vals[1]

  for (let i = 0; i < n - 1; i++) {
    ;[vals[0], vals[1]] = [vals[1], vals[0] + vals[1]]
  }

  return vals[1]
}

console.assert((fbn(10) === fbnM(10)) === fbnIt(10), "Wrong Implementation")
