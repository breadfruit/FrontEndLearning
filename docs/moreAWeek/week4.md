---
title: 第四期 AART打卡计划
author: toast
---


## Algorithm

#### [61. 旋转链表](https://leetcode.cn/problems/rotate-list/)

**解题思路：**

闭合为环

记给定链表的长度为 n，注意到当向右移动的次数 k≥*n* 时，我们仅需要向右移动 k%n次即可。先将给定的链表连接成环，然后在n-k % n的位置断开，得到我们的新链表头。

```
var rotateRight = function(head, k) {
    if (k === 0 || !head || !head.next) {
        return head;
    }
    let n = 1;
    let cur = head;
    while (cur.next) {
        cur = cur.next;
        n++;
    }

    let add = n - k % n;
    if (add === n) {
        return head;
    }

    cur.next = head;
    while (add) {
        cur = cur.next;
        add--;
    }

    const ret = cur.next;
    cur.next = null;
    return ret;
};
```

#### [剑指 Offer II 029. 排序的循环链表](https://leetcode.cn/problems/4ueAj6/)

给定**循环单调非递减列表**中的一个点，写一个函数向这个列表中插入一个新元素 `insertVal` ，使这个列表仍然是循环升序的。

给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。

如果有多个满足条件的插入位置，可以选择任意一个位置插入新的值，插入后整个列表仍然保持有序。

如果列表为空（给定的节点是 null），需要创建一个循环有序列表并返回这个节点。否则。请返回原先给定的节点。

**解题思路：**

非递减，所以相邻节点存在相等。维护两个指针，当前指针和下一个指针。闭环链表，需要考虑三个临界情况：

1. 当前插入值与前后节点相同，则插入其中。
2. 遍历到最大与最小节点，若插入值大于最大节点的值或者小于最小节点的值。
3. 当前链表只有一个节点或者null

```
var insert = function(head, insertVal) {
    const insertNode = new Node(insertVal);
    if (!head) {
        insertNode.next = insertNode;
        return insertNode;
    }
    if (head.next === head) {
        head.next = insertNode;
        insertNode.next = head;
        return head;
    }
    let cur = head, next = head.next;
    while (next !== head) {
        if (insertVal >= cur.val && insertVal <= next.val) {
            break;
        }
        if (cur.val > next.val) {
            if (insertVal > cur.val || insertVal < next.val) {
                break;
            }
        }
        cur = cur.next;
        next = next.next;
    }

    cur.next = insertNode;
    insertNode.next = next;
    return head;
};
```

## Review：AbortController is your [AbortController is your friend](https://whistlr.info/2022/abortcontroller-is-your-friend/)

介绍了一个新的web API , [AbortController](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController)接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求。

文中介绍了AbortController在Abort legacy objects，Removing Event Handlers， Constructor pattern，Async work in (P)react hooks的应用。

```
const controller = new AbortController();
const { signal } = controller;
```

控制器实例和signal之间的区别。controller负责终止，signal负责监听信号，做一些终止信号之前的事情。

## React Mentions v4.4：在 Textarea 中使用 @mention

[React Mentions v4.4：在 Textarea 中使用 `@mention`](https://github.com/signavio/react-mentions) — 用它来复刻 Facebook/Twitter 风格的文本字段中的“提及”效果。 [在线 demo 请点击此处查看](https://react-mentions.vercel.app/)。

这个库用于实现文本框@某人，复制粘贴，聚焦，emojis等。
