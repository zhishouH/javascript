## 面向对象的程序设计
- (1) 理解对象
  - 创建自定义对象的最简单方式就是创建一个Object的实例：
    ```
    var person = new Object()
    person.name = 'zhishouh'
    person.age = 19
    person.job = 'student'
    person.sayName = function () {
      return this.name
    }
    console.log('姓名：' + person.sayName() + ';年龄：' + person.age + ';职业：' + person.job)
    <!-- name：zhishouh; age：19; job：student -->
    ```

  - 对象字面量创建对象实例：
    ```
    var person2 = {
      name: 'zhishouh',
      age: 19,
      job: 'student',
      sayName: function () {
        return this.name
      }
    }
    console.log('name：' + person2.sayName() + '; age：' + person2.age + '; job：' + person2.job)
    <!-- name：zhishouh; age：19; job：student -->
    ```

  - <1> 属性类型
    - [1] 数据属性
      - [[Configurable]] : 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。直接在对象上定义的属性，它们的特性默认值为true。
      - [[Enumerable]] : 表示能否通过for-in循环返回属性。直接在对象上定义的属性，它们的特性默认值为true。
      - [[Writable]] : 表示能否修改属性的值。直接在对象上定义的属性，它们的特性默认值为true。
      - [[Value]] : 包含这个属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。这个特性的默认值为undefined。
    ```
    对于像前面两个例子中那样直接在对象上定义的属性，它们的[[Configurable]]、[[Enumerable]]和[[Writable]]特性都被设置为true，
    而[[Value]]特性被设置为指定的值。例如：

    var person3 = {
      name: 'zhishouh'
    } 

    这里创建了一个名为name的属性，为它指定的值是"zhishouh"。所以，[[Value]]特性将被设置为"zhishouh"。对于这个值的任何修改都将反映在这个位置。
    ```
    ```
    修改属性默认的特性：Object.defineProperty()方法-接收三个参数：属性所在的对象，属性的名字，一个描述符对象。
    描述符对象的属性必须是：configurable、enumerable、writable、value。
    设置其中的一个或多个值，可以修改对应的特性值。

    var person4 = {}
    Object.defineProperty(person4, 'name', {
      writable: false,
      value: 'zhishouh'
    })

    console.log(person4.name)  
    <!-- zhishouh -->

    person4.name = 'pepsi'
    console.log(person4.name)
    <!-- zhishouh -->
    ```
    ```
    把configurable设置为false，表示不能从对象中删除属性

    var person5 = {}
    Object.defineProperty(person5, 'name', {
    configurable: false,
    value: 'zhishouh'
    })

    console.log(person5.name)
    <!-- zhishouh -->

    delete person5.name
    console.log(person5.name)
    <!-- zhishouh -->
    ```
    ```
    把属性定义为不可配置，就不能再把它变回可配置了

    var person6 = {}
    Object.defineProperty(person6, 'name', {
      configurable: false,
      value: 'zhishouh'
    })

    console.log(person6.name)
    <!-- zhishouh -->

    Object.defineProperty(person6, 'name', {
      configurable: true,
      value: 'zhishouh'
    })
    再调用Object.defineProperty()方法修改同一属性都会导致错误
    ```
    - [2] 访问器属性
      - [[Configurable]] : 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。直接在对象上定义的属性，它们的特性默认值为true。
      - [[Enumerable]] : 表示能否通过for-in循环返回属性。直接在对象上定义的属性，它们的特性默认值为true。
      - [[Get]] : 在读取属性时调用的函数。默认值为undefined
      - [[Set]] : 在写入属性时调用的函数。默认值为undefined
    ```
    访问器属性不能直接定义，必须使用Object.defineProperty()来定义

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
    <!-- 2 -->
    console.log(book._year)
    <!-- 2005 -->
    ```

  - <2> 定义多个属性
    - Object.defineProperties()方法可以通过描述符一次定义多个属性。
    - 接收两个对象参数：第一个对象是要添加和修改其属性的对象，第二个对象的属性与第一个对象中要添加或修改的属性一一对应
    ```
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
    <!-- 17 -->

    console.log(book2._year)
    <!-- 2020 -->
    ```

  - <3> 读取属性的特性
    - Object.getOwnPropertyDescriptor()方法可以取得给定属性的描述符。
    - 接收两个参数：属性所在的对象、要读取其描述符的属性名称。
    - 返回值是一个对象，如果是访问器属性，这个对象的属性有configurable、enumerable、get、set;如果是数据属性，这个对象的属性有configurable、enumerable、writable、value。
    ```
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
        set: function () {
          if (newValue > 2004) {
            this._year = newValue
            this.edition += newValue - 2004
          }
        }
      }
    })

    var descriptor = Object.getOwnPropertyDescriptor(book3, '_year')
    console.log(descriptor.value)
    <!-- 2004 -->
    console.log(descriptor.configurable)
    <!-- false -->
    console.log(typeof descriptor.get)
    <!-- undefined -->

    var descriptor2 = Object.getOwnPropertyDescriptor(book, 'year')
    console.log(descriptor2.value)
    <!-- undefined -->
    console.log(descriptor2.enumerable)
    <!-- false -->
    console.log(typeof descriptor2.get)
    <!-- function -->

    对于数据属性_year,value等于最初的值，configurable是false，而get等于undefined
    对于访问器属性year,value对于undefined，enumerable是false，而get是一个指向getter函数的指针
    ```

- (2) 创建对象
  - <1> 工厂模式
    ```
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
    ```
  - <2> 构造函数
    ```
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
    <!-- Person {name: "zhishouh", age: 19, job: "student", sayName: ƒ} -->

    console.log(ps2)
    <!-- Person {name: "pepsi", age: 20, job: "Doctor", sayName: ƒ} -->
    ```
    - Person()函数与createPerson()函数的区别：
      - 没有显示地创建对象
      - 直接将属性和方法赋给了额this对象
      - 没有return语句
    - 创建Person的新实例，必须用到new操作符。以这种方式调用构造函数会经历以下4个步骤：
      - 创建一个新对象
      - 将构造函数的作用域赋给新对象(因此this就指向了这个新对象)
      - 执行构造函数中的代码
      - 返回新对象
    - constructor属性用来标识对象类型
      ```
      console.log(ps1.constructor == Person)
      <!-- true -->

      console.log(ps2.constructor == Person)
      <!-- true -->
      ```
    - instanceof操作符杜宇检测对象类型更可靠
      ```
      console.log(ps1 instanceof Object)
      <!-- true -->

      console.log(ps1 instanceof Person)
      <!-- true -->

      console.log(ps2 instanceof Object)
      <!-- true -->

      console.log(ps2 instanceof Person)
      <!-- true -->
      ```

    - [1] 将构造函数当作函数
      ```
      function Person2 (name, age, job) {
        this.name = name
        this.age = age
        this.job = job
        this.sayName = function () {
          return (this.name)
        }
      }
      <!-- 当作构造函数使用 -->
      var ps3 = new Person2('zhishouh', 19, 'student')
      console.log(ps3.sayName())
      <!-- "zhishouh" -->

      <!-- 作为普通函数使用 -->
      Person2('pepsi', 20, 'Doctor')
      console.log(window.sayName())
      <!-- "pepsi" -->

      <!-- 在另一个对象中的作用域中调用 -->
      var o = new Object()
      Person2.call(o, 'shabi', 25, 'notWork')
      console.log(o.sayName())
      <!-- shabi -->
      ```
    
    - [2] 构造函数的问题 
      - 构造函数可以定义为：
      ```
      function Person3 (name, age, job) {
        this.name = name
        this.job = job
        this.age = age
        this.sayName = new Function('alert(this.name)')
      }
      ```
      - 通过把函数定义转移到构造函数外部
      ```
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
      <!-- Person4 {name: "zhishouh", age: 19, job: "student", sayName: ƒ} -->

      console.log(personDemo2)
      <!-- Person4 {name: "pepsi", age: 20, job: "shabi", sayName: ƒ} -->

      console.log(personDemo1.sayName())
      <!-- zhishouh -->

      console.log(personDemo2.sayName())
      <!-- pepsi -->
      ```
  - <3> 原型模式
    ```
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
    <!-- zhishouh -->

    var newPerson2 = new NewPerson()
    console.log(newPerson2.sayName())
    <!-- zhishouh -->
    
    console.log(newPerson1.sayName == newPerson2.sayName)
    <!-- true -->
    ```
    - [1] 理解原型对象
    - [2] 原型与in操作符
    - [3] 更简单的原型语法
    - [4] 原型的动态性
    - [5] 原生对象的原型
    - [6] 原型对象的问题
    
  - <4> 组合使用构造函数模式和原型模式
  - <5> 动态原型模式
  - <6> 寄生构造函数模式
  - <7> 稳妥构造函数模式

- (3) 继承

- (4) 小结
