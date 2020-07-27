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
// var colors = new Array() // 创建一个数组
// var count = colors.push('red', 'green') // 推入两项
// console.log(count) // 2

// count = colors.push('black') // 推入一项
// console.log(count) // 3

// var item = colors.shift()  // 取得第一项
// console.log(item)
// console.log(colors.length)

// var colors = new Array() // 创建数组
// var count = colors.unshift('red', 'green') // 推入两项
// console.log(count) // 2

// count = colors.unshift('black') // 推入一项
// console.log(count) // 3

// var item = colors.pop() // 取得最后一项
// console.log(item) // green
// console.log(colors.length) // 2

// 重排序方法
// var values = [1, 2, 3, 4, 5]
// values.reverse()
// console.log(values) // 5，4，3，2，1

// var values = [0, 1, 5, 10, 15]
// values.sort()
// console.log(values) // 0,1,10,15,5

// function compare (value1, value2) {
//   if (value1 < value2) {
//     return -1
//   } else if (value1 > value2) {
//     return 1
//   } else {
//     return 0
//   }
// }
// var values = [0, 1, 5, 10, 15]
// values.sort(compare)
// console.log(values) // 0,1,5,10,15

// function compare (value1, value2) {
//   return value2 - value1
// }

// 操作方法
// concat()方法
// var colors = ['red', 'green', 'blue']
// var colors2 = colors.concat('yellow', ['black', 'brown'])
// console.log(colors) // ["red", "green", "blue"]
// console.log(colors2) // ["red", "green", "blue", "yellow", "black", "brown"]

// slice()方法
// var colors = ['red', 'green', 'blue', 'yellow', 'purple']
// var colors2 = colors.slice(1)
// var colors3 = colors.slice(1, 4)
// console.log(colors2) // ["green", "blue", "yellow", "purple"]
// console.log(colors3) // ["green", "blue", "yellow"]

// splice()方法
// var colors = ['red', 'green', 'blue']
// var removed = colors.splice(0, 1) // 删除第一项
// console.log(colors) // ["green", "blue"]
// console.log(removed) // ["red"]

// removed = colors.splice(1, 0, 'yellow', 'orange') // 从位置1开始插入两项
// console.log(colors) // ["green", "yellow", "orange", "blue"]
// console.log(removed) // 返回一个空数组

// removed = colors.splice(1, 1, 'red', 'purple') // 插入两项
// console.log(colors) // "green", "red", "purple", "orange", "blue"]
// console.log(removed) // yellow

// 位置方法
// var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]
// console.log(numbers.indexOf(4)) // 3
// console.log(numbers.lastIndexOf(4)) // 5

// console.log(numbers.indexOf(4, 4)) // 5
// console.log(numbers.lastIndexOf(4, 4)) // 3

// var person = {
//   name: 'zhishouh'
// }
// var people = [{
//   name: 'zhishouh'
// }]
// var morePeople = [person]

// console.log(people.indexOf(person)) // -1
// console.log(morePeople.indexOf(person)) // 0

// 迭代方法
