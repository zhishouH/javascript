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
// var person = {
//   name: 'zhishouh'
// }
// console.log(person.name) // zhishouh
// console.log(person['name'])
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
// console.log(colors2) //["red", "green", "blue", "yellow", "black", "brown"]

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
// var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]
// var everyResult = numbers.every(function (item, index, array) {
//   return (item > 2)
// })
// console.log(everyResult) // false

// var someResult = numbers.some(function (item, index, array) {
//   return (item > 2)
// })
// console.log(someResult) // ture

// var filterResult = numbers.filter(function (item, index, array) {
//   return (item > 2)
// })
// console.log(filterResult)

// var mapResult = numbers.map(function (item, index, array) {
//   return (item * 2)
// })
// console.log(mapResult)

// 归并方法
// var values = [1, 2, 3, 4, 5]
// var sum = values.reduce(function (prev, cur, index, array) {
//   return (prev + cur)
// })
// console.log(sum) // 15

// var sum2 = values.reduceRight(function (prev, cur, index, array) {
//   return (prev + cur)
// })
// console.log(sum2)

// Date类型
// var now = new Date()
// console.log(now) // 在调用Date构造函数而不传递参数的情况下，新创建的对象自动获得当前的日期和时间

// Date.parse()
// var someDate = new Date(Date.parse('6/13/2004'))
// console.log(someDate) // Sun Jun 13 2004 00:00:00 GMT+0800 (中国标准时间)

// var someDate2 = new Date(Date.parse('January 12,2004'))
// console.log(someDate2) // Mon Jan 12 2004 00:00:00 GMT+0800 (中国标准时间)

// var someDate3 = new Date(Date.parse('Tue May 25 2004 00:00:00 GMT-0700'))
// console.log(someDate3) // Tue May 25 2004 15:00:00 GMT+0800 (中国标准时间)

// var someDate4 = new Date('May 25,2004')
// console.log(someDate4) // 直接将表示日期的字符串传给Date构造函数，也会在后台调用Date.parse(),Tue May 25 2004 00:00:00 GMT+0800 (中国标准时间)

// Date.UTC()
// var y2k = new Date(Date.UTC(2000, 0))
// console.log(y2k) // Sat Jan 01 2000 08:00:00 GMT+0800 (中国标准时间)

// var allFivees = new Date(Date.UTC(2005, 4, 5, 17, 55, 55))
// console.log(allFivees) // Fri May 06 2005 01:55:55 GMT+0800 (中国标准时间)

// var y2k2 = new Date(2000, 0)
// console.log(y2k2) // Sat Jan 01 2000 00:00:00 GMT+0800 (中国标准时间)

// var allFivees2 = new Date(2005, 4, 5, 17, 55, 55)
// console.log(allFivees2) // Thu May 05 2005 17:55:55 GMT+0800 (中国标准时间)

// Date.now()
// var start = Date.now()
// console.log(start)

// var stop = Date.now()
// var result = stop - start
// console.log(result)

// var one = new Date(Date.now())
// console.log(one)

// var start2 = +new Date()
// console.log(start2)

// var stop2 = +new Date()
// console.log(stop2)

// result = stop - start
// console.log(result)

// 继承的方法
// var date1 = new Date(2007, 0, 1)
// var date2 = new Date(2007, 1, 1)
// console.log(date1)
// console.log(date1.toLocaleString())
// console.log(date1.toString())
// console.log(date1.valueOf())
// console.log(date2.valueOf())
// console.log(date1 > date2)

// 日期格式化方法
// var now = new Date(2020, 7, 6, 15, 48, 48)
// console.log(now) // Thu Aug 06 2020 15:48:48 GMT+0800 (中国标准时间)
// console.log(now.toDateString()) // Thu Aug 06 2020
// console.log(now.toTimeString()) // 15:48:48 GMT+0800 (中国标准时间)
// console.log(now.toLocaleDateString()) // 2020/8/6
// console.log(now.toLocaleTimeString()) // 下午3:48:48

// 日期、时间组件方法
// var now = new Date(2020, 7, 7, 14, 20, 20)
// console.log(now) // Fri Aug 07 2020 14:20:20 GMT+0800 (中国标准时间)
// console.log(now.getTime())
// // console.log(now.setTime())
// console.log(now.getUTCFullYear())
// console.log(now.getFullYear())
// console.log(now.setFullYear(2020))

// RegExp类型
// // RegExp实例属性
// var pattern1 = /\[bc\]at/i
// console.log(pattern1.global) // false
// console.log(pattern1.ignoreCase) // true
// console.log(pattern1.multiline) // false
// console.log(pattern1.lastIndex) // 0
// console.log(pattern1.source) // \[bc\]at

// var pattern2 = new RegExp('\\[bc\\]at', 'i')
// console.log(pattern2.global) // false
// console.log(pattern2.ignoreCase) // true
// console.log(pattern2.multiline) // false
// console.log(pattern2.lastIndex) // 0
// console.log(pattern2.source) // \[bc\]at

// RegExp实例方法
// exec()方法
// var text = 'mom and dad and baby'
// var pattern1 = /mom( and dad( and baby)?)?/gi

// var matches = pattern1.exec(text)
// console.log(matches.index) // 0
// console.log(matches.input) // mom and dad and baby
// console.log(matches[0]) // mom and dad and baby
// console.log(matches[1]) // and dad and baby
// console.log(matches[2]) //  and baby

// var text = 'cat, bat, sat, fat'
// var pattern1 = /.at/

// var matches = pattern1.exec(text)
// console.log(matches.index) // 0
// console.log(matches[0]) // cat
// console.log(pattern1.lastIndex) // 0

// matches = pattern1.exec(text)
// console.log(matches.index) // 0
// console.log(matches[0]) // cat
// console.log(pattern1.lastIndex) // 0

// var pattern2 = /.at/g
// matches = pattern2.exec(text)
// console.log(matches.index) // 0
// console.log(matches[0]) // cat
// console.log(pattern2.lastIndex) // 3

// matches = pattern2.exec(text)
// console.log(matches.index) // 5
// console.log(matches[0]) // bat
// console.log(pattern2.lastIndex) // 8

// test()方法
// var text = '000-00-0000'
// var pattern = /\d{3}-\d{2}-\d{4}/

// if (pattern.test(text)) {
//   console.log('The pattern was matched.')
// }
// The pattern was matched

// toLocaleString()、toString()
// var pattern = new RegExp('\\[bc\\]at', 'gi')
// console.log(pattern.toString()) // /\[bc\]at/gi
// console.log(pattern.toLocaleString()) // /\[bc\]at/gi

// RegExp()构造函数属性
// var text = 'this has been a short summer'
// var pattern = /(.)hort/g

// if (pattern.test(text)) {
//   console.log(RegExp.input)
//   console.log(RegExp.leftContext)
//   console.log(RegExp.rightContext)
//   console.log(RegExp.lastMatch)
//   console.log(RegExp.lastParen)
//   console.log(RegExp.multiline)
// }

// var text = 'this has been a short summer'
// var pattern = /(.)hort/g

// if (pattern.test(text)) {
//   console.log(RegExp.$_) // this has been a short summer
//   console.log(RegExp['$`']) // this has been a
//   console.log(RegExp["$'"]) //  summer
//   console.log(RegExp['$&']) // short
//   console.log(RegExp['$+']) // s
//   console.log(RegExp['$*']) // false
// }

// var text = 'this has been a short summer'
// var pattern = /(..)or(.)/g

// if (pattern.test(text)) {
//   console.log(RegExp.$1) // sh
//   console.log(RegExp.$2) // t
// }

// function类型
// function sum (num1, num2) {
//   return num1 + num2
// }
// var result = sum(1, 2)
// console.log(result)

// var sum = function (num1, num2) {
//   return num1 + num2
// }
// console.log(sum(1, 2))

// var sum = new Function('num1', 'num2', 'return num1 + num2')
// console.log(sum(1, 2))

// 没有重载
// function addSomeNumber (num) {
//   return num + 100
// }
// function addSomeNumber (num) {
//   return num + 200
// }
// var result = addSomeNumber(100)
// console.log(result) // 300

// 函数声明和函数表达式
// console.log(sum(1, 2))
// function sum (num1, num2) {
//   return num1 + num2
// }

// 作为值得函数
// function callSomeFuction (SomeFuction, somArgument) {
//   return SomeFuction(somArgument)
// }
// function add10 (num) {
//   return num + 10
// }
// var result1 = callSomeFuction(add10, 10)
// console.log(result1) // 20

// function getGreeting (name) {
//   return 'Hello, ' + name
// }

// var result2 = callSomeFuction(getGreeting, 'zhishouh')
// console.log(result2) // Hello, zhishouh

// function createComparisonFunction (propertyName) {
//   return function (object1, object2) {
//     var value1 = object1[propertyName]
//     var value2 = object2[propertyName]
//     if (value1 < value2) {
//       return -1
//     } else if (value1 > value2) {
//       return 1
//     } else {
//       return 0
//     }
//   }
// }
// var data = [{ name: 'zhishouh', age: 19 }, { name: 'pepsi', age: 20 }]
// data.sort(createComparisonFunction('name'))
// console.log(data[0].name) // pepsi
// data.sort(createComparisonFunction('age'))
// console.log(data[0].name) // zhishouh

// 函数内部属性
// arguments.callee
// function factorial (num) {
//   if (num <= 1) {
//     return 1
//   } else {
//     return num * factorial(num - 1)
//   }
// }
// console.log(factorial(5)) // 1 * 2 * 3 * 4 * 5 = 120

// function factorial (num) {
//   if (num <= 1) {
//     return 1
//   } else {
//     return num * arguments.callee(num - 1)
//   }
// }
// console.log(factorial(5))

// this
// window.color = 'red'
// var o = { color: 'blue' }

// function sayColor () {
//   console.log(this.color)
// }

// sayColor() // red

// o.sayColor = sayColor
// o.sayColor() // blue

// caller
// function outer () {
//   inner()
// }
// function inner () {
//   console.log(arguments.callee.caller)
// }
// outer()

// 函数属性和方法
// length
// function sayName (name) {
//   console.log(name)
// }
// function sum (num1, num2) {
//   return num1 + num2
// }
// function sayHi () {
//   console.log('Hi')
// }
// console.log(sayName.length)
// console.log(sum.length)
// console.log(sayHi.length)

// apply
// function sum (num1, num2) {
//   return num1 + num2
// }
// function callSum1 (num1, num2) {
//   return sum.apply(this, arguments)
// }
// function callSum2 (num1, num2) {
//   return sum.apply(this, [num1, num2])
// }
// console.log(callSum1(10, 10)) // 20
// console.log(callSum2(10, 10)) // 20

// function sum (num1, num2) {
//   return num1 + num2
// }
// function callSum (num1, num2) {
//   return sum.call(this, num1, num2)
// }
// console.log(callSum(10, 10))

// window.color = 'red'
// var o = { color: 'blue' }

// function sayColor () {
//   console.log(this.color)
// }
// sayColor()

// sayColor.call(this)
// sayColor.call(window)
// sayColor.call(o)

// window.color = 'red'
// var o = {
//   color: 'blue'
// }
// function sayColor() {
//   console.log(this.color)
// }
// var objectSayColor = sayColor.bind(o)
// objectSayColor()

// bind()
// window.color = 'red'
// var o = {
//   color: 'blue'
// }
// function sayColor () {
//   console.log(this.color)
// }
// var objectSayColor = sayColor.bind(o)
// objectSayColor()

// 基本包装类型
// var s1 = 'some text'
// var s2 = s1.substring(2)
// console.log(s2)

// var s1 = 'some text'
// s1.color = 'red'
// console.log(s1.color) // undefined

// Boolea类型
// var booleanObject = new Boolean(true)
// console.log(booleanObject)

// var falseObject = new Boolean(false)
// var result = falseObject && true
// console.log(result) // true

// var falseValue = false
// result = falseValue && true
// console.log(result) // fasle

// console.log(typeof falseObject) // object
// console.log(typeof falseValue) // boolean
// console.log(falseObject instanceof Boolean) // true
// console.log(falseValue instanceof Boolean) // false

// Number类型
// var numberObject = new Number(10)
// console.log(numberObject)
// var numberObject2 = 22
// console.log(numberObject2)

// var num = 10
// console.log(num.toString()) // "10"
// console.log(num.toString(2)) // "1010"
// console.log(num.toString(8)) // "12"
// console.log(num.toString(10)) // "10"
// console.log(num.toString(16)) // "a"

// // tofixed()方法
// console.log(num.toFixed(2)) // 10.00

// var num2 = 10.005
// console.log(num2.toFixed(2)) // 10.01

// console.log(num.toExponential(1)) // 1.0e+1

// var num3 = 99
// console.log(num3.toPrecision(1)) // 1e+2
// console.log(num3.toPrecision(2)) // 99
// console.log(num3.toPrecision(3)) // 99.0

// var numberObject = new Number(10)
// var numberValue = 10
// console.log(typeof numberObject) // object
// console.log(typeof numberValue) // number
// console.log(numberObject instanceof Number) // true
// console.log(numberValue instanceof Number) // false

// String类型
// var stringObject = new String('hello world')
// console.log(stringObject)

// var stringValue = 'hello world'
// console.log(stringValue.length) // 11

// console.log(stringValue.charAt(0)) // "h"
// console.log(stringValue.charCodeAt(0)) // "104"
// console.log(stringValue[1]) // "e"

// var stringValue2 = 'hello '
// var result = stringValue2.concat('world')
// console.log(result) // "hello world"
// console.log(stringValue2) // "hello "

// var result2 = stringValue2.concat('world', '!')
// console.log(result2) // "hello world!"
// console.log(stringValue2) // "hello "

// var stringValue = 'hello world'
// console.log(stringValue.slice(3)) // "lo world"
// console.log(stringValue.substring(3)) // "lo world"
// console.log(stringValue.substr(3)) // "lo world"
// console.log(stringValue.slice(3, 7)) // "lo w"
// console.log(stringValue.substring(3, 7)) // "lo w"
// console.log(stringValue.substr(3, 7)) // "lo worl"

// var stringValue = 'hello world'
// console.log(stringValue.slice(-3)) // "rld"
// console.log(stringValue.substring(-3)) // "hello world"
// console.log(stringValue.substr(-3)) // "rld"
// console.log(stringValue.slice(3, -4)) // "lo w"
// console.log(stringValue.substring(3, -4)) // "hel"
// console.log(stringValue.substr(3, -4)) // ""(空字符串)

// var stringValue = 'hello world'
// console.log(stringValue.indexOf('o')) // 4
// console.log(stringValue.lastIndexOf('o')) // 7
// console.log(stringValue.indexOf('o', 6)) // 7
// console.log(stringValue.lastIndexOf('o', 6)) // 4

// var stringValue = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
// var positions = new Array()
// var pos = stringValue.indexOf('e')
// while (pos > -1) {
//   positions.push(pos)
//   pos = stringValue.indexOf('e', pos + 1)
// }
// console.log(positions) // [3, 24, 32, 35, 52]

// var stringValue = '   hello world   '
// var timmedStringValue = stringValue.trim()
// console.log(stringValue) // "   hello world   "
// console.log(timmedStringValue) // "hello world"

var stringValue = 'hello world'
console.log(stringValue.toLocaleUpperCase()) // "HELLO WORLD"
console.log(stringValue.toUpperCase()) // "HELLO WORLD"
console.log(stringValue.toLocaleLowerCase()) // "hello world"
console.log(stringValue.toLowerCase()) // "hello world"
