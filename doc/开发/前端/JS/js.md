
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




# 获取当前日期的周一、周末的日期

```
export function getWeeekdata(cdate){  //cdate 传来当前的时间 
   let now = new Date(cdate); 
   let year = now.getFullYear(); 
   let month = now.getMonth() + 1; 
   let date = now.getDate(); 
   let nowTime = now.getTime(); 
   let day = now.getDay(); 
   let oneDayTime = 24 * 60 * 60 * 1000; 
   //显示周一 
   var MondayTime = nowTime - (day - 1) * oneDayTime; 
   //显示周日 
   var SundayTime = nowTime + (7 - day) * oneDayTime; 
   //初始化日期时间 
   var monday = new Date(MondayTime); 
   var sunday = new Date(SundayTime); 
   return [format(monday), format(sunday)]; 
 } 
 function format(date) { 
   var time = new Date(date); 
   var y = time.getFullYear(); 
   var m = 
     time.getMonth() + 1 < 10 ? "0" + time.getMonth() + 1 : time.getMonth() + 1; 
   var d = time.getDate() < 10 ? "0" + time.getDate() : time.getDate(); 
   //var h = time.getHours(); 
   //var mm = time.getMinutes(); 
   //var s = time.getSeconds(); 
   return y + "-" + m + "-" + d; 
 } 
 
```

# 根据当前时间获取当月的1号和最后一号

```
 export function getcurentMonth(cdate) { //cdate传来的当前的时间 
   
   // 当天 
   let thatDay = ""; 
   // 当月第一天 
   let oneDayTime = ""; 
   // 当月最后一天 
   let zDay = ""; 
   let date = new Date(cdate); 
   let curr_date = date.getDate(); 
   let curr_month = date.getMonth() + 1; 
   let curr_year = date.getFullYear(); 
   String(curr_month).length < 2 ? (curr_month = "0" + curr_month) : curr_month; 
   String(curr_date).length < 2 ? (curr_date = "0" + curr_date) : curr_date; 
   thatDay = curr_year + "-" + curr_month + "-" + curr_date; 
 
   String(curr_year).length < 2 ? (curr_year = "0" + curr_year) : curr_year; 
   var m = date.getMonth() + 1; 
   String(m).length < 2 ? (m = "0" + m) : m; 
   var d = "01"; 
   oneDayTime = curr_year + "-" + m + "-" + d; 
   //结束时间 
   var currentMonth = date.getMonth(); 
   var nextMonth = ++currentMonth; 
   var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1); 
   var oneDay = 1000 * 60 * 60 * 24; 
   var date1 = new Date(nextMonthFirstDay - oneDay); 
   var yy = date1.getFullYear(); 
   String(yy).length < 2 ? (yy = "0" + yy) : yy; 
   var mm = date1.getMonth() + 1; 
   String(mm).length < 2 ? (mm = "0" + mm) : mm; 
   var dd = date1.getDate(); 
   String(dd).length < 2 ? (dd = "0" + dd) : dd; 
   zDay = yy + "-" + mm + "-" + dd; 
   return [thatDay, oneDayTime, zDay]; 
 } 
 
```

# 判断文件上传的类型

```
/** 
 * @param: fileName - 文件名称 
 * @param: 数据返回 1) 无后缀匹配 - false 
 * @param: 数据返回 2) 匹配图片 - image 
 * @param: 数据返回 3) 匹配 txt - txt 
 * @param: 数据返回 4) 匹配 excel - excel 
 * @param: 数据返回 5) 匹配 word - word 
 * @param: 数据返回 6) 匹配 pdf - pdf 
 * @param: 数据返回 7) 匹配 ppt - ppt 
 * @param: 数据返回 8) 匹配 视频 - video 
 * @param: 数据返回 9) 匹配 音频 - radio 
 * @param: 数据返回 10) 其他匹配项 - other 
 * @author: ljw 
 **/ 
 
export function fileSuffixTypeUtil(fileName){ 
      // 后缀获取 
    var suffix = ""; 
    // 获取类型结果 
    var result = ""; 
    try { 
      var flieArr = fileName.split("."); 
      suffix = flieArr[flieArr.length - 1]; 
    } catch (err) { 
      suffix = ""; 
    } 
    // fileName无后缀返回 false 
    if (!suffix) { 
      result = false; 
      return result; 
    } 
    // 图片格式 
    var imglist = ["png", "jpg", "jpeg", "bmp", "gif"]; 
    // 进行图片匹配 
    result = imglist.some(function (item) { 
      return item == suffix; 
    }); 
    if (result) { 
      result = "image"; 
      return result; 
    } 
    // 匹配txt 
    var txtlist = ["txt"]; 
    result = txtlist.some(function (item) { 
      return item == suffix; 
    }); 
    if (result) { 
      result = "txt"; 
      return result; 
    } 
    // 匹配 excel 
    var excelist = ["xls", "xlsx"]; 
    result = excelist.some(function (item) { 
      return item == suffix; 
    }); 
    if (result) { 
      result = "excel"; 
      return result; 
    } 
    // 匹配 word 
    var wordlist = ["doc", "docx"]; 
    result = wordlist.some(function (item) { 
      return item == suffix; 
    }); 
    if (result) { 
      result = "word"; 
      return result; 
    } 
    // 匹配 pdf 
    var pdflist = ["pdf"]; 
    result = pdflist.some(function (item) { 
      return item == suffix; 
    }); 
    if (result) { 
      result = "pdf"; 
      return result; 
    } 
    // 匹配 ppt 
    var pptlist = ["ppt"]; 
    result = pptlist.some(function (item) { 
      return item == suffix; 
    }); 
    if (result) { 
      result = "ppt"; 
      return result; 
    } 
    // 匹配 视频 
    var videolist = ["mp4", "m2v", "mkv"]; 
    result = videolist.some(function (item) { 
      return item == suffix; 
    }); 
    if (result) { 
      result = "video"; 
      return result; 
    } 
    // 匹配 音频 
    var radiolist = ["mp3", "wav", "wmv"]; 
    result = radiolist.some(function (item) { 
      return item == suffix; 
    }); 
    if (result) { 
      result = "radio"; 
      return result; 
    } 
    // 其他 文件类型 
    result = "other"; 
    return result; 
}; 
```


### 自动更新
```
$(function(){
                        var time         = 0;
                        var is_hls       = "1";
                        var storage      = window.localStorage;
                        var learntime    = 0,player_seek_time = 0,setLearntime = null;
                        var is_drag      = parseInt("0"); // 控制拖动进度条 [ 1：可拖动，0：不可拖动] 
                        var content      = "成都 XX 科技有限公司所有权   ";
                        var learn_record = parseInt("40");

                        if(is_hls == 1){
                        
                        	var myPlayer   = videojs('my-video',{
                                 loop:false,
                                 controlBar: {
                                     LiveDisplay: false,
                                     playbackRateMenuButton:{
                                       //  playbackRates:[0.5,1.0,1.5,2.0,2.5]
                                     }
                                 }
                             },function(){
                                 $("#marquee_content").text(content);
                             });
                             //添加视频准备完成后的回调函数
                             myPlayer.on('loadedmetadata', function() {
                                
                          
                            	 //自动播放
                             if(learn_record){
                                     myPlayer.currentTime(learn_record);    //续播
                                     myPlayer.play();
                                     storage.setItem("play_time_155_1722_5091", learn_record);
                                 }
                                 // 初始化完成未播放时拖动进度
                              if(!is_drag){
                                     var play_time = parseInt(storage.getItem("play_time_155_1722_5091"));
                                     currentTime   = parseInt(myPlayer.currentTime());
                                     if( currentTime-play_time>1 ){
                                         myPlayer.currentTime(play_time);
                                     }
                                 }

                             });
                             //监听进度条时间
                             time = myPlayer.duration();
                             myPlayer.on('timeupdate',videojstimeupdate);
                            
                            
                            
                        }else{
                        	
                        	
                        	
                            var myPlayer = document.getElementById('my-video');
                            //添加视频准备完成后的回调函数
                            myPlayer.addEventListener('loadedmetadata', function() {
                                                          // 自动播放
                                $("#marquee_content").text(content);     // 跑马灯
               
                            if(learn_record){
                                    myPlayer.currentTime=learn_record;  // 续播
                                    myPlayer.play();
                                    storage.setItem("play_time_155_1722_5091", learn_record);
                                    
                                } 
                                // 初始化完成未播放时拖动进度
                            /*     if(!is_drag){
                                    var play_time = parseInt(storage.getItem("play_time_155_1722_5091"));
                                    currentTime   = parseInt(myPlayer.currentTime);
                                    if( currentTime-play_time>1 ){
                                        myPlayer.currentTime = play_time ;
                                    }
                                } */

                            });
                            
                            
                            
                            
                            //监听进度条时间
                            time = myPlayer.duration;
                            myPlayer.addEventListener('timeupdate',videotimeupdate);
                        }

                        //监听播放时间
                        function setTime(){
                            learntime = learntime+1;
                           }

                        //播放
                        function videojsplay() {
                        	
                        	  if(learn_record){
                                  myPlayer.currentTime(learn_record);    //续播
                                  myPlayer.play();
                                  storage.setItem("play_time_155_1722_5091", learn_record);
                              }else{
                            	  
                            	  setLearntime = setInterval(setTime, 1000);
                              }
                        	
                        	 
                          }

                         if(is_hls == 1){
                            myPlayer.on('play', videojsplay);
                            myPlayer.on('pause',videojspause);
                            myPlayer.on('ended', videojsended);
                            //暂停
                         function videojspause() {
                                clearInterval(setLearntime);
                                var times      = parseInt(myPlayer.currentTime());
                                var total_time = parseInt(myPlayer.duration());
                                if(times > 2){
                                    addLearnLog(times , total_time,1);
                                }
                            }
                            //结束
                            function videojsended() {
                                clearInterval(setLearntime);
                                var times      = parseInt(myPlayer.currentTime());
                                var total_time = parseInt(myPlayer.duration());
                                if(times > 2){
                                    addLearnLog(times , total_time,1);
                                }
                                if( total_time != 0 && times >= total_time ){
                                    // 获取下一解锁课时并跳转
                                    $.ajax({
                                        type: "POST",
                                        url:"http://xbzj.masterol.cn/index.php?app=course&mod=Video&act=getNextSection",
                                        data:{vid:"155",sid:"1722"},
                                        dataType:"json",
                                        success:function(data){
                                            if(data){
                                                var height = $('#vplayer').height();
                                                var width = $('#vplayer').width();
                                                var index = ui.open({
                                                    type:3,
                                                    icon:2,
                                                    shade: [0.7, '#fff'], //0.1 透明度的白色背景
                                                    offset: [height / 2+'px', width / 2+'px'],
                                                });
                                                setTimeout(function(){
                                                    window.location.href = data;
                                                }, 800);
                                            }
                                        }
                                    });
                                }
                            }
                        }else{
                            myPlayer.addEventListener('play',videojsplay);
                            myPlayer.addEventListener('pause',videojspause);
                            myPlayer.addEventListener('ended', videojsended);
                            //暂停
                            function videojspause() {
                                clearInterval(setLearntime);
                                var times      = parseInt(myPlayer.currentTime);
                                var total_time = parseInt(myPlayer.duration);
                                if(times > 2){
                                    addLearnLog(times , total_time,1);
                                }
                            }
                            //结束
                            function videojsended() {
                                clearInterval(setLearntime);
                                var times      = parseInt(myPlayer.currentTime);
                                var total_time = parseInt(myPlayer.duration);
                                if(times > 2){
                                    addLearnLog(times , total_time,1);
                                }
                                if( total_time != 0 && times >= total_time ){
                                    // 获取下一解锁课时并跳转
                                    $.ajax({
                                        type: "POST",
                                        url:"http://xbzj.masterol.cn/index.php?app=course&mod=Video&act=getNextSection",
                                        data:{vid:"155",sid:"1722"},
                                        dataType:"json",
                                        success:function(data){
                                            if(data){
                                                var height = $('#vplayer').height();
                                                var width = $('#vplayer').width();
                                                var index = ui.open({
                                                    type:3,
                                                    icon:2,
                                                    shade: [0.7, '#fff'], //0.1 透明度的白色背景
                                                    offset: [height / 2+'px', width / 2+'px'],
                                                });
                                                setTimeout(function(){
                                                    window.location.href = data;
                                                }, 800);
                                            }
                                        }
                                    });
                                }
                            }
                        }

                     
                  
                            
                         if(!is_drag){
                            var play_time = parseInt(storage.getItem("play_time_155_1722_5091"));

                             if(curr_times-times>1){
                        	    console.log('1307'+curr_times+'-'+play_time+'--'+times);
                        	    myPlayer.currentTime(play_time);
                        	    storage.setItem("play_time_155_1722_5091", play_time);
                               }   
        
                            }
                            
       
                            if( total_time != 0 && curr_times >= total_time ){
                                // 获取下一解锁课时并跳转
                                $.ajax({
                                    type: "POST",
                                    url:"http://xbzj.masterol.cn/index.php?app=course&mod=Video&act=getNextSection",
                                    data:{vid:"155",sid:"1722"},
                                    dataType:"json",
                                    success:function(data){
                                        if(data){
                                            var height = $('#vplayer').height();
                                            var width = $('#vplayer').width();
                                            var index = ui.open({
                                                type:3,
                                                icon:2,
                                                shade: [0.7, '#fff'], //0.1 透明度的白色背景
                                                offset: [height / 2+'px', width / 2+'px'],
                                            });
                                            setTimeout(function(){
                                                window.location.href = data;
                                            }, 800);
                                        }
                                    }
                                });
                            }

                            if( times     != parseInt(myPlayer.currentTime()) ){
                                times      = parseInt(myPlayer.currentTime());
                                if(times > 0 && times % 4 == 0 ){
                                    addLearnLog(times , total_time , 0);  //0 表示不及时更新学习记录，即 4 秒一次
                                }
                                storage.setItem( 'learn_curr_time', times);
                            }

                            if(is_free == 0 && free == 0){
                                if (times > test_time){
                                    myPlayer.pause();
                                    $("#vplayer").html('');
                                    $(".vedioPlay-msg").css("display","block");
                                }
                            }
                        }

                        //video 时间更新
                        function videotimeupdate() {
                            var test_time  = 5;
                            var is_free    = 1;//课程是否免费
                         var free       = 0;//课时是否免费

                         var total_time = parseInt(myPlayer.duration);
                            var times      = storage.getItem('learn_curr_time');
                            var curr_times = parseInt(myPlayer.currentTime);

                            // 拖动进度
                            if(!is_drag){
                                var play_time = parseInt(storage.getItem("play_time_155_1722_5091"));

                                 if(curr_times-times>1){
                            	    console.log('1307'+curr_times+'-'+play_time+'--'+times);
                            	    myPlayer.currentTime = play_time;
                            	    storage.setItem("play_time_155_1722_5091", play_time);
                                   }   
            
                                }

                            if( total_time != 0 && curr_times >= total_time ){
                                // 获取下一解锁课时并跳转
                                $.ajax({
                                    type: "POST",
                                    url:"http://xbzj.masterol.cn/index.php?app=course&mod=Video&act=getNextSection",
                                    data:{vid:"155",sid:"1722"},
                                    dataType:"json",
                                    success:function(data){
                                        if(data){
                                            var height = $('#vplayer').height();
                                            var width = $('#vplayer').width();
                                            var index = ui.open({
                                                type:3,
                                                icon:2,
                                                shade: [0.7, '#fff'], //0.1 透明度的白色背景
                                                offset: [height / 2+'px', width / 2+'px'],
                                            });
                                            setTimeout(function(){
                                                window.location.href = data;
                                            }, 800);
                                        }
                                    }
                                });
                            }

                            if( times     != parseInt(myPlayer.currentTime) ){
                                times      = parseInt(myPlayer.currentTime);
                                if(times > 0 && times % 4 == 0 ){
                                    addLearnLog(times , total_time , 0);  //0 表示不及时更新学习记录，即 4 秒一次
                                }
                                storage.setItem( 'learn_curr_time', times);
                            }

                            if(is_free == 0 && free == 0){
                                if (times > test_time){
                                    myPlayer.pause();
                                    $("#vplayer").html('');
                                    $(".vedioPlay-msg").css("display","block");
                                }
                            }
                        }

                        //添加观看记录
                        function addLearnLog(timespan , total_time , is_true){
                            var t          = parseInt(timespan);
                            var total_time = parseInt(total_time);
                            var video_type = "5";

                            if((t && (t % 4 == 0)) || is_true == 1){

                                $.ajax({
                                    type: "POST",
                                    url:"http://xbzj.masterol.cn/index.php?app=course&mod=Video&act=updateLearn",
                                    data:{time:t,player_seek_time:learntime,vid:"155",sid:"1722",totaltime:total_time,is_true:is_true,type:video_type},
                                    dataType:"json",
                                    success:function(data){
                                    	
                                      if(data.status=='0'){
                                       	    console.log('修正--'+t+'-'+data.time);
                                       	    
                                       	   if(is_hls == 1){
                                       		  myPlayer.currentTime(data.time);	
                                       	    }else{
                                       	      myPlayer.currentTime = data.time;
                                       	    }
                                       	    storage.setItem("play_time_155_1722_5091", data.time);
                                            ui.error('禁止多次拖动快进！');
                                            return;
                                       }else if(data.status=='-1'){
                                       	
                                       	    ui.error('您的登录已过期，请重新登录');
                                       	    var callbacklogin = "location.href ='/login.html'";
                                            setTimeout(callbacklogin,3000);
                                            return false;
                                       }else{
                                       	
                                       	
                                       }
                                    }
                                });

                            }
                        }
                          });  
```