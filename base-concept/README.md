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




      
                
                
                 