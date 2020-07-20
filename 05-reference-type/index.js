// object类型
// new + Object构造函数
// var person = new Object()
// person.name = 'zhishouh'
// person.age = 19
// console.log(person.name + ' ' + person.age)

// 对象字面量表示法
// var person = {
//   name: 'zhishouh',
//   age: 19
// }
// console.log(person.name + ' ' + person.age)

// function displayInfo (args) {
//   var output = ''

//   if (typeof args.name === 'string') {
//     output += 'Name: ' + args.name + '\n'
//   }
//   if (typeof args.age === 'number') {
//     output += 'Age: ' + args.age + '\n'
//   }
//   console.log(output)
// }
// displayInfo({
//   name: 'zhishouh',
//   age: 19
// })
// displayInfo({
//   name: 'pepsi'
// })

// Array类型
// var colors = new Array()
// var colors = new Array(20)
// var colors = new Array('red', 'blue', 'green')
// var colors = new Array(3) // 创建一个包含3项的数组
// var colors = new Array('Greg') // 创建一个包含1项，即字符串"Greg"的数组

// var colors = ['red', 'blue', 'green'] // 创建一个包含3个字符串的数组
// console.log(colors[0])
// var names = [] // 创建一个空数组
// console.log(names[0])

// var colors = ['red', 'blue', 'green'] // 定义一个字符串数组
// console.log(colors[0]) // 显示第一项
// colors[1] = 'black' // 修改第二项
// colors[3] = 'brown' // 新增第四项

// 检测数组
// var colors = ['red', 'blue', 'green']
// if (Array.isArray(colors)) {
//   for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i])
//   }
// }

// 转换方法
// var colors = ['red', 'blue', 'green']
// console.log(colors.toString()) // red,blue,green
// console.log(colors.valueOf()) // red,blue,green
// console.log(colors) // red,blue,green

// var person1 = {
//   toLocaleString: function () {
//     return 'zhihsouh'
//   },
//   toString: function () {
//     return 'pepsi'
//   }
// }
// var person2 = {
//   toLocaleString: function () {
//     return 'shabi'
//   },
//   toString: function () {
//     return 'hanhan'
//   }
// }
// var people = [person1, person2]
// console.log(people)
// console.log(people.toString())
// console.log(people.toLocaleString())

// join()方法
// var colors = ['red', 'green', 'blue']
// console.log(colors.join(',')) // red,green,blue
// console.log(colors.join(' || ')) // red || green || blue

// 栈方法
// var colors = new Array()  // 创建一个数组
// var count = colors.push('red', 'green')  // 推入两项
// console.log(count) // 2

// count = colors.push('black')  // 推入一项
// console.log(count) // 3

// var item = colors.pop()  // 取得最后一项
// console.log(item) // black
// console.log(colors.length) // 2

// var colors = ['red', 'blue'] // 创建一个数组
// colors.push('brown') // 推入一项
// colors[3] = 'black' // 添加一项
// console.log(colors.length)

// var item = colors.pop() // 弹出最后一项
// console.log(item)

// 队列方法
var colors = new Array() // 创建一个数组
var count = colors.push('red', 'green') // 推入两项
console.log(count) // 2

count = colors.push('black') // 推入一项
console.log(count) // 3

var item = colors.shift()
console.log(item)
console.log(colors.length)
