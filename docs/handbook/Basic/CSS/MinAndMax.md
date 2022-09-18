# CSS最小和最大(宽度/高度)

## Min-width

限制盒子的最小宽度，盒子的width大小会随着内容的大小变化，min-width是盒子无文本的时候的大小。

```css
 {
    min-width: 20px;
    height: 30px;
    background-color: aqua;
    border: 1px solid transparent;
 }
```

![image-20220827231802062](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9b6402ddde04dc69da6982c7ae913a4~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

### min-width与padding

在内容较长的情况下，`min-width`可以扩展按钮的宽度，而水平方向上的`padding`应该被添加，以实现一个合适的外观按钮。

```css
{
            min-width: 10px;
            padding: 0 5px;
            height: 30px;
            background-color: aqua;
            border: 0px solid transparent;
 }
```

![image-20220827234042226](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce915043ff574cba831853650f33c960~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

## Max-width

限制盒子的最大宽度，

当文本内容超过盒子大小的时候，就会出现溢出现象。

![image-20220827232743434](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97441668d0b14c48901f7fbb479768a1~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)



## max-width与min-width的优先级

从下面的图可以看出，min-width在这个盒子不生效，说明max-width > min-width的优先级，而盒子的宽度是0-max-width，没有所谓的min-width。

```css
			
{     
  		min-width: 10px;
      max-width: 30px;
      height: 30px;
      background-color: aqua;
      border: 0px solid transparent;
}
```



![image-20220827234500692](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cea62f75fb6248079d0b30bf532f8157~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)



那么如果你想你的盒子拥有最小最大宽度的话，可以用width属性和display: inline-block。

> 在css中，inline-block指的是“内联块状元素”，它同时具备内联元素、块状元素的特点；inline-block元素可以和其他元素都在一行上，元素的高度、宽度、行高以及顶和底边距都可设置。

```css
{
      width: 10px;
      max-width: 30px;
      height: 30px;
      background-color: aqua;
      border: 0px solid transparent;
 }
```

```html
<style>
{
		display: inline-block;
    min-width: 10px;
    max-width: 30px;
    height: 30px;
    background-color: aqua;
    border: 0px solid transparent;
}
</style>
<body>
    <span class="btn1" />
    <span class="btn1" />
</body>
```

### 使用 `flexbox` 将最小宽度/最小高度设置为零

> 默认情况下，`flex`项目不会缩小到它们的最小内容大小(最长单词或固定大小元素的长度)以下。要更改此设置，请设置`min-width`或 `min-height`属性。

flex-box的min-width/height是随着内容的大小变化的，也就是无边无际的大。如果父盒子有一定的高度和宽度，这样就会出现溢出的现象，不会出现滚动条。设置

```css
word-space: no-wrap;
overflow: hidden;
text-overflow: ellipisi;
```

也解决不了。

所以我们需要在flex-box上加上min-width/height：0；

### 最大宽度/高度和视口单位的流体比率

- 纵横比：高度/宽度

- 容器的宽度：可以是固定数字，也可以是动态数字（100％）

- 设置`height`为视口宽度的100％乘以纵横比

- 设置`max-heigh`，该高度是容器的宽度乘以纵横比

- `max-width`设置为等于容器宽度

  

  ```css
   /* 纵横比0.56 */
  
     img {
          width: 100%;
          height: calc(100% * 0.56);
          max-width: 100%;
          max-height: calc(100% * 0.56);
    }
  ```



<img :src="$withBase('/images/流体.gif')" />


### 最小高度和粘性页脚

当一个网站的内容不够长，它希望看到页脚粘到底部.

将`body`元素作为`flexbox`容器，然后将其最小高度设置为视口高度的`100％`

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fafafa;
  line-height: 1.5;
  font-family: "Arial";
}
```



<img :src="$withBase('/images/粘性页脚.gif')" />



