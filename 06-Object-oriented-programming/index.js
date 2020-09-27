// 1、理解对象
var person = new Object()
person.name = 'zhishouh'
person.age = 19
person.job = 'student'
person.sayName = function () {
  return this.name
}
console.log('name：' + person.sayName() + '; age：' + person.age + '; job：' + person.job)
// name：zhishouh; age：19; job：student

var person2 = {
  name: 'zhishouh',
  age: 19,
  job: 'student',
  sayName: function () {
    return this.name
  }
}
console.log('name：' + person2.sayName() + '; age：' + person2.age + '; job：' + person2.job)
// name：zhishouh; age：19; job：student

// 数据属性
var person3 = {
  name: 'zhishouh'
}
console.log(person3.name)
// zhishouh

// 修改属性默认的特性
var person4 = {}
Object.defineProperty(person4, 'name', {
  writable: false,
  value: 'zhishouh'
})
console.log(person4.name)
// zhishouh
person4.name = 'pepsi'
console.log(person4.name)
// zhishouh

var person5 = {}
Object.defineProperty(person5, 'name', {
  configurable: false,
  value: 'zhishouh'
})
console.log(person5.name)
// zhishouh
delete person5.name
console.log(person5.name)
// zhishouh

// var person6 = {}
// Object.defineProperty(person6, 'name', {
//   configurable: false,
//   value: 'zhishouh'
// })
// console.log(person6.name)
// // zhishouh
// Object.defineProperty(person6, 'name', {
//   configurable: true,
//   value: 'zhishouh  '
// })

// 访问器属性
var book = {
  _year: 2004,
  edition: 1
}
Object.defineProperty(book, 'year', {
  get: function () {
    return this._year
  },
  set: function (newValue) {
    if (newValue > 2004) {
      this._year = newValue
      this.edition += newValue - 2004
    }
  }
})
book.year = 2005
console.log(book.edition)
// 2
console.log(book._year)
// 2005

// 定义多个属性
var book2 = {}
Object.defineProperties(book2, {
  _year: {
    writable: true,
    value: 2004
  },
  edition: {
    writable: true,
    value: 1
  },
  year: {
    get: function () {
      return this._year
    },
    set: function (newValue) {
      if (newValue > 2004) {
        this._year = newValue
        this.edition += newValue - 2004
      }
    }
  }
})
book2.year = 2020
console.log(book2.edition)
// 17
console.log(book2._year)
// 2020

// 读取属性的特性
var book3 = {}
Object.defineProperties(book3, {
  _year: {
    value: 2004
  },
  edition: {
    value: 1
  },
  year: {
    get: function () {
      return this._year
    },
    set: function (newValue) {
      if (newValue > 2004) {
        this._year = newValue
        this.edition += newValue - 2004
      }
    }
  }
})

var descriptor = Object.getOwnPropertyDescriptor(book3, '_year')
console.log(descriptor.value)
// 2004
console.log(descriptor.configurable)
// false
console.log(typeof descriptor.get)
// undefined

var descriptor2 = Object.getOwnPropertyDescriptor(book, 'year')
console.log(descriptor2.value)
// undefined
console.log(descriptor2.enumerable)
// false
console.log(typeof descriptor2.get)
// function

// 2、创建对象

// 2.1工厂模式
function createPerson (name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    return (this.name)
  }
  return o
}
var person7 = createPerson('zhishouh', 19, 'student')
var person8 = createPerson('pepsi', 20, 'Doctor')
console.log(person7)
// {name: "zhishouh", age: 19, job: "student", sayName: ƒ}
console.log(person8)
// {name: "pepsi", age: 20, job: "Doctor", sayName: ƒ}

// 2.2构造函数模式
function Person (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    return (this.name)
  }
}
var ps1 = new Person('zhishouh', 19, 'student')
var ps2 = new Person('pepsi', 20, 'Doctor')
console.log(ps1)
// Person {name: "zhishouh", age: 19, job: "student", sayName: ƒ}
console.log(ps2)
// Person {name: "pepsi", age: 20, job: "Doctor", sayName: ƒ}

// constructor
console.log(ps1.constructor == Person)
// true
console.log(ps2.constructor == Person)
// true

// instanceof
console.log(ps1 instanceof Object)
// true
console.log(ps1 instanceof Person)
// true
console.log(ps2 instanceof Object)
// true
console.log(ps2 instanceof Person)
// true

// 2.2.1 将构造函数当作函数
function Person2 (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    return (this.name)
  }
}
// 当作构造函数使用
var ps3 = new Person2('zhishouh', 19, 'student')
console.log(ps3.sayName())
// "zhishouh"

// 作为普通函数使用
Person2('pepsi', 20, 'Doctor')
console.log(window.sayName())
// "pepsi"

// 在另一个对象中的作用域中调用
var o = new Object()
Person2.call(o, 'shabi', 25, 'notWork')
console.log(o.sayName())
// shabi

// 构造函数的问题
function Person3 (name, age, job) {
  this.name = name
  this.job = job
  this.age = age
  this.sayName = new Function('alert(this.name)')
}
console.log(ps1.sayName == ps2.sayName)
// false

function Person4 (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = sayName
}
function sayName () {
  console.log(this.name)
}
var personDemo1 = new Person4('zhishouh', 19, 'student')
var personDemo2 = new Person4('pepsi', 20, 'shabi')
console.log(personDemo1)
// Person4 {name: "zhishouh", age: 19, job: "student", sayName: ƒ}
console.log(personDemo2)
// Person4 {name: "pepsi", age: 20, job: "shabi", sayName: ƒ}
console.log(personDemo1.sayName())
// zhishouh
console.log(personDemo2.sayName())
// pepsi

// 原型模式
function NewPerson () {

}
NewPerson.prototype.name = 'zhishouh'
NewPerson.prototype.age = 19
NewPerson.prototype.job = 'student'
NewPerson.prototype.sayName = function () {
  return this.name
}
var newPerson1 = new NewPerson()
console.log(newPerson1.sayName())
// zhishouh
var newPerson2 = new NewPerson()
console.log(newPerson2.sayName())
// zhishouh
console.log(newPerson1.sayName == newPerson2.sayName)
// true

console.log(NewPerson.prototype.isPrototypeOf(newPerson1))
