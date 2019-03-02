# sass学习
![sass-logo](http://ww4.sinaimg.cn/large/0060lm7Tly1fnu3y97wi3j30e80ap756.jpg)

## 世界上最成熟、最稳定、最强大的专业级CSS扩展语言！
> Sass(Syntactically Awesome Style Sheets)是一个相对新的编程语言，Sass为web前端开发而生，可以用它来定义一套新的语法规则和函数，以加强和提升CSS。通过这种新的编程语言，你可以使用最高效的方式，以少量的代码创建复杂的设计。它改进并增强了CSS的能力，增加了变量，局部和函数这些特性。而这只使Sass一部分利器!

* 由Hampton Catlin汉普顿·卡特林发明
* Sass完全兼容所有版本的CSS。我们对此严格把控，所以你可以无缝地使用任何可用的CSS库。
* Sass拥有比其他任何CSS扩展语言更多的功能和特性。
* 数家科技企业和成百上千名开发者为Sass提供支持。
* 有无数的框架使用Sass构建。比如Compass，Bourbon，和Susy。


## SASS解决了CSS中的哪些痛点？
1. **易维护，更方便的定制** <br>
对于一个大型或者稍微有规模的UI来说，如果需要替换下整体风格，或者是某个字体的像素值，比如我们经常会遇到panel，window以及portal共用一个背景色，这个时候按照常规的方式，我们需要一个个定位到元素使用的class，然后逐个替换，SASS提供了变量的方式，你可以把某个样式作为一个变量，然后各个class引用这个变量即可，修改时，我们只需修改对应的变量。

2. **效率的提升** <br>
很多浏览器都有自己的兼容hack，很多时候我们需要针对不同的浏览器写一堆的hack，这种浪费时间的重复劳动就交给SASS处理去吧!我们可以在sass中写代码片段mixin，一次书写，终生试用。

3. **嵌套** <br>
原本的css是并列式的样式书写，显得杂乱无章。而Sass采用的对象嵌套是书写方式，跟html一致的文档树结构。代码显得优雅，找寻需要更改的样式也是一目了然。

## 入门用法
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
    /*
     * 也可以使用标准注释    
    */
```
4. 变量 来统一修改和维护
```scss
$redColor: red;
body {
    background-color: $redColor;
}
```
5. 嵌套 层级关系，优雅
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
6. 导入 自带的代码合并，最终会编译成一个css
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
7. mixin
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
8. 继承
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
9. 运算
> sass可进行简单的加减乘除运算等
```scss
nav {
  width: (100-2)px;
  border-width: (100/3)px;
  height: 600px / 960px * 100%;
}
```

10. 选择器嵌套
> 在选择器嵌套中，可以使用 &表示父元素选择器
```scss
 a{
    color: #fff;
    &:hover{
      color:#ddd;
    }
  }
```
11. 属性嵌套
> 所谓属性嵌套指的是有些属性拥有同一个开始单词，如border-width，border-color都是以border开头
```scss
.box {
  border: {
    style: solid;
    left: {
      width: 4px;
      color: #888;
    }
    right: {
      width: 2px;
      color: #ccc;
    }
  }
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
}
```
2. 默认变量
> sass的默认变量仅需要在值后面加上 !default即可。优先级最低
用于大型开发项目，css模块化，单独文件修改变量，不修改默认的值
```scss
$baseLineHeight: 1.5 !default;
body{
    line-height: $baseLineHeight; 
}
```

3. 特殊变量
> 一般我们定义的变量都为属性值，可直接使用，但是如果变量作为属性或在某些特殊情况下等则必须要以 #{$variables}形式使用。
```scss
$borderDirection:       top !default; 
$baseFontSize:          12px !default;
$baseLineHeight:        1.5 !default;

//应用于class和属性
.border-#{$borderDirection}{
  border-#{$borderDirection}:1px solid #ccc;
}
//应用于复杂的属性值
body{
    font:#{$baseFontSize}/#{$baseLineHeight};
}
```

4. 全局变量
> 在变量值后面加上 !global即为全局变量。
```scss
$fontSize: 12px;
$color: #333;
body{
    $fontSize: 14px;  
    $color:   #fff !global;      
    font-size:$fontSize;
    color:$color;
}
p{
    font-size:$fontSize; 
    color:$color;
}
```

5. 多值变量list
> list数据可通过空格，逗号或小括号分隔多个值，可用 nth($var,$index)取值。
```scss
$linkColor: #08c #333 !default;//第一个值为默认值，第二个鼠标滑过值
a{
  color:nth($linkColor,1);

  &:hover{
    color:nth($linkColor,2);
  }
}
```

6. 多值变量map
> map数据以key和value成对出现，其中value又可以是list。格式为： $map: (key1: value1, key2: value2, key3: value3);。可通过 map-get($map,$key)取值。。
```scss
$headings: (h1: 2em, h2: 1.5em, h3: 1.2em);
@each $header, $size in $headings {
  #{$header} {
    font-size: $size;
  }
}
```


// 痛点，解决CSS哪些问题
// SASS的背景
// 如何在我们项目中使用