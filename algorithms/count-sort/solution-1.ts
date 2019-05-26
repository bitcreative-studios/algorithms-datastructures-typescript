/**
 * Count sort implementation 1
 *
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
const countSort = function(arr: Array<number>): Array<number> {
  const max = Math.max(...arr)
  const occurrences = []

  for (let i = 0; i < max + 1; i++) {
    occurrences[i] = 0
  }

  for (let j = 0; j < arr.length; j++) {
    occurrences[arr[j]]++
  }

  let index = 0
  for (let j = 0; j < occurrences.length; j++) {
    for (let i = 0; i < occurrences[j]; i++) {
      arr[index] = j
      index++
    }
  }

  return arr
}

console.assert(
  countSort([1, 12, 3, 3, 3, 23, 3, 4, 35, 6, 6]).toString() ===
    "1,3,3,3,3,4,6,6,12,23,35",
  "Wrong Implementation"
)
