let hello = "hello"

//Binary Search

let arr = [4, 7, 12, 24, 32, 56, 63, 94]

function binarySearch(arr = [], x) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === x) {
      return mid
    } else if (x > arr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}

function binarySearchRec(arr = [], x, start = 0, end = arr.length - 1) {
  let mid = Math.floor((start + end) / 2)
  if (start > end) {
    return -1
  }
  if (arr[mid] === x) {
    return mid
  } else if (x > arr[mid]) {
    return binarySearchRec(arr, x, mid + 1, end)
  } else {
    return binarySearchRec(arr, x, start, mid - 1)
  }
}

console.log("Value at index: " + binarySearchRec(arr, 12))
