---
title: 第二期 AARRT打卡计划
author: toast
---

## Algorithm

#### [133. 克隆图](https://leetcode.cn/problems/clone-graph/)

给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。

图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。

```
class Node {
    public int val;
    public List<Node> neighbors;
}
```

首先明确深拷贝为了深拷贝出整张图，我们需要知道整张图的结构以及对应节点的值。

思路：

1. 因为是无向图，所以会陷入死循环，比如A -> B B -> A，因此用哈希表进行存储。

2. 哈希表存储的是当前的值，记录是否被访问过，防止陷入死循环，值则是当前的节点。

3. 因为是图，可以用深度搜索进行搜索遍历。

4. 注意是深拷贝，需要clone一个新节点

   ```
   /**
    * Definition for Node.
    * class Node {
    *     val: number
    *     neighbors: Node[]
    *     constructor(val?: number, neighbors?: Node[]) {
    *         this.val = (val===undefined ? 0 : val)
    *         this.neighbors = (neighbors===undefined ? [] : neighbors)
    *     }
    * }
    */
   
   function cloneGraph(node: Node | null): Node | null {
       let map = new Map();
       const dfs = (node: Node | null) => {
           if(node == null) {
               return;
           }
           if(map.has(node.val)) {
               return map.get(node.val);
           }
           // 进行深拷贝
           let clone = new Node(node.val, []);
           // 将复制节点进行存储
           map.set(node.val, clone);
           for (let i = 0; i < node.neighbors.length; i++) {
               clone.neighbors.push(dfs(node.neighbors[i]));
           }
           return clone;
       }
       return dfs(node);
   
   };
   ```

#### [17. 电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。答案可以按 **任意顺序** 返回。

思路：

1. 随机组合可以用回溯进行解决。

2. 回溯过程中维护一个字符串和当前遍历的位置，终止条件是当前的字符串的长度等于目标字符串。

3. 用一个全局变量进行存储结果。

   ```
   function letterCombinations(digits: string): string[] {
       let map = new Map();
       map.set('2', 'abc');
       map.set('3', 'def');
       map.set('4', 'ghi');
       map.set('5', 'jkl');
       map.set('6', 'mno');
       map.set('7', 'pqrs');
       map.set('8', 'tuv');
       map.set('9', 'wxyz');
   
       let res = [];
       let len = digits.length;
       if(len === 0) return [];
       if(len === 1) return Array.from(map.get(digits));
       const dfs = function(curStr, i) {
           //终止条件
           if(i === len){
               res.push(curStr.slice().join(''));
               return;
           }
           //递归
           let cur = map.get(digits[i]);
           for (let j = 0; j < cur.length; j++) {
               curStr.push(cur[j]);
               dfs(curStr, i+1);
               curStr.pop();
           }
       }
       dfs([], 0);
       return res;
   };
   ```

   

## Review：[How to write performant React code: rules, patterns, do's and don'ts](https://www.developerway.com/posts/how-to-write-performant-react-code)

> Also, considering that in 90% of the cases performance problems in React can be summarised as “too many re-renders”,

So let’s refresh **when React components re-render**:

- when props or state have changed
- when parent component re-renders
- when a component uses context and the value of its provider changes

And the rules we extracted:

**Rule #1**: If the only reason why you want to extract your inline functions in props into `useCallback` is to avoid re-renders of children components: don’t. It doesn’t work.

**Rule #2**: If your component manages state, find parts of the render tree that don’t depend on the changed state and memoise them to minimize their re-renders.

**Rule #3**. *Never* create new components inside the render function of another component.

**Rule #4**. When using context, make sure that `value` property is *always* memoised if it’s not a number, string or boolean.

### Review：[Understanding Referential Equality in React](https://blog.bitsrc.io/understanding-referential-equality-in-react-a8fb3769be0)

The Comparison Algorithm — Object.is()

The `Object.is()` [algorithm](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#description) determines whether two values are the same if:

1. Both values are `undefined` or `null`.
2. Both values are either `true` or `false`.
3. Both values are `Strings` having the same characters, length, and order.
4. Both values are `Numbers` with the same value or `NaN`.
5. Both values are `Objects` that point to one memory location.

React applies these rules to re-render components whenever a state change is made

对象的属性发生变化，对象比较的是数据所指地址是否相同而不是value，所以不会引起re-render。想让对象进行更新，可以新建一个新对象，改变所指地址，视图就会发生变化。

```
const changeNameToJohn = () => {
   mySelf.name = "John";
   mySelf.age = 30;
   console.log(mySelf);
   setMySelf(mySelf);
};
```

```
const changeNameToJohn = () => {
   setMySelf({ ...mySelf, name: 'John' });
}
```



## Tip：在IDE快速预览UI组件

Preview.js,可以在 VS Code 或 JetBrains IDE 中开箱即用，与 React 和 Vue 构建的组件兼容。

https://previewjs.com/docs

