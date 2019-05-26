/**
 * Counting Sort Implementation 2
 *
 * @param {Array<number>} array
 * @returns {Array<number>}
 */
const countingSort = function(array: Array<number>): Array<number> {
  const max = Math.max(...array)
  const occurrences = []
  const sorted = []
  let i, j

  for (i = 0; i <= max; i++) {
    occurrences[i] = 0
  }

  for (i = 0; i <= max; i++) {
    occurrences[array[i]]++
  }

  for (i = 1; i <= max; i++) {
    occurrences[i] += occurrences[i - 1]
  }

  // sort
  for (i = array.length - 1; i >= 0; i--) {
    sorted[--occurrences[array[i]]] = array[i]
  }

  return sorted
}

console.assert(
  countingSort([1, 9, 3, 13, 3, 3, 12, 4, 7, 6, 6]).toString() ===
    "1,3,3,3,4,6,6,7,9,12,13",
  "Wrong Implementation"
)
