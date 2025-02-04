let hello = "hello"

//Binary Search

let arr = [4, 7, 12, 24, 32, 56, 63, 94]

function binarySearch(arr = [], x) {
  let start = 0
  let end = arr.length

  while (start <= end) {
    let mid = (start + end) / 2
    if (arr[mid] === x) {
      return mid
    } else if (x > arr[mid]) {
      start = mid + 1
    } else {
      end = mid + 1
    }
  }
  return -1
}

console.log("Value at index: " + binarySearch(arr, 12))
