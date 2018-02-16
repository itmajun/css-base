# Css Base
---

在进行vue编写的时候, css是不容忽视的


# 项目结构
---

通过vue-element 样式的结构进行组织.

* 使用scss
* 使用gulp 进行构建

# Scss
---
Scss Sass 傻傻分不清楚. Sass有两种语法格式,一种是.sass 缩进格式, 一种是.scss 支持css编写格式
* 变量 $
* 插值语法 #{}, 可以将变量用于选择器.
* 占位 @content
* 选择器:
    1. 父子. 嵌套
    ```scss
      #main {
        width: 97%;
      
        p, div {
          font-size: 2em;
          a { font-weight: bold; }
        }
      
        pre { font-size: 3em; }
      }
    ```
    2. 父选择器. &
    ```scss
      a {
          font-weight: bold;
          &:hover { color: red; }
        }
    ```
    3. 属性嵌套
    ```scss
      font: {
          family: fantasy;
          size: 30em;
          weight: bold;
        }
    ```
* 导包 @import
* 继承 @extend
* 指令 @mixin , @include 引入混合指令

上述概念为 sass的部分重点.

# BEM
---

css 中的命名有些看不懂, 查询之后发现是遵循BEM标准. 采用
```
Block--modifiler-value

Block: 相当于组件,把一个页面拆分多个组件 menu
Element: 一个组件的一个单元(块) menu item
modifiler:  一个块的属性 size
value: 值 20px

```
上面描述的是基本的划分概念, 实践中大致都是这样做的. 更重要的就是下面的命名了

```
Block: class="block" ===> .block {}
Element: class="block__elem"
Modifiler: class="block block--size-big" 
```

```
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

```
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }
```
以后看到这么奇怪的命名也不用感到奇怪了. java中都是驼峰,以前js都是下划线,说不定以后css中都是双横线了- -!


# font
---
现在比较常见的方式就是从阿里云的图标库http://www.iconfont.cn/. 选取所有的图标,下载之后会生成的有提取图标文件的代码.


# 自适应
---

h5页面将如何进行编写呢? 自适应? rem? @media 是否有公共的组件样式呢?
这里存在众多的[手机](https://material.io/devices/), 如何实现的这么多的匹配呢. 
通过查询目前存在多种方案1. 通过rem 2. 通过viewport 单位


vue 关注度比较高的mobile ui 有 mint-ui .我们来看下,他是如何实现手机布局要求的.

mint-ui 是饿了么团队实现的一组基于vue的移动组件, 自己编写了打包工具cooking. 扩展了语法,使用了at-rule
but....but... 看了这么多东西了,实在是不想再一个一个学习轮子了. 了解原理,找到适合自己的方式.

1. 引入 normalize.css 进行样式reset.
2. rem px 的转换
3. 宽高百分几转换

这样看来, 淘宝使用的是rem布局,mint-ui 组件是根据不同的media进行了宽高的百分比转换.
之前接触过gulp. 并且比较有好感, 猜想为什么css 打包饿了么都用gulp呢. 也有这种原因吧.只需要简单使用几个插件就完成了css的打包



# 整理
---

css的开发中,发现有两种使用场景, 第一局部作用域, 一般编写vue时候需要样式内嵌到当前页面的作用域. 第二全局作用域, 打包合并多个css ,供组件访问.
在进行js使用的时候我们需要进行拆包,根据页面需要进行动态加载. 那么依照这样的规则,css中,应该是更倾向于使用局部作用域, 那么其他组件样式可以打成一个
完整的css 供全局使用.



* [amfe-flexible](https://github.com/amfe/lib-flexible)
* [h5淘宝](https://github.com/amfe/article/issues/17)
* [vue-viewport](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)
* viewport-units-buggyfill: 适配,不支持viewport单位的进行hack方式的修复




