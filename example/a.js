const test = {
  order: {
    status: true
  }
}
const func = function () { return true }

console.log('test 3', test?.order?.status)
console.log('test 3', func?())
