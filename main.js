class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  append(value) {
    if (this.size === 0) {
      let newNode = new Node(value)
      this.head = newNode
      this.tail = newNode
    } else {
      let newNode = new Node(value)
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++
  }

  prepend(value) {
    if (this.size === 0) {
      let newNode = new Node(value)
      this.head = newNode
      this.tail = newNode
    } else {
      let newNode = new Node(value, this.head)
      this.head = newNode
    }
    this.size++
  }

  size() {
    return this.size
  }

  head() {
    return this.head
  }

  tail() {
    return this.tail
  }

  at(index) {
    if (index === 0) {
      return this.head
    }

    let count = 0
    let current = this.head.next // at (1)
    while (current) {
      count++ // 1
      if (count === index) {
        return current
      }
      current = current.next
    }
    return null
  }

  pop() {
    if (this.size === 0) {
      return
    }

    if (this.size === 1) {
      this.head = null
      this.tail = null
      return
    }

    let newTail = this.at(this.size - 2)
    if (newTail) {
      this.tail = secondToLast
      this.tail.next = null
    }

    this.size--
    return
  }

  contains(value) {
    if (this.size === 0) {
      return false
    }

    let current = this.head // at (0)
    while (current) {
      if (current.data === value) {
        return true
      }
      current = current.next
    }
    return false
  }

  find(value) {
    let count = 0
    let current = this.head // at (0)
    while (current) {
      if (current.data === value) {
        return count
      }
      current = current.next
      count++
    }
    return null
  }

  toString() {
    let nodes = []
    let current = this.head // at (0)
    while (current) {
      nodes.push(`(${current.data})`)
      current = current.next
    }
    nodes.push("null")
    return nodes.join(" -> ")
  }

  insertAt(value, index) {
    // main logic
    if (index < 0 || index > this.size) {
      return
    }

    if (this.size === 0 || index === this.size) {
      this.append(value)
    } else if (index === 0) {
      this.prepend(value)
    } else {
      const newNode = new Node(value)
      const prevNode = this.at(index - 1)
      newNode.next = prevNode.next
      prevNode.next = newNode
      this.size++
    }
  }
  removeAt(value, index) {}
}

const list = new LinkedList()

list.prepend("dog")
list.prepend("cat")
list.prepend("parrot")
list.prepend("hamster")
list.prepend("snake")
list.prepend("turtle")
console.log()
//Binary Search

/*
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
  if (start > end) {
    return -1
  }
  let mid = Math.floor((start + end) / 2)
  if (arr[mid] === x) {
    return mid
  } else if (x > arr[mid]) {
    return binarySearchRec(arr, x, mid + 1, end)
  } else {
    return binarySearchRec(arr, x, start, mid - 1)
  }
}

console.log("Value at index: " + binarySearchRec(arr, 12))
*/
