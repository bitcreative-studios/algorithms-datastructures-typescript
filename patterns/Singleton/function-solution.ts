const Singleton = (function() {
  let instance

  let init = function(value: number) {
    this.instanceID = value
    this.getInstance = () => instance
    return this
  }

  return function(value: number) {
    if (instance) return instance
    instance = init(value)
    return instance
  }
})()

const object1 = new Singleton(10)
const object2 = new Singleton(30)
const object3 = new Singleton(15)
const object4 = new Singleton(20)

console.assert(
  object1.instanceID === object2.instanceID,
  "Wrong implementation"
)
console.assert(
  object1.instanceID === object3.instanceID,
  "Wrong implementation"
)
console.assert(
  object1.instanceID === object4.instanceID,
  "Wrong implementation"
)
console.assert(
  object4.instanceID === object3.instanceID,
  "Wrong implementation"
)
