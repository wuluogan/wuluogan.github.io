# Api
## 图片

### 生成头像
```html
<img src="https://xsgames.co/randomusers/avatar.php?g=male">
```
男人(male) 女人(female) 漫画(pixel)


## 网络

### IP地址获取
```angular2html
# 获取ip
http://pv.sohu.com/cityjson?ie=utf-8
```

## 免费文本生成语音

一些免费的文本生成语音服务，使用简单，在不方便自己录制语音的情况，可以用下方 ai 语音自动生成想要说的话，发送链接或直接网页 /app 引用都可。

```url
https://fanyi.sogou.com/reventondc/synthesis?text=这里修改&speed=1&lang=zh-CHS&from=translateweb&speaker=2
```



来自搜狗翻译 `speaker=2` 可修改数字，更换声音。

```
https://tts.baidu.com/text2audio?tex=这里修改&cuid=baike&lan=ZH&ctp=1&pdt=301&vol=9&rate=32&per=3
```



来自百度百科。 `per=3` 可修改数字，更换声音。

```
https://tts.youdao.com/fanyivoice?word=这里修改&le=cn&keyfrom=speaker-target
```


### 天气信息：

- SOJSON：https://www.sojson.com/blog/305.html
- RollToolsApi：[获取特定城市今日天气](https://github.com/MZCretin/RollToolsApi#获取特定城市今日天气)

### 每日一句：

- ONE ● 一个： http://wufazhuce.com/
- 金山词霸 ● 每日一句（双语）：http://open.iciba.com/?c=api
- 一言 ：https://hitokoto.cn/
- 土味情话： https://www.v2ex.com/t/569853 (土)
- 句子迷-民国情书: https://www.juzimi.com/ (高雅，但最近不可用)
- RollToolsApi: [随机获取笑话段子列表](https://github.com/MZCretin/RollToolsApi#随机获取笑话段子列表)
- 彩虹屁: [https://chp.shadiao.app](https://chp.shadiao.app/)

### 人工智能机器人

- 图灵机器人：http://www.turingapi.com/（需求实名制认证，并每天免费数量只有 100 条）
- 青云客智能聊天机器人：http://api.qingyunke.com/（无须申请，无数量限制，但有点智障，分手神器。分手神器，慎用）
- 智能闲聊（腾讯）：https://ai.qq.com/product/nlpchat.shtml ( 申请使用，免费且无限量。大厂靠谱。)
- 天行机器人 ：https://www.tianapi.com/apiview/47 (认证后有 7 万条免费使用。之后收费：1 万条/1 块钱)
- 海知智能 ：https://ruyi.ai/ （功能很强大，不仅仅用于聊天。需申请 key，免费）
- 思知对话机器人：https://www.ownthink.com/ (免费，可不申请 appid)
- 一个AI：http://www.yige.ai/（免费且无数量限制。可自定义回复、对话、场景。但高级功能使用比较复杂。但已长时间没人维护）

### 星座运势

- 星座屋 ：https://www.xzw.com/ (基于爬虫获取数据)

### 万年历

- RollToolsApi ：[指定日期的节假日及万年历信息](https://github.com/MZCretin/RollToolsApi#指定日期的节假日及万年历信息)
- SOJSON ：https://www.sojson.com/api/lunar.html

### 票房数据：

- 猫眼实时票房：https://piaofang.maoyan.com/dashboard

### 垃圾分类查询：

- atoolbox 垃圾分类查询：http://www.atoolbox.net/Tool.php?Id=804

### 空气质量PM2.5查询：

- aqicn：http://aqicn.org/here/





### IP地址

#### 新浪接口

获取当前城市信息

```javascript
http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js
```

获取指定IP所在城市信息

```javascript
http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=218.192.3.42
```

#### 搜狐接口

```javascript
http://pv.sohu.com/cityjson?ie=utf-8
```

#### 淘宝接口

```javascript
http://ip.taobao.com/service/getIpInfo.php?ip=114.114.114.114
```

#### 站长之家接口

```javascript
http://ip.chinaz.com/getip.aspx
```



### 天气

#### 腾讯接口

天气（各城市排行）

```javascript
http://weather.gtimg.cn/aqi/cityrank.json
```

城市ID

```javascript
http://mat1.gtimg.com/weather/index2014/wtData_v2.js
```

获取城市天气（javascript）

```javascript
http://weather.gtimg.cn/city/01010101.js
//http://weather.gtimg.cn/city/{城市ID}.js
```

获取城市天气（jsonp）

```javascript
http://weather.gtimg.cn/aqi/01010508.json
//http://weather.gtimg.cn/aqi/{城市ID}.json
```

调用方法（参考）

```javascript
http://mat1.gtimg.com/weather/index2014/wtEvent_v2.js
```

搜索方法（参考）

```javascript
http://mat1.gtimg.com/weather/index2014/searchEvent_v3.js?v3
```

#### etouch接口

- 通过城市名字获得天气数据（json）
  http://wthrcdn.etouch.cn/weather_mini?city=北京市
- 通过城市ID获得天气数据（json）
  http://wthrcdn.etouch.cn/weather_mini?citykey=101010100
- 通过城市名字获得天气数据（xml）
  http://wthrcdn.etouch.cn/WeatherApi?city=北京市
- 通过城市ID获得天气数据（xml）
  http://wthrcdn.etouch.cn/WeatherApi?citykey=101010100



### 股票

#### 指数接口

- 上证指数

```javascript
http://qt.gtimg.cn/q=s_sh000001
```

- 道琼斯指数

```javascript
http://qt.gtimg.cn/q=s_usDJI
```

- 腾讯济安

```javascript
http://qt.gtimg.cn/q=s_sh000847
```

- 恒生指数

```javascript
http://qt.gtimg.cn/q=s_r_hkHSI
```

#### 股票行情接口

```javascript
http://sqt.gtimg.cn/q=sh600519
//返回
v_sh600519="1~贵州茅台~600519~456.86~452.55~454.00~56259~27176~29084~456.80~4~456.68~8~456.67~1~456.62~4~456.61~1~456.81~11~456.87~2~456.89~1~456.90~1~456.97~1~14:59:59/456.80/6/M/274055/28944|14:59:59/456.80/3/B/137040/28937|14:59:53/456.69/7/S/319760/28928|14:59:50/456.81/17/S/776642/28925|14:59:47/456.89/5/B/228435/28920|14:59:44/456.81/8/S/365448/28916~20170719150557~4.31~0.95~463.62~452.80~456.80/56259/2574934655~56259~257493~0.45~31.97~~463.62~452.80~2.39~5739.08~5739.08~7.26~497.81~407.30~2.03";
```

###### 代码含义[以~分割字符串,下标从0开始]

0: 未知 1: 股票名字 2: 股票代码 3: 当前价格 4: 昨收 5: 今开 6: 成交量（手） 7: 外盘 8: 内盘 9: 买一 10: 买一量（手） 11-18: 买二 买五 19: 卖一 20: 卖一量 21-28: 卖二 卖五 29: 最近逐笔成交 30: 时间 31: 涨跌 32: 涨跌% 33: 最高 34: 最低 35: 价格/成交量（手）/成交额 36: 成交量（手） 37: 成交额（万） 38: 换手率 39: 市盈率 40: 41: 最高 42: 最低 43: 振幅 44: 流通市值 45: 总市值 46: 市净率 47: 涨停价 48: 跌停价



### 壁纸

#### Bing壁纸

接口一：

```javascript
http://cn.bing.com/iod/1366/1024/201706221600
```

接口二：w表示宽度,h高度,t表示时间

```javascript
http://cn.bing.com/ImageResolution.aspx?w=1366&h=1024&t=2017622
```





### GitHub加速

GitHub 加速下载：http://toolwa.com/Github

GitHub 文件加速：[https://gh.api.99988866.xyz](https://gh.api.99988866.xyz/)

GitHub Proxy：[https://ghproxy.com](https://ghproxy.com/)

加速你的Github：[https://github.zhlh6.cn](https://github.zhlh6.cn/)

GitHub文件下载：[https://d.serctl.com](https://d.serctl.com/)

Fastgit：https://hub.fastgit.org



GitHub 加速下载：http://toolwa.com/Github



GitHub 文件加速：https://gh.api.99988866.xyz



GitHub Proxy：https://ghproxy.com



加速你的Github：https://github.zhlh6.cn



GitHub文件下载：https://d.serctl.com