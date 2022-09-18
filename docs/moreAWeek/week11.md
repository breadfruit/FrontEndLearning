---
title: 第十一期 AART打卡计划
author: toast
---
## Algorithm：

#### [114. 二叉树展开为链表](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)

解题思路：

可以发现展开的顺序其实就是二叉树的先序遍历。

1. 将左子树插入到右子树的地方
2. 将原来的右子树接到左子树的最右边节点
3. 考虑新的右子树的根节点，一直重复上边的过程，直到新的右子树为 null

还有一种是利用了前序遍历，将树节点依次放入数组，然后再利用数组组成链表。

#### [1208. 尽可能使字符串相等](https://leetcode.cn/problems/get-equal-substrings-within-budget/)

#### 前缀和 + 二分查找

利用前缀和记录两个字符串到第i个位置所消费的总开销。利用 前缀和 - 第i个节点中间的开销小于等于预算。

```
accDiff[i] - accDiff[start] <= maxCost

accDiff[i] - maxCost <= accDiff[start]
```

根据等式，在start - i 中找到  accDiff[i] - maxCost 的最大值。并返回start。

```
function equalSubstring(s: string, t: string, maxCost: number): number {
    const n = s.length;
    // 记录前缀和
    const  accDiff = new Array(n + 1).fill(0)
    for(let i = 0; i < n; i++) {
        accDiff[i+1] = accDiff[i] + Math.abs(s[i].charCodeAt(0)- t[i].charCodeAt(0));
    }
    let maxLength = 0;
    for(let j = 1; j < accDiff.length; j++) {
        const start = binarySearch(accDiff, j, accDiff[j] - maxCost)
        maxLength = Math.max(maxLength, j - start)
    }
    return maxLength
};
function binarySearch (accDiff: number[], endIndex: number, target: number): number {
    let low = 0;
    let high = endIndex;
    while(low < high) {
        let mid = Math.floor((low + high) / 2)
        if(accDiff[mid] < target) {
            low = mid + 1
        }else {
            high = mid
        }
    }
    return low;

}
```

## Review：[使用 TypeScript 从字符串文字类型中提取参数类型](https://lihautan.com/extract-parameters-type-from-string-literal-types-with-typescript/#removing-the-brackets) 

主要介绍了ts4.1的[Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)和[Conditional Type](https://lihautan.com/extract-parameters-type-from-string-literal-types-with-typescript/#conditional-type)Conditional Type

Template Literal Types在开发中主要用于枚举常量。Conditional Type主要应用于不同场景下的ts类型。

最后react router 中对于route的path，params也是利用这个两个ts类型实现。

```
// 提取参数类型
// type IsParameter<Part> = Part extends `[${infer ParamName}]` ? Part : never
// 去除[]
type IsParameter<Part> = Part extends `[${infer ParamName}]` ? ParamName : never
// 进行condition type判断 利用递归将多个参数类型进行提取
type FilteredParts<Path> = Path extends `${infer PartA}/${infer PartB}` ?  IsParameter<PartA> | FilteredParts<PartB> : IsParameter<Path>
// 将path类型映射成对象
// type Params<Path> = {
//   [key in FilteredParts<Path>]: any
// }
// 将condition type区分参数类型
type ParamValue<Key> = Key extends `...${infer Anything}` ? string[] : number;
// type Params<Path> = {
//   [Key in FilteredParts<Path>]: ParamValue<Key>
// }
type RemovePrefixDots<Key> = Key extends `...${infer Name}` ? Name : Key
type Params<Path> = {
  [Key in FilteredParts<Path> as RemovePrefixDots<Key>]: ParamValue<Key>
}
type Path = Params<'/purchase/[shopid]/[itemid]/args/[...args]'>
```

## Tips：[css-browser-support](https://github.com/5t3ph/css-browser-support)

> 使用 caniuse.com 和 MDN 查询 CSS 浏览器支持情况 — 传递字符串或者字符串数组作为参数进行查询，返回不同浏览器支持的结果

可以对css样式的浏览器兼容进行查看并对其添加其他css特性。

### 在React-Router中使用动画

用的库是react官方推荐的 [React Transition Group](https://reactcommunity.org/react-transition-group/)

cssTransition 的属性 key需要配合react-route-dom的useLocation,但是出现下面的报错

```
React js: Error: useLocation() may be used only in the context of a <Router> component
```

解决方案

使用`useLocation()`需要在`<Router>`的全局上下文`context`使用，所以需要在根组件`<App>`外面添加`<Router>`，才能在`<App>`中使用`useLocation()`。