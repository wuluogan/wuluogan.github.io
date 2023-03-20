# Html


## 代码

#### 三种方法使HTML单页面输入密码才能访问

1、第一种

```js
<script type="text/javascript">   
function password() {   
var testV = 1;   
var pass1 = prompt('请输入密码','');   
while (testV < 3) {   
if (!pass1)   
history.go(-1);   
if (pass1 == "123") {//初始密码123   
alert('密码正确');   
break;   
}   
testV+=1;   
var pass1 =   
prompt('密码错误!请重新输入:');   
}   
if (pass1!="password" & testV ==3)   
history.go(-1);   
return " ";   
}   
document.write(password());   
</script>  
<!--下面添加你要显示的内容或者代码-->
```

2、方法二

```js
<script type="text/javascript">   
loopy()   
function loopy() {   
var sWord =""  
while (sWord != "123") {//设置密码
sWord = prompt("输入正确密码才能登陆!")   
}   
alert("欢迎访问")   
}   
</script> 
<!--下面添加你要显示的内容或者代码-->
```

3、方法三

```js
<script type="text/javascript">   
function password() {   
var testV = 1;   
var pass1 = prompt('请输入密码:','');   
while (testV < 3) {   
if (!pass1)    
history.go(-1);   
if (pass1 == "123") {//设置密码
alert('口令正确，进行跳转');   
window.location.href="http://test.junyao2018.cn/";//添加你要跳转的页面
break;   
}    
testV+=1;   
var pass1 =    
prompt('密码错误','');   
}   
if (pass1!="password" & testV ==3)    
history.go(-1);   
return " ";   
}    
document.write(password());   
</script>
```



#### input标签的type=‘number’不需要负数

1. 我们都知道input自带对数字的加减操作，但是如果一直点击向下按钮，input的值会变成负数，如果实际开发当中要求避免负数该如何实现呢？下面是一个页面的input标签：

   ```
   <input type="number" onclick="noFuc(this.value)" class="form-control" id="premium_Max" name="premiumMax" />
   ```

2. 然后通过该input标签的点击事件会触发 `noFuc( value)`这个函数，并把选择的值传递过去，js函数代码如下：

   ```js
   function noFue(val){  
     document.getElementById('payCount_Max').value = val >= 0 ? val : 0;  
   }
   ```

   通过获取到input的值，判断其是否大于0 如果小于0 就给该input赋值为0；



## CSS

### reset.css

#### YUI的方案

```CSS
/*
YUI 3.18.1 (build f7e7bcb)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
html{color:#000;background:#FFF}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}q:before,q:after{content:''}abbr,acronym{border:0;font-variant:normal}sup{vertical-align:text-top}sub{vertical-align:text-bottom}input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;*font-size:100%}legend{color:#000}#yui3-css-stamp.cssreset{display:none}
```



### clearfix

#### 常用的清除浮动方法

方案一

```CSS
.clearfix:before,
.clearfix:after {
  content: ".";    
  display: block;    
  height: 0;    
  overflow: hidden;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  zoom: 1;
}
```

方案二

```CSS
.clearfix:before, .clearfix:after {
  content:"";
  display:table;
}
.clearfix:after{
  clear:both;
  overflow:hidden;
}
.clearfix{
  zoom:1;
}
```





### placeholder

Chrome浏览器(webkit)

```CSS
::-webkit-input-placeholder {
  color: #999;
}
```

注：webkit下在文本框获取焦点后不显示placeholder，以便使其与其他浏览器表现一致

```CSS
:focus::-webkit-input-placeholder {
  color: transparent !important;
}
```

Firefox浏览器

```CSS
/* Mozilla Firefox 4 to 18 */
:-moz-placeholder {
  color: #999;
}
/* Mozilla Firefox 19+ */
::-moz-placeholder {
  color: #999;
}
```

IE浏览器

```CSS
/* Internet Explorer 10+ */
:-ms-input-placeholder {
  color: #999;
}
```



### 重置默认行为

#### 禁止文本选中

```CSS
-moz-user-select: none;
-webkit-user-select: none;
-ms-user-select: none;
-khtml-user-select: none;
user-select: none;
```

#### 禁用输入法

```CSS
ime-mode:disabled;
```

#### 禁用系统默认菜单

```CSS
-webkit-touch-callout:none;
```

#### 禁止触发鼠标或者触屏事件

```CSS
pointer-events: none;
```

#### 自定义文本选择

```CSS
::selection { background: #e2eae2; }
::-moz-selection { background: #e2eae2; }
::-webkit-selection { background: #e2eae2; }
```



### 重置按键样式

#### 去除表单自动填充颜色(Chrome浏览器)

```CSS
input:-webkit-autofill {
  background-color: #FAFFBD;
  background-image: none;
  color: #000;
}
```

#### 去除按键圆角(iPhone)

```CSS
-webkit-appearance:none;
```

#### 去除搜索按键(Chrome浏览器)

```CSS
input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{
  -webkit-appearance: none;
}
```

#### 去除数字输入框增减按键(Chrome浏览器)

```CSS
input[type="number"]::-webkit-outer-spin-button,input[type="number"]::-webkit-inner-spin-button{
  -webkit-appearance: none;
}
```

#### 去除date类型文本框多了个叉叉清除内容的效果(Chrome浏览器)

```CSS
::-webkit-clear-button {
    -webkit-appearance: none;
 }
```

#### 去除按键虚线框(Firefox浏览器)

```CSS
button::-moz-focus-inner,input::-moz-focus-inner{

}
```

#### 改变password类型input框的默认样式(IE浏览器)

```CSS
::-ms-reveal{display: none; }
::-ms-reveal{background-color:#f0f3f9; }
```

#### 设置默认线框距离

```CSS
input {outline-offset: 4px ;}
```

#### input字体垂直居中

```CSS
font-family:  Tahoma,Arial, Helvetica,"Microsoft YaHei";
```



### 自定义滚动条

#### 自定义滚动条

```css
::-webkit-scrollbar{width:12px;height:12px;}
::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment{width:0;height:0;}
::-webkit-scrollbar-button:vertical:increment{background:transparent;}
::-webkit-scrollbar-track-piece:vertical{background:#DFE7EF;}
::-webkit-scrollbar-track-piece:vertical:hover{background:#DFE7EF;}
::-webkit-scrollbar-track-piece:horizontal{background-color:transparent;}
::-webkit-scrollbar-thumb:vertical{height:100px;background:rgba(110,146,182,.5);}
::-webkit-scrollbar-thumb:vertical:hover{background:rgba(110,146,182,.4);}
::-webkit-scrollbar-thumb:horizontal{width:80px;height:10px;background-color:#ccc;}
```

#### iOS自定义滚动条兼容

```css
-webkit-overflow-scrolling:touch;        /* 惯性 */
-webkit-transform:translate3d(0,0,0);    /* 下滑卡顿并出现空白 */
```



### 滤镜

#### 模糊

```css
-webkit-filter:blur(5px);
```

#### 叠加褐色

取值范围0-1，此处表示50%的褐色

```css
-webkit-filter:sepia(0.5);
```

#### 亮度

取值范围0-1，5倍亮度（数字为0时为正常样式，为1时表示的是100%亮度，无法看到图片）

```css
-webkit-filter:brightness(0.5);
```

#### 色相

按照色相环进行旋转，顺时针方向，红-橙-黄-黄绿-绿-蓝绿-蓝-蓝紫-紫-紫红-红

```css
-webkit-filter:hue-rotate(30deg);
```

#### 反色

取值范围0-1,0为原图，1为彻底反色之后，0.5为灰色

```css
-webkit-filter:invert(1);
```

#### 饱和度

取值范围0~*,0为无饱和度，1为原图，值越高饱和度越大

```css
-webkit-filter:saturate(4);
```

#### 对比度

取值范围0~*,0为无对比度（灰色），1为原图，值越高对比度越大

```css
-webkit-filter:contrast(2);
```

#### 透明度

取值范围0~1,0为全透明，1为原图

```css
-webkit-filter:opacity(0.8);
```

#### 阴影

```css
-webkit-filter:drop-shadow(17px 17px 20px black);
```



### 横竖屏判断

设备竖屏时调用该段css代码：

```CSS
@media all and (orientation : portrait){

}
```

设备横屏时调用该段css代码：

```CSS
@media all and (orientation : landscape){

}
```



### 全站变灰

```CSS
html{
    filter: grayscale(100%);
     -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"grayscale\"><feColorMatrix type=\"matrix\" values=\"0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\"/></filter></svg>#grayscale");
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    filter: gray;
    -webkit-filter: grayscale(1);
}
```



## JavaScript

### cookie

#### 添加cookie

```javascript
function addCookie(objName,objValue,objHours,objDomain,objPath){
    var str = objName + "=" + escape(objValue);
    if(objHours > 0){ //为时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours*3600*1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
        if(objDomain){
            str += ";domain="+objDomain;
        }
        if(objPath){
            str += ";path="+objPath;
        }
    }
    document.cookie = str;
}
```

#### 获取指定名称的cookie的值

```javascript
function getCookie(objName){
  var arrStr = document.cookie.split("; ");
  for(var i = 0;i < arrStr.length;i ++){
    var temp = arrStr[i].split("=");
    if(temp[0] == objName) return unescape(temp[1]);
  }
}
```

#### 删除指定名称的cookie，可以将其过期时间设定为一个过去的时间

```javascript
function delCookie(name){
  var date = new Date();
  date.setTime(date.getTime() - 10000);
  document.cookie = name + "=a; expires=" + date.toGMTString();
}
```





### class

#### 是否存在某个class

```javascript
function hasClass(node,classname){
  return node.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
```

#### 对节点增加class

```javascript
function addClass(node,classname){
  if(!this.hasClass(node,classname)){
    node.className = (node.className+" "+classname).replace(/^\s+|\s+$/g,'');
  }
}
```

#### 对节点删除class

```javascript
function removeClass(node,classname){
  node.className = (node.className.replace(classname,"")).replace(/^\s+|\s+$/g,'');
}
```



### 数组

#### 数组复制技巧

方法一

```javascript
var a = [1,2,3];
b = a.slice(0);
```

方法二

```javascript
var a = [1,2,3];
b = a.concat();
```

#### 打乱数字数组的顺序

```javascript
numbers.sort(function(){ return Math.random() - 0.5});
```

#### 给数组创建一个随机项

```javascript
var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' , 2145 , 119];
var randomItem = items[Math.floor(Math.random() * items.length)];
```

#### 数组追加

```javascript
Array.prototype.push.apply(array1, array2);
```

#### 获得数组中的最大值

写法一

```javascript
var a = [10,1,2,3,4,8,9];
Math.max.apply(null,a);
```

写法二

```javascript
Array.prototype.max = function() {
    return Math.max.apply({},this); 
}
```

#### 类数组转换成数组

写法一

```javascript
var args = Array.prototype.slice.call(arguments, 0);
```

写法二

```javascript
var args = [].slice.call(arguments);
```

ES6的实现

```javascript
var args = Array.from(arguments);
```

#### 不用for循环创造0～100的数组

```javascript
Array.from({length:100}).map(function(item,index){return index});
Array(100).join(",").split(",").map(function(key,index){return index;});
Object.keys(Array(100).toString().split(","));
```



### 字符串

#### 字符串去重

```javascript
"aagbdfcedskahkxxbhxbshb".replace(/(\w)(?=\w*\1)/gi,"");
```

#### 字符串反序列化成JSON

eval方式解析

```javascript
function strToJson(str){
    var json = eval_r('(' + str + ')');        //或eval('('+Json+')')
    return json;
}
```

new Function形式

```javascript
function strToJson(str){
    var json = (new Function("return " + str))();
    return json;
}
```

使用全局的JSON对象

```javascript
function strToJson(str){
    return JSON.parse(str);
}
```

#### 补零

```javascript
function prefixInteger(num, length) {
    return (num / Math.pow(10, length)).toFixed(length).substr(2);
}
function prefixInteger(num, length) {
    return (Array(length).join(0) + num).slice(-length);
}
```



### 日期

#### 获取某月天数

```javascript
var day = new Date(2014,4,0);  //获取4月份的天数
var count = day.getDate();
```

#### 日期对象转换成时间戳

```javascript
var d = +new Date();     //1466489912445
```

#### yyyy-mm-dd 格式

传统浏览器

```javascript
var dt = new Date();
var date = [
  [dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join('-'),
  [dt.getHours(), dt.getMinutes(), dt.getSeconds()].join(':')
].join(' ').replace(/(?=\b\d\b)/g, '0'); // 正则补零 (略微改动)

console.log(date); // => 2016-03-25 11:01:01
```

现代浏览器

```javascript
var dt = new Date();
dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset()); // 修正时区偏移
var date = dt.toISOString().slice(0, -5).replace(/[T]/g, ' ');

console.log(date); // => 2016-03-25 11:01:01
```



### 函数

#### 执行前判断

```javascript
Function.prototype.before = function(fn) {
    var __self = this;
    return function() {
        if(fn.apply(this, arguments) === false) {
            return false;
        }
        return __self.apply(this, arguments);
    }
};
```



### 兼容

#### 获取指定class名称的DOM对象

```javascript
function getElementsByClassNamefunction(className,context,tagName){
    if(typeof context == 'string'){
        tagName = context;
        context = document;
    }else{
        context = context || document;
        tagName = tagName || '*';
    }
    if(context.getElementsByClassName){
        return context.getElementsByClassName(className);
    }
    var nodes = context.getElementsByTagName(tagName);
    var results= [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var classNames = node.className.split(' ');
        for (var j = 0; j < classNames.length; j++) {
            if (classNames[j] == className) {
                results.push(node);
                break;
            }
        }
    }
    return results;
}
```

#### 获取选中文本内容

```javascript
function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();    
    }else if (document.getSelection) {
        return document.getSelection();
    }else if (document.selection) {
        return document.selection.createRange().text;
    }
}
```

#### 跨浏览器获取可视窗口大小

```javascript
function getWindow () {
    if(typeof window.innerWidth !='undefined') {
        return{
            width : window.innerWidth,
            height : window.innerHeight
        }
    }else{
        return {
            width : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        }
    }
}
```



### 事件处理

#### 取消浏览器默认行为

```javascript
function stopDefault( e ) {
    if ( e && e.preventDefault ){
        e.preventDefault();
    }else{
        window.event.returnValue = false;
    }
    return false;
}
```

#### 阻止事件冒泡

```javascript
function stopBubble(e){
    if (e && e.stopPropagation) {
        e.stopPropagation();
    }else if (window.event) {
        window.event.cancelBubble = true;
    }
}
```

#### 模拟触发点击事件

```javascript
function simulateClick(el) {
  var evt;
  if (document.createEvent) { // DOM Level 2 standard
    evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    el.dispatchEvent(evt);
  } else if (el.fireEvent) { // IE
    el.fireEvent('onclick');
  }
}
createEvent(eventType)
```

| 参数      | 描述                              |
| --------- | --------------------------------- |
| eventType | 想获取的 Event 对象的事件模块名。 |

**返回值**

返回新创建的 Event 对象，具有指定的类型。

**抛出**

如果实现支持需要的事件类型，该方法将抛出代码为 NOT_SUPPORTED_ERR 的 DOMException 异常。

**说明**

该方法将创建一种新的事件类型，该类型由参数 eventType 指定。注意，该参数的值不是要创建的事件接口的名称，而是定义那个接口的 DOM 模块的名称。

下表列出了 eventType 的合法值和每个值创建的事件接口： eventType 的合法值和每个值创建的事件接口：

| 参数        | 事件接口   | 初始化方法      |
| ----------- | ---------- | --------------- |
| HTMLEvents  | HTMLEvent  | iniEvent()      |
| MouseEvents | MouseEvent | iniMouseEvent() |
| UIEvents    | UIEvent    | iniUIEvent()    |

用该方法创建了 Event 对象以后，必须用上表中所示的初始化方法初始化对象。



### 克隆

#### 对象深度克隆

```javascript
Object.prototype.clone = function () {
    var newObj = {};
    for (var i in this) {
        console.log("i = " + i)
        if (typeof(this[i]) == 'object'|| typeof(this[i]) == 'function') {
            newObj[i] = this[i].clone()
        } else {
            newObj[i] = this[i]
        }
    }
    return newObj
}
```

#### 简单的克隆

方法一

```javascript
obj = eval(uneval(o));
```

方法二(系列化对象)

```javascript
obj= JSON.parse(JSON.stringify(o));
```

#### 数组深度克隆

```javascript
Array.prototype.clone = function () {
    var newArray = []
    for (var i = 0; i < this.length; i++) {
        if (typeof(this[i]) == 'object' || typeof(this[i]) == 'function') {
            newArray[i] = this[i].clone()
        } else {
            newArray[i] = this[i]
        }
    }
    return newArray
}
```

#### 函数深度克隆

```javascript
Function.prototype.clone = function () {
    var that = this;
    var newFunc = function () {
        return that.apply(this, arguments);
    };
    for (var o in this) {
        newFunc[o] = this[o];
    }
    return newFunc;
}
```



### 正则表达式

#### 电子邮箱

```javascript
/^[0-9a-z][0-9a-z\-\_\.]+@([0-9a-z][0-9a-z\-]*\.)+[a-z]{2,}$/i
```

#### 固定电话

```javascript
/^0[0-9]{2,3}[2-9][0-9]{6,7}$/
```

#### 手机号码

```javascript
/^(\+?0{0,2}86([\ |\-])?)?1((3[0-9])|(4[57])|(5([0-3]|[5-9]))|(66)|(7[01])|(8[0-9])|(9[89]))\d{8}$/
```

移动号段：139 138 137 136 135 134 147 150 151 152 157 158 159 178 182 183 184 187 188 198

联通号段：130 131 132 155 156 185 186 145 176 166

电信号段：133 153 177 173 180 181 189 199

虚拟运营商号段：170 171

#### 身份证号码

```javascript
/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/
```

#### ip地址

```javascript
/^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}$/
```

#### 域名

```javascript
/^([a-zA-Z0-9][-a-zA-Z0-9]{0,62}\.)+([a-zA-Z]{0,63})\.?$/
```

#### 任意Unicode字符

/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](https://passer-by.com/front-end-note/?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/



### HTML5

#### HTML5标签兼容

```javascript
(function(){
  var e = "abbr,article,aside,audio,canvas,datalist,details,dialog,eventsource,figure, footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(','), 
            i= e.length;
  while(i--){
        document.createElement(e[i]);
  }
})();
```



### CSS3

**方法一**

```javascript
var isSupported = CSS.supports("display", "flex");
```

**方法二**

```javascript
var isSupported = CSS.supports("(display: flex) and (-webkit-appearance: caret)");
```

**兼容写法**

```javascript
var supportsCSS = !!((window.CSS && window.CSS.supports) || window.supportsCSS || false);
```



### export

#### 模块化输出

```javascript
// node export
if(typeof module === 'object' && typeof module.exports === 'object'){
    module.exports = Hammer;
}
// just window export
else {
    window.Hammer = Hammer;

    // requireJS module definition
    if(typeof window.define === 'function' && window.define.amd) {
        window.define('hammer', [], function() {
            return Hammer;
        });
    }
}
```



### 横竖屏判断

#### 横屏监听

```javascript
var updateOrientation =function(){
    if(window.orientation=='-90'|| window.orientation=='90'){
        console.log('为了更好的体验，请将手机/平板竖过来！');
     }else{
        console.log('竖屏状态');
    }
};
var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";// 监听事件
window.addEventListener(orientationEvent,updateOrientation);
```



### 全屏

#### 使用全屏

```javascript
var docElm = document.documentElement;
if (docElm.requestFullscreen) {    //W3C  
    docElm.requestFullscreen();  
}else if (docElm.mozRequestFullScreen) {  //FireFox  
    docElm.mozRequestFullScreen();  
}else if (docElm.webkitRequestFullScreen) {  //Chrome等  
    docElm.webkitRequestFullScreen();  
}else if (elem.msRequestFullscreen) { //IE11
  elem.msRequestFullscreen();
}
```

#### 退出全屏

```javascript
if (document.exitFullscreen) {  
    document.exitFullscreen();  
}else if (document.mozCancelFullScreen) {  
    document.mozCancelFullScreen();  
}else if (document.webkitCancelFullScreen) {  
    document.webkitCancelFullScreen();  
}else if (document.msexitFullscreen) {
      document.msexitFullscreen();
}
```

#### 事件监听

```javascript
document.addEventListener("fullscreenchange", function () {  
    fullscreenState.innerHTML = (document.fullscreen)? "" : "not ";}, false);  
}
document.addEventListener("mozfullscreenchange", function () {  
    fullscreenState.innerHTML = (document.mozFullScreen)? "" : "not ";}, false);  
}
document.addEventListener("webkitfullscreenchange", function () {  
    fullscreenState.innerHTML = (document.webkitIsFullScreen)? "" : "not ";}, false);
}
document.addEventListener("msfullscreenchange", function () {
    fullscreenState.innerHTML = (document.msFullscreenElement)? "" : "not ";}, false);
}
```

#### 全屏样式设置

```css
在浏览器全屏的使用我们还可以进行样式设置
html:-moz-full-screen { 
    background: red;  
}  
html:-webkit-full-screen {  
    background: red;  
}  
html:fullscreen {  
    background: red;  
}
```



### 经纬度

```javascript
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        console.log('纬度:'+position.coords.latitude,'经度：'+position.coords.longitude);
    });
}else{
    alert('不支持地理定位'); 
}
```

latitude 纬度

longitude 经度

accuracy 准确角

altitude 海拔高度

altitudeAcuracy 海拔高度的精确度

heading 行进方向

speed 地面的速度

安全限制：目前只有开启'https'协议才可以访问接口

被墙：Chrome的Geolocation如果你使用Fiddler抓包能看到浏览器在请求 "[http://www.googleapis.com](http://www.googleapis.com/)" 获得经纬度。而这个域名因为众所周知的原因会失败。



### 视图

#### 文档视图

```javascript
var element = document.elementFromPoint(100,100);
//返回给定坐标处所在的元素
```

#### 元素视图

```javascript
var data = element.getBoundingClientRect()
//得到矩形元素的界线，返回的是一个对象，包含 top, left, right, 和 bottom四个属性值，大小都是相对于文档视图左上角计算而来

var data = element.getClientRects()
//返回元素的数个矩形区域，返回的结果是个对象列表，具有数组特性。这里的矩形选区只针对inline box，因此，只针对a, span, em这类标签元素

element.scrollIntoView()
//将对象滚动到可见范围内,将其排列到窗口顶部或底部（不属于草案方法）
```



### 排序方式

#### 置换

```javascript
Array.prototype.swap = function(i, j) { 
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
}
```

#### 算法 - 冒泡排序

```javascript
Array.prototype.bubbleSort = function(){ 
    for (var i = this.length - 1; i > 0; --i){ 
        for (var j = 0; j < i; ++j){ 
            if (this[j] > this[j + 1])
                this.swap(j, j + 1); 
        } 
    } 
}
```

#### 算法 - 选择排序

```javascript
Array.prototype.selectionSort = function(){ 
    for (var i = 0; i < this.length; ++i){ 
        var index = i; 
        for (var j = i + 1; j < this.length; ++j) { 
            if (this[j] < this[index])
                index = j; 
        } 
        this.swap(i, index); 
    } 
}
```

#### 算法 - 插入排序

```javascript
Array.prototype.insertionSort = function(){ 
    for (var i = 1; i < this.length; ++i){ 
        var j = i, value = this[i]; 
        while (j > 0 && this[j - 1] > value) { 
            this[j] = this[j - 1]; 
            --j; 
        } 
        this[j] = value; 
    } 
}
```

#### 算法 - 希尔排序

```javascript
Array.prototype.shellSort = function(){ 
    for (var step = this.length >> 1; step > 0; step >>= 1){ 
        for (var i = 0; i < step; ++i){ 
            for (var j = i + step; j < this.length; j += step){ 
                var k = j, value = this[j]; 
                while (k >= step && this[k - step] > value){ 
                    this[k] = this[k - step]; 
                    k -= step; 
                } 
                this[k] = value; 
            } 
        } 
    } 
}
```

#### 算法 - 快速排序(堆栈)

```javascript
Array.prototype.stackQuickSort = function() { 
    var stack = [0, this.length - 1]; 
    while (stack.length > 0){ 
        var e = stack.pop(), s = stack.pop(); 
        if (s >= e)
            continue; 
        this.swap((s + e) >> 1, e); 
        var index = s - 1; 
        for (var i = s; i <= e; ++i){ 
            if (this[i] <= this[e])
                this.swap(i, ++index); 
        } 
        stack.push(s, index - 1, index + 1, e); 
    } 
}
```

#### 算法 - 归并排序

```javascript
Array.prototype.mergeSort = function(s, e, b){ 
    if (s == null)
        s = 0; 
    if (e == null)
        e = this.length - 1; 
    if (b == null)
        b = new Array(this.length); 
    if (s >= e)
        return; 
    var m = (s + e) >> 1; 
    this.mergeSort(s, m, b); 
    this.mergeSort(m + 1, e, b); 
    for (var i = s, j = s, k = m + 1; i <= e; ++i){ 
        b[i] = this[(k > e || j <= m && this[j] < this[k]) ? j++ : k++]; 
    } 
    for (var i = s; i <= e; ++i)
        this[i] = b[i]; 
}
```

#### 算法 - 堆排序

```javascript
Array.prototype.heapSort = function() { 
    for (var i = 1; i < this.length; ++i){ 
        for (var j = i, k = (j - 1) >> 1; k >= 0; j = k, k = (k - 1) >> 1) { 
            if (this[k] >= this[j])
                break; 
            this.swap(j, k); 
        } 
    } 
    for (var i = this.length - 1; i > 0; --i){ 
        this.swap(0, i); 
        for (var j = 0, k = (j + 1) << 1; k <= i; j = k, k = (k + 1) << 1){ 
            if (k == i || this[k] < this[k - 1])
                --k; 
            if (this[k] <= this[j])
                break; 
            this.swap(j, k); 
        } 
    } 
}
```



### 文本选中

#### 禁止用户选中文本

```javascript
var clearSlct= "getSelection" in window ? function(){
    window.getSelection().removeAllRanges();
} : function(){
    document.selection.empty();
};

//防止鼠标选中内容（当鼠标松开时清除选中内容）
window.onmouseup=function(){
    clearSlct();
}

//防止通过键盘选中内容（当按键松开时清除选中内容）
window.onkeyup=function(){
    clearSlct();
}
```



### 工具方法

#### 防抖（Debouncing/Debounce）

debounce 的关注点是空闲的间隔时间,强制函数在某段时间内只执行一次。

空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行

```javascript
function debounce(fn,delay){
    var timer;
    return function(){
        var context = this;
        var args = arguments;
        timer&&clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context,args);
        },delay);
    }
}
```

#### 节流（Throttling/Throttle）

throttle 的关注点是连续的执行间隔时间,强制函数以固定的速率执行。

频率控制 返回函数连续调用时，action 执行频率限定为 次 / delay

```javascript
function throttle(fn, threshhold){
    var last;
    var timer;
    threshhold || (threshhold = 250);
    return function(){
        var context = this;
        var args = arguments;
        var now = + new Date();
        if(last && now < last + threshhold){
            timer&&clearTimeout(timer);
            timer = setTimeout(function(){
                last = now;
                fn.apply(context, args);
            },threshhold);
        }else{
            last = now;
            fn.apply(context,args);
        }
    }
```



### 插件模板

#### 根据AMD规范写插件

```javascript
;(function () {
    'use strict';
    function pluginName(layer, options) {
        var something;
        options = options || {};
        this.layer = layer;
        this.param1 = options.param1||'';
    }
    var privateField = '';
    pluginName.prototype.fun1 = function(){

    }
    /**
     * Factory method for creating a object
     */
    pluginName.attach = function(layer, options) {
        return new pluginName(layer, options);
    };
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

        // AMD. Register as an anonymous module.
        define(function() {
            return pluginName;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = pluginName.attach;
        module.exports.pluginName = pluginName;
    } else {
        window.pluginName = pluginName;
    }
}());
```

#### 根据CMD规范写插件

```javascript
;(function(factory) {
    // CMD/SeaJS
    if(typeof define === "function") {
        define(factory);
    }
    // No module loader
    else {
        factory('', window['ue'] = window['ue'] || {}, '');
    }
}(function(require, exports, module) {
    var pluginName = function(options){
        if(this.constructor !== pluginName){
            return new pluginName(options);
        }
        this.init(options);
        return this;
    };

    pluginName.prototype = {
        constructor : pluginName,
        init : function(options){

        }
    }

    if({}.toString.call(module) == '[object Object]' ){
        module.exports = pluginName;
    }else{
        exports.pluginName = pluginName;
    }
}));
```

#### jQuery插件模板

```javascript
;(function ($, window, document, undefined) {
    $.fn.plugin = function(parameter) {
        parameter = parameter || {};
        var defaults = {

        };
        var options = $.extend({}, defaults, parameter);
        return this.each(function () {

        });
    };
})(jQuery, window, document);
```

#### UMD中使用jQuery 插件

```javascript
// Uses CommonJS, AMD or browser globals to create a jQuery plugin.
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.jqueryPlugin = function () { return true; };
}));
```



### 框架

#### Zepto中的IIFE应用

```javascript
(function(global,factory){
    if(typeof define==='function'&& define.amd)
        define(function(){
            return factory(global)
        })
    else factory(global)
}(this,function(window){

}))
```


# 正则表达式



## 分割

#### 1. 数字价格千分位分割

```js
// 将123456789变成123,456,789

'123456789'.replace(/(?!^)(?=(\d{3})+$)/g, ',') 


```

#### 2. 手机号3-4-4分割

```js
// 将手机号18379836654转化为183-7983-6654

let mobile = '18379836654'  
let mobileReg = /(?=(\d{4})+$)/g  
console.log(mobile.replace(mobileReg, '-')) // 183-7983-6654 
```

#### 4. 验证密码的合法性

```js
// 密码长度是6-12位，由数字、小写字母和大写字母组成，但必须至少包括2种字符

let reg = /(((?=.*\d)((?=.*[a-z])|(?=.*[A-Z])))|(?=.*[a-z])(?=.*[A-Z]))^[a-zA-Z\d]{6,12}$/ 
 
console.log(reg.test('123456')) // false 
console.log(reg.test('aaaaaa')) // false 
console.log(reg.test('AAAAAAA')) // false 
console.log(reg.test('1a1a1a')) // true 
console.log(reg.test('1A1A1A')) // true 
console.log(reg.test('aAaAaA')) // true 
console.log(reg.test('1aA1aA1aA')) // true 
```

#### 5. 提取连续重复的字符

```js
// 将有重复的字符提取出来，例如12323454545666，提取[ '23', '45', '6' ]

const collectRepeatStr = (str) => { 
  let repeatStrs = [] 
  const repeatRe = /(.+)\1+/g 
   
  str.replace(repeatRe, ($0, $1) => { 
    $1 && repeatStrs.push($1) 
  }) 
   
  return repeatStrs 
} 
```

#### 6. 实现一个trim函数

```js
// 去除字符串的首尾空格

// 去除空格法 
const trim = (str) => { 
  return str.replace(/^\s*|\s*$/g, '')     
} 
// 提取非空格法 
const trim = (str) => { 
  return str.replace(/^\s*(.*?)\s*$/g, '$1')     
} 
```



## 转义

#### 1. HTML转义

防止XSS攻击的方式之一就是做HTML转义，转义规则如下，要求将对应字符转换成等值的实体。而反转义则是将转义后的实体转换为对应的字符

| 字符 | 转义后的实体 |
| ---- | ------------ |
| `&`  | `&`          |
| ``   | `<`          |
| `>`  | `>`          |
| `"`  | `"`          |
| `'`  | `'`          |

```js
const escape = (string) => { 
  const escapeMaps = { 
    '&': 'amp', 
    ': 'lt', 
    '>': 'gt', 
    '"': 'quot', 
    "'": '#39' 
  } 
  const escapeRegexp = new RegExp(`[${Object.keys(escapeMaps).join('')}]`, 'g') 
 
  return string.replace(escapeRegexp, (match) => `&${escapeMaps[match]};`) 
} 
```

#### 2. HTML反转义

反转义也就是刚才的逆过程

```js
const unescape = (string) => { 
  const unescapeMaps = { 
    'amp': '&', 
    'lt': ', 
    'gt': '>', 
    'quot': '"', 
    '#39': "'" 
  } 
 
  const unescapeRegexp = /&([^;]+);/g 
 
  return string.replace(unescapeRegexp, (match, unescapeKey) => { 
    return unescapeMaps[ unescapeKey ] || match 
  }) 
} 
 
 
console.log(unescape(` 
  <div> 
    <p>hello world</p> 
  </div> 
`)) 
```

#### 3. 将字符串驼峰化

如下规则，将对应字符串变成驼峰写法

```js
//1. foo Bar => fooBar 
//2. foo-bar---- => fooBar 
//3. foo_bar__ => fooBar 

const camelCase = (string) => { 
  const camelCaseRegex = /[-_\s]+(.)?/g 
 
  return string.replace(camelCaseRegex, (match, char) => { 
    return char ? char.toUpperCase() : '' 
  }) 
} 
```

### 4. 将字符串首字母转化为大写

```js
// 例如 hello world 转为为Hello World

const capitalize = (string) => { 
  const capitalizeRegex = /(?:^|\s+)\w/g 
  return string.toLowerCase().replace(capitalizeRegex, (match) => match.toUpperCase()) 
} 


const capitalize = (string) => { 
  const capitalizeRegex = /(?:^|\s+)\w/g 
 
  return string.toLowerCase().replace(capitalizeRegex, (match) => match.toUpperCase()) 
} 
 
console.log(capitalize('hello world')) // Hello World 
console.log(capitalize('hello WORLD')) // Hello World 
```

#### 5. 获取网页中所有img标签的图片地址

要求必须是在线链接 例如 `https://xxx.juejin.com/a.jpg``http://xxx.juejin.com/a.jpg`、`//xxx.juejjin.com/a.jpg`

```js
const matchImgs = (sHtml) => { 
  const imgUrlRegex = /]+src="((?:https?:)?\/\/[^"]+)"[^>]*?>/gi 
  let matchImgUrls = [] 
   
  sHtml.replace(imgUrlRegex, (match, $1) => { 
    $1 && matchImgUrls.push($1) 
  }) 
 
  return matchImgUrls 
} 
```

#### 6.通过name获取url query参数

```js
const getQueryByName = (name) => { 
  const queryNameRegex = new RegExp(`[?&]${name}=([^&]*)(&|$)`) 
  const queryNameMatch = window.location.search.match(queryNameRegex) 
  // 一般都会通过decodeURIComponent解码处理 
  return queryNameMatch ? decodeURIComponent(queryNameMatch[1]) : '' 
} 

// 1. name在最前面 
// https://juejin.cn/?name=前端胖头鱼&sex=boy 
console.log(getQueryByName('name')) // 前端胖头鱼 
 
// 2. name在最后 
// https://juejin.cn/?sex=boy&name=前端胖头鱼 
console.log(getQueryByName('name')) // 前端胖头鱼 
 
 
// 2. name在中间 
// https://juejin.cn/?sex=boy&name=前端胖头鱼&age=100 
console.log(getQueryByName('name')) // 前端胖头鱼 
```

#### 7. 英文单词加前后空格

字母汉字组成的字符串，用正则给英文单词加前后空格。

如：`you说来是come，去是go` => `you 说来是 come ，去是 go` 例子

```js
const wordRegex = /\b/g 
 
console.log('you说来是come，去是go'.replace(/\b/g, ' ')) // ` you 说来是 come ，去是 go ` 
```

#### 8. 字符串大小写取反

将字符串大小写取反，例如hello WORLD => HELLO world

```js
const stringCaseReverseReg = /[a-z]/ig 
const string = 'hello WORLD' 
 
const string2 = string.replace(stringCaseReverseReg, (char) => { 
  const upperStr = char.toUpperCase() 
  // 大写转小写，小写转大写 
  return upperStr === char ? char.toLowerCase() : upperStr 
}) 
 
console.log(string2) // HELLO world 
```



## 判断

#### 1. 匹配24小时制时间

判断时间time是否符合24小时制 要求可以匹配规则如下

```js
const check24TimeRegexp = /^(?:(?:0?|1)\d|2[0-3]):(?:0?|[1-5])\d$/ 

console.log(check24TimeRegexp.test('01:14')) // true 
console.log(check24TimeRegexp.test('23:59')) // true 
console.log(check24TimeRegexp.test('23:60')) // false 
 
console.log(check24TimeRegexp.test('1:14')) // true 
console.log(check24TimeRegexp.test('1:1')) // true 
```

#### 2. 匹配日期格式

要求匹配(yyyy-mm-dd、yyyy.mm.dd、yyyy/mm/dd)，例如`2021-08-22`、`2021.08.22`、`2021/08/22` 可以不考虑平闰年

```js
const checkDateRegexp = /^\d{4}([-\.\/])(?:0[1-9]|1[0-2])\1(?:0[1-9]|[12]\d|3[01])$/ 

console.log(checkDateRegexp.test('2021-08-22')) // true 
console.log(checkDateRegexp.test('2021/08/22')) // true 
console.log(checkDateRegexp.test('2021.08.22')) // true 
console.log(checkDateRegexp.test('2021.08/22')) // false 
console.log(checkDateRegexp.test('2021/08-22')) // false 
```

#### 3. 匹配16进制的颜色值

要求从字符串string中匹配类似 `#ffbbad`、`#FFF`16进制颜色值

```js
const matchColorRegex = /#(?:[\da-fA-F]{6}|[\da-fA-F]{3})/g 
 
const colorString = '#12f3a1 #ffBabd #FFF #123 #586' 
console.log(colorString.match(matchColorRegex)) 
```

#### 4. 检测URL前缀

检查一个url是否是http或者https协议头

```js
const checkProtocol = /^https?:/ 
 
console.log(checkProtocol.test('https://juejin.cn/')) // true 
console.log(checkProtocol.test('http://juejin.cn/')) // true 
console.log(checkProtocol.test('//juejin.cn/')) // false 
```

#### 5. 检测中文

检测字符串str是否是都由中文组成

最重要是要确定中文在unicode的编码范围[汉字 Unicode 编码范围](https://link.juejin.cn/?target=https%3A%2F%2Fwww.qqxiuzi.cn%2Fzh%2Fhanzi-unicode-bianma.php)，如果要加上基本汉字之外的匹配，只需要用多选分支即可

```js
const checkChineseRegex = /^[\u4E00-\u9FA5]+$/ 
 
console.log(checkChineseRegex.test('前端胖头鱼')) 
console.log(checkChineseRegex.test('1前端胖头鱼')) 
console.log(checkChineseRegex.test('前端胖头鱼2')) 
```

#### 6. 匹配手机号

检测一个字符串是否符合手机号的规则

**时效性**

手机号本身是有时效性的，各大运营商有时候会推出新的号码，所以我们的正则也具有时效性，需要及时补充

**规律性**

具体规律可以查看 [中国大陆移动终端通信号码](https://link.juejin.cn/?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E7%A7%BB%E5%8A%A8%E7%BB%88%E7%AB%AF%E9%80%9A%E4%BF%A1%E5%8F%B7%E7%A0%81)

**解析过程**

正则参考自 [ChinaMobilePhoneNumberRegex](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FVincentSit%2FChinaMobilePhoneNumberRegex%2Fblob%2Fmaster%2FREADME-CN.md)

```js
const mobileRegex = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/ 
 
console.log(mobileRegex.test('18379867725')) 
console.log(mobileRegex.test('123456789101')) 
console.log(mobileRegex.test('+8618379867725')) 
console.log(mobileRegex.test('8618379867725')) 
```

#### 7. windows下的文件夹和文件路径

> 要求匹配如下路径

1. C:\Documents\Newsletters\Summer2018.pdf
2. C:\Documents\Newsletters\
3. C:\Documents\Newsletters
4. C:\

```js
const windowsPathRegex = /^[a-zA-Z]:\\(?:[^\\:*|"?\r\n/]+\\?)*(?:(?:[^\\:*|"?\r\n/]+)\.\w+)?$/; 
 
console.log( windowsPathRegex.test("C:\\Documents\\Newsletters\\Summer2018.pdf") ); // true 
console.log( windowsPathRegex.test("C:\\Documents\Newsletters\\") ); // true 
console.log( windowsPathRegex.test("C:\\Documents\Newsletters") ); // true 
console.log( windowsPathRegex.test("C:\\") ); // true 
```

#### 8. 匹配id（写爬虫获取html经常用到）

```js
const matchIdRegexp = /id="([^"]*)"/ 
 
console.log(`hello world`.match(matchIdRegexp)[1])
```

#### 9. 匹配id 扩展（获取掘金首页html所有id）

我们试试能不能批量获取id

```js
const idRegexp = /id="([^"]+)"/g 
 
document.body.innerHTML 
  .match(idRegexp) 
  .map((idStr) => idStr.replace(idRegexp, '$1')) 
```

#### 10. 大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数

```js
const pointRegex = /^150$|^(?:[1-9]?\d|1[0-4]\d)(?:\.5)?$/ 

console.log(pointRegex.test(-1)) // false 
console.log(pointRegex.test(0)) // true  
console.log(pointRegex.test(10)) // true 
console.log(pointRegex.test(100)) // true 
console.log(pointRegex.test(110.5)) // true 
console.log(pointRegex.test(150)) // true 
console.log(pointRegex.test(151)) // false 
```

#### 11. 判断版本号

要求版本号必须是X.Y.Z格式，其中XYZ都是至少一位的数字

```js
// x.y.z 
const versionRegexp = /^(?:\d+\.){2}\d+$/ 
 
console.log(versionRegexp.test('1.1.1')) 
console.log(versionRegexp.test('1.000.1')) 
console.log(versionRegexp.test('1.000.1.1')) 
```