# sass学习
<img style="width:200px" src="./img/sass.png" alt=""><br/>
![sass-logo](http://ww4.sinaimg.cn/large/0060lm7Tly1fnu3y97wi3j30e80ap756.jpg)

1. 你可以完全按照css的规则语法来书写scss
```scss
body {
    background-color: red;
}
```
2. .sass格式的省略了大括号，分号和花括号
```scss
body 
    background-color: red
```
3. 你可以使用 `//` 方式来注释代码 
 ```scss
body 
    background-color: red //这是一段注释
```
## 入门用法
1. 变量 来统一修改和维护
```scss
$redColor: red;
body {
    background-color: $redColor;
}
```
2. 嵌套 层级关系，优雅
```scss
nav {
  width: 100px;
  height: 100px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
```
3. 导入 自带的代码合并，最终会编译成一个css
> sass的导入( @import)规则和CSS的有所不同，编译时会将 @import的scss文件合并进来只生成一个CSS文件。但是如果你在sass文件中导入css文件如 @import 'reset.css'，那效果跟普通CSS导入样式文件一样，导入的css文件不会合并到编译后的文件中，而是以 @import方式存在。
所有的sass导入文件都可以忽略后缀名 .scss。一般来说基础的文件命名方法以_开头，如 _mixin.scss。这种文件在导入的时候可以不写下划线，可写成 @import "mixin"。
```scss
//conf.scss
$blueSky: blue;
//variable.scss
@import 'conf'; //后缀可以省略

body {
    background-color: $blueSky;
}

```
4. mixin
> sass中可用mixin定义一些代码片段，且可传参数，方便日后根据需求调用。从此处理css3的前缀兼容轻松便捷。
```scss
@mixin display-flex() {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.box {
    @include display-flex()
}
```
5. 继承
> sass可通过 @extend来实现属性继承，使代码更加优越简洁。
```scss
.message {
    border: 1px solid #ccc;
    padding: 10px;
    color: #ffff;    
}

.success {
    @extend .message;
    border-color: green; 
}
```
6. 运算
> sass可进行简单的加减乘除运算等
```scss
nav {
  width: (100-2)px;
  border-width: (100/3)px;
  height: 600px / 960px * 100%;
}
```

7. 嵌套
> sass可进行简单的加减乘除运算等
```scss
nav {
  width: (100-2)px;
  border-width: (100/3)px;
  height: 600px / 960px * 100%;
}
```
------

## 进阶

1. 颜色
> sass中集成了大量的颜色函数，让变换颜色更加简单。
```scss
$linkColor: #08c;
a {
    text-decoration:none;
    color:$linkColor;
    &:hover{
      color:darken($linkColor,10%);
    }
}ight: 600px / 960px * 100%;
}
```
