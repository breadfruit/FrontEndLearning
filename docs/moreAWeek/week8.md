---
title: 第八期 AART打卡计划
author: toast
---
## Algorithm：

#### [206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)

这道题算是基础题，但是还是没有办法一下子写出来。

#### 解题思路：

迭代（双指针）：

1. 定义两个指针： pre 和 cur；pre 在前 cur 在后。

Pre = null, cur = head

2. 每次让 pre 的 next 指向 cur ，实现一次局部反转

const next = cur.next; pre.next = cur; cur.next = null;

3. 局部反转完成之后，pre和 cur 同时往前移动一个位置

pre = cur; cur = next

4. 循环上述过程，直至 pre 到达链表尾部

递归：

1. 使用递归函数，一直递归到链表的最后一个结点。

2. 此后，每次函数在返回的过程中，让当前结点的下一个结点的 next 指针指向当前节点。head.next.next = head;

3. 同时让当前结点的next 指针指向 NULL ，从而实现从链表尾部开始的局部反转.

   Head.next = null;

4. 当递归函数全部出栈后，链表反转完成.while(cur)

#### [92. 反转链表 II](https://leetcode.cn/problems/reverse-linked-list-ii/)

 II 比  I多了一个条件：

选择一定的区间进行反转。

#### 解题思路：

头插法：

cur.next = next.next

next.next = pre.next;

pre.next = next;

## Review:[React 状态管理的新浪潮](https://frontendmastery.com/posts/the-new-wave-of-react-state-management/) 

介绍了redux的周边生态环境中，许多有关redux延伸出来的库在那几个方面做了取舍。

1. **Ability to read stored state from anywhere in the component tree**
2. **Ability to write to stored state**

这里对于写mutable的state，immer解决了对于mutbale的update。

3. **Provide mechanisms to optimize rendering**

这里是考虑到state的re-render，因为state发生变化时，可能会耗损performance。这里就用了发布订阅模式，当 subscribe的数据发生变化的时候才进行更新，提高性能。

4. **Provide mechanisms to optimize memory usage**

考虑内存优化，state当被一个程序引用时，是不会被回收的。最好和react的生命周期一起使用。

## Tips：[easy-template-x：从模板生成 `.docx` 文档](https://github.com/alonrbar/easy-template-x)

给定一个带有 Mustache-esque 标签的模板文档，它可以在不同的内容中进行切换，并可以通过邮件合并样式。

使用模版高效生成docx。