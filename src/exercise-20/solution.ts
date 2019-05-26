/**
 * Stack implementation
 */
class Stack {
  /**
   * Creates a Stack instance
   */
  constructor() {
    this._stack = []
  }

  /**
   * Push value to the stack
   *
   * @param {number} value
   */
  push(value) {
    this._stack.push(value)
    return this._stack
  }

  /**
   * Pop a value from the stack
   */
  pop() {
    return this._stack.pop()
  }

  /**
   * Check if the stack is empty
   */
  isEmpty() {
    return this._stack.length === 0
  }

  /**
   * Get the value of the top element
   * without removing it from the stack
   */
  peek() {
    return this._stack[this._stack.length - 1]
  }
}

const sortStack = function(stack) {
  const sortedStack = new Stack()
  while (!stack.isEmpty()) {
    let tmp = stack.pop()
    while (!sortedStack.isEmpty() && sortedStack.peek() > tmp) {
      stack.push(sortedStack.pop())
    }

    sortedStack.push(tmp)
  }

  return sortedStack
}

let unsortedStack = new Stack()
unsortedStack.push(1)
unsortedStack.push(-1)
unsortedStack.push(50)
unsortedStack.push(5)
unsortedStack.push(0)

let sortedStack = sortStack(unsortedStack)

console.assert(sortedStack.pop() === 50, "Wrong implementation")
console.assert(sortedStack.pop() === 5, "Wrong implementation")
console.assert(sortedStack.pop() === 1, "Wrong implementation")
console.assert(sortedStack.pop() === 0, "Wrong implementation")
console.assert(sortedStack.pop() === -1, "Wrong implementation")
