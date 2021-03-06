## 变量、作用域和内存问题
- 1、基本类型和引用类型的值
  - 基本类型值指的是简单的数据段
  - 引用类型值指的是由多个值构成的对象
  - (1) 多态的属性
  - (2) 复制变量值
  - (3) 参数传递
  - (4) 检测类型
    - typeof
    - instanceof
    ```
    result = variable instanceof constructor
    ```
- 2、执行环境及作用域
  - (1) 延长作用域链
    - try-catch语句的catch块
    - with语句
  - (2)没有块级作用域
    - 声明变量
    - 查询标识符
- 3、垃圾收集
  - (1) 标记清楚
  - (2) 引用计数
  - (3) 性能问题
  - (4) 管理内存
- 4、小结
  - (1) 基本类型值与引用类型值的特点：
    - 基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中
    - 从一个变量向另一个变量复制基本类型的值，会创建这个值的一个副本
    - 引用类型的值是对象，保存在堆内存中
    - 包含引用类型值得变量实际上包含得并不是对象本身，而是一个指向该对象得指针
    - 从一个变量向另一个变量复制引用类型得值，复制得其实是指针，因此两个变量最终都指向同一个对象
    - 确定一个值是哪种基本类型可以使用typeof操作符，而确定一个值是哪种引用类型可以使用instanceof操作符
  - (2) 执行环境(作用域)
    - 执行环境有全局执行环境和函数执行环境
    - 每次进入新执行环境，都会创建一个用于搜索变量和函数的作用域链
    - 函数的局部环境不仅有权访问函数作用域中的变量，而且有权访问其包含(父)环境，乃至全局环境
    - 全局环境只能在访问全局环境中定义的变量和函数，而不能直接访问局部环境中的任何数据
    - 变量的执行环境有助于确定应该何时释放内存
  - (3)垃圾收集
    - 离开作用域的值将被自动标记为可以回收，因此将在垃圾收集期间被删除
    - “标记清除”是目前主流的垃圾收集算法，这种算法的思想是给当前不使用的值加上标记，然后再回收其内存
    - 另一种垃圾收集算法是“引用计数”，这种算法的思想是跟踪记录所有值被引用的次数
    - 当代码中存在循环引用现象时，“引用计数”算法就会导致问题
    - 解除变量的引用不仅有助于消除循环引用现象，而且对垃圾收集也有好处。为了确保有效地回收内存，应该及时解除不再使用地全局对象、全局对象属性以及循环引用变量地引用
    