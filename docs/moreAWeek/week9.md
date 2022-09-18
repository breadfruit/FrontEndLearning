---
title: 第九期 AART打卡计划
author: toast
---
## Algorithm：

#### [剑指 Offer 36. 二叉搜索树与双向链表](https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/)

解题思路： 

这道题是二叉树 + 双向链表。

二叉树是中序遍历：左 -> 根 -> 右,遍历树这里用的是深度遍历DFS。

 双向链表是每个节点都有一个前驱指针和一点后继指针。

根据模版：

```
# 打印中序遍历
function dfs(root){
    if not root: return
    dfs(root.left)  # 左
    print(root.val) # 根
    dfs(root.right) # 右
}
```

题目要求是“head” 表示指向链表中有最小元素的节点。那么我们可以从遍历左树到叶节点的时间做文章。保留head(左子树最小)，prev则是每一个节点。还有最后一个要求，最小最大节点形成闭环。

```
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if(!root) return
    let prev = null;
    let head = null;
    const dfs = function(root) {
        if(!root) return;
        dfs(root.left);
        //说明是第一个节点
        if(!head){
            head = new Node(root.val);
            prev = head;
        } else {
            let newNode = new Node(root.val);
            prev.right = newNode;
            newNode.left = prev;
            prev = newNode;
        }
        dfs(root.right);
        return root;
    }
    dfs(root);
    head.left = prev;
    prev.right = head;
    return head;
};
```



#### [724. 寻找数组的中心下标](https://leetcode.cn/problems/find-pivot-index/)

解题思路：

这道题是找到一个中心下标，让左边数的和等于右边数的和。说到和，可以想到前缀和，有点像累加。

1. 遍历数组，得到前缀和数组。这里需要注意⚠️

如果中心下标位于数组**最左端，那么左侧数之和视为 0** ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

如果数组有多个中心下标，应该返回 **最靠近左边** 的那一个。如果数组不存在中心下标，返回 -1 。

2. 再次遍历数组判断数组和 是否等于下标**i**前缀和 + 下标**i+1**前缀和

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let preSum = [];
    preSum[0] = 0;
    for(let i = 0; i < nums.length; i++) {
        preSum[i+1] = (preSum[i] + nums[i])
    }
   // 前缀之差
   let right= preSum.length - 1;
   for(let i = 0; i < preSum.length; i++) {
        if(preSum[right] - preSum[i] ===  preSum[i-1]) {
            return i - 1;
        }
    }
    return -1;
};

```

## Review：[重构 2700 行 React 组件的故事](https://code.pieces.app/blog/how-to-refactor-large-react-components)

主要是抽取出样式文件，协助函数。组件中分为

1. Dumb components → Only act as a container or view.
2. Intelligent components → Show something based on logic.

## Tips：在项目中常用的一些运算符

1. 在ts中对象扩展属性

```
   type Arrayish = { 
   
       name: string,
   
       age: number,
   
   		[n: string]: unknown
   
   };
```

2. [在ts 使用keyof，extends](https://blog.logrocket.com/how-to-use-keyof-operator-typescript/)

keyof： ***The keyof operator takes an object type and produces a string or numeric literal union of its keys.***

extends：**means “is assignable” instead of “inherits”’ K `extends` `keyof` T means that any value of type K can be assigned to the string literal union types**

```
type Staff  = {

   name: string;

   salary: number;

}

const developer: Staff = {

  name: 'Tobias',

  salary: 100, 

};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {

  return obj[key];

}
```

3. 在ts使用Record

```
   type objProps = Record<string, unknown>
   
   const t: objProps  = {
   
      'a': true,
   
      'b': 2
   
   }
```

   