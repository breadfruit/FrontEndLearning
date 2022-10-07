---
title: 第十七期 TTTT打卡计划
author: toast
---
# Tips

## 为什么react-query好？

近期有个需求是需要进行无限双向链表进行查询。

这次我们就只讨论`useInfiniteQuery()` Hook。

可以看到官方对于`useInfiniteQuery()` Hook导出的对象：

```javascript
 const {
   fetchNextPage,
   fetchPreviousPage,
   hasNextPage,
   hasPreviousPage,
   isFetchingNextPage,
   isFetchingPreviousPage,
   ...result
 } = useInfiniteQuery(queryKey, ({ pageParam = 1 }) => fetchPage(pageParam), {
   ...options,
   getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
   getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
 })

```

那么这些导出的对象好在哪里？

1. 我们不需要手动去维护一些服务端的状态。

   Before：

![An image](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b1cbbc4820547e1b3bf70a9c8dd1136~tplv-k3u1fbpfcp-zoom-in-crop-mark:3326:0:0:0.awebp?)

After：

![An image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3909f3b965224c69b3bf2bef49c58fda~tplv-k3u1fbpfcp-zoom-in-crop-mark:3326:0:0:0.awebp?)

随后我们可以通过：

isFetching: 判断是否在加载

isLoading: 判断是否在请求

isFetchingNextPage： 判断是否在请求上一页的数据。

```jsx
<div>{isFetching && !isFetchingNextPage ? Loading : null}</div>
```

2.对于分页的数据如何处理和拼接？

```typescript
  const list = useMemo(() => {

    return (

      data?.pages.reduce((*pre*, *cur*: getCycleChatRecordGetProps) => {

        return pre.concat(cur.data)

      }, [] as getCycleChatRecordGetProps['data'][]) ?? []

    )

  }, [data])
```

3. 对于多次触发下拉刷新，上拉加载怎么办？

![An image](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3a1d530d2dc4e8491d1097d554af0c4~tplv-k3u1fbpfcp-zoom-in-crop-mark:3326:0:0:0.awebp?)

钩子中有个isFetchingNextPage和 isFetchingPreviousPage可以对当前请求分页数据进行监听，我们可以通过判断当前的状态进行请求。

isFetchingNextPage ： boolean true则为请求中;false反之。

![An image](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b05bc90e9824e37a0321171a9933938~tplv-k3u1fbpfcp-zoom-in-crop-mark:3326:0:0:0.awebp?)

## js之赋值会怎么样？

```javascript
let obj = {name: 'ds', age: 23}; 
obj = {name: 'hahah'}; 
console.log(obj.name, obj.age);
// hahah undefined
```

## Apifox

这是一个API 文档、API 调试、API Mock、API 自动化测试的工具。

本地 mock 服务与云端 mock 服务的区别：

> 当你在运行 Apifox 客户端软件时，可以使用本地 mock 服务（只有本地电脑可以访问）
>
> 当你在运行 Apifox web 端时，可以使用云端 mock 服务。（大家都可以访问到的url）

对于前端开发开发者来说，mock数据是必备的。

其中对于这个工具，[具体可以参考官网文档](https://www.apifox.cn/help/app/mock/mock-custom-scripts/#%E7%A4%BA%E4%BE%8B%E4%B8%80)进行学习。

这次我就简单的介绍一下

### mock数据的一些亮点

1. Apifox 内置 [智能 Mock](https://www.apifox.cn/help/app/mock/intelligent-mock/) 功能。如：名称包含字符串`image`的`string`类型字段，自动 mock 出一个图片地址 URL
2. 除了内置 mock 规则，用户还可以自定义规则库，满足各种个性化需求。支持使用 `正则表达式`、`通配符` 来匹配字段名自定义 mock 规则。

其中的语法：

@city @cname..

### 使用脚本

>Apifox 脚本语法`100%`兼容 `Postman`脚本语法，Postman 脚本可以无缝迁移到 Apifox。

![An image](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e84c7423213741d09764836aa323cb29~tplv-k3u1fbpfcp-zoom-in-crop-mark:3326:0:0:0.awebp?)

这次我简单的使用脚本实现mock分页数据

首先我们要明确的分页需要：

1. 请求参数：

| 参数名    | 类型   | 位置  |
| --------- | ------ | ----- |
| page      | Number | Query |
| page_size | Number | Query |

2. 返回响应

   ```json
   {
       "data": {
           "page": 2,
           "pageSize": 4,
           "total": 100,
           "totalPage": 26,
           "list": [
               {
                   "id": "110000200807212568",
                   "name": "蔡娜",
                   "number": "P202203@number",
                   "email": "c.pchrk@hratrvve.hn",
                   "city": "克孜勒苏柯尔克孜自治州"
               }
           ]
       },
       "page": 2,
       "total": 120
   }
   ```

3. 脚本(此处脚本仅用于 `高级mock` 的 `Mock 自定义脚本`，不能用于前后置脚本中。)

   [官网](https://www.apifox.cn/help/app/mock/mock-custom-scripts/#mock-%E4%BC%98%E5%85%88%E7%BA%A7%E8%AF%B4%E6%98%8E)

```javascript
// 利用智能mock库的api
var MockJs = require('mockjs');
let originList = []
const count = 100
for (let i = 0; i < count; i++) {
    originList.push({
        id: MockJs.mock('@id'),
        name: MockJs.mock('@cname'),
        number: 'P202203' + MockJs.mock('@number'),
        email: MockJs.mock('@email'),
        city: MockJs.mock('@city'),
    })
}

let pageSize = parseInt(fox.mockRequest.getParam('page_size'))
let page = parseInt(fox.mockRequest.getParam('page'))
let total = originList.length
let len = total / pageSize
const totalPage = Number.isInteger(len) ? len + 1 : len
const list = originList.slice((page - 1) * pageSize, page * pageSize)

const data = {
    page,
    pageSize,
    total,
    totalPage,
    list
}

// 获取智能 Mock 功能自动 Mock 出来的数据
var responseJson = fox.mockResponse.json();

responseJson.data = data;

// 修改 responseJson 里的分页数据
// 将 page 设置为请求参数的 page
responseJson.page = page;
// 将 total 设置 120
responseJson.total = 120;

// 将修改后的 json 写入 fox.mockResponse
fox.mockResponse.setBody(responseJson);
```

## React-Render

使用 useCallback 要小心 dep 更新导致返回的函数更新。

```js
useCallback(() => {
  setCount(count+1)
}, [count])
```

此时 count 更新会导致 useCallback 返回新的匿名函数.

```js
useCallback((preCount) => {
  setCount(preCount+1)
}, [])
```
