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
var theWord
console.log(theWord == undefined) // true
console.log('')

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
var intNum1 = 070 // 八进制的56
var intNum2 = 079  //无效的八进制数值-解析为79
var intNum3 = 08  // 无效的八进制数值-解析为8
console.log(intNum1)
console.log(intNum2)
console.log(intNum3)
console.log('')

// 十六进制
var hexNum1 = 0xA // 十六进制的10
var hexNum2 = 0x1f // 十六进制的31
console.log(hexNum1)
console.log(hexNum2)
console.log('')

// 浮点数值
var floatNum1 = 1.1  // 1.1
var floatNum2 = 0.1  // 0.1
var floatNum3 = .1  // 0.1
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
console.log(NaN == NaN)
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

