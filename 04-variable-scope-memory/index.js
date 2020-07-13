// 多态的属性
// var person = new Object()
// person.name = 'zhishouh'
// alert(person.name)

// 复制变量值
// var num1 = 5
// var num2 = num1
// console.log('num1 = ' + num1 + '  num2 = ' + num2)
// console.log('')

// var obj1 = new Object()
// var obj2 = obj1
// obj1.name = 'zhishouh'
// alert(obj2.name)

// 传递参数
// function addTen (num) {
//   num += 10
//   return num
// }
// var count = 20
// var result = addTen(count)
// console.log(count)
// console.log(result)

// function setName (obj) {
//   obj.name = 'zhishouh'
// }
// var person = new Object()
// setName(person)
// alert(person.name)

// function setName (obj) {
//   obj.name = 'zhishouh'
//   obj = new Object()
//   obj.name = 'shabi'
// }
// var person = new Object()
// setName(person)
// alert(person.name)

// 检测类型
// typeof
// var s = 'zhishouh'
// var b = true
// var i = 22
// var u
// var n = null
// var o = new Object()
// console.log(typeof s)
// console.log(typeof i)
// console.log(typeof b)
// console.log(typeof u)
// console.log(typeof n)
// console.log(typeof o)

// instanceof
// var person = new Object()
// console.log(person instanceof Object)
// console.log(person instanceof Array)
// console.log(person instanceof RegExp)

// 执行环境及作用域
// var color = 'blue'
// function changeColor () {
//   if (color === 'blue') {
//     color = 'red'
//   } else {
//     color = 'blue'
//   }
// }
// changeColor()
// console.log('Color is now ' + color)

// var color = 'blue'
// function changeColor () {
//   var anotherColor = 'red'
//   function swapColor () {
//     var tempColor = anotherColor
//     anotherColor = color
//     color = tempColor
//   }
//   swapColor()
// }
// changeColor()
// console.log(color)

// 延长作用域链
function buildUrl () {
  var qs = '?debug=true'
  with(location) {
    var url = href + qs
  }
  return url
}
var result = buildUrl()
console.log(result)

