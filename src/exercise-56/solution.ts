/**
 * Sort scores in O(n)
 *
 * @param {Array<number>} scores
 * @param {number} max
 * @returns {Array<number>}
 */
const sortScores = function(scores: Array<number>, max: number): Array<number> {
  const scoresMap = new Map()

  for (let i = 0; i <= max; i++) {
    scoresMap.set(i, 0)
  }

  for (let i = 0; i < scores.length; i++) {
    scoresMap.set(scores[i], scoresMap.get(scores[i]) + 1)
  }

  let n = 0
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j < scoresMap.get(i); j++) {
      scores[n] = i
      n++
    }
  }

  return scores
}

console.assert(
  sortScores([10, 20, 21, 12, 3, 1, 99], 100).toString() ===
    "1,3,10,12,20,21,99",
  "Wrong Implementation"
)
