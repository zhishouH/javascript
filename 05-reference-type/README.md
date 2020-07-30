## 引用类型
- 引用类型:就是一种数据结构，用于将数据和功能组织在一起。

- 1、Object类型
  - (1) 创建Object实例的方法
    - [1] 使用new操作符后跟Object构造函数  // 不推荐
    ```
    var person = new Object()
    person.name = 'zhishouh'
    person.age = 19
    ```
    - [2] 对象字面量表示法
    ```
    var person = {
      name: 'zhishouh',  //对象属性直接逗号分隔
      age: 19
    }
    ```
  - (2) 对象字面量也可以向函数传递大量可选参数
    ```
    function displayInfo(args) {
      var output = ' '

      if (typeof args.name == 'string') {
        output += 'Name: ' + args.name + '\n'
      }
      if (typeof args.age == 'number') {
        output += 'Age: ' + args.age + '\n'
      }
      console.log(output)
    }

    displayInfo({
      name: 'zhishouh'
      age: 19
    })
    // Name: zhishouh
    // Age: 19

    displayInfo({
      name: 'pepsi'
    })
    // Name: pepsi
    ```
  - (3) 访问对象属性的表示法
    - [1]点表示法
    - [2]方括号表示法 // 不推荐
    ```
    var person = {
      name: 'zhishouh'
    }
    console.log(person.name) // zhishouh
    console.log(person['name']) // zhishouh
    ```

- 2、Array类型
  - (1) 创建数组的基本方式
    - [1] 使用Array构造函数 
    ```
    var colors = new Array()
    var colors = new Array(20)  // 创建length值为20的数组
    var colors = new Array('red', 'blue', 'green')  // 创建包含3个字符串值得数组
    ```
    - [2] 数组字面量表示法
    ```
    var colors = ['red', 'blue', 'green']  // 创建一个包含3个字符串得数组
    var name = []  // 创建一个空数组
    ```
  - (2) 读取和设置数组
    ```
    var colors = ['red', 'blue', 'green']
    console.log(colors[0]) // red
    colors[2] = 'black'  // green修改为black
    colors[3] = 'brown'  // 新增第四项brown
    ```
  - (3) length属性
    ```
    数组的length属性不是只读的，通过设置length可以 从数组的末尾移除或新增项
    var colors = ['red', 'blue', 'green']

    colors.length = 2
    console.log(colors[2])  // undefined

    colors.length = 4
    console.log(colors[3])  // undefined

    colors[colors.length] = 'black'  // 在数组末尾添加一项black
    colors[colors.length] = 'brown'  // 在数组末尾添加一项brown
    ```
  - (4) Array类型中的方法
    - [1] 检测数组
    ```
    Array.isArray()方法是最终确定某个值到底是不是数组
    var colors = ['red', 'blue', 'green']
    if (Array.isArray(colors)) {
      for (var i = 0; i < colors.length; i++) {
        console.log(colors[i])
      }
    }
    // red 
    // blue
    // green
    ```
    - [2] 转换方法
      - toLocaleString()-调用此方法时会创建一个数组值的以逗号分隔得字符串
      - toString()-调用此方法会返回由数组中的每个值的字符串形式拼接而成的一个以逗号分隔的字符串
      - valueOf()-调用此方法返回的还是数组本身
      - join()-调用此方法将接收一个参数作为分隔符的字符串然后返回包含数组项的字符串
      ```
      var colors = ['red', 'blue', 'green']
      console.log(colors.toString())  // red,blue,green
      console.log(colors.valueOf())  // red,blue,green
      console.log(colors)  // console.log()接受参数后调用toString() red,blue,green
      ```
      ```
      var person1 = {
        toLocaleString: function () {
          return 'zhishouh'
        },
        toString: function () {
          return 'pepsi'
        }
      }
      var person2 = {
        toLocaleString: function () {
          return 'zhishouhuang'
        },
        toString: function () {
          return 'pepsi'
        }

        var people = [person1, person2]
        console.log(people) // pepsi,pepsi
        console.log(people.toString)  // pepsi,pepsi
        console.log(people.toLocaleString)  // zhishouh,zhishouhuang
      }
        ```
        ```
        var colors = ['red', 'green', 'blue']
        console.log(colors.join(','))  // red,green,blue
        console.log(colors.join('||'))  // red||green||blue
        ```
    - [3] 栈方法 
      - 一种后进先出的数据结构，也就是最新添加的项最早被移除；栈中项的推入和弹出只发生在栈的顶部
      - push()方法-推入参数添加到数组末尾并返回修改后的数组长度
      - pop()方法-从数组末尾移除最后一项并减少数组的length值，返回移除的项
      ```
      var colors = new Array()  // 创建一个数组
      var count = colors.push('red', 'green')  // 推入两项到数组末尾
      console.log(count)  // 2

      count = colors.push('black')  // 推入一项到数组末尾
      console.log(count)  // 3

      var item = colors.pop()  // 弹出最后一项
      console.log(item)  // black
      console.log(colors.length)  // 2
      ```
      - 可以将栈方法与其他数组方法连用
      ```
      var colors = ['red', 'blue']
      colors.push('brown') // 推入一项到数组末尾
      colors[3] = 'black'  // 添加一项
      console.log(colors.length)  // 4

      var item = colors.pop()  // 弹出最后一项
      console.log(item)  // black
      console.log(colors.length)  // 3
      ```
    - [4] 队列方法
      -  一种先进先出的数据结构，队列在列表的末端添加项，从列表的前端移除项
      - shift()方法-移除数组中的第一个项并返回该项同时将数组长度减一
      - unshift()方法-在数组前端添加任意个项并返回新数组的长度
      ```
      var colors = new Array()  // 创建一个数组
      var count = colors.push('red', 'green')  // 推入两项到数组末尾
      console.log(count)  // 2

      count = colors.push('black')  // 推入一项到数组末尾
      console.log(count)  // 2

      var item = colors.shift()  // 取得第一项
      console.log(item)  // red
      console.log(colors)  // 2
      ```
      ```
      var colors = new Array()  // 创建一个数组
      var count = colors.unshift('red', 'green')  // 推入两项到数组前端
      console.log(count)  // 2

      count = colors.unshift('black')  // 推入一项到数组前端
      console.log(count)  // 3

      var item = colors.pop()  // 取得最后一项
      console.log(item)  // green
      console.log(colors)  // 2
      ```
    - [5] 重排序方法
      - reverse()方法-反转数组项的顺序
      - sort()方法-按升序排列数组项，最小值排在最前面,最大值排在最后面
      - 比较函数
      ```
      var values = [1, 2, 3, 4, 5]
      values.reverse()
      console.log(values)  // 5, 4, 3, 2, 1
      ```
      ```
      var values = [0, 1, 5, 10, 15]
      values.sort()
      console.log(values)  // 0, 1, 10, 15, 5
      // sort()方法会调用每个数组项的toString()转型方法再进行比较
      ```
      ```
      function compare(value1, value2) {
        if (value1 < value2) {
          return -1
        } else if (value1 > value2) {
          return 1
        } else {
          return 0
        }
      }
      var values = [0, 1, 5, 10, 15]
      values.sort(compare)
      console,log(values)  // 0, 1, 5, 10, 15
      ```
      ```
      function compare(value1, value2) {
        if (value1 < value2) {
          return 1
        } else if (value1 > value2) {
          return -1
        } else {
          return 0
        }
      }
      var values = [0, 1, 5, 10, 15]
      values.sort(compare)
      console.log(values)  // 15, 10, 5, 1, 0
      ```
      ```
      function compare(value1, value2) {
        return value2 - value1
      }
      var values = [0, 1, 5, 10, 15]
      values.sort(compare)
      console.log(values)  // 15, 10, 5, 1, 0
      ```
    - [6] 操作方法
      - concat()方法-基于当前数组中的所有项创建一个新数组
      ```
      var colors = ['red', 'green', 'blue']
      var colors2 = colors.concat('yellow', ['black', 'brown'])

      console.log(colors)  // red, green, blue
      console.log(colors2)  // red, green, blue, yellow, black, brown
      ```
      - slice()方法-基于当前数组中的一或多个项创建一个新数组
      ```
      1、接受一个参数时，slice()方法返回从该参数指定的位置开始到当前数组末尾的所有项
      2、接受两个参数时，slice()方法返回项的起始和结束位置之间的项，不包括结束位置的项
      var colors = ['red', 'green', 'blue', 'yellow', 'purple']
      var colors2 = colors.slice(1)
      var colors3 = colors.slice(1,4)

      console.log(colors)  // red, green, blue, yellow, purple
      console.log(colors2)  // green, blue, yellow, purple
      console.log(colors3)  // green, blue, yellow
      ```
      - splice()方法
        - 删除-两个参数，一个要删除项的位置和一个要删除的项数
        - 插入-三个参数，起始位置，0(要删除的项数)，要插入的项
        - 替换-三个参数，起始位置，要删除的项数，要插入的任意数量的项
        - splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项(如果没有删除任何项，则返回一个空数组)
        ```
        var colors = ['red', 'green', 'blue']  // 创建一个包含三个项的数组
        var removed = colors.splice(0,1)  // 删除第一项
        console.log(colors)  // green, blue
        console.log(removed)  // red  返回的数组只包含一项
        
        removed = colors.splice(1, 0, 'yellow', 'orange')  // 从位置1开始插入两项
        console.log(colors)  // green, yellow, orange, blue
        console.log(removed)  // 返回空数组

        removed = colors.splice(1, 1, 'red', 'purple')
        console.log(colors)  // green, red, purple, orange, blue
        console.log(removed)  // yellow
        ``` 
    - [7] 位置方法
      - 返回要查找的项在数组中的位置,或者在没有找到的情况下返回-1
      - 两个参数：要查找的项和表示查找起点的位置
      - indexOf()方法-从数组的开头(位置0)开始向后查找
      - lastIndexOf()方法-从数组的末尾开始向前查找
      ```
      var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]
      console.log(numbers.indexOf(4))  // 4
      console.log(numbers.lastIndexOf(4))  // 5

      console.log(numbers.indexOf(4, 4))  // 5
      console.log(numbers.lastIndexOf(4, 4))  // 3

      var person = {name: 'zhishouh'}
      var people = [{name: 'zhishouh'}]
      var morePeople = [person]
      console.log(people.indexOf(person))  // -1 
      console.log(morePeople.indexOf(person))  // 0     
      ```
    - [8] 迭代方法 
      - 方法接收两个参数：要在每一项上运行的函数和(可选的)运行该函数的作用域对象
      - 传入方法中的函数接收三个参数：数组项的值、该项在数组中的位置、数组对象本身
      - every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
      - filter()：对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组
      - forEach()：对数组中的每一项运行给定函数，这个方法没有返回值
      - map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
      - some()：对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true
      ```
      every()和some():
      var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]

      var everyResult = numbers.every(function (item, index, array){
        return (item > 2)
      })
      console.log(everyResult)  // false

      var someResult = numbers.some(function (item, index, array){
        return (item > 2)
      })
      console.log(someResult)  // true
      ```
      ```
      filter()-利用指定函数确定是否在返回的数组中包含某一项:
      var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]
      var filterResult = numbers.fliter(function (item, index, array){
        return (item > 2)
      })
      console.log(filterResult)  // [3, 4, 5, 4, 3]
      ```
      ```
      map():
      var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]
      var mapResult = numbers.map(function (item, index, array) {
        return (item * 2)
      })
      console.log(mapResult)  // [2, 4, 6, 8, 10, 8, 6, 4, 2]
      ```
      ```
      forEach():
      var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]
      numbers.forEach(function (item, index, array) {
        // 执行某些操作
      })
      ```
    - [9] 归并方法
