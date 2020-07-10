## 基本概念
- 1、语法：
    - (1) 区分大小写
    - (2) 标识符(变量、函数、属性的名字)：第一个字符是字母、下划线_或者$，其他字符可以是字母、下划线、$或者是数字
    - (3) 注释：单行注释 // ，多行注释 /* 这里是注释 */
    - (4) 严格模式：
      - 脚本顶部："use strict"
      - 函数内部：

            function doSomething() {
              "use strict"
              //函数体
            }
    - (5) 语句：
      - 分号：分号不是必需的，可以省略
      - 代码块：使用代码块可以让编译意图更加清晰

- 2、关键字和保留字：

- 3、变量：var message = "hi", var age

- 4、数据类型：(基本数据类型：Undefined、Null、Boolean、Number、String,复杂数据类型：Object)
  - (1) typeof操作符(检测给定变量的数据类型):
    - "undefined" - 未定义
    - "boolean" - 布尔值
    - "string" - 字符串
    - "number" - 数值
    - "object" - 对象或null
    - "function" - 函数
  - (2) Undefined类型：使用var声明变量但未对其加以初始化，该变量的值就是undefined
  - (3) Null类型
  - (4) Boolean类型：值为true和false(true不一定等于1，false不一定就是0)

      |数据类型|转换为true的值|转换为false的值|
      |---|---|---|
      |Boolean|true|false|
      |String|任何非空的字符串|""空字符串|
      |Number|任何非零的数值|0和NaN|
      |Object|任何对象|null|
      |Undefined|n/a|undefined|
  - (5) Number类型:
    - 浮点数值
    - 数值范围
    - NaN
    - 数值转换
  - (6) String类型：
    - 字符字面量
    - 字符串特点
    - 转换为字符串
  - (7) Object类型

- 5、操作符
  - (1) 一元操作符
    - 递增和递减操作符
    - 一元加和减操作符
  - (2) 位操作符
    - 按位非(NOT)
    - 按位与(AND)
    - 按位或(OR)
    - 按位异或(XOR)
    - 左移
    - 有符号右移
    - 无符号右移
  - (3) 布尔操作符
    - 逻辑非 '!'
      - 如果操作数是一个对象，返回false
      - 如果操作数是一个空字符串，返回false
      - 如果操作数是一个非空字符串，返回false
      - 如果操作数是数值0，返回true
      - 如果操作数是任意非0数值(包括Infinity),返回false
      - 如果操作数是null，返回true
      - 如果操作数是NaN，返回true
      - 如果操作数是undefined，返回true
    - 逻辑与 '&&' (短路操作符)
      |第一个操作数|第二个操作数|结果|
      |---|---|---|
      |true|true|true|
      |true|false|false|
      |false|true|false|
      |fasle|false|false|
    - 逻辑或 '||' (短路操作符)
      |第一个操作数|第二个操作数|结果|
      |---|---|---|
      |true|true|true|
      |true|false|true|
      |false|true|true|
      |false|false|false|
  - (4) 乘性操作符
    - 乘法 '*'
    - 除法 '/'
    - 求模(余数) '%'
  - (5) 加法操作符
    - 加法 '+'
    - 减法 '-'
  - (6) 关系操作符
    - '>'
    - '<'
    - '>='
    - '<='
  - (7) 相等操作符
    - 相等(==)与不相等(!=) '先转换在比较'
    - 全等(===)与不全等(!==) '仅比较而不转换'
  - (8) 条件操作符' ? : '
    - variable = boolean_expression ? true_value : false_value
  - (9) 赋值操作符 '='
  - (10) 逗号操作符
    - var num1 = 1, num2 = 2, num3 = 3

- 6、语句
  - (1) if语句
    - 单分支
    - 双分支
    - 多分支
  - (2) do-while语句
    ```
    do {
      statment
    } while (expression)
    ```
  - (3)while语句
    ```
    while(expression) {
      statment
    }
    ```
  - (4) for语句
    ```
    for(initialization; expression; post-loop-expression) {
      statment
    }
    ``` 
  - (5) for-in语句
    ```
    for (property in expression) {
      statment
    }
    ```
  - (6) label语句
    - `label:statment`
  - (7) break和continue语句
  - (8) with语句
    - `with (expression) statment`
  - (9) switch语句
    ```
    switch (expression) {
      case value:statment
        break
      case value:statment
        break
      case value:statment
        break
      case value:statment
        break
      default:statment
    }
    ```
- 7、函数
  ```
  function functionName(arg0, agr1,...,argN) {
    statments
  }
  ```
  - 理解参数
  - 没有重载
- 8、小结
  - ECMAScript中的基本数据类型包括Undefined、Null、Boolean、Number和String
  - ECMAScript没有为整数和浮点数值分别定义不同的数据类型，Number类型可以用于表示所有数值
  - ECMAScript中的复杂数据类型，Object类型，该类型是这门语言中所有对象的基础类型
  - 严格模式为这门语言中容易出错的地方施加了限制
  - ECMAScript的操作符包括算术操作符、布尔操作符、关系操作符、相等操作符和赋值操作符
  - ECMAScript的语句包括if语句、for语句、switch语句等
  - 无须指定函数的返回值，因为任何ECMAScript函数都可以在任何时候返回任何值
  - 未指定返回值的函数返回的是一个特殊的undefined值
  - ECMAScript中没有函数签名的概念，因为函数参数是以一个包含零个或多个值的数组的形式传递的
  - 可以向ECMAScript函数传递任意数量的参数，并且可以通过arguments对象来访问这些参数
  - 由于不存在函数签名的特性，ECMAScript函数不能重载
    
                

               
                 