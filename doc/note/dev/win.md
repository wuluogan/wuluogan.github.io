# Win

## 
CSDN广告完全过滤
https://greasyfork.org/zh-CN/scripts/378351-%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0-csdn%E5%B9%BF%E5%91%8A%E5%AE%8C%E5%85%A8%E8%BF%87%E6%BB%A4-%E4%BA%BA%E6%80%A7%E5%8C%96%E8%84%9A%E6%9C%AC%E4%BC%98%E5%8C%96-%E4%B8%8D%E7%94%A8%E5%86%8D%E7%99%BB%E5%BD%95%E4%BA%86-%E8%AE%A9%E4%BD%A0%E4%BD%93%E9%AA%8C%E4%BB%A4%E4%BA%BA%E6%83%8A%E5%96%9C%E7%9A%84%E5%B4%AD%E6%96%B0csdn


## 技巧

### 在右键新建项中添加新建Markdown文件快捷选项
1. 新建一个 test.txt 文本文件，写入以下代码内容
```
Windows Registry Editor Version 5.00 
[HKEY_CLASSES_ROOT\.md] 
@="Typora.md" 
"Content Type"="text/markdown" 
"PerceivedType"="text" 
[HKEY_CLASSES_ROOT\.md\ShellNew] 
"NullFile"="" 
```
2. 然后文件另存文件名称随意， 后缀`.txt`修改为`.reg`的注册表文件
3. 然后双击运行! 现在右键的新建项中就会有`markdown`的快捷新建方式了!

## 软件
### IDEA

#### 设置Intellij IDEA中全文搜索的file mask属性
找到IDEA的配置文件find.xml【每个人的可能不一样】
我的路径是：C:\Users\Letsuner\AppData\Roaming\JetBrains\IntelliJIdea2021.1\options
```angular2html
<application>
  <component name="FindSettings">
    <option name="customScope" value="All Places" />
    <option name="defaultScopeName" value="All Places" />
    <option name="SEARCH_SCOPE" value="All Places" />
    <option name="FILE_MASK" value="*.java" />
	<mask>*.java</mask>
	<mask>*.xml</mask>
	<mask>*.yml</mask>
	<mask>*.properties</mask>
	<mask>*.html</mask>
	<mask>*.css</mask>
	<mask>*.js</mask>
	<mask>*.jsp</mask>
	<mask>*.vue</mask>
	<mask>*.md</mask>
	<mask>*.json</mask>
    <mask>*.py</mask>
    <mask>*.go</mask>
    <mask>*.groovy</mask>
  </component>
</application>
```
#### IDEA通过正则跨行搜索
```angular2html
(?is)key1.*?key2
```
如果没有加(?is)则是单行搜索


### VSCode


```json
 "openInExternalApp.openMapper": [

        {
            "extensionName": "html",
            "apps": [
                {
                    "title": "chrome",
                    "openCommand": "C:\\Users\\Admin\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe"
                }
               
            ]
        },
        {
            "extensionName": "md",
            "apps": [
                {
                    "title": "typora",
                    "openCommand":"C:\\Program Files\\Typora\\Typora.exe"
                }
            ]
            
        }
    ],
```

### 快捷键
idea快捷键：ctrl+F

### CMD命令

**ipconfig**
功能：查询本机IP地址
操作方法：只要在在打开的cmd命令界面中输入`ipconfig`就可以了。

**msg**
功能：向对方电脑发送一条文本提示
操作方法：首先你要知道对方的IP地址，接下来输入命令`msg /server:对方电脑IP *` 。在*后输入你要发送的内容即可。



**Net user**
功能：查看本机账户情况
操作方法：和ipconfig一样，net user也有很多衍生的命令后缀，比方说`net user xxx 123456 /add`，输入后就会在系统中创建一个名为“xxx”的新用户，而新用户密码则是“123456”。



**Net share**
作用：查看共享资源
操作方法：在cmd界面中输入`net share`查看所有已共享资源，然后输入`net share 要删除的共享文件夹 /delete`就可以啦！



**Nslookup**
作用：检查网站IP地址
操作方法：在提示符状态输入`nslookup 对方网站域名`，哒哒哒哒……结果出来了！



**Netsh wlan show**
作用：探秘Wi-Fi配置文件
操作方法：在提示符状态输入命令`netsh wlan show profile SSID key=clear`，输入完成后Windows会自动返回当前已连接WIFI的详细信息，包括SSID和连接密码。当前这里有一个前提，那就是你现在已经成功连接了。





**telnet**
作用：看电影《星球大战》
操作方法：在提示符状态输入命令`telnet towel.blinkenlights.nl`，输入完成后稍等一会即可，电影会自动开演



**|**
作用：将命令结果输出到剪贴板
操作方法：在需要导出结果的命令后方添加“|”，再加入导出位置就可以了。比方说“`| clip`”是导出到剪贴板，“`| xxx.txt`”是导出到xxx.txt。总之，你需要什么地方用，就放到哪儿，“|”支持绝大多数CMD指令。





**&&**
作用：将多个命令“连接”起来，一步运行多组命令
操作方法：&&是CMD里一项“命令连接”语句，直接放在要连接的命令行中间即可。效果就是下图所示，一次输入后CMD会顺序执行所有命令。



## 软件
### VPN
1、IOS 客户端
小火箭、圈、圈X等等，但是都要收费，不存在什么破解版，只能自行购买，就不放链接了，不然有推广嫌疑！
2、安卓手机客户端
Clash for Android(支持SS/Snell/Vmess)：https://github.com/Kr328/ClashForAndroid/releases
ClashR for Android (支持SS/Snell/Vmess/SSR)：https://clashr.tgbot.co/file
v2rayNG(支持SS/Vmess)Google Play：https://github.com/2dust/v2rayNG/releases
Shadowsocks 影梭(支持SS)Google Play Beta 版：https://github.com/shadowsocks/shadowsocks-android/releases
ShadowsocksR (简称:SSR)：https://github.com/shadowsocksr-backup/shadowsocksr-android/releases
3、Windows客户端
Clash for Windows (支持SS/Snell/Vmess)：https://github.com/Fndroid/clash_for_windows_pkg/releases
Clash (支持SS/Snell/Vmess)：https://github.com/Dreamacro/clash/releases
v2rayN (支持SS/Vmess)：https://github.com/2dust/v2rayN/releases
v2ray-core：https://github.com/v2ray/v2ray-core/releases
Shadowsocks (支持SS)：https://github.com/shadowsocks/shadowsocks-windows/releases
simple-obfs (SS的插件)：https://github.com/shadowsocks/simple-obfs/releases
Shadowsocks 2.3.1（XP 系统可用）：https://github.com/shadowsocks/shadowsocks-windows/releases/tag/2.3.1
ShadowsocksR (简称:SSR)：https://github.com/shadowsocksr-backup/shadowsocksr-csharp/releases
ShadowsocksR 4.7.0：thunder://QUFodHRwczovL2F1c2Vycy5naXRodWIuaW8vZmlsZXMvU2hhZG93c29ja3NSXzQuNy4wX1dpbmRvd3MuN3paWg==
4、macOS 客户端
Surge for Mac(支持SS/Snell/Vmess)：https://nssurge.com
ClashX (支持SS/Snell/Vmess)：https://github.com/yichengchen/clashX/releases
Clash (支持SS/Snell/Vmess)：https://github.com/Dreamacro/clash/releases
ShadowsocksX：https://github.com/shadowsocks/shadowsocks-iOS/releases
ShadowsocksX-NG (支持SS)：https://github.com/shadowsocks/ShadowsocksX-NG/releases
ShadowsocksX-NG-R8 (支持SS/SSR)：https://github.com/qinyuhang/ShadowsocksX-NG-R/releases
ShadowsocksX-NG-R：https://github.com/leadscloud/ShadowsocksX-NG-R/releases