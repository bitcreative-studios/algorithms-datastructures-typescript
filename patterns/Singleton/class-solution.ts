/**
 * SingletonClass Simple Implementation
 *
 * @class SingletonClass
 */
class SingletonClass {
  static instance: SingletonClass = undefined
  instanceID: number

  /**
   * Initialize single object
   *
   * @param {number} value
   * @returns {SingletonClass}
   */
  init(value: number) {
    this.instanceID = value
    this.getInstance = () => SingletonClass.instance
    return this
  }

  /**
   * Creates an instance of SingletonClass.
   * @param {number} value
   * @returns {SingletonClass}
   */
  constructor(value: number) {
    if (SingletonClass.instance === undefined) {
      SingletonClass.instance = this.init(value)
    }
    return SingletonClass.instance
  }
}

const object1 = new SingletonClass(10)
const object2 = new SingletonClass(30)
const object3 = new SingletonClass(15)
const object4 = new SingletonClass(20)

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
