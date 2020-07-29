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
    - [2]数组字面量表示法
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
    - (1) 检测数组(Array.isArray(values))
    - (2) 转换方法
    - (3) 栈方法 (后进先出)
      - push()方法-推入参数添加到数组末尾并返回修改后的数组长度
      - pop()方法-从数组末尾移除最后一项并减少数组的length值，返回移除的项
    - (4) 队列方法 (先进先出)
      - shift()方法-移除数组中的第一个项并返回该值同时将数组长度减一
      - unshift()方法-在数组前端添加任意个项并返回新数组的长度
    - (5) 重排序方法
      - reverse()方法-反转数组项的顺序
      - sort()方法-按升序排列数组项，最小值排在最前面,最大值排在最后面(比较的是字符串)
    - (6) 操作方法
      - concat()方法-基于当前数组中的所有项创建一个新数组
      - slice()方法-基于当前数组的中的一或多个项创建一个新数组
        - 接受一个参数时，slice()方法返回从该参数指定的位置开始到当前数组末尾的所有项；例如slice(1)即从数组第array[1]开始到数组末尾的所有项
        - 接受两个参数时，slice()方法返回项的起始和结束位置；例如slice(1,4)即从数组第array[1]开始到array[3]的所有项
      - splice()方法
        - 删除-两个参数，一个要删除项的位置和一个要删除的项数；例：splice(0，2)即删除数组中的第0项和第1项(返回删除的项)
        - 插入-三个参数，起始位置，0(要删除的项数)，要插入的项；例：splice(2，0，"red")即从当前数组的位置2开始插入字符串red
        - 替换-三个参数，起始位置，要删除的项数，要插入的任意数量的项；例：splice(2,1,"red","green")会删除当前数组位置2的项，然后从位置2插入字符串red,green
    - (7) 位置方法(返回要查找项在数组中的位置,两个参数：要查找的项和表示查找起点的位置)
      - indexOf()方法-从数组的开头(位置0)开始向后查找
      - lastIndexOf()方法-从数组的末尾开始向前查找
    - (8) 迭代方法 
      - every()
      - filter()
      - forEach()
      - map()
      - some()
    - (9) 归并方法
      