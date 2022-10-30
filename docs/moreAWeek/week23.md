# Algorithm

#### [179. 最大数](https://leetcode.cn/problems/largest-number/)

#### [剑指 Offer 45. 把数组排成最小的数](https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/)

除了需要了解一下： 证明两个元素比较就可以确定它们在排序以后的相对位置关系。

还还需要复习一下js中Array.prototype.sort()

语法： 

```javascript
// 无函数
sort()

// 箭头函数
sort((a, b) => { /* … */ } )

// 比较函数
sort(compareFn)

// 内联比较函数
sort(function compareFn(a, b) { /* … */ })
```



| `compareFn(a, b)` 返回值 | 排序顺序               |
| :----------------------- | :--------------------- |
| > 0                      | `a` 在 `b` 后          |
| < 0                      | `a` 在 `b` 前          |
| === 0                    | 保持 `a` 和 `b` 的顺序 |

可以解释到 x2 - x1 < 0 时，x1比较大，x1=ab，满足<0,a在b前面。

```javascript
   [3,30,34,5,9].sort((a,b) => {
        let x1 = +`${a}${b}`
         let x2 = +`${b}${a}`
         console.log(a, b, x1, x2)
         return x2 -x1
    }
```



# Review

[为什么和 CSS-in-JS 说拜拜](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b)

介绍了作者团队为什么要放弃使用CSS-IN-JS？

## 好处

1. 有局部风格，当发生类名冲突时，会选择就近css变量。
2. css样式和组件都集中在同一个文件，分散文件容易出现死代码。

## 中立

1. css在编译过程中需要编译成普通css，占用CPU资源。
2. 会增加项目包的体积。
3. 会使React Devtools 显得混乱。css 也会出现在节点上。

## 不好

1. 频繁插入CSS规则迫使浏览器做大量额外的工作
2. 在SSR或者组件库下容易发生错误。

# Tips

[TypeRunner—高性能 TypeScript 编译器。](https://github.com/marcj/TypeRunner)

用C++写的ts的编译器，速度更快