### 什么百分比？

作为百分比，显然应该有一个目标作为参考源，这个参考一般是**父元素**。这是正确的，但并不涵盖所有情况。最正确的答案应该是**包含块(containing block)**，即包含我们元素的块且它不必是直接的父元素。

#### 普通的百分比，是继承最接近的父类


![An image](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/746eb59f83174cb499837865e694007b~tplv-k3u1fbpfcp-zoom-in-crop-mark:3326:0:0:0.awebp?)

#### 谁是包含块是取决于position定位

可以从下面的代码块看出，child的包含块是grandparent

```css
.grandparent {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: aqua;
}

.parent {
  width: 50%;
  height: 50%;
  background-color: aquamarine;
}

.child {
  position: absolute;
  width: 50%;
  height: 50%;
  top: 25%;
  left: 25%;
  
  background-color:cornflowerblue;
}
```

![image-20220912135932690](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65d91b3d2a164f378fa037019d4e5240~tplv-k3u1fbpfcp-zoom-in-crop-mark:3326:0:0:0.awebp?)



#### padding，margin属性的包含块一般是父类的width作为参考物。

可以从图中看出，padding无论是在水平，还是垂直方向都是取包含块的宽度的20%。同理margin也是。

```css
.grandparent {
  position: relative;
  width: 200px;
  height: 300px;
  background-color: aqua;
}

.parent {
  width: 50%;
  height: 50%;
  background-color: aquamarine;
}

.child {
  position: absolute;
  padding: 20%;
  background-color:cornflowerblue;
}
```

![image-20220912140458807](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b45dd10675df4f3998ab5e32d44a0430~tplv-k3u1fbpfcp-zoom-in-crop-mark:3326:0:0:0.awebp?)



### 那么什么属性会的水平是以包含块width决定，垂直以包含块height决定。

#### background-size

[background-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin): 简单点说就是以border/padding/content为原点展开。

>```
>border-box
>```
>
>背景图片的摆放以 border 区域为参考
>
>```
>padding-box
>```
>
>背景图片的摆放以 padding 区域为参考
>
>```
>content-box
>```
>
>背景图片的摆放以 content 区域为参考

```css
.child1 {
  background-image: url(https://xsh-img.qian-gua.com/avatar/631c22614af44d33ea8541cd.jpg);
  background-size: 50% 50%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: red;
  width: 50%;
  height: 50%;
  padding: 100px;
}
```



#### font-size

对于 `font-size` ，百分比值仅指向它的直接父块。

![image-20220912145730931](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8177078be304f83a593f21f8e871782~tplv-k3u1fbpfcp-zoom-in-crop-mark:3326:0:0:0.awebp?)