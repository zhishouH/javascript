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
  - (4) Array类型中的语法：
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
      - 传入方法中的函数接收3个参数：数组项的值、该项在数组中的位置、数组对象本身
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
      - 接收两个参数：一个在每一项上调用的函数和(可选的)作为并归基础的初始值
      - 传入方法中的函数接收4个参数：前一个值、当前值、项的索引、数组对象
      - reduce()-从数组的第一项开始，逐个遍历到最后
      - reduceRight()-从数组的最后一项开始，向前遍历到第一项
      ```
      var values = [1, 2, 3, 4, 5]
      var sum = values.reduce(function (prev, cur, index, array){
        return (prev + cur)
      })
      console.log(sum)  // 15
      // 1 + 2
      // 3 + 3
      // 6 + 4
      // 10 + 5
      ```
      ```
      var values = [1, 2, 3, 4, 5]
      var sum = values.reduceRight(function (prev, cur, index, array){
        return (prev + cur)
      })
      console.log(sum)  // 15
      // 5 + 4
      // 9 + 3
      // 12 + 2
      // 14 + 1
      ```

- 3、Date类型
  - (1) 创建日期对象
    ```
    var now = new Date()
    // 在调用Date构造函数而不传递参数的情况下，新创建的对象自动获得当前的日期和时间
    ```
  - (2) Date提供的方法：
    - [1] Date.parse()-接收一个表示日期的字符串参数，然后尝试根据这个字符串返回相应日期的毫秒数
      - 参数接受的日期格式:
      - '月/日/年',如 6/13/2004
      - '英文月名 日 年', 如 January 12,2004
      - '英文星期几 英文月名 日 年 时:分:秒 时区',如 Tue May 25 2004 00:00:00 GMT-0700
    ```
    var someDate = new Date(Date.parse('6/13/2004'))
    console.log(someDate) // Sun Jun 13 2004 00:00:00 GMT+0800 (中国标准时间)

    var someDate2 = new Date(Date.parse('January 12,2004'))
    console.log(someDate2) // Mon Jan 12 2004 00:00:00 GMT+0800 (中国标准时间)

    var someDate3 = new Date(Date.parse('Tue May 25 2004 00:00:00 GMT-0700'))
    console.log(someDate3) // Tue May 25 2004 15:00:00 GMT+0800 (中国标准时间)

    // 直接将表示日期的字符串传给Date构造函数，也会在后台调用Date.parse()
    var someDate4 = new Date('May 25,2004')
    console.log(someDate4) // Tue May 25 2004 00:00:00 GMT+0800 (中国标准时间)
    ```
    - [2] Date.UTC()
      - Date.UTC()-接收年份、基于0的月份(一月是0，二月是1，以此类推)、月中的哪一天(1到31)、小时数(0到23)、分钟、秒以及毫秒数。
      - 在这些参数中，只有前两个参数(年和月)是必需的
      - 如果没有提供月中的天数，则假设天数为1；如果省略其他参数，则统统假设为0
    ```
    var y2k = new Date(Date.UTC(2000, 0))
    console.log(y2k) // Sat Jan 01 2000 08:00:00 GMT+0800 (中国标准时间)

    var allFivees = new Date(Date.UTC(2005, 4, 5, 17, 55, 55))
    console.log(allFivees) // Fri May 06 2005 01:55:55 GMT+0800 (中国标准时间)

    var y2k2 = new Date(2000, 0)
    console.log(y2k2) // Sat Jan 01 2000 00:00:00 GMT+0800 (中国标准时间)

    var allFivees2 = new Date(2005, 4, 5, 17, 55, 55)
    console.log(allFivees2) // Thu May 05 2005 17:55:55 GMT+0800 (中国标准时间)
    ```
      - 日期和时间都基于本地时区而非GMT来创建
    - [3] Date.now()
      - 返回表示调用这个方法时的日期和时间的毫秒数
    ```
    // 取得开始时间
    var start = Date.now()

    // 调用函数
    doSomething()

    // 取得停止时间
    // var stop = Date.now(),
            result = stop - start
    ```
      - 在不支持Date.now()的浏览器中，使用+操作符获取对象的时间戳也可以达到同样的目的
    ```
    // 取得开始时间
    var start = +new Date()

    // 调用函数
    doSomething()

    // 取得停止时间
    var stop = +new Date()
        result = stop - start
    ```
  - (3) Date类型中的语法：
    - [1] 继承的方法
      - toLocaleString():按照与浏览器设置的地区相适应的格式返回日期和时间
      - toString():返回带有时区信息的日期和时间
      - valueOf():返回日期的毫秒表示
    ```
    不同得浏览器调用toLocaleString()和toString()方法的结果不同
    Chrome：
    var date = new Date(2007,0,1)
    console.log(date)  // Mon Jan 01 2007 00:00:00 GMT+0800 (中国标准时间)
    console.log(date.toLocaleString())  // 2007/1/1 上午12:00:00
    console.log(date.toString())  // Mon Jan 01 2007 00:00:00 GMT+0800 (中国标准时间)
    console.log(date.valueOf())  // 1167580800000
    ```
    - [2] 日期格式化方法
      - toDateString():以特定于实现的格式显示星期几、月、日和年
      - toTimeString():以特定于实现的格式显示时、分、秒和时区
      - toLocaleDateString():以特定于地区的格式显示星期几、月、日和年
      - toLocaleTimeString():以特定于地区的格式显示时、分、秒
      - toUTCString():以特定于实现的格式显示UTC日期
    ```
    var now = new Date(2020, 7, 6, 15, 48, 48)
    console.log(now) // Thu Aug 06 2020 15:48:48 GMT+0800 (中国标准时间)
    console.log(now.toDateString()) // Thu Aug 06 2020
    console.log(now.toTimeString()) // 15:48:48 GMT+0800 (中国标准时间)
    console.log(now.toLocaleDateString()) // 2020/8/6
    console.log(now.toLocaleTimeString()) // 下午3:48:48
    console.log(now.toUTCString()) // Thu, 06 Aug 2020 07:48:48 GMT
    ```
    - [3] 日期/时间组件方法

    |序号|方法|说明|
    |:--:|:--|:--|
    |1|getTime()|返回表示日期的毫秒数；与valueOf()方法返回的值相同|
    |2|setTime(毫秒)|以毫秒数设置日期，会改变日期|
    |3|getFullYear()|取得4位数的年份(如2007而非仅07)|
    |4|getUTCFullYear()|返回UTC日期的4位数年份|
    |5|setFullYear(年)|设置日期的年份。传入的年份值必须是4位数字(如2007而非仅07)|
    |6|setUTCFullYear(年)|设置UTC日期的年份。传入的年份值必须是4位数字(如2007而非仅07)|
    |7|getMonth()|返回日期中的月份，其中0表示一月，11表示十二月|
    |8|getUTCMonth()|返回UTC日期中的月份，其中0表示一月，11表示十二月|
    |9|setMonth(月)|设置日期中的月份。传入的月份值必须大于0，超过11则增加年份|
    |10|setUTCMonth(月)|设置UTC日期的月份。传入的值必须大于0，超过11则增加年份|
    |11|getDate()|返回日期中的天数(1到31)|
    |12|getUTCDate()|返回UTC日期中的天数(1到31)|
    |13|setDate(日)|设置日期中月份的天数。如果传入的值超过了该月中应有的天数，则增加月份|
    |14|setUTCDate(日)|设置UTC日期中月份的天数。如果传入的值超过了该月中应有的天数，则增加月份|
    |15|getDay()|返回日期中星期的星期几(其中0表示星期日，6表示星期六)|
    |16|getUTCDay()|返回UTC日期中星期的星期几(其中0表示星期日，6表示星期六)|
    |17|getHours()|返回日期中的小时数(0到23)|
    |18|getUTCHours()|返回UTC日期中的小时数(0到23)|
    |19|setHours(时)|设置日期中的小时数。传入的值超过23则增加月份的天数|
    |20|setUTCHours(时)|设置UTC日期中的小时数。传入的值超过23则增加月份的天数|
    |21|getMinutes()|返回日期中的分钟数(0到59)|
    |22|getUTCMinutes()|返回UTC日期中的分钟数(0到59)|
    |23|setMinutes(分)|设置日期中的分钟数。传入的值超过59则增加小时数|
    |24|setUTCMinutes(分)|设置UTC日期中的分钟数。传入的值超过59则增加小时数|
    |25|getSeconds|返回日期中的秒数(0到59)|
    |26|getUTCSeconds|返回UTC日期中的秒数(0到59)|
    |27|setSeconds(秒)|设置日期中的秒数。传入的值超过59会增加分钟数|
    |28|setUTCSeconds(秒)|设置UTC日期中的秒数。传入的值超过59会增加分钟数|
    |29|getMilliseconds()|返回日期中的毫秒数|
    |30|getUTCMilliseconds()|返回UTC日期中的毫秒数|
    |31|setMilliseconds(毫秒)|设置日期中的毫秒数|
    |32|setUTCMilliseconds(毫秒)|设置UTC日期中的毫秒数|
    |33|getTimezoneOffset()|返回本地时间与UTC时间差的分钟数。例如，美国东部标准时间返回300.在某地进入夏令时的情况下，这个值会有所变化|

- 4、RegExp类型
    - ECMAScript通过RegExp类型来支持正则表达式
    - (1) 创建正则表达式
      - [1]字面量形式创建正则表达式
      ```
      var expression = / pattern / flags

      - pattern(模式):可以是任何简单或复杂的正则表达式，包含字符类、限定符、分组、向前查找以及反向引用

      - flags(标志):用以标明正则表达式的行为
      ``` 
      - 正则表达式的匹配模式支持下列3个标志：
        - g: 表示全局模式(global)，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止
        - i: 表示不区分大小写模式(case-insensitive)，即在确定匹配项时忽略模式与字符串的大小写
        - m: 表示多行模式(multiline)，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项
      ```
      <!-- 匹配字符串中所有"at"的实例 -->
      var pattern1 = /at/g

      <!-- 匹配第一个"bat"或"cat"，不区分大小写 -->
      var pattern2 = /[bc]at/i

      <!-- 匹配所有以"at"结尾的3个字符的组合，不区分大小写 -->
      var pattern3 = /.at/gi
      ```
      - 正则表达式中的元字符包括: `( [ { \ ^ $ | ) ? * + . } ]`
      ```
      <!-- 匹配第一个"bat"或"cat",不区分大小写 -->
      var pattern1 = /[bc]at/i

      <!-- 匹配第一个"[bc]at"，不区分大小写 -->
      var pattern2 = /\bc\]at/i

      <!-- 匹配所有以"at"结尾的3个字符的组合，不区分大小写 -->
      var pattern3 = /.at/gi

      <!-- 匹配所有".at"，不区分大小写 -->
      var pattern4 = /\.at/gi
      ```
      - [2] 使用RegExp构造函数创建正则表达式
      - 接收两个参数：
        - 要匹配的字符串模式
        - 可选的标志字符串
      ```
      <!-- 匹配第一个"bat"或"cat"，不区分大小写 -->
      var pattern1 = new RegExp("[bc]at","i")
      ```
      - 字符转义(左边是这些模式的字面量形式，右边是使用RegExp构造函数定义相同模式时使用的字符串)
      ```
      字符\在字符串中通常被转义为\\,而在正则表达式中就会变成\\\\
        字面量模式                等价的字符串

        /\[bc\]at/        ->    "\\bc\\at"

        /\.at/            ->    "\\.at"

        /name\/age/       ->    "name\\/age"

        /\d.\d{1,2}/      ->    "\\d.\\d{1,2}"

        /w\\hello\\123/   ->    "\\w\\\\hello\\\\123"
      ```
    - (2) RegExps实例属性
      - RegExp的每个实例都具有一下属性：
        - global: 布尔值，表示是否设置了g标志
        - ignoreCase: 布尔值，表示是否设置了i标志
        - lastIndex: 整数，表示开始搜索下一个匹配项的字符位置，从0算起
        - multiline: 布尔值，表示是否设置了m标志
        - source: 正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回
      ```
      var pattern1 = /\[bc\]at/i
      console.log(pattern1.global) // false
      console.log(pattern1.ignoreCase) // true
      console.log(pattern1.multiline) // false
      console.log(pattern1.lastIndex) // 0
      console.log(pattern1.source) // \[bc\]at
      ```
      ```
      var pattern2 = new RegExp("\\[bc\\]at","i")
      console.log(pattern2.global) // false
      console.log(pattern2.ignoreCase) // true
      console.log(pattern2.multiline) // false
      console.log(pattern2.lastIndex) // 0
      console.log(pattern2.source) // \[bc\]at
      ```
    - (3) RegExp实例方法
      - exec()方法:
        - 接受一个参数：应用模式的字符串
        - 返回包含第一个匹配项信息的数组
        - 包含两个额外属性：index表示匹配项在字符串中的位置；input表示应用正则表达式的字符串
        - 在数组中，第一项是与整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串
      ```
      var text = 'mom and dad and baby'
      var pattern1 = /mom( and dad( and baby)?)?/gi

      var matches = pattern1.exec(text)
      console.log(matches.index) // 0
      console.log(matches.input) // mom and dad and baby
      console.log(matches[0]) // mom and dad and baby
      console.log(matches[1]) // and dad and baby
      console.log(matches[2]) //  and baby
      ```
      ```
      在设置了全局标志下，每次调用exec()都会在字符串中继续查找新匹配项:
      var text = 'cat, bat, sat, fat'
      
      var pattern1 = /.at/
      var matches = pattern1.exec(text)
      
      console.log(matches.index) // 0
      console.log(matches[0]) // cat
      console.log(pattern1.lastIndex) // 0

      matches = pattern1.exec(text)
      
      console.log(matches.index) // 0
      console.log(matches[0]) // cat
      console.log(pattern1.lastIndex) // 0

      var pattern2 = /.at/g
      matches = pattern2.exec(text)
      
      console.log(matches.index) // 0
      console.log(matches[0]) // cat
      console.log(pattern2.lastIndex) // 3

      matches = pattern2.exec(text)
      
      console.log(matches.index) // 5
      console.log(matches[0]) // bat
      console.log(pattern2.lastIndex) // 8
      此例中的第一个模式pattern1未设置全局模式，因此每次调用exec()时返回的是第一个匹配项
      而第二个模式pattern2是全局模式，因此每次调用都会返回字符串中的下一个匹配项
      ```
      - test()方法:
        - 接受一个字符串参数
        - 在模式与该参数匹配的情况下返回true，反之false
      ```
      var text = '000-00-0000'
      var pattern = /\d{3}-\d{2}-\d{4}/

      if (pattern.test(text)) {
      console.log('The pattern was matched.') 
      // The pattern was matched.
      }
      ```
      - toLocaleString()
      - toString()
      ```
      var pattern = new RegExp('\\[bc\\]at', 'gi')
      console.log(pattern.toString()) // /\[bc\]at/gi
      console.log(pattern.toLocaleString()) // /\[bc\]at/gi
      ```
    - (4) RegExp构造函数属性

      |长属性名|短属性名|说明|
      |:--|:--|:--|
      |input|$_|最近一次要匹配的字符串。Opera未实现此属性|
      |lastMatch|$&|最近一次匹配项。Opera未实现此属性|
      |lastParen|$+|最近一次匹配的捕获组。Opera未实现此属性|
      |leftContext|$`|input字符串中lastMatch之前的文本|
      |multiline|$*|布尔值，表示是否所有表达式都使用多行模式。IE和Opera未实现此属性|
      |rightContext|$'|input字符串中lastMatch之后的文本|

      ```
      var text = 'this has been a short summer'
      var pattern = /(.)hort/g

      if (pattern.test(text)) {
      console.log(RegExp.input)  // this has been a short summer
      console.log(RegExp.leftContext)  // this has been a 
      console.log(RegExp.rightContext)  // summer
      console.log(RegExp.lastMatch)  // short
      console.log(RegExp.lastParen)  // s
      console.log(RegExp.multiline)  // false
      }
      ```
      ```
      var text = 'this has been a short summer'
      var pattern = /(.)hort/g

      if (pattern.test(text)) {
      console.log(RegExp.$_) // this has been a short summer
      console.log(RegExp['$`']) // this has been a
      console.log(RegExp["$'"]) //  summer
      console.log(RegExp['$&']) // short
      console.log(RegExp['$+']) // s
      console.log(RegExp['$*']) // false
      }
      ```
      ```
      用于存储捕获组的构造函数属性
      访问这些属性的语法是RegExp.$1、RegExp.$2、... RegExp.$9
      分别用于存储第一、第二...第九个匹配的捕获组
      var text = 'this has been a short summer'
      var pattern = /(..)or(.)/g

      if (pattern.test(text)) {
      console.log(RegExp.$1) // sh
      console.log(RegExp.$2) // t
      }
      ```
    - (5) 模式的局限性
      - ECMAScript正则表达式不支持的特性：
        - 匹配字符串开始和结尾的\A和\Z锚
        - 先后查找(lookbehind)
        - 并集和交集类
        - 原子组(atomic grouping)
        - Unicode支持(单个字符除外，如\uFFFF)
        - 命名的捕获组
        - s (single,单行) 和 x (free-spacing,无间隔)匹配模式
        - 条件匹配
        - 正则表达式注释
        
- 5、function类型
  - (1) 定义函数的方式
  ```
  function sum (num1, num2) {
    return num1 + num2
  }
  var result = sum(1, 2)
  console.log(result)  // 3
  ```
  ```
  var sum = function (num1, num2) {
  return num1 + num2
  }
  console.log(sum(1, 2))
  ```
  ```
  使用Function构造函数定义函数:(不推荐)
  var sum = new Function('num1', 'num2', 'return num1 + num2')
  console.log(sum(1, 2))  // 3
  ```

  - (2) 没有重载(深入理解)
  ```
  function addSomeNumber (num) {
  return num + 100
  }
  function addSomeNumber (num) {
  return num + 200
  }
  var result = addSomeNumber(100)
  console.log(result) // 300
  声明了两个同名函数，而结果是后面的函数覆盖了前面的函数
  ```

  - (3) 函数声明与函数表达式
  ```
  console.log(sum(1, 2))
  function sum (num1, num2) {
    return num1 + num2
  }
  // 3
  解析器会率先读取函数声明
  ```

  - (4) 作为值的函数
  ```
  把一个函数传递给另一个函数
  function callSomeFuction (SomeFuction, somArgument) {
    return SomeFuction(somArgument)
  }

  <!-- 第一个参数是一个函数，第二个参数是传递给该函数的一个值 -->

  function add10 (num) {
    return num + 10
  }
  var result1 = callSomeFuction(add10, 10)
  console.log(result1) // 20

  function getGreeting (name) {
    return 'Hello, ' + name
  }

  var result2 = callSomeFuction(getGreeting, 'zhishouh')
  console.log(result2) // Hello, zhishouh
  ```
  ```
  从一个函数中返回另一个函数
  function createComparisonFunction (propertyName) {
    return function (object1, object2) {
      var value1 = object1[propertyName]
      var value2 = object2[propertyName]
      if (value1 < value2) {
        return -1
      } else if (value1 > value2) {
        return 1
      } else {
        return 0
      }
    }                             
  }
  var data = [{ name: 'zhishouh', age: 19 }, { name: 'pepsi', age: 20 }]
  data.sort(createComparisonFunction('name'))
  console.log(data[0].name)  // pepsi
  data.sort(createComparisonFunction('age'))
  console.log(data[0].name)  // zhishouh
  ```

  - (5) 函数内部属性
    - arguments
  ```
  阶乘函数：(递归算法)
  function factorial (num) {
    if (num <= 1) {
      return 1
    } else {
      return num * factorial(num - 1)
    }
  }
  console.log(factorial(5)) // 1 * 2 * 3 * 4 * 5 = 120
  ```
  ```
  阶乘函数：(arguments.callee)
  function factorial (num) {
    if (num <= 1) {
      return 1
    } else {
      return num * arguments.callee(num - 1)
    }
  }
  console.log(factorial(5))  // 1 * 2 * 3 * 4 * 5 = 120
  ```
  - this 
  ```
  window.color = 'red'
  var o = { color: 'blue' }

  function sayColor () {
    console.log(this.color)
  }

  sayColor() // red

  o.sayColor = sayColor
  o.sayColor() // blue
  ```

  - (6) 函数属性和方法
    - 属性：
      - length：表示函数希望接受的命名参数的个数
      - prototype：
    ```
    function sayName (name) {
      console.log(name)
    }
    function sum (num1, num2) {
      return num1 + num2
    }
    function sayHi () {
      console.log('Hi')
    }
    console.log(sayName.length)  // 1
    console.log(sum.length)  // 2
    console.log(sayHi.length)  // 0
    ```
    - 方法
      - 用途是在特定的作用域中调用函数
      - apply(),接收两个参数：一个是在其作中运行函数的作用域，一个是参数数组(也可以是Array实例和argument对象)
      - call(),传递给函数的参数必须逐个例举出来
      - bind(),会创建一个函数的实例，其this值会被绑定到传给bind()函数的值
    ```
    apply():
    function sum (num1, num2) {
      return num1 + num2
    }
    function callSum1 (num1, num2) {
      return sum.apply(this, arguments)
    }
    function callSum2 (num1, num2) {
      return sum.apply(this, [num1, num2])
    }
    console.log(callSum1(10, 10)) // 20
    console.log(callSum2(10, 10)) // 20
    ```
    ```
    call():
    function sum (num1, num2) {
      return num1 + num2
    }
    function callSum (num1, num2) {
      return sum.call(this, num1, num2)
    }
    console.log(callSum(10, 10))  // 20 
    ```
    ```
    扩充函数赖以运行的作用域：
    window.color = 'red'
    var o = { color: 'blue' }

    function sayColor () {
      console.log(this.color)
    }
    sayColor()  // red

    sayColor.call(this)  // red
    sayColor.call(window)  // red
    sayColor.call(o)  // blue 
    ```
    ```
    window.color = 'red'
    var o = {
      color: 'blue'
    }
    function sayColor () {
      console.log(this.color)
    }
    var objectSayColor = sayColor.bind(o)
    objectSayColor()  // blue
    ```
    
- 6、基本包装类型
  ```
  var s1 = 'some text'
  var s2 = s1.substring(2)
  console.log(s2)  // me text

  这个例子中的变量s1包含一个字符串,字符串是基本类型值。
  而下一行调用了s1的substring()方法，并将返回的结果保存在s2中。
  而基本类型不是对象，因此从逻辑上说它们不应该有方法。
  其实在后台已经自动完成了以下一系列的处理。
  (1)创建String类型的一个实例
  (2)在实例上调用指定的方法
  (3)销毁这个实例
  
  var s1 = new String("some text")
  var s2 = s1.substring(2)
  s1 = null 

  经过处理之后，基本的字符串值就变得像对象一样
  ```
  ```
  自动创建的基本包装类型的对象，只存在于一行代码的执行瞬间，然后立即被销毁
  这意味着不能在运行时为基本类型值添加属性和方法
  var s1 = 'some text'
  s1.color = 'red'
  console.log(s1.color) // undefined
  ```
  - (1) Boolean类型
    - <1> 创建Boolean对象，调用Boolean构造函数并传入true或false值
    ```
    var booleanObject = new Boolean()
    ```
    - <2> 在布尔表达式中使用Boolean对象
    ```
    var falseObject = new Boolean(false)
    var result = falseObject && true
    console.log(result) // true
    <!-- 布尔表达式中的所有对象都会被转换为true -->
    
    var falseValue = false
    result = falseValue && true
    console.log(result) // fasle
    ```
    - <3> 基本类型与引用类型的布尔值的两个区别
    ```
    console.log(typeof falseObject) // object
    console.log(typeof falseValue) // boolean
    console.log(falseObject instanceof Boolean) // true
    console.log(falseValue instanceof Boolean) // false
    1、typeof操作符会对基本类型返回boolean,而对引用类型返回object
    2、因为Boolean对象是Boolean类型的实例，
      当使用instanceof时Boolean对象会返回true,而布尔值会返回false
    ```
  - (2) Number类型
    - <1> 创建Number对象，调用NUmber构造函数向其传入数值
    ```
    var numberObject = new Number(10)
    ```
    - <2> 用toString()方法传递一个表示基数的参数，返回几进制数值的字符串形式
    ```
    var num = 10
    console.log(num.toString()) // "10"
    console.log(num.toString(2)) // "1010"
    console.log(num.toString(8)) // "12"
    console.log(num.toString(10)) // "10"
    console.log(num.toString(16)) // "a"
    ```
    - <3> toFixed()方法-按照指定的小数位返回数值的字符串
    ```
    console.log(num.toFixed(2)) // 10.00
    ```
    ```
    如果数值本身包含的小数位比指定的还多，那么接近指定的最大小数位的值就会舍入
    var num2 = 10.005
    console.log(num2.toFixed(2)) // 10.01
    ```
    - <4> toExponential()方法-返回以指数表示法(e表示法)表示的数值的字符串形式
    ```
    console.log(num.toExponential(1)) // 1.0e+1
    ```
    - <5> toPrecision()方法-可能会返回固定大小格式，也可能返回指数格式。实际上 toPrecision()会根据要处理的数值决定是调用toFixed()还是调用toExponential()。而这三个方法都可以通过向上或向下舍入，做到以最准确的形式来表示带有正确小数位的值。
    ```
    var num3 = 99
    console.log(num3.toPrecision(1)) // 1e+2
    console.log(num3.toPrecision(2)) // 99
    console.log(num3.toPrecision(3)) // 99.0
    ```
    - <6> 基本类型数值与引用类型数值的区别(与Boolean对象类似)
    ```
    var numberObject = new Number(10)
    var numberValue = 10
    console.log(typeof numberObject) // object
    console.log(typeof numberValue) // number
    console.log(numberObject instanceof Number) // true
    console.log(numberValue instanceof Number) // false
    ```
  - (3) String类型
    - <1> 创建String对象
    ```
    var stringObject = new String('hello world')
    ```
    - <2> length属性-表示字符串中包含多个字符
    ```
    var stringValue = 'hello world'
    console.log(stringValue.length) // 11
    ```
    - <3> 字符方法
      - charAt()-接受一个参数，基于0的字符位置，得到字符
      - charCodeAt()-接受一个参数，基于0的字符位置，得到字符编码
      - 访问个别字符的方法-使用方括号加数字索引，得到字符
    ```
    console.log(stringValue.charAt(0)) // "h"
    ```
    ```
    console.log(stringValue.charCodeAt(0)) // "104"
    ```
    ```
    console.log(stringValue[1]) // "e"
    ```
    - <4> 字符串操作方法
      - concat()-用于将一个或多个字符串拼接起来，返回拼接得到的新字符串(可以接受任意多个参数)
      - slice()-接收两个参数，第一个参数指定字符串的开始位置，第二个参数指定子字符串最后一个字符后面的位置，得到新字符串
      - substr()-接收两个参数，第一个参数指定字符串的开始位置，第二个参数指定返回的字符个数，得到新字符串
      - substring()--接收两个参数，第一个参数指定字符串的开始位置，第二个参数指定子字符串最后一个字符后面的位置，得到新字符串
    ```
    var stringValue2 = 'hello '
    var result = stringValue2.concat('world')
    console.log(result) // "hello world"
    console.log(stringValue2) // "hello "
    ```
    ```
    var result2 = stringValue2.concat('world', '!')
    console.log(result2) // "hello world!"
    console.log(stringValue2) // "hello "
    ```
    ```
    var stringValue = 'hello world'
    console.log(stringValue.slice(3)) // "lo world"
    console.log(stringValue.substring(3)) // "lo world"
    console.log(stringValue.substr(3)) // "lo world"
    console.log(stringValue.slice(3, 7)) // "lo w"
    console.log(stringValue.substring(3, 7)) // "lo w"
    console.log(stringValue.substr(3, 7)) // "lo worl"
    ```
    ```
    当传递给这些方法的参数是负数时，
    slice()方法会将传入的负值与字符串的长度相加
    substr()方法将负的第一个参数加上字符串的长度，将负的第二个参数转换为0
    substring()方法会把所有的负值参数都转换为0
    var stringValue = 'hello world'
    console.log(stringValue.slice(-3)) // "rld"
    console.log(stringValue.substring(-3)) // "hello world"
    console.log(stringValue.substr(-3)) // "rld"
    console.log(stringValue.slice(3, -4)) // "lo w"
    console.log(stringValue.substring(3, -4)) // "hel"
    console.log(stringValue.substr(3, -4)) // ""(空字符串)
    ```
  - <5> 字符串位置方法
    - indexOf()-从字符串的开头向后搜索子字符串，可以接收可选的第二个参数，表示从字符串的哪个位置开始
    - lastIndexOf()-从字符串的末尾向前搜索子字符串，可以接收可选的第二个参数，表示从字符串的哪个位置开始
    ```
    var stringValue = 'hello world'
    console.log(stringValue.indexOf('o')) // 4
    console.log(stringValue.lastIndexOf('o')) // 7
    console.log(stringValue.indexOf('o', 6)) // 7
    console.log(stringValue.lastIndexOf('o', 6)) // 4
    ```
    ```
    综合例：
    var stringValue = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    var positions = new Array()
    var pos = stringValue.indexOf('e')
    while (pos > -1) {
      positions.push(pos)
      pos = stringValue.indexOf('e', pos + 1)
    }
    console.log(positions) // [3, 24, 32, 35, 52]
    ```
  - <6> trim()方法-创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果
    ```
    var stringValue = '   hello world   '
    var timmedStringValue = stringValue.trim()
    console.log(stringValue) // "   hello world   "
    console.log(timmedStringValue) // "hello world"
    ```
  - <7> 字符串大小写转换方法
    - toLowerCase()
    - toLocaleLowerCase()
    - toUpperCase()
    - toLocaleUpperCase()
    ```
    var stringValue = 'hello world'
    console.log(stringValue.toLocaleUpperCase()) // "HELLO WORLD"
    console.log(stringValue.toUpperCase()) // "HELLO WORLD"
    console.log(stringValue.toLocaleLowerCase()) // "hello world"
    console.log(stringValue.toLowerCase()) // "hello world"
    ```
  - <8> 字符串的模式匹配方法
    - match()-接受一个参数，正则表达式或RegExp对象
    - search()-由字符串或RegExp对象指定一个正则表达式
    - replace()-替换子字符串，接受两个参数：第一个参数可以是RegExp对象或字符串，第二个参数可以是字符串或函数
    - split()-基于指定的分隔符将一个字符串分隔成多个子字符串，并将结果放在一个数组中
    ```
    match():
    var text = 'cat, bat, sat, fat'
    var pattern = /.at/

    var marches = text.match(pattern)
    console.log(marches.index) // 0
    console.log(marches[0]) // "cat"
    console.log(pattern.lastIndex) // 0
    ```
    ```
    search():
    var text = 'cat, bat, sat, fat'
    var pos = text.search(/at/)
    console.log(pos) // 1
    ```
    ```
    replace():  
    var text = 'cat, bat, sat, fat'
    var result = text.replace('at', 'ond')
    console.log(result) // "cond", "bat", "sat", "fat"

    result = text.replace(/at/g, 'ond')
    console.log(result) // "cond", "bond", "sond", "fond"
    ```
    - 特殊的字符序列

    |字符序列|替换文本|
    |:--|:--|
    |$$|$|
    |$&|匹配整个模式的子字符串|
    |$'|匹配的子字符串之前的子字符串|
    |$`|匹配的子字符串之后的字符串|
    |$n|匹配第n个捕获组的子字符串,其中n等于0~9|
    |$nn|匹配第nn个捕获组的子字符串,其中nn等于01~99|

    ```
    var text = 'cat, bat, sat, fat'
    var result = text.replace(/(.at)/g, 'word($1)')
    console.log(result) // word(cat), word(bat), word(sat), word(fat)
    ```
    ```
    使用函数作为replace()方法的第二个参数可以实现更加精细的替换：
    function htmlEscape (text) {
      return text.replace(/[<>"&]/g, function (match, pos, originalText) {
        switch (match) {
          case '<':
            return '&lt'
          case '>':
            return '&gt'
          case '&':
            return '&amp'
          case '\"':
            return '&quot'
        }
      })
    }
    console.log(htmlEscape('<p class="greeing">Hello world!</p>'))
    // &ltp class=&quotgreeing&quot&gtHello world!&lt/p&gt
    ```
    ```
    split():
    分隔符可以是字符串，也可以是RegExp对象；
    可接受可选的第二个参数，用于指定数组的大小
    var colorText = 'red, blue, green, yellow'
    var color1 = colorText.split(',')
    var color2 = colorText.split(',', 2)
    var color3 = colorText.split(/[^\,]+/)
    console.log(colorText) // red, blue, green, yellow
    console.log(color1) // ["red", " blue", " green", " yellow"]
    console.log(color2) // ["red", " blue"]
    console.log(color3) // ["", ",", ",", ",", ""]
    ```
  - <9> localeCompare()方法
    - 比较两个字符串并返回下列值中的一个：
      - 如果字符串在字母表中应该排在字符串参数之前，则返回一个负数
      - 如果字符串等于字符串参数，则返回0
      - 如果字符串在字母表中应该排在字符串参数之后，则返回一个正数
    ```
    var stringValue = 'yellow'
    console.log(stringValue.localeCompare('brick')) // 1
    console.log(stringValue.localeCompare('yellow')) // 0
    console.log(stringValue.localeCompare('zoo')) // -1
    ```
    ```
    因为localeCompare()返回的数值取决于实现，所以最好是如下使用找个方法：
    var stringValue = 'yellow'
    function determineOrder (value) {
      var result = stringValue.localeCompare(value)
      if (result < 0) {
        console.log("The string 'yellow' comes before the string '" + value + "'. ")
      } else if (result > 0) {
        console.log("The string 'yellow' comes after the string '" + value + "'. ")
      } else {
        console.log("The string 'yellow' is equal the string '" + value + "'.")
      }
    }
    determineOrder('brick') // The string 'yellow' comes after the string 'brick'.
    determineOrder('yellow') // The string 'yellow' is equal the string 'yellow'
    determineOrder('zoo') // The string 'yellow' comes before the string 'zoo'.
    ```
  - <10> fromCharCode()方法
    - 接受一个或多个字符编码，然后转换成一个字符串
    ```
    console.log(String.fromCharCode(104, 101, 108, 108, 111)) // hello
    ```
  - <11> HTML方法
    - 尽量不使用这些方法，因为它们创建的标记通常无法表示语义

    |序号|方法|输出结果|
    |:--|:--|:--|
    |1|anchor()|\<a name= "name">string\</a>|
    |2|big()|\<big>string\</big>|
    |3|bold()|\<b>string\</b>|
    |4|fixed()|\<tt>string\</tt>|
    |5|fontcolor(color)|\<font color="color">string\</font>|
    |6|fontsize(size)|\<font size="size">string\<font>|
    |7|italics()|\<i>string\<i>|
    |8|link(url)|\<a href="url">string\</a>|
    |9|small()|\<small>string\</small>|
    |10|strike()|\<strike>string\</srike>|
    |11|sun()|\<sub>string\</sub>|
    |12|sup()|\<sup>string\</sup>|

- 7、单体内置对象
  - (1) Global(全局)对象
    - <1> URI编码方法
      - encodeURI()-用于整个URI，不会对本身属于URI的特殊字符进行编码，例如冒号、正斜杠、问号和井号
      - encodeURIComponent()-用于对URI中的某一段进行编码，会对它发现的任何非标准字符进行编码
    ```
    var uri = 'http://www.wrox.com/illegal value.htm#start'

    console.log(encodeURI(uri)) // http://www.wrox.com/illegal%20value.htm#start
    console.log(encodeURIComponent(uri)) // http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start

    使用encodeURI()编码后的结果是除了空格之外的其他字符原封不动，只有空格被替换成%20
    而encodeURIComeponent()方法则会使用对应的编码替换所有非字母数字字符
    ```
    - <2> URI解码方法
      - decodeURI()-对使用encodeURI()替换的字符进行解码
      - decodeURIComponent()-对使用encodeURIComponent()替换的字符进行解码
    ```
    var uri = 'http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start'
    console.log(decodeURI(uri)) // http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
    console.log(decodeURIComponent(uri)) // http://www.wrox.com/illegal value.htm#start
    ```

    - <3> eval()方法
    ```
    就像是一个完整的ECMAScript解析器，只接受一个参数，即要执行的ECMAScript(或JavaScript)字符串
    eval("console.log('hi!')") // "hi!"
    等价于
    console.log('hi!') // "hi!"
    ```
    ```
    通过eval()执行的代码可以引用在包含环境中执行定义的变量
    var msg = 'hello world'
    eval('console.log(msg)') // "hello world"
    ```
    ```
    可以在eval()调用中定义一个函数，然后再在该调用的外部代码中引用这个函数
    eval('function sayHi(){console.log("hi!")}')
    sayHi()  // "hi!"
    ```
    ```
    可以在eval()调用中定义一个变量，然后再在该调用的外部代码中引用这个变量  
    eval("var msg = 'hello world'")
    console.log(msg) // "hello world"
    ```
    ```
    在严格模式下，为eval赋值会导致错误
    'use strict'
    eval = "hi"  // causes error
    ```
    - <4> Global对象的属性
      - 特殊的值undefined、NaN以及Infinity都是Global对象的属性
      - 所有原生引用类型的构造函数也都是Global对象的属性，例Object和Function
      - ECMAScript5明确禁止给undefined、NaN和Infinity赋值

      |序号|属性|说明|
      |:--|:--|:--|
      |1|undefined|特殊值undefined|
      |2|NaN|特殊值NaN|
      |3|Infinity|特殊值Infinity|
      |4|Object|构造函数Object|
      |5|Array|构造函数Array|
      |6|Function|构造函数Function|
      |7|Boolean|构造函数Boolean|
      |8|String|构造函数String|
      |9|Number|构造函数Number|
      |10|Date|构造函数Date|
      |11|RegExp|构造函数RegExp|
      |12|Error|构造函数Error|
      |13|EvalError|构造函数EvalError|
      |14|RangeError|构造函数RangeError|
      |15|ReferenceError|构造函数ReferenceError|
      |16|SyntaxError|构造函数SyntaxError|
      |17|TypeError|构造函数TypeError|
      |18|URIError|构造函数URIError|
    - <5> window对象
    ```
    在全局作用域中声明的所有变量和函数，就都成为了window对象的属性
    var color = 'red'
    function sayColor () {
      console.log(window.color)
    }
    window.sayColor() // red
    ```
    ```
    另一种取得Global对象的方法
    var global = function(){
      retuen this
    } ()
    在没有给函数明确指定this值的情况下，this值等于Global对象
    ```
  - (2) Math对象
    - <1> Math对象的属性
      |序号|属性|说明|
      |:--|:--|:--|
      |1|Math.E|自然对数的底数，即常量e的值|
      |2|Math.LN10|10的自然对数|
      |3|Math.LN2|2的自然对数|
      |4|Math.LOG2E|以2为底e的对数|
      |5|Math.LOG10E|以10为底e的对数|
      |6|Math.PI|Π的值|
      |7|Math.SQRT1_2|1/2的平方根(即2的平方根的倒数)|
      |8|Math.SQRT2|2的平方根|

    - <2> min()和max()方法
    ```
    min()和max()用于确定一组数值中的最小值和最大值，可接受任意多个数值参数
    var max = Math.max(3, 54, 32, 16)
    console.log(max)  // 54
    var min = Math.min(3, 54, 32, 16)
    console.log(min) // 3
    ```
    ```
    要找到数组中的最大值或最小值，可以使用apply()方法
    var values = [1, 2, 3, 4, 5, 6, 7, 8]
    var max = Math.max.apply(Math, values)
    console.log(max) // 8
    ```
    - <3> 舍入方法
      - Math.ceil()-执行向上舍入，即它总是将数值向上舍入为最接近的整数
      - Math.floor()-执行向下舍入，即它总是将数值向下舍入为最接近的整数
      - Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数
    ```
    console.log(Math.ceil(25.9)) // 26
    console.log(Math.ceil(25.5)) // 26
    console.log(Math.ceil(25.1)) // 26

    console.log(Math.round(25.9)) // 26
    console.log(Math.round(25.5)) // 26
    console.log(Math.round(25.1)) // 25

    console.log(Math.floor(25.9)) // 25
    console.log(Math.floor(25.5)) // 25
    console.log(Math.floor(25.1)) // 25
    ```
    - <4> random()方法
      - 返回大于等于0小于1的一个随机数
    ```
    利用Math.random()从某个整数范围内随机选择一个值：
    值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
    ```
    ```
    返回一个1到10之间的数值
    var num = Math.floor(Math.random() * 10 + 1)
    ```
    ```
    返回一个介于2到10之间的数值
    var num = Math.floor(Math.random() * 9 + 2)
    ```
    ```
    通过一个函数来计算可能值的总数和第一个可能的值：
    function selectFrom (lowerValue, UpperValue) {
    var choices = UpperValue - lowerValue + 1
    return Math.floor(Math.random() * choices + lowerValue)
    }
    var num = selectFrom(2, 10)
    console.log(num) // 介于2和10之间(包括2和10)的一个数值
    ```
    ```
    利用selectForm()这个函数，可以方便地从数组中随机取出一项
    var colors = ['red', 'green', 'blue', 'yellow', 'black', 'purple', 'brown']
    var color = colors[selectFrom(0, colors.length - 1)]
    console.log(color) // 可能是数组中包含的任何一个字符串
    ```
    - <5> 其他方法
      |序号|方法|说明|
      |:--|:--|:--|
      |1|Math.abs(num)|返回num的绝对值|
      |2|Math.exp(num)|返回Math.E的num次幂|
      |3|Math.log(num)|返回num的自然对数|
      |4|Math.pow(num,power)|返回num的power次幂|
      |5|Math.sqrt(num)|返回num的平方根|
      |6|Math.acos(x)|返回x的反余弦值|
      |7|Math.asin(x)|返回x的反正弦值|
      |8|Math.atan(x)|返回x的反正切值|
      |9|Math.atan2(y,x)|返回y/x的反正弦值|
      |10|Math.cos(x)|返回x的余弦值|
      |11|Math.sin(x)|返回x的正弦值|
      |12|Math.tan(x)|返回x的正切值|

- (8) 小结
  - <1>对象在JavaScript中被称为引用类型的值，而且有一些内置的引用类型可以用来创建特定的对象
    - 引用类型与传统面向对象程序设计的类相似，但实现不同
    - Object是一个基础类型，其他所有类型都从Object继承了基本的行为
    - Array类型是一组值得有序列表，同时还提供了操作和转换这些值的功能
    - Date类型提供了有关日期和时间的信息，包括当前日期和时间以及相关的计算功能
    - RegExp类型是ECMAScript支持的正则表达式的一个接口，提供了最基本的和一些高级的正则表达式功能
  - <2>函数实际上是Function类型的实例，因此函数也是对象；而这一点正是JavaScript最有特色的地方。由于函数是对象，所以函数也拥有方法，可以用来增强其行为。
  - <3>因为有了基本包装类型，所以JavaScript中的基本类型值可以被当作对象来访问
    - 每个包装类型都映射到同名的基本类型
    - 在读取模式下访问基本类型值时，就会创建对应的基本包装类型的一个对象，从而方便了数据操作
    - 操作基本类型值得语句一经执行完毕，就会立即销毁创建得包装对象