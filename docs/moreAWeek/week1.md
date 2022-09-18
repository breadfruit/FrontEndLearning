---
title: 第一期AART打卡计划
author: toast
---

#### 本周 AART

- A: 两数相加
- A: 无重复字符的最长子串
- R: Base: An Acid Alternative
- T: 编程时如何命名

## Algorithm：

### [2. 两数相加](https://leetcode.cn/problems/add-two-numbers/)

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

#### 思路

题目是两链表进行相加，利用双指针的方式，一个指向新链表的头部，一个随着遍历链表进行移动，在将两个链表当前的节点进行相加的时候，需要用一个变量来标志进位符，当前的和大于9，就将进位符设为1，反之为0。这里需要注意的是两个个为相加是不会大于18的。需要考虑的边界情况：

1. 头尾指针刚开始指向两链表首节点之和。
2. 当遍历到最后一个节点的时候，需要判断进位符。

#### 代码思想：

1. 链表的移动：head.next = 新值； head = head.next;
2. 两链表的长度不同是，值设为0。const x1 = l1 ? la.val : 0
3. 保留当前和的余数(sum % 10)，进位符保留当前和的整除数(0或者1)

#### 解题

```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode();
    let prev = dummyHead;
    let add = 0;
    while (l2 || l1 || add > 0) {
        var a : number = 0
        var b : number = 0
        if (l1) {
             a = l1.val
             l1 = l1.next
        }
        if (l2) {
            b = l2.val
            l2 = l2.next
        }
        const sum = a + b + add;
        prev.next = new ListNode(sum % 10);
        add = Math.floor(sum / 10);
        prev = prev.next;
    }

    return dummyHead.next;
};
```

### [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。

#### 思路

这道题主要看两个关键词： 无重复 ，最长。无重复可以用到数据结构set，记录当前的值。最长则用Math.max()数学函数取得最大值。

子串是连续的，这里可以用到滑动窗口，其实就是两个指针，一个维护左边的边界，一个维护右边的边界。两个指针之间的距离就是我们子串的距离。那么最长就是在每次的滑动中保留最长的那个。那么什么时候需要去移动左右指针？左右指针什么时候又停止移动？

需要考虑的边界问题：

1. 每次去移动右指针的时候，需要判断是否重复，重复则移动左指针，并且删除集合set中的值。
2. 右指针不能超过字符串长度，左指针小于等于右指针。

#### 解题

```
function lengthOfLongestSubstring(s: string): number {
    let left= 0
    let right = 0
    let res = 0
    let len = s.length
    let set = new Set()
    while(right < len && left < len) {
        while(set.has(s[right]) && left < len) {
            set.delete(s[left])
            left ++;
        }
        set.add(s[right])
        res = Math.max(res, right - left + 1)
        right ++
    }
    return res
};
```

## Review：Progressive image loading in React: Tutorial

[主题：React 中的渐进式图像加载](https://blog.logrocket.com/progressive-image-loading-react-tutorial/)

1. 可以通过给图片进行设置宽高，以便可以快速加载，浏览器布局可以不用去计算图片需要多少的加载时间。
2. 为图片设置缩略图 -> 实际图片，用useEffect进行对图片的src属性进行监听。
3. 利用CSS的filter和transition在图片完全加载前实现模糊特效。
4. 利用库react-progressive-graceful-image进行图片加载，其中用到render props(render prop 是一个用于告知组件需要渲染什么内容的函数 prop。)

## Tip：css 布局

1. flex布局设置一行有几个

   ```
   display: flex;
   flex: 1 1 50%;
   flex-wrap: nowrap
   ```

2. css 利用伪元素，默认是inline行内元素无宽高(所以看不见)，需要变成块状元素才能对它设置。另外inline-block是同一行显示，block是非同行显示

   ```
   .t {
   	&::after,
   	::before{
   			display: inline-block / block / flex
   	}
   }
   ```

   