// // 分号；
var a = 10; var b = 2
var sum = a + b // 即使没有分号也是有效的语句
var diff = a - b
console.log(sum)
console.log(diff)
console.log('')

// // 代码块:使用代码块可以让编码意图更加清晰，降低出错的机率
var test = true
if (test) {
  console.log(test)
}
console.log('')

// // 变量
var message1 = 'hi,zhishouh'; var found = false; var age = 19
console.log(message1 + ' ' + found + ' ' + age)
console.log('')

// // 数据类型: 简单：Undefined、Null、Boolean、Number、String 复杂：Object
// //typeof操作符
var message2 = 'some string'
console.log(typeof message2) // string
console.log(typeof (message2)) // string
console.log(typeof 95) // number
console.log(typeof null) // object
console.log('')

// //Undefined类型
// var theWord
// console.log(theWord == undefined) // true
// console.log('')

// //Null类型
var car = null
console.log(typeof car) // object
console.log('')

// // Boolean类型
var message3 = 'Hello world!'
var messageAsBoolean = Boolean(message3)
console.log(messageAsBoolean)
if (message3) {
  console.log('Value is true')
}
console.log('')

// Number类型
// 八进制
// var intNum1 = 070 // 八进制的56
// var intNum2 = 079  //无效的八进制数值-解析为79
// var intNum3 = 08  // 无效的八进制数值-解析为8
// console.log(intNum1)
// console.log(intNum2)
// console.log(intNum3)
// console.log('')

// 十六进制
var hexNum1 = 0xA // 十六进制的10
var hexNum2 = 0x1f // 十六进制的31
console.log(hexNum1)
console.log(hexNum2)
console.log('')

// 浮点数值
var floatNum1 = 1.1 // 1.1
var floatNum2 = 0.1 // 0.1
var floatNum3 = 0.1 // 0.1
console.log(floatNum1)
console.log(floatNum2)
console.log(floatNum3)
console.log('')
var floatNum4 = 1.0 // 小数点后面没有数字-解析为1
var floatNum5 = 10.0 // 整数-解析为10
console.log(floatNum4)
console.log(floatNum5)
console.log('')
var floatNum6 = 3.125e7 // e表示法：e前面的数值乘以10的指数次幂，即3.125乘以10的7次方
console.log(floatNum6)
console.log('')
var floatNum7 = 3e-6
console.log(floatNum7)
console.log('')

// 数值范围
console.log(Number.MIN_VALUE) // 5e-324
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
var result = Number.MAX_VALUE + Number.MAX_VALUE
console.log(isFinite(result)) // false-超出范围，isFinite()函数判断是否在范围之内
console.log('')

// NaN-非数值(Not a Number)
// console.log(NaN == NaN)
console.log('')
// isNaN()函数
console.log(isNaN(NaN)) // true
console.log(isNaN(10)) // false 10是一个数值
console.log(isNaN('10')) // false 可以被转换为数值10
console.log(isNaN('blue')) // true 不能被转换成数值
console.log(isNaN(true)) // false 可以被转换为数值1
console.log('')

// 数值转换 Number()函数、parseInt()函数、parseFloat()函数
// Number()函数
var num1 = Number('Hello world!') // NaN
var num2 = Number(' ') // 0
var num3 = Number('000011') // 11
var num4 = Number(true) // 1
console.log(num1 + ' ' + num2 + ' ' + num3 + ' ' + num4)
console.log('')
// parseInt()函数
var num5 = parseInt('1234blue') // 1234
var num6 = parseInt(' ') // NaN
var num7 = parseInt('0xA') // 10(十六进制数)
var num8 = parseInt(22.5) // 22
var num9 = parseInt('070') // 56(八进制数)
var num10 = parseInt('70') // 70(十进制数)
var num11 = parseInt('0xf') // 15(十六进制数)
console.log(num5)
console.log(num6)
console.log(num7)
console.log(num8)
console.log(num9)
console.log(num10)
console.log(num11)
console.log('')
var Num = parseInt('0xAF', 16) // 175
console.log(Num)
console.log('')
var Num1 = parseInt('AF', 16) // 175
console.log(Num1)
console.log('')
var Num2 = parseInt('AF') // NaN
console.log(Num2)
console.log('')
var Num3 = parseInt('10', 2) // 2 二进制
var Num4 = parseInt('10', 8) // 8 八进制
var Num5 = parseInt('10', 10) // 10 十进制
var Num6 = parseInt('10', 16) // 16 十六进制
console.log(Num3)
console.log(Num4)
console.log(Num5)
console.log(Num6)
console.log('')

// parseFloat()函数
var FloatNum1 = parseFloat('1234blue') // 1234
var FloatNum2 = parseFloat('0xA') // 0
var FloatNum3 = parseFloat('22.5') // 22.5
var FloatNum4 = parseFloat('22.34.5') // 22.34
var FloatNum5 = parseFloat('0908.5') // 908.5
var FloatNum6 = parseFloat('3.125e7') // 31250000
console.log(FloatNum1)
console.log(FloatNum2)
console.log(FloatNum3)
console.log(FloatNum4)
console.log(FloatNum5)
console.log(FloatNum6)
console.log('')

// String类型
var text = 'This is the letter sigma: \u03a3.'
console.log(text.length) // 输出28
console.log('')
var lang = 'Java'
lang = lang + 'Script'
console.log(lang)
console.log('')
var Age = 11
var AgeAsString = Age.toString() // 字符串11
console.log(AgeAsString)
console.log(Age)
console.log('')
var Found = true
var FoundAsString = Found.toString() // 字符串true
console.log(FoundAsString)
console.log('')
var NUM = 10
console.log(NUM.toString()) // 10
console.log(NUM.toString(2)) // 1010
console.log(NUM.toString(8)) // 12
console.log(NUM.toString(10)) // 10
console.log(NUM.toString(16)) // a
console.log('')
var values1 = 10
var values2 = true
var values3 = null
var values4
console.log(String(values1)) // 10
console.log(String(values2)) // true
console.log(String(values3)) // null
console.log(String(values4))// undefined
console.log('')

// 逻辑非
console.log(!false) // true
console.log(!'blue') // false
console.log(!0) // true
console.log(!NaN) // true
console.log(!'') // true
console.log(!12345) // false
console.log('')

// 逻辑与
// var demo = false
// var result1 = (demo && someUndefinedVariable)
// console.log(result1)

// 逻辑或
var result2 = true || false
console.log(result2)
console.log('')

// 乘法
var result3 = 34 * 56
console.log(result3)
console.log('')

// 加法
var result5 = 5 + 5
console.log(result5)
var result6 = 5 + '5'
console.log(result6)
console.log('')

// 减法
var diff1 = 5 - true // 4,true转换为1
var diff2 = NaN - 1 // NaN
var diff3 = 5 - 3 // 2
var diff4 = 5 - '' // 5，''转换为0
var diff5 = 5 - '2' // 3，'2'转换为2
var diff6 = 5 - null // 5，null转换为0
console.log(diff1)
console.log(diff2)
console.log(diff3)
console.log(diff4)
console.log(diff5)
console.log(diff6)
console.log('')

// 关系操作符
var result7 = 'Brick' < 'alphabet'
console.log("'Brick' < 'alphabet' = " + result7) // true
var result8 = 'Brick'.toLowerCase() < 'alphabet'.toLowerCase()
console.log("'Brick'.toLowerCase() < 'alphabet'.toLowerCase() = " + result8)// false
var result9 = '23' < 3
console.log("'23' < 3 = " + result9) // false
var result10 = '23' < '3'
console.log("'23' < '3' = " + result10) // true
var result11 = 'a' < 3
console.log("'a' < 3 = " + result11) // false
// 任何操作数与NaN进行关系比较，结果都是false
// var result12 = NaN < 3
// console.log('NaN < 3 = ' + result12)

// 相等操作符
var result13 = ('55' === 55)
console.log(" ('55' === 55) = " + result13) // false
var result14 = ('55' !== 55)
console.log("('55' !== 55) = " + result14) // true

// 条件操作符
var newNum = 10
var newNew2 = 5
var max = (newNum > newNew2) ? newNum : newNew2
console.log(max)

// if语句
// var i = 30
// 单分支
// if (i < 100) {
//   alert('Less than or equal to 100.')
// }
// // 双分支
// if (i > 25) {
//   alert('Greater than 25.')
// } else {
//   alert('Less than or equal to 25.')
// }
// // 多分支
// if (i > 25) {
//   alert('Greater than 25.')
// } else if (i < 0) {
//   alert('Less than 0')
// } else {
//   alert('Between 0 and 25,inclusive')
// }

// // do-while语句
// var j = 0
// do {
//   j += 2
//   alert(j)
// } while (j < 10)

// // while语句
// var k = 0
// while (k < 10) {
//   k += 2
//   alert(k)
// }

// // for语句
// var count = 10
// for (var a = 0; a < count; a++) {
//   alert(a)
// }

// for-in语句
// for (var propName in window) {
//   document.write(propName)
// }

// label语句
// start: for (var i = 0; i < count; i++) {
//   alert(i)
// }

// break语句
// var a = 0
// for (var i = 1; i < 10; i++) {
//   if (i % 5 == 0) {
//     break
//   }
//   a++
// }
// alert(a)

// continue语句
// var a = 0
// for (var i = 1; i < 10; i++) {
//   if (i % 5 == 0) {
//     continue
//   }
//   a++
// }
// console.log(a)

// break与label联合使用
// var a = 0
// outermost:
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     if (i == 5 && j == 5) {
//       break outermost
//     }
//     a++
//   }
// }
// console.log(a)

// continue与label联合使用
// var a = 0
// outermost:
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     if (i == 5 && j == 5) {
//       continue outermost
//     }
//     a++
//   }
// }
// console.log(a)

// with语句
// var qs = location.search.substring(1)
// var hostName = location.hostname
// var url = location.href

// with(location) {
//   var qs = search.substring(1)
//   var hostName = hostname
//   var url = href
// }

// switch语句
// var a = 10
// switch (a) {
//   case 5:
//     console.log('5')
//     break
//   case 10:
//     console.log('10')
//     break
//   case 15:
//     console.log('15')
//     break
//   default:
//     console('>15')
// }

// 函数
function sayHi (name, message) {
  alert('hello ' + name + ',' + message)
}
sayHi('Nicholas', 'how are you today?')

function sum2 (num1, num2) {
  return num1 + num2
}
alert(sum2(1, 2))

function DIFF (num1, num2) {
  if (num1 < num2) {
    return num2 - num1
  } else {
    return num1 - num2
  }
}
var result15 = DIFF(1, 2)
alert(result15)
