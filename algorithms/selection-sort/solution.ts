// TODO: document
function selectionSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    let min = Infinity,
      index = -1
    for (let i = j; i < arr.length; i++) {
      if (Math.min(arr[i], min) === arr[i]) {
        min = arr[i]
        index = i
      }
    }
    ;[arr[j], arr[index]] = [arr[index], arr[j]]
  }
}
