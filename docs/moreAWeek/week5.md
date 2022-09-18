---
title: 第五期 AART打卡计划
author: toast
---

## Algorithm

#### [384. 打乱数组](https://leetcode.cn/problems/shuffle-an-array/)

解题思路：

我们可以在移除waiting 的第 k 个元素时，将第 k 个元素与数组的最后 1个元素交换，然后移除交换后数组的最后 1个元素，这样我们只需要 O(1) 的时间复杂度即可完成移除第 k 个元素的操作。此时，被移除的交换后数组的最后 1 个元素即为我们根据随机下标获取的元素。

具体地，实现算法如下：

设待原地乱序的数组 nums。
循环 n次，在第 i 次循环中（0≤i<n）：
在 [i,n) 中随机抽取一个下标 j；
将第 i 个元素与第 j 个元素交换。
其中数组中的 nums[i .. n−1] 的部分为待乱序的数组，其长度为 n-i; nums[0 .. i−1] 的部分为乱序后的数组，其长度为 i。

```
class Solution {
    private nums: number[]
    constructor(nums: number[]) {
        this.nums = nums;
    }

    reset(): number[] {
        return this.nums;
    }

    shuffle(): number[] {
        let newNum = this.nums.slice();
        for(let i = 0; i < newNum.length; i++) {
            this.swap(newNum, i, Math.floor(Math.random()*(this.nums.length - i)+i))
        }
        return newNum
    }
    swap(newNum, i, j) {
        return [newNum[i], newNum[j]] =  [newNum[j], newNum[i]]
    }
    
}
```

具体的，我们从前往后尝试填充 [0, n - 1][0,n−1] 该填入什么数时，通过随机当前下标与**（剩余的）哪个下标**进行值交换来实现。

#### [146. LRU 缓存](https://leetcode.cn/problems/lru-cache/)

请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行

解题思路：

1. LRU 缓存机制可以通过哈希表辅以双向链表实现，我们用一个哈希表和一个双向链表维护所有在缓存中的键值对。

双向链表按照被使用的顺序存储了这些键值对，靠近头部的键值对是最近使用的，而靠近尾部的键值对是最久未使用的。

哈希表即为普通的哈希映射（HashMap），通过缓存数据的键映射到其在双向链表中的位置。

这样以来，我们首先使用哈希表进行定位，找出缓存项在双向链表中的位置，随后将其移动到双向链表的头部，即可在 O(1)的时间内完成 get 或者 put 操作。具体的方法如下：

2. 对于 get 操作，首先判断 key 是否存在：

如果 key 不存在，则返回 -1；

如果 key 存在，则 key 对应的节点是最近被使用的节点。通过哈希表定位到该节点在双向链表中的位置，并将其移动到双向链表的头部，最后返回该节点的值。

3. 对于 put 操作，首先判断 key 是否存在：

如果 key 不存在，使用 key 和 value 创建一个新的节点，在双向链表的头部添加该节点，并将 key 和该节点添加进哈希表中。然后判断双向链表的节点数是否超出容量，如果超出容量，则删除双向链表的尾部节点，并删除哈希表中对应的项；

如果 key 存在，则与 get 操作类似，先通过哈希表定位，再将对应的节点的值更新为 value，并将该节点移到双向链表的头部。

优化：

1. 可以在添加节点和删除尾节点对哈希表进行更新。

```
/**
 * @param {number} capacity
 */
class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.pre = null;
        this.next = null;
    }
}
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.dic = {};
    this.dummaryHead = new ListNode();
    this.dummaryTail = new ListNode();
    this.dummaryHead.next = this.dummaryTail;
    this.dummaryTail.pre = this.dummaryHead ;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let targerNode = this.dic[key];
    if(targerNode == null) return -1;
    this.moveToHead(targerNode)
    return targerNode.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.dic[key]) {
        let node = this.dic[key];
        node.value = value;
        this.moveToHead(node)
    }else{
        let node = new ListNode(key, value);
        if(this.count < this.capacity) {
            this.dic[key] = node;
            this.addToHead(node);
            this.count++;
        }else{
            this.removeTail();
            this.dic[key] = node;
            this.addToHead(node);
        }
    }
};

LRUCache.prototype.moveToHead = function(node) {
    this.removeSelf(node);
    this.addToHead(node);
}

LRUCache.prototype.removeSelf = function(node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
    node.next = null;
    node.pre = null;
}

LRUCache.prototype.addToHead = function(node) {
    node.pre = this.dummaryHead;
    node.next = this.dummaryHead.next;
    this.dummaryHead.next.pre = node;
    this.dummaryHead.next = node;
    
}

LRUCache.prototype.removeTail= function() {
    let node = this.dummaryTail.pre;
    this.removeSelf(node);
    delete this.dic[node.key];
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

## [Notes on maintaining an internal React component library](https://www.gabe.pizza/notes-on-component-libraries/)

这篇文章主要写在维护React组件库的时候应该注意的。

1. 简介表示组件提供的接口。
2. 组件中不应该有空格，最好采用响应式布局(grid, flex等)
3. 组件可能不应该定位它们自己。
4. 组件不应该暴露`className` or `style` props.应该是`UNSAFE_className` and `UNSAFE_style`
5. 组件在继承基类的时候，需要考虑所有的属性，最好用...扩展符；
6. 将逻辑组件(list: listitem; select: SelectMenu,SelectOption)作为一个对象统一管理

## Tip： [click-to-component](https://github.com/ericclemmons/click-to-component)

一个快速点击视图上点击跳转到相应的组件代码位置，比devtools找组件方便多了。项目中有案例，乐意在vite，next等使用。

- Option+Click opens the immediate Component's source

- Option+Right-click opens a context menu with the parent Components' `props`, `fileName`, `columnNumber`, and `lineNumber`

  > [![props](https://github.com/ericclemmons/click-to-component/raw/main/.github/props.png)](https://github.com/ericclemmons/click-to-component/blob/main/.github/props.png)

- Works with frameworks like [Next.js](https://nextjs.org/), [Create React App](https://create-react-app.dev/), & [Vite](https://github.com/vitejs/vite/tree/main/packages/plugin-react) that use [@babel/plugin-transform-react-jsx-source](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source)

- Supports `vscode` & `vscode-insiders`' [URL handling](https://code.visualstudio.com/docs/editor/command-line#_opening-vs-code-with-urls)

- Automatically **tree-shaken** from `production` builds

- Keyboard navigation in context menu (e.g. ←, →, ⏎)

- More context & faster than using React DevTools:
