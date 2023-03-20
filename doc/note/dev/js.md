
## 配置

1.通过cnpm使用淘宝镜像：

```javascript
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

复制

2.将npm设置为淘宝镜像：

```javascript
npm config set registry https://registry.npm.taobao.org
```

复制

3\. 查看cnpm镜像设置：

```javascript
cnpm config get registry 
```

### NVM 切换 NodeJs 版本
NVM 是 Mac 下的 node 管理工具， 如果需要管理 Windows 下的 node，官方推荐使用 `nvmw` 或 `nvm-windows`，不过，`nvm-windows` 并不是 nvm 的简单移植，他们也没有任何关系。

大部分情况下，Windows 下的 nvm 和 mac 里的 nvm 使用都没有大的差异，基本上是一致的，会有个别命令不太相同，这个下文中我会和大家梳理。

安装之前记得先把自己之前安装的 NodeJS 删除掉，否则可能会起冲突。

Windows 上好说，控制面板找到对应的文件直接卸载即可，Mac 上则执行如下命令删除：
```angular2html
sudo npm uninstall npm -g

sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*

sudo rm -rf /usr/local/include/node /Users/$USER/.npm

sudo rm /usr/local/bin/node

sudo rm /usr/local/share/man/man1/node.1

sudo rm /usr/local/lib/dtrace/node.d
```

一顿操作下来，然后执行如下命令，如果找不到对应的命令，那就表示删除成功了：
```angular2html
node -v
// -bash: /usr/local/bin/node: No such file or directory

npm -v
// -bash: /usr/local/bin/npm: No such file or directory
```

Windows 上有一个 exe 文件，直接双击安装就行了，这个没啥好说的。

Mac 或者 Linux 上我们则直接可以在线安装，非常方便：

可以使用 curl 命令安装：
```angular2html
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

```


也可以使用 wget 命令安装：
```angular2html
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

```


执行完成后，通过 `nvm -v` 命令可以查看是否安装成功：

3. 使用

使用命令也是比较容易的。给小伙伴们列举一个常见的命令：

指定当前 Node 版本：
```angular2html
$ nvm install 12
Now using node v12.22.6 (npm v6.14.5)
$ node -v
v12.22.6
```

安装一个 Node 版本：
```angular2html
$ nvm install 12
Now using node v12.22.6 (npm v6.14.5)
$ node -v
v12.22.6
```


查看目前已安装的 Node 版本：
```angular2html
nvm ls
```

查看有哪些可用的 Node 版本：
```angular2html
# Mac
nvm ls-remote
# Windows
nvm list available
```

## 代码
今天休息休息，复习一下使用的简洁运算方式以及常用的单行代码

### 三元运算符

用三元运算符代替简单的`if else`

```
if (age < 18) { 
  me = '小姐姐'; 
} else { 
  me = '老阿姨'; 
} 
```

改用三元运算符,一行就能搞定

```
me = age < 18 ? '小姐姐' : '老阿姨'; 
```

复杂的判断三元运算符就有点不简单易懂了

```
const you = "董员外" 
const your = "菜鸡本鸡" 
const me = you ？"点再看":your？"点赞":"分享" 
```

### 判断

当需要判断的情况不止一个时,第一个想法就是使用 `||` 或运算符

```
if( 
    type == 1 || 
    type == 2 || 
    type == 3 || 
    type == 4 || 
){ 
   //... 
} 
```

ES6中的includes一行就能搞定

```
if( [1,2,3,4,5].includes(type) ){ 
   //... 
} 
```

### 取值

在写代码的时候，经常会用到取值的操作

```
const obj = { 
    a:1, 
    b:2, 
    c:3, 
} 
//老的取值方式 
const a = obj.a; 
const b = obj.b; 
const c = obj.c; 
```

老的取值方式，直接用对象名加属性名去取值。如果使用ES6的**解构赋值**一行就能搞定

```
const {a,b,c} = obj; 
```

### 获取对象属性值

在编程的过程中经常会遇到获取一个值并赋给另一个变量的情况，在获取这个值时需要先判断一下这个对象是否存在，才能进行赋值

```
if(obj && obj.name){ 
  const name = obj.name 
} 
```

ES6提供了可选连操作符`?.`，可以简化操作

```
const name = obj?.name; 
```

### 反转字符串

将一个字符串进行翻转操作，返回翻转后的字符串

```
const reverse = str => str.split('').reverse().join(''); 
 
reverse('hello world');   // 'dlrow olleh' 
```

### 生成随机字符串

生成一个随机的字符串，包含字母和数字

```
const randomString = () => Math.random().toString(36).slice(2); 
//函数调用 
randomString(); 
```

### 数组去重

用于移除数组中的重复项

```
const unique = (arr) => [...new Set(arr)]; 
 
console.log(unique([1, 2, 2, 2, 3, 4, 4, 5, 6, 6])); 
```

### 数组对象去重

去除重复的对象，对象的key值和value值都分别相等，才叫相同对象

```
const uniqueObj = (arr, fn) =>arr.reduce((acc, v) => {if (!acc.some(x => fn(v, x))) acc.push(v);return acc;}, []); 
  
uniqueObj([{id: 1, name: '大师兄'}, {id: 2, name: '小师妹'}, {id: 1, name: '大师兄'}], (a, b) => a.id == b.id) 
// [{id: 1, name: '大师兄'}, {id: 2, name: '小师妹'}] 
```

### 合并数据

当我们需要合并数据，并且去除重复值时，你是不是要用for循环？ ES6的扩展运算符一行就能搞定！！！

```
const a = [1,2,3]; 
const b = [1,5,6]; 
const c = [...new Set([...a,...b])];//[1,2,3,5,6] 
```

### 判断数组是否为空

判断一个数组是否为空数组，它将返回一个布尔值

```
const notEmpty = arr => Array.isArray(arr) && arr.length > 0; 
 
notEmpty([1, 2, 3]);  // true 
```

### 交换两个变量

```
//旧写法 
let a=1; 
let b=2; 
let temp; 
temp=a 
a=b 
b=temp 
 
//新写法 
[a, b] = [b, a]; 
```

### 判断奇还是偶

```
const isEven = num => num % 2 === 0; 
 
isEven(996);  
```

### 获取两个数之间的随机整数

```
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); 
 
random(1, 50); 
```

### 检查日期是否为工作日

传入日期，判断是否是工作日

```
const isWeekday = (date) => date.getDay() % 6 !== 0; 
console.log(isWeekday(new Date(2021, 11, 11))); 
// false  
console.log(isWeekday(new Date(2021, 11, 13))); 
// true 
```

## 高级

### 滚动到页面顶部

不用引入element-ui等框架，一行代码就能实现滚动到顶部

```
const goToTop = () => window.scrollTo(0, 0); 
goToTop(); 
```

### 浏览器是否支持触摸事件

通过判断浏览器是否有`ontouchstart`事件来判断是否支持触摸

```
const touchSupported = () => { 
  ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch); 
} 
console.log(touchSupported()); 
```

### 当前设备是否为苹果设备

前端经常要兼容andriod和ios

```
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform); 
console.log(isAppleDevice); 
// Result: will return true if user is on an Apple device 
```

### 复制内容到剪切板

使用 navigator.clipboard.writeText 来实现将文本复制到剪贴板

```
const copyToClipboard = (text) => navigator.clipboard.writeText(text); 
 
copyToClipboard("双十一来了~"); 
```

### 检测是否是黑暗模式

用于检测当前的环境是否是黑暗模式，返回一个布尔值

```
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
 
console.log(isDarkMode) 
```

### 网站变成黑白

有时候网站在某种特定的情况下，需要使整个网站变成黑白的颜色

```
filter:grayscale(100%) 
```

只需要将这一行代码`filter:grayscale(100%)`放到body上，一下就能致黑