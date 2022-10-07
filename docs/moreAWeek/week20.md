---
title: 第二十期 AAAR打卡计划
author: toast
---

# Algorithm

#### [9. 回文数](https://leetcode.cn/problems/palindrome-number/)

#### [16. 最接近的三数之和](https://leetcode.cn/problems/3sum-closest/)

思路：

主要通过枚举每一个数，并利用双指针对每次结果进行移动，比较和记录。

#### [31. 下一个排列](https://leetcode.cn/problems/next-permutation/)

思路：

在尽可能靠右的低位进行交换，需要从后向前查找
将一个 尽可能小的「大数」 与前面的「小数」交换。

> 比如 123465，下一个排列应该把 5 和 4 交换而不是把 6 和 4 交换

将「大数」换到前面后，需要将「大数」后面的所有数重置为升序，升序排列就是最小的排列。

> 以 123465 为例：首先按照上一步，交换 5 和 4，得到 123564；然后需要将 5 之后的数重置为升序，得到 123546。显然 123546 比 123564 更小，123546 就是 123465 的下一个排列

# Reviews

[Latest JavaScript features in 2022](https://olivernguyen.io/s/js2022/)

新增了几个数组或者字符串对于**末尾元素的获取方法**，error新增属性等

- at()

之前js中只能通过计算数组的长度进行获取数组或者字符串的最后一位，现在出了新的方法。

>**const** A **=** [2, 4, 6, 8, 10]
>
>A.at(**-**1) == A[A.length - 1]

- *findLast()*

```javascript
A.find(v => v%10 == 0)     

A.reverse().find(x => x % 10 == 0)  
A.findLastIndex(v => v%10 == 0)
```

- findLastIndex()

```javascript
A.findIndex(v => v**%**10 **==** 0) 

A.reverse().findIndex(x => x % 10 == 0)  
A.findLastIndex(v => v%10 == 0)
```

- Error['cause']

```javascript
await fetch('https://example.com/data.csv')
  .catch((err) => {
     throw new Error('failed to get', { cause: err })
  })
  .catch((err) => {
     console.log('cause', err.cause)
  })
```
