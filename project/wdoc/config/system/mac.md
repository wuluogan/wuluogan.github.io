## MacOS中.DS_Store文件的问题

我入手MacPro时间不长，所以有很多东西还不是很明白。

不过最近发现在访问网络共享盘里，它总会在访问过的目录下生成一个`.DS_Store`文件。然后我在`Windows`里访问时感觉非常不爽。

在网上找了一下，其实它是可以禁用的。

其禁用方式如下：

```
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
```

其解除禁用方式如下：

```
defaults delete com.apple.desktopservices DSDontWriteNetworkStores
```

