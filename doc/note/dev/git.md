# Git


### １．安装Git

下载地址如下，可以下载便携版（Portable）：

<https://git-scm.com/download/win>

把Git安装好（或者解压好）之后，把`git.exe`所在目录设置到环境变量`PATH`里。

### ２．新建Git服务器目录

比如，我们想把所有Git服务器库内容保存在`E:\Git\repository`下的话，就把这个目录建好。

### ３．新建Git库目录

比如，我们想建一个叫`test.git`的库目录，直接在Git服务器目录`E:\Git\repository`下新建文件夹`test.git`就行。

### ４．初始化Git库

在命令提示行进入Git库目录`E:\Git\repository\test.git`，用以下命令初始化Git库。

```git
git init --bare
```

如果是已经存在Git库，可以使用以下命令初始化Git库。

```git
git clone --bare D:\Project\Test E:\Git\repository\test.git
```

### ５．Clone代码库

然后我们在其它目录（例：`D:\Project\Test`），可以把之后新建的代码库Clone。

如果是命令行操作的话，命令行如下：

```git
git clone E:\Git\repository\test.git D:\Project\Test
```

这样，就可以像使用服务器一样的实现多处分散保存。在Commit代码之后直接PUSH，就会把代码提交到Git库目录`E:\Git\repository\test.git`。






git config --global user.name "wuluogan"    
git config --global user.email "wuluogan@qq.com"  
ssh-keygen -t rsa -C "wuluogan@qq.com"
cat ~/.ssh/id_rsa.pub



# 自定义域名
Github Pages的默认域名是github的二级域名username.github.com或者username.github.io，需要绑定自己的独立域名的话也非常简单，只要以下两步：

<!-- more -->

## 一、增加CNAME

在你的git仓库创建一个CNAME文件，内容写你的域名。比如我的域名是forsigner.com，在CNAME文件写入“forsigner.com”就好了。

## 二、域名解析

首先获取你Github Pages域名的ip，比如你的Github pages域名为forsigner.github.io，执行一下命令：

```python
$ ping forsigner.github.io
```

你应该可以得到一个IP，比如IP是207.97.227.245。

最后去你的域名注册商后台，增加一条A记录到该IP就好了。


# Git操作

## 基本命令

```bash
$ git init  #创建新的 $ git 仓库
$ git clone /path/to/repository  #创建一个本地仓库的克隆版本
$ git clone username@host:/path/to/repository  #克隆远端服务器上的仓库
$ git status  #查看状态
$ git add <file>  #把新文件或修改添加到缓存区(index)
$ git add .  #添加全部
$ git commit -m "代码提交信息"  #把改动提交到 HEAD，但还没提交到到的远端仓库
$ git pull  #从远程获取最新版本并merge到本地
$ git push  #将改动提交到远端仓库
$ git log  #查看记录
```

<!-- more -->

## 分支操作

```bash
$ git checkout -b <branch>  #新建分支
$ git checkout <branch>  #切换到某个分支
$ git diff <nowbranch> <otherbranch>  #查看两个分支的异同
$ git merge <otherbranch>  #合并当前分支和branch分支
$ git branch -d <branch>  #删除分支
$ git branch -D <branch>  # 强制删除分支
$ git push origin --delete <branch>  # 删除一个远程分支
```

## 撒销操作

```bash
$ git revert HEAD  #撤销最近一次提交
$ git rever HEAD^  #撤销“上上次”提交
$ git rever HEAD <hash>  #撤销指定的提交


# reset命令把当前分支指向另一个位置，并且有选择的变动工作目录和索引。
# 也用来在从历史仓库中复制文件到索引，而不动工作目录。
$ git reset HEAD  #回到上次提交的状态(last commited state)
$ git reset HEAD^($ git reset --hard HEAD~1)  #回到上上次（倒数第二次）提交的状态
$ git reset HEAD~2  #回退两个commit
$ git reset HEAD~3  #回退三个commit
$ git reset hard <hash>  #回滚到指定的版本

#如果用--hard选项，那么工作目录也更新。
$ git reset --hard HEAD  #回到上次提交的状态(last commited state)
$ git reset --hard HEAD^($ git reset --hard HEAD~1)  #回到上上次（倒数第二次）提交的状态
$ git reset --hard HEAD~2  #回退两个commit
$ git reset --hard HEAD~3  #回退三个commit
$ git reset --hard <hash>  #回滚到指定的版本

$ git commit --amend # 修改最后一次提交
```

## Checkout的使用

checkout命令用于从历史提交（或者暂存区域）中拷贝文件到工作目录，也可用于切换分支。

```bash
$ git checkout <file> ($ git checkout HEAD  <file>)  #从暂存区域中拷贝内容
$ git checkout HEAD~2 foo.c  #将会提交节点HEAD~2中的foo.c复制到工作目录并且加到暂存区域中。

$ git checkout -b <branch>  #新建分支
$ git checkout <branch>  #切换到某个分支
$ git checkout <tagname>  #切换到某个版本
```

## rm的使用

```bash
$ git rm [-f | --force] [-n] [-r] [--cached] [--ignore-unmatch] [--quiet] [--] <file>

$ git rm <file>  #把文件从 Git仓库中删除
$ git rm --cached  <file> #移除跟踪但不删除文件

```

## push的使用

```bash
$ git push origin <branch>


```

## rebase的使用

```bash
$ git rebase <branch> #衍合是合并命令的另一种选择
```

## stash的使用

经常有这样的事情发生，当你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作。问题是，你不想提交进行了一半的工作，否则以后你无法回到这个工作点。解决这个问题的办法就是$ git stash命令。

“‘储藏”“可以获取你工作目录的中间状态——也就是你修改过的被追踪的文件和暂存的变更——并将它保存到一个未完结变更的堆栈中，随时可以重新应用。

```bash
$ git stash  #暂存临时代码
$ git stash list  #查看所有的搁置版本
$ git stash aplly  #找回之前搁置的改动
$ git stash apply stash@{1}  #就可以将你指定版本号为stash@{1}的工作取出来
$ git stash pop  #从Git栈中读取最近一次保存的内容，恢复工作区的相关内容
$ git stash clear #删除所有stash
```

## $ git config

忽略文件权限检查

```bash
$ git config --add core.filemode false
```

## 小贴士

```bash
$ gitk  #内建的图形化$ git
$ git config color.ui true  #彩色的$ git输出
$ git config format.pretty oneline  #显示历史记录时，只显示一行信息
$ git add -i  #交互地添加文件至缓存区
```

## 参考资料

- [git - 简易指南](http://rogerdudler.github.io/git-guide/index.zh.html)
- [图解Git](http://marklodato.github.io/visual-git-guide/index-zh-cn.html)
- [Git Community Book 中文版](http://gitbook.liuhui998.com/index.html)
- [git book中文版](http://git-scm.com/book/zh)
- [Everyday GIT With 20 Commands Or So](https://www.kernel.org/pub/software/scm/git/docs/everyday.html)
- [gittutorial](https://www.kernel.org/pub/software/scm/git/docs/gittutorial.html)
- [git Manual Page](https://www.kernel.org/pub/software/scm/git/docs/)
- [Git User’s Manual](https://www.kernel.org/pub/software/scm/git/docs/user-manual.html)



# 部署GitLab
## 缘起

回到金山西山居后，真的有点怀念大厂的基础建设了，统一的 Gitlab，统一的 CI，统一部署运维平台，这些西山居都没有，或者有，不好用，为什么不好用呢？因为一些权限、vpn、内外网限制等乱七八糟的原因。最终选择了自己团队搭建整个环境，主要包括：

- Docker 安装
- Gitlab 搭建
- Gitlab Runner 搭建
- 易于 Gitlab CI 的自动化部署

期间踩了一些坑，在此记录一下。

## Docker 安装

Gitlab 最快捷的搭建方式是使用 Docker，所以先安装 Docker。

我们用的金山云服务器，Centos 7 系统，安装 Dokcer 可以参考官方文档：[Install Docker Engine on CentOS](https://docs.docker.com/engine/install/centos/)。

依次执行一下命令即可：

**1.设置 REPOSITORY**

```bash
$ sudo yum install -y yum-utils

$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

**2.安装 Docker**

```bash
$ sudo yum install docker-ce docker-ce-cli containerd.io
```

**3.启动 Docker.**

```bash
$ sudo systemctl start docker
```

**4.验证 Docker 是否安装成功 **

```bash
$ sudo docker run hello-world
```

**注意**：
Centos7 安装 docker 之后，默认的镜像及容器存储路径为/var/lib/docker，可以使用命令 docker info 查看。但是该路径默认使用的是系统盘的存储，如果挂载了数据盘，需要把 docker 的默认存储路径修改至数据盘的挂载目录，则需要修改 docker 的相关配置。

将--graph /data/docker 添加在 docker.service 文件中的 ExecStart 字段后面，其中/data/docker 为你需要修改的存储目录。

```bash
$ mkdir -p /data/docker
$ vim /usr/lib/systemd/system/docker.service
```

找到 ExecStart 那行，更改内容：

```bash
## 原始内容:
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock

## 改为:
ExecStart=/usr/bin/dockerd --graph /data/docker -H fd:// --containerd=/run/containerd/containerd.sock
```

然后重启 Docker 即可：

```bash
$ systemctl daemon-reload
$ systemctl restart docker
```


## Git同时Push到多个代码库

之前个人代码一般用两个代码库（Bitbucket、GitLab）来管理，这样万一出问题，也不会提交不上去。之前的方法是添加两个Remote，虽然用TortoiseGit能同时Push到两个代码库，但用SourceTree来管理的话，就有些不方便了。

最近狠了狠心，买了个GitHub，用SourceTree来管理就更不方便了。在网上找了一个，发现其实是可以实现的。用一个主库，其它做为副库即可管理。意思就是，取代码只从主库取，Push时同时Push到其它库。

其方法就是修改`.git`文件夹下的`config`文件，添加`pushurl`。比如我有一个`test`的项目，同时保存在GitHub、Bitbucket、GitLab。那么`config`文件`remote`部分的内容可以这样设置。

其中，`url`为主库的Git地址。`pushurl`为包括主库在内的所有库的Git地址。

```git
[remote "origin"]
    url = https://github.com/yutuo/test.git
    fetch = +refs/heads/*:refs/remotes/origin/*
    pushurl = https://github.com/yutuo/test.git
    pushurl = https://gitlab.com/yutuo/test.git
    pushurl = https://bitbucket.org/yutuo/test.git
```



## 导出Git修改的代码

在实际开发中，有时候需要提交差分代码（只提交修改过的代码），之前我的做法是一个一个文件地复制，这种方法速度慢，而且容易出错。

在网上找了一下，其实用Git的功能就可以实现差分代码提交。用简单的话来说，就是用`git diff`开取出两个版本之间的差异文件，用`git archive`来打包差异文件。该方法只能在Bash下执行，所以在Windows下，要用到Git自带的Bash。

其执行命令如下：

git archive -o **导出文件名.zip** **导出版本号** $(git diff --name-only **旧版本号**..**新版本号**)

一般来说，**导出版本号**和**新版本号**是一样的，例：

```git
git archive -o patch.zip 035b375 $(git diff --name-only 69351d6..035b375)
```

Git的版本号比较长，有40位，一般来说，取前七位就行。

导出的ZIP是按目录生成的，这样提交差分代码时也非常方便。



## 多个远程仓库的使用

多个远程仓库在项目中很少使用，但Git本身是支持的。

那让我们跟着一个案例来温习一下Git命令吧：案例代码已经在Github中托管了，现在要增加Gitee远程仓库。

### 1.1 查看远程仓库

先来查看下当前项目的远程仓库

```
git remote
```

不出意外，应该会输出：

```
origin
```

这个`origin`就是一个指向远程仓库的名称，是你在`clone`时 `git` 为你默认创建的。

可以通过命令查看`origin`指向的远程仓库地址：

```
git remote -v
```

输出结果：

```
origin  https://github.com/gozhuyinglong/blog-demos.git (fetch)
origin  https://github.com/gozhuyinglong/blog-demos.git (push)
```

该命令会显示读写远程仓库的名称和地址，我这里指向的是Github。

### 1.2 远程仓库重命名

既然这个地址是Github，为了好识别，就将名称改成 github 吧。输入命令：`git remote rename <old_remote> <new_remote>`

```
git remote rename origin github
```

输入查看远程仓库命令，验证下是否成功，输出结果：

```
github  https://github.com/gozhuyinglong/blog-demos.git (fetch)
github  https://github.com/gozhuyinglong/blog-demos.git (push)
```

成功！

### 1.3 添加另一个远程仓库

下面我们再添加Gitee上的远程仓库，首先在Gitee上创建一个空的仓库，名称与Github上相同。

然后在【克隆/下载】处复制地址。

输出添加远程仓库命令：`git remote add <remote> <url>`

```
git remote add gitee https://gitee.com/gozhuyinglong/blog-demos.git
```

再来验证下是否成功，输出结果：

```
gitee   https://gitee.com/gozhuyinglong/blog-demos.git (fetch)
gitee   https://gitee.com/gozhuyinglong/blog-demos.git (push)
github  https://github.com/gozhuyinglong/blog-demos.git (fetch)
github  https://github.com/gozhuyinglong/blog-demos.git (push)
```

成功！

### 1.4 多个远程仓库的推送/拉取

有了多个远程仓库，推送和拉取再也不能像以前那样`git push`和`git pull`了，必须得加上远程仓库的名称，以识别操作的是哪个远程仓库。命令如下：`git push <remote> <branch>`、`git pull <remote> <branch>`：

```
git push github main
git pull github main

git push gitee main
git pull gitee main
```

如果不想每次操作都带着分支，需要将本地分支与远程分支进行关联：`git branch --set-upstream-to=<remote>/<remote_branch> <local_branch>`

```
git branch --set-upstream-to=gitee/main main
```

关联后就可以不指定分支了

```
git push github
git pull github

git push gitee
git pull gitee
```

### 1.5 移除一个远程仓库

如果想要移除一个远程仓库，可以使用下面命令：`git remote remove <remote>`或`git remote rm <remote>`

```
git remote remove gitee
```

执行移除远程仓库后，该仓库在本地的所有分支与配置信息也会一并删除。

## 2. 常见错误及解决方案

在执行上面操作当然不是一帆风顺的，如果你遇到一些错误，这里可能有你想要的答案。

### 2.1 提示未指定分支

当在拉取时报下面错误：

```
You asked to pull from the remote 'gitee', but did not specify
a branch. Because this is not the default configured remote
for your current branch, you must specify a branch on the command line.
```

表示本地分支与远程分支未做关联，进行关联一下即可，执行下面命令：`git branch --set-upstream-to=<remote>/<remote_branch> <your_branch>`

```
git branch --set-upstream-to=gitee/main main
```

### 2.2 没有存储库的权限

当执行推送操作时，提示下面信息：

```
remote: You do not have permission push to this repository
fatal: unable to access 'https://gitee.com/gozhuyinglong/blog-demos.git/': The requested URL returned error: 403
```

表示没有远程仓库的权限，应该首先查看远程仓库是否公开，再检查本地账号和密码是否正确。

### 2.3 远程仓库未公开

登录Gitee，检查该代码库是否公司。若未公开，则设置为公开。

### 2.4 Windows凭据中的账号和密码错误

打开控制面板，点击【用户账户】

再点击【管理Windows凭据】

找到你的账号，修改账号和密码即可。

### 2.5 删除Windows凭据，重新登录

你也可以直接将Windows凭据删掉，当执行推送命令后，会弹出Windows安全中心登录框。

输入你的账号或密码就可以了。

### 2.6 无法弹出Windows安全中心登录

如果无法弹出Windows安全中心登录框，则将其卸载掉，执行下面命令：

```
git credential-manager uninstall
```

再重新下载并安装，下载地址：https://github.com/microsoft/Git-Credential-Manager-for-Windows/releases

### 2.7 每次推送Github时弹出登录框，可以使用SSH地址

如下图所示，当你每次`push`代码时，都会弹出下面登录框。

我们可以将远程地址改为SSH地址：

移除现在的github地址，重新添加ssh地址，具体代码参照上文。

添加好地址后，还需要在github上设置SSH Key

### 2.8 生成SSH Key，并添加到Github

输入下面命令来生成SSH Key，双引号内填写你的登录邮箱地址

```
ssh-keygen -t rsa -C "xxxxx@xxxxx.com" 
```

如果弹出下面提示，直接回车即可。（若已存在，会提示是否替换，输入Y再回车）

会在你的磁盘目录【C:\Users\你的用户名.ssh\】中生成公钥，将文件【id_rsa.pub】中的内存拷贝。

打开github的【SSH and GPG keys】页面，添加即可：





---
title: Git常用命令参考
date: 2021-01-18 15:28:40
tags: 手册
---



## 配置

```bash
# 查看全局配置列表
git config --global -l

# 查看局部配置列表
git config --local -l

# 查看所有的配置以及它们所在的文件
git config --list --show-origin

# 查看已设置的全局用户名/邮箱
git config --global --get user.name
git config --global --get user.email

# 设置全局用户名/邮箱
git config --global user.name "xiejiahe"
git config --global user.email "example@example.com"

# 设置本地当前工作区仓库用户名/邮箱
git config --local user.name "xiejiahe"
git config --local user.email "example@example.com"

# 删除配置
git config --unset --global user.name
git config --unset --global user.email

# 修改默认文本编辑器，比如 nano
# 常用编辑器：emacs / nano / vim / vi
git config --global core.editor nano

# 将默认差异化分析工具设置为 vimdiff
git config --global merge.tool vimdiff

# 编辑当前仓库配置文件
git config -e  # 等价 vi .git/config

# 文件权限的变动也会视为改动, 可通过以下配置忽略文件权限变动
git config core.fileMode false

# 文件大小写设为敏感, git默认是忽略大小写
git config --global core.ignorecase false

# 配置 git pull 时默认拉取所有子模块内容
git config submodule.recurse true
```

**命令别名配置**

```bash
# git st 等价于 git status
git config --global alias.st status

# 如果之前添加过，需要添加 --replace-all 进行覆盖
git config --global --replace-all alias.st status

# 执行外部命令, 只要在前面加 ! 即可
git config --global alias.st '!echo hello';
# 加 "!" 可以执行外部命令执行一段复杂的合并代码过程，例如：
git config --global alias.mg '!git checkout develop && git pull && git merge master && git checkout -';

# 删除 st 别名
git config --global --unset alias.st
```

**配置代理**

```bash
# 设置
git config --global https.proxy  http://127.0.0.1:1087
git config --global http.proxy  http://127.0.0.1:1087

# 查看
git config --global --get http.proxy
git config --global --get https.proxy

# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```



## 初始化

`git init` 创建一个空的[Git](https://www.xtboke.cn/tag-Git.html)仓库或重新初始化一个现有的仓库

实际上 `git init` 命令用得不多，通常在GUI上进行操作。

```bash
# 会在当前目录生成.git
git init

# 以安静模式创建，只会打印错误或警告信息
git init -q

# 在当前目录下创建一个裸仓库，里面只有 .git 下的所有文件
git init --bare
```



## 克隆

```bash
# 克隆 https 协议
git clone https://github.com/xjh22222228/git-manual.git

# 克隆 SSH 协议
git clone git@github.com:xjh22222228/git-manual.git

# 克隆指定分支， -b 指定分支名字，实际上是克隆所有分支并切换到 develop 分支上
git clone -b develop https://github.com/xjh22222228/git-manual.git

# --single-branch 完全只克隆指定分支
git clone -b develop --single-branch https://github.com/xjh22222228/git-manual.git

# 指定克隆后的文件夹名称
git clone https://github.com/xjh22222228/git-manual.git git-study # 如果后面是 . 在当前目录创建

# 递归克隆，如果项目包含子模块就非常有用
git clone --recursive https://github.com/xjh22222228/git-manual.git

# 浅克隆, 克隆深度为1, 只克隆指定分支且历史记录只保留最后一条, 通常用于减少克隆时间和项目大小
git clone --depth=1 https://github.com/xjh22222228/git-manual.git
git clone --depth=1 --no-single-branch https://github.com/xjh22222228/git-manual.git # --no-single-branch 同时克隆其他所有分支

# 裸克隆, 没有工作区内容，不能进行提交修改，一般用于复制仓库
git clone --bare https://github.com/xjh22222228/git-manual.git

# 镜像克隆, 也是裸克隆, 区别于包含上游版本库注册
git clone --mirror https://github.com/xjh22222228/git-manual.git
```



## git remote

`git remote` 命令通常用来[管理](https://www.xtboke.cn/tag-管理.html)远程仓库。

```bash
# 查看远程仓库服务器, 一般打印 origin , 这是 Git 给你克隆的仓库服务器的默认名字
# 一般只会显示 origin , 除非你有多个远程仓库地址
git remote

# 指定-v, 查看当前远程仓库地址
git remote -v

# 添加远程仓库地址 example 是自定义名字
# 添加完后可以通过 git remote 就能看到 example
git remote add example https://github.com/xjh22222228/git-manual.git

# 查看指定远程仓库信息
git remote show example

# 重命名远程仓库
git remote rename oldName newName # git remote rename example simple

# 移除远程仓库
git remote remove example

# 修改远程URL，从HTTPS更改为SSH
git remote set-url origin git@github.com:xjh22222228/git-manual.git

# 后续的推送可以指定仓库名字
git push example
```



## cherry pick

检出某次commit提交, 如果当前分支上的某次提交的修改正是当前需要的，那么可以使用此命令进行操作。

需要注意的是提交时必须使用 `git push -f` 强制提交方式。

```bash
# 通常情况执行此命令会产生冲突，需要手动去解决
git cherry-pick <commit_id>

# 保留原有作者信息进行提交
git cherry-pick -x 8f6c26fc122502886bdfd9aa55ecda26a3ccc31d
```



## git stash

应用场景：假设当前分支某些功能做到一半了, 突然需要切换到其他分支修改Bug, 但是又不想提交（因为切换分支必须清理当前工作区，否则无法切换），这个时候 `git stash` 应用场景就来了。

```bash
# 保存当前修改工作区内容
git stash

# 保存时添加注释, 推荐使用此命令
git stash save "修改了#28 Bug"

# 保存包含没有被git追踪的文件
git stash -u

# 查看当前保存列表
git stash list

# 恢复修改工作区内容, 会从 git stash list 移除掉
git stash pop # 恢复最近一次保存内容到工作区, 默认会把暂存区的改动恢复到工作区
git stash pop stash@{1} # 恢复指定 id， 通过 git stash list 可查到
git stash pop --index # 恢复最近一次保存内容到工作区, 但如果是暂存区的内容同样恢复到暂存区

# 与 pop 命令一致, 唯一不同的是不会移除保存列表
git stash apply

# 清空所有保存
git stash clear

# 清空指定 stash id, 如果 drop 后面不指定id清除最近的一次
git stash drop stash@{0}
git stash drop  # 清除最近一次
```



## 文件状态

```bash
# 完整查看文件状态
git status

# 以短格式给出输出
git status -s

# 忽略子模块
git status --ignore-submodules

# 显示已忽略的文件
git status --ignored
```



## 日志

查看历史日志可以通过 `git log` / `git shortlog` / `git reflog`。

`git log` 命令是3个最强大的命令

```bash
# 查看完整历史提交记录
git log

# 查看前N次提交记录 commit message
git log -2

# 查看前N次提交记录，包括diff
git log -p -2

# 从 commit 进行搜索, 可以指定 -i 忽略大小写
git log -i --grep="fix: #28"

# 从工作目录搜索包含 alert(1) 这段代码何时引入
git log -S "alert(1)"

# 查看指定作者历史记录
git log --author=xjh22222228

# 查看某个文件的历史提交记录
git log README.md

# 只显示合并日志
git log --merges

# 以图形查看日志记录, --oneline 可选
git log --graph --oneline

# 以倒序查看历史记录
git log --reverse
```

`git shortlog` 以简短的形式输出日志, 通常用于统计贡献者代码量。

```bash
# 默认以贡献者分组进行输出
git shortlog

# 列出提交者代码贡献数量, 打印作者和贡献数量
git shortlog -sn

# 以提交贡献数量排序并打印出message
git shortlog -n

# 采用邮箱格式化的方式进行查看贡献度
git shortlog -e
```

`git reflog` 通常被引用为 `安全网`，当 `git log` 没有想要的信息时可以尝试用 `git reflog`。

当回滚某个版本时记录是不保存在 `git log` 中, 想要找到这条回滚版本信息时 `git reflog` 就用上了。

```bash
git reflog # 等价于 git log -g --abbrev-commit --pretty=oneline
```



## git blame

`git blame` 意思是责怪，你懂的。

`git blame` 用于查看某个文件的修改历史记录是哪个作者进行了改动。

```bash
# 查看 README.md 文件的修改历史记录，包括时间、作者以及内容
git blame README.md

# 查看谁改动了 README.md 文件的 11行-12行
git blame -L 11,12 README.md
git blame -L 11 README.md   # 查看第11行以后

# 显示完整的 hash 值
git blame -l README.md

# 显示修改的行数
git blame -n README.md

# 显示作者邮箱
git blame -e README.md

# 对参数进行一个组合查询
git blame -enl -L 11 README.md
```



## 查看分支

```bash
# 查看所有分支
git branch -a

# 查看本地分支
git branch

# 查看远端分支
git branch -r

# 查看本地分支所关联的远程分支
git branch -vv

# 查看本地 master 分支创建时间
git reflog show --date=iso master
```



## 切换分支

另一种切换分支方法是使用 [switch命令](https://www.xtboke.cn/CodeNotes/678.html#git-switch)

```bash
# 2种方法，切换到master分支
git checkout master
git switch master  # git >= 2.23

# 切换上一个分支
git checkout -

# 强制切换, 但是要小心，如果文件未保存修改会直接覆盖掉
git checkout -f master
```

在克隆时使用 `--depth=1` 切换其他分支，比如切换 dev 分支：

```bash
git clone --depth=1 https://github.com/xjh22222228/git-manual.git

# 切换 dev 分支
git remote set-branches origin 'dev'
git fetch --depth=1 origin dev
git checkout dev
```



## 创建分支

```bash
# 创建develop本地分支
git branch develop

# 强制创建分支, 不输出任何警告或信息
git branch -f develop

# 创建本地develop分支并切换
git checkout -b develop

# 创建远程分支, 实际上创建本地分支然后推送
git checkout -b develop
git push origin develop

# 创建一个空的分支, 不继承父分支，历史记录是空的，一般至少需要执行4步
git checkout --orphan develop
git rm -rf .  # 这一步可选，如果你真的想创建一个没有任何文件的分支
git add -A && git commit -m "提交" # 添加并提交，否则分支是隐藏的 （执行这一步之前需要注意当前工作区必须保留一个文件，否则无法提交）
git push --set-upstream origin develop # 推送到远程
```



## 删除分支

```bash
# 删除本地分支
git branch -d <branchName>

# 删除远程分支
git push origin :<branchName>
git push origin --delete <branch-name>  # >= 1.7.0
```



## 重命名分支

```bash
# 重命名当前分支, 通常情况下需要执行3步
# 1、修改分支名称
# 2、删除远程旧分支
# 3、将重命名分支推送到远程
git branch -m <branchName>
git push origin :old_branch
git push -u origin new_branch

# 重命名指定分支
git branch -m old_branch new_branch
```

------



## 合并

```bash
# 将 feature/v1.0.0 分支代码合并到 develop
git checkout develop
git merge feature/v1.0.0

# 将上一个分支代码合并到当前分支
git merge -

# 以安静模式合并, 把develop分支合并到当前分支并不输出任何信息
git merge develop -q

# 合并不编辑信息, 跳过交互
git merge develop --no-edit

# 合并分支后不进行提交
git merge develop --no-commit

# 退出合并，恢复到合并之前的状态
git merge --abort
```

#### 合并部分文件或文件夹

假设有 dev 和 main 2个分支，可是 dev 分支改动比较大，只想合并某个文件夹到 main 分支上，可以这么做：

```bash
# 1、先切换到 main 分支
git checkout main

# 2、将 dev 分支 src1 和 src2 文件夹合并到 main 分支上, 注意要有2个分割线
git checout dev -- src1/ src2/

# 3、会发现 main 分支确实有 dev 分支的内容，按照正常流程推送到远程
git add -A
git commit -m "Merge..."
git push
```

需要注意的是这会直接覆盖现有文件，而不是本质上的合并。



## 解决冲突

**代码合并/更新代码** 经常会遇到冲突的情况。

1、按照惯例直接把代码提交到远程, 有几种情况:

- 代码顺利的推送的远程分支 (无需理会)
- 出现冲突, git自动做了合并 (无需理会)
- git发现本地文件在远端做了修改，需要进行 git pull

```bash
git push
```

出现冲突，如图：

![img](https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/git-conflict-1.png)

2、按照提示执行 `git pull` 拉取代码

```bash
git pull
```

提示有文件存在冲突，如图：

![img](https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/git-conflict-2.png)

3、编辑冲突文件, 解决冲突需要自己去判断到底要保留远端代码还是本地代码或者两端都保留。

![img](https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/git-conflict-3.png)

4、这是解决后的代码，保留了本地代码

![img](https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/git-conflict-4.png)

最后按照惯例，把代码推送到远端即可。

除了使用git命令解决以外, 可以使用一些开发[工具](https://www.xtboke.cn/tag-工具.html)自带git进行处理。

另外推荐3个工具专门处理git冲突：

- [meld](http://meld.sourceforge.net/install.html)
- [kdiff3](http://kdiff3.sourceforge.net/)
- 在冲突时执行 `git mergetool` 命令会启动一个默认GUI

[这篇文章专门介绍这2个工具如何使用](https://gitguys.com/topics/merging-with-a-gui/)



## 暂存

```bash
# 暂存所有
git add -A

# 暂存某个文件
git add ./README.md

# 暂存当前目录所有改动文件
git add .

# 暂存一系列文件
git add 1.txt 2.txt ...
```



## 删除

git add 的反向操作

```bash
# 删除1.txt 文件
git rm 1.txt

# 删除当前所有文件, 与rm -rf 命令不同的是不会删除 .git 目录
git rm -rf .

# 清除当前工作区缓存，但不会删除文件，通常用于修改文件名不生效问题
git rm -r --cached .
```



## 还原

还原操作通过 `git restore` 命令。

`git restore` 是在 `2.23` 引入的, 是为了分离 `git checkout` / `git reset` 职责。

```bash
# 撤销工作区文件修改, 不包括新建文件
git restore README.md # 一个文件
git restore README.md README2.md # 多个文件
git restore . # 当前全部文件

# 从暂存区回到工作区
git restore --staged README.md
```



## 提交

```bash
# -m 提交的描述信息
git commit -m "changes log"

# 只提交某个文件
git commit README.md -m "message"

# 提交并显示diff变化
git commit -v

# 允许提交空消息，通常必须指定 -m 参数
git commit --allow-empty-message

# 重写上一次提交信息，确保当前工作区没有改动
git commit --amend -m "新的提交信息"

# 跳过验证, 如果使用了类似 husky 工具。
git commit --no-verify -m "Example"
```



## 推送

```bash
# 默认推送当前分支
# 等价于 git push origin, 实际上推送到一个叫 origin 默认仓库名字
git push

# 推送到主分支
git push -u origin master

# 本地分支推送到远程分支， 本地分支:远程分支
git push origin <branchName>:<branchName>

# 强制推送, --force 缩写
git push -f
```



## 拉取

#### 拉取远程分支最新内容

```bash
# 如果出现冲突会自动合并
git pull
```

#### 拉取指定分支

```bash
# 远程分支名:本地分支名
git pull origin master:master
# 如果某个远程分支拉取并合并到当前分支后面可以省略
git pull origin master
```

#### 拉取指定工作目录

```bash
# 默认情况下拉取会在当前工作目录中，但如果想拉取指定工作目录，可以指定 `-C`
git -C /opt/work pull
```

## 移动-重命名

`git mv` 命令用来重命名文件或移动文件, 大部分开发者会选择手动进行移动文件, 手动和用 `git mv` 是有区别的。

手动和命令两者的区别（假设`README.md`重命名为`README2.md`）：

- 手动：先删除 `README.md`, 然后创建 `README2.md`, 历史记录无法正常追踪
- `git mv`: 实际上是更新索引，把文件进行重命名, 可以通过历史记录方便检索

`git mv` 和 uninx `mv` 命令很像，如果你熟悉的话。

注意：新创建的文件不支持 `git mv` , 必须先提交。

```bash
# 将 1.txt 重命名为 2.txt
git mv 1.txt 2.txt

# 强制将 1.txt 重命名为 2.txt, 不管2.txt文件存不存在
git mv -f 1.txt 2.txt

# 移动目录也一样
git mv temp temp2
```

## 查看文件内容变动

- `git diff` 命令用于查看`工作区文件`内容与暂存区或远端之间的差异。
- `git show` 命令用于查看远端文件修改内容。

#### git diff

```bash
# 查看所有文件工作区与暂存区的差异
git diff

# 查看指定文件工作区与暂存区差异
git diff README.md

# 查看指定 commit 内容差异
git diff dce06bd

# 对比2个commit之间的差异
git diff e3848eb dce06bd

# 比较2个分支最新提交内容差异, develop分支与master分支, 如果没有差异返回空
git diff develop master

# 比较2个分支指定文件内容差异, develop 和 master READNE.md 文件差异
git diff develop master README.md README.md

# 查看工作区冲突文件差异
git diff --name-only --diff-filter=U

# 查看上一次修改了哪些文件
git diff --name-only HEAD~
git diff --name-only HEAD~~ # 前2次...
```

#### git show

```bash
# 查看某个commit的所有文件变动
git show d68a1ef

# 查看某个commit的指定文件变动
git show d68a1ef README.md

# 查看某个文件最近一次变动
git show README.md
```



## 回滚版本

回滚版本有2种方法：

- `git reset` - 回滚版本后之前的历史记录将不保存, 不保留痕迹, 基本上不存在冲突情况。
- `git revert` - 回滚版本后之前的历史记录还存在并多增加了一条 `Revert` 记录，很容易出现冲突。

`git reset` 命令用法：

```bash
# 回滚上一个版本
git reset --hard HEAD^

# 回滚上两个版本
git reset --hard HEAD^^

# 回滚到指定 commit_id ， 通过 git log 查看
git reset --hard 'commit id'

# 回滚后但未推送到远程想断开当前操作执行拉取即可：
git pull

# 推送
git push -f
```

`git revert` 命令用法：

```bash
# 回滚上一次提交版本
git revert HEAD^

# 回滚指定commit
git revert 8efef3d37

# --no-edit 回滚并跳过编辑消息
git revert HEAD^ --no-edit

# 断开当前操作，还原初始状态
git revert --abort

# 推送到远程，假设当前是 main 分支
git push -u origin main
```



## 撤销

```bash
# 撤销当前工作区所有文件的改动
git checkout -- .

# 撤销工作区指定文件改动
git checkout -- README.md

# 暂存区回到工作区
git reset HEAD^ # 上一次
git reset HEAD ./README.md # 指定 ./README.md 文件从暂存区回到工作区

# 指定commit回到工作区（前提是未推送到远程仓库）, 需要还原的上一个commit_id
git reset <commit_id>

# 把某个commit_id还原初始状态 （前提是未推送到远程仓库）, 需要还原的上一个commit_id
git reset --hard <commit_id>
```



## 标签

```bash
# 列出本地所有标签
git tag

# 列出远程所有标签
git ls-remote --tags origin

# 按照特定模式查找标签, `*` 模板搜索
git tag -l "v1.0.0*"

# 创建带有附注标签
git tag -a v1.1.0 -m "标签描述"

# 创建轻量标签, 不需要带任何参数
git tag v1.1.0

# 后期打标签, 假设之前忘记打标签了，可以通过git log查看commit id
git log
git tag -a v1.1.0 <commit_id>

# 推送到远程，默认只是本地创建
git push origin v1.1.0

# 一次性推送所有标签到远程
git push origin --tags

# 删除标签, 你需要再次运行 git push origin v1.1.0 才能删除远程标签
git tag -d v1.1.0

# 删除远程标签
git push origin --delete v1.1.0

# 检出标签
git checkout v1.1.0

# 查看本地某个标签详细信息
git show v1.1.0
```

## git rebase

`git rebase` 命令有2个比较[实用](https://www.xtboke.cn/tag-实用.html)的功能：

- 将多个commit记录合并为一条
- 代替 `git mrege` 合并代码

### 1、将多个commit记录合并为一条

要注意保证当前工作区没内容再操作。

1、指定需要操作的记录，这时候会进入交互式命令

```bash
# start起点必填， end 可选，默认当前分支 HEAD 所指向的 commit
git rebase -i <start> <end>

git rebase -i HEAD~5 # 操作最近前5条提交记录
git rebase -i e88835de # 或者以 commit_id 进行操作
```

| 参数      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| p, pick   | 保留当前commit，默认                                         |
| r, reword | 保留当前commit，但编辑提交消息                               |
| e, edit   | 保留当前commit，但停止修改                                   |
| s, squash | 保留当前commit，但融入上一次提交                             |
| b, break  | 在这里停止（稍后使用 `git rebase --continue` 继续重新设置基准） |
| d, drop   | 删除当前commit                                               |

这里是倒序排列，最新的记录在最后

![img](https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/gitrebase-3.png)

2、除了第一条后面全部改成 `s` 或 `squash`:

![img](https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/gitrebase-4.png)

3、按 `:wq` 退出交互式，接着进入另一个交互式来编辑commit消息, 如果不需要修改之前的commit消息则直接退出：

![img](https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/gitrebase-5.png)

4、强制推送到远端

```bash
# 推送到 main 分支
git push -u -f origin main
```

### 2、合并分支代码

都说用 `git rebase` 代替 `git merge` 进行合并，这2个区别在于 `git rebase` 可以使历史记录更清晰, 下面2张图对比一下：

第一张图是 `git rebase`，第二张图是 `git merge`。

可以看出 `git rebase` 是一条直线的，`git merge` 则是各种交叉，很难理解。

![img](https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/gitrebase-1.png)
![img](https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/gitrebase-2.png)

假设有2个分支，main 和 dev，下面使用 `git rebase` 将 dev 分支代码合并到 main 分支上。

```bash
# 1、先切换到 main 分支，如果当前已经在 main 分支则不用切换
git switch main

# 2、正常合并代码, 这个时候会在 * (no branch, rebasing main) 分支上
git rebase dev

# 3、合并代码后有可能出现冲突情况，按照正常流程解决代码冲突

# 4、没有冲突或者解决冲突后，使用 -f 强制推送到远程分支 mian 上面去
git push origin HEAD:main -f

# 5、断开 rebase 回到原分支 main 上去
git rebase --abort

# 6、这时候会提示执行 git pull, 拉取一下代码
git pull

# 7、这个时候发现代码并不是刚刚处理完的结果，而是回到处理状态, 把文件全部清理丢弃掉
git reset HEAD^ && git checkout -- .

# 8、再次执行 git pull, 所有流程执行完毕
git pull
```

中断 `git rebase` 操作, 如果操作一半不想继续使用 `rebase` 命令则可以中断此次操作。

```bash
git rebase --abort
```

## git flow

Git Flow 是一套基于git的工作流程，这个工作流程围绕着project的发布(release)定义了一个严格的如何建立分支的模型。

`git flow` 只是简化了操作命令，不用 `git flow` 也可以，只要遵循 `git flow` 流程操作即可，手动一条一条命令执行也一样的。

`git flow` 不是内置命令，需要单独安装。

#### 初始化

每个仓库都必须初始化一次才能使用，这是针对当前用户而言的。

```bash
# 通常直接回车以完成默认设置
git flow init
```

#### 开始开发一个功能

假设我们要开始开发一个新的功能比如登录注册，这个时候就要打一个 `feature` 分支进行独立开发。

```bash
# 步骤一：开启新的功能, 起一个分支名叫 v1.1.0, 建立后分支名为 feature/v1.1.0
git flow feature start v1.1.0

# 步骤二：将分支推送到远程, 在团队协作中这一步少不了
git flow feature publish v1.1.0

# 最后：完成功能, 会将当前分支合并到 develop 分支然后删除 feature/v1.1.0 分支，回到 develop
git flow feature finish v1.1.0
```

#### 打补丁

什么情况下需要打补丁？ 假设已经上线的功能有BUG需要修复就需要打补丁了。

hotfix 是针对 `master` 分支进行打补丁的。

```bash
# 步骤一：开启一个补丁分支叫 fix_doc 用于修改文档错误，建立后分支名为 hotfix/fix_doc
git flow hotfix start fix_doc

# 步骤二：推送到远程，也可以不推，如果多人同时改BUG就需要推送共享分支
git flow hotfix publish fix_doc

# 最后：完成补丁, 将当前分支合并到 master 和 develop，然后删除分支，回到 develop
git flow hotfix finish fix_doc
```

#### 发布

假设产品给了个新需求并完成，这个时候可以选择发布。不发布也行，但是发布后会有版本区分，以后想找到某个版本的代码就很方便。

```bash
# 步骤一：建立一个发布版本 v1.1.0 建立后分支名为 release/v1.1.0
git flow release start v1.1.0

# 步骤二：推送到远程, 可选
git flow release publish v1.1.0

# 最后：将当前分支合并到 master 和 develop，打上一个标签，接着删除当前分支并回到 develop 分支上
git flow release finish v1.1.0
```



![img](https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/git-flow.png)

------

## git submodule

`git submodule` 子模块的作用类似于包管理，类似 `npm` / `maven` , 但比包管理使用起来更方便。

子模块可以不建立版本分支管理代码, 因为它是依赖主应用，所以建立版本分支可以从主应用去操作，那么一旦建立新的版本分支当前的所有内容都会被锁定在这个分支上，不管子模块仓库怎么修改。

```bash
# 添加子模块
git submodule add https://github.com/xjh22222228/git-manual.git # 默认添加到当前目录下
git submodule add https://github.com/xjh22222228/git-manual.git submodules/git-manual  # 添加到指定目录

# -b 指定需要添加仓库的某个分支
git submodule add -b develop https://github.com/xjh22222228/git-manual.git

# 克隆一个包含子模块的项目 --recursive 用于递归克隆，否则子模块目录是空的
git clone --recursive https://github.com/xjh22222228/git-manual.git

# 如果已经克隆了一个包含子模块的项目，但忘记了 --recursive， 可以使用此命令 初始化、抓取并检出任何嵌套的子模块
git submodule update --init --recursive

# 修复子模块分支指向 detached head
git submodule foreach -q --recursive 'git checkout $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo master)'

# 删除子模块， common 为子模块名称，一般删除需要三步
git submodule deinit <common>
git rm --cached common # 清除子模块缓存
git commit -am "Remove a submodule" && git push # 提交代码并推送
```

**更新子模块代码是比较头疼的事，所以分开来讲**

1、通常我们需要更新代码只需要执行 `git pull`, 这是比较笨的办法。

```bash
# 递归抓取子模块的所有更改，但不会更新子模块内容
git pull

# 这个时候需要进入子模块目录进行更新, 这样就完成了一个子模块更新，但是如果有很多子模块就比较麻烦了
cd git-manual && git pull
```

2、使用 `git submodule update` 更新子模块

```bash
# git 会尝试更新所有子模块, 如果只需要更新某个子模块只要在 --remote 后指定子模块名称
git submodule update --remote

# --recursive 会递归所有子模块, 包括子模块里的子模块
git submodule update --init --recursive
```

3、使用 `git pull` 更新, 这是一种新的更新模式，需要 >= 2.14

```bash
git pull --recurse-submodules
```

如果嫌麻烦每次 git pull 都需要手动添加 `--recurse-submodules`，可以配置 git pull 的默认行为， 如何配置请参考 [配置](https://www.xtboke.cn/CodeNotes/678.html#)

具体使用还可以看这里 [git submodule子模块使用教程](https://www.xiejiahe.com/blog/detail/5dbceefc0bb52b1c88c30853)

## git bisect

`git bisect` 基于二分查找算法, 用于定位引入Bug的commit，主要4个命令。

此命令非常实用, 如果你的Bug不知道是哪个 commit 引起的，可以尝试此方法。

```bash
# 开始
git bisect start [终点] [起点] # 通过 git log 确定起点和终点
git bisect start HEAD 4d83cf

# 记录这次的commit是好的
git bisect good

# 记录这次的commit是坏的
git bisect bad

# 退出
git bisect reset
```



## git switch

`git switch` 命令在git版本 `2.23` 引入, 用于切换分支。

[`git checkout`](https://www.xtboke.cn/CodeNotes/678.html#) 同样可以切换分支, `git switch` 意义在哪里？ 因为 [`git checkout`](https://www.xtboke.cn/CodeNotes/678.html#) 不但可以切换分支还可以撤销工作，导致命令含糊不清，所以引入了 `git switch`。

注：由于生态原因, 大部分还是会使用 [`git checkout`](https://www.xtboke.cn/CodeNotes/678.html#)。

```bash
# 切换到 develop 分支
git switch develop

# 切换到上一个分支
git switch -

# 创建分支并切换
git switch -c newBranch

# 从前3次提交进行创建新的分支
git switch -c newBranch HEAD〜3
```

## git archive

创建一个归档文件，可以理解为将当前项目压缩为一个文件。会忽略掉 `.git` 目录。

但与 `zip` / `tar` 等压缩不同，`git archive` 支持将某个分支或commit进行归档。

**参数**

| 参数     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| --format | 可选，指定格式，默认 tar, 支持 tar 和 zip，如果不填会根据 --output后缀格式进行推断 |
| --output | 输出到指定目录                                               |

```bash
# 归档 master 分支 并打包在当前目录下 output.tar.gz
git archive --output "./output.tar.gz" master

# 归档指定commit
git archive --output "./output.tar.gz" d485a8ba9d2bcb5

# 归档为 zip, 无需指定 --format， 因为会根据文件后缀进行推断
git archive --output "./output.zip" master

# 归档一个或多个目录, 而不是归档整个项目
git archive --output "./output.zip" master src tests
```

## 格式化日志

在使用 `git log` 命令时可以携带 `--pretty=format` 用来格式化日志。

**常用格式如下：**

| 参数 | 描述                                                         |
| :--- | :----------------------------------------------------------- |
| %H   | 完整 commit hash                                             |
| %h   | 简写commit hash 一般是前7位                                  |
| %T   | 完整 hash 树                                                 |
| %t   | 简写 hash 树                                                 |
| %an  | 作者名称                                                     |
| %ae  | 作者[邮箱](https://www.xtboke.cn/tag-邮箱.html)              |
| %ad  | 作者日期, RFC2822风格：`Thu Jul 2 20:42:20 2020 +0800`       |
| %ar  | 作者日期, 相对时间：`2 days ago`                             |
| %ai  | 作者日期, ISO 8601-like风格： `2020-07-02 20:42:20 +0800`    |
| %aI  | 作者日期, ISO 8601风格： `2020-07-02T20:42:20+08:00`         |
| %cn  | 提交者名称                                                   |
| %ce  | 提交者邮箱                                                   |
| %cd  | 提交者日期，RFC2822风格：`Thu Jul 2 20:42:20 2020 +0800`     |
| %cr  | 提交者日期，相对时间：`2 days ago`                           |
| %ci  | 提交者日期，ISO 8601-like风格： `2020-07-02 20:42:20 +0800`  |
| %cI  | 提交者日期，ISO 8601风格： `2020-07-02T20:42:20+08:00`       |
| %d   | 引用名称： (HEAD -> master, origin/master, origin/HEAD)      |
| %D   | 引用名称，不带 `()` 和 换行符： HEAD -> master, origin/master, origin/HEAD |
| %e   | 编码方式                                                     |
| %B   | 原始提交内容                                                 |
| %C   | 自定义颜色                                                   |

例子：

```bash
git log -n 1 --pretty=format:"%an" # xjh22222228

git log -n 1 --pretty=format:"%ae" # xjh22222228@gmail.com

git log -n 1 --pretty=format:"%d" #  (HEAD -> master, origin/master, origin/HEAD)

# 自定义输出颜色, %C后面跟着颜色名
git log --pretty=format:"%Cgreen 作者：%an"
```

## 清空commit历史

清空 `commit` 有2种方法。

1、第一种方法原理是通过新建新的分支，假设当前分支是 `develop`

```bash
# 1、新建一个新分支
git checkout --orphan new_branch
# 2、暂存所有文件并提交
git add -A && git commit -m "First commit"
# 3、删除本地 develop 分支
git branch -D develop
# 4、再将 new_branch 分支重命名为 develop
git branch -m develop
# 5、强制将 develop 分支推送到远程
git push -f origin develop
```

2、第二种方法通过更新 `引用`, 假设要重设 `master` 分支

```bash
# 通过 git log 找到第一个 commit_id
git update-ref refs/heads/master 9c3a31e68aa63641c7377f549edc01095a44c079

# 接着可以提交
git add .
git commit -m "第一个提交"
git push -f # 注意一定要强制推送
```

这2种方法都是用于清空 commit 历史， 不会造成当前文件的丢失，所以放心。

笔者推荐使用第二种方法，更安全可靠。

## 仓库迁移

仓库迁移也可以叫复制仓库。

有时候需要从一个旧仓库迁移到新仓库，如果手动只能把文件进行迁移，但是如果需要把分支、标签、历史记录一起迁移就需要复制仓库。

旧仓库A: https://github.com/xjh22222228/A.git
新仓库B: https://github.com/xjh22222228/B.git

1、克隆旧裸仓库

```bash
# 克隆裸仓库，里面没有工作区内容
git clone --bare https://github.com/xjh22222228/A.git
```

2、镜像推送至新仓库

```bash
cd A
git push --mirror https://github.com/xjh22222228/B.git
```

3、删除刚刚克隆的旧仓库

```bash
rm -rf A
```

4、拉取新仓库

```bash
git clone https://github.com/xjh22222228/B.git
```

除了通过命令迁移之外，可以通过网页导入仓库的方式也可以。



## 奇技淫巧

**[美化](https://www.xtboke.cn/tag-美化.html) `git log`, 直逼GUI**

```bash
# 1、全局配置
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
# 2、输入下面命令, 日志变得非常直观化
git lg

# 这里另外提供几种模式, 可以选择喜欢的一种进行别名配置
git config --global alias.lg "log --graph --pretty=format:'%Cred%h - %Cgreen[%an]%Creset -%C(yellow)%d%Creset %s %C(yellow)<%cr>%Creset' --abbrev-commit --date=relative"

git config --global alias.his "log --graph --decorate --oneline --pretty=format:'%Creset %s %C(magenta)in %Cred%h %C(magenta)commited by %Cgreen%cn %C(magenta)on %C(yellow) %cd %C(magenta)from %Creset %C(yellow)%d' --abbrev-commit --date=format:'%Y-%m-%d %H:%M:%S'"

git config --global alias.hist "log --graph --decorate --oneline --pretty=format:'%Cred%h - %C(bold white) %s %Creset %C(yellow)%d  %C(cyan) <%cd> %Creset %Cgreen(%cn)' --abbrev-commit --date=format:'%Y-%m-%d %H:%M:%S'"
```

效果图

![img](https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/git-log.png)

## GUI客户端

推荐几款比较好用的 git 图形界面工具, 不分先后。

- [免费](https://www.xtboke.cn/tag-免费.html) - [Github Desktop](https://desktop.github.com/)
- 免费 - [Sourcetree](https://www.sourcetreeapp.com/)
- 免费 - [tortoiseGit](https://tortoisegit.org/)
- 免费 - [gitkraken](https://www.gitkraken.com/)
- 免费 - [gitup](https://gitup.co/)
- 收费 - [smartgit](https://www.syntevo.com/smartgit/)
- 收费 - [git-fork](https://git-fork.com/)
- 收费 - [tower](https://www.git-tower.com/)
- 收费 - [lazygit](https://github.com/jesseduffield/lazygit)

## 生成SSHKey

1、替换为您的GitHub电子邮件地址

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

2、当提示"输入要在其中保存密钥的文件"时，按Enter。接受默认文件位置。 (建议修改名字，防止以后被覆盖)

```
> Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
```

3、在提示符下，键入一个安全密码, 默认回车即可

```bash
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```

4、生成的SSH Key 添加到 `ssh config` 中

```bash
vim ~/.ssh/config

# 粘贴
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

最后将公钥添加到 https://github.com/settings/keys 中

```
cat ~/.ssh/id_rsa.pub
```

## 提交规范

| 标志     | 描述                                                  |
| :------- | :---------------------------------------------------- |
| feat     | 该提交含有新的特性                                    |
| style    | 通常是代码格式的修改                                  |
| chore    | 通常是代码格式的修改                                  |
| fix      | 修复Bug                                               |
| docs     | 文档修改                                              |
| test     | 单元测试改动                                          |
| refactor | 代码[重构](https://www.xtboke.cn/tag-重构.html)       |
| perf     | 性能[优化](https://www.xtboke.cn/tag-优化.html)、体验 |
| revert   | 回滚版本                                              |
| merge    | 代码合并                                              |
| typo     | 错字, 比如单词拼错                                    |

**例子：**

```bash
# 含有新特性
git commit -m "feat: 新增xx功能"

# 代码格式化
git commit -m "style: 规范Eslint"

# 修改Jenkins构建流程
git commit -m "chore: Update Jenkins"

# 修复Bug, 建议描述清晰, 日后方便查找, #688 是修复某个id的编号
git commit -m "fix(登录闪烁): #688"

# 修改了 README.md 文档
git commit -m "docs: git pull"

# 单元测试改动
git commit -m "test: 测试登录"

# 项目代码重构
git commit -m "refactor: 流程模块重构"
```

## 其他

```bash
# 查看git版本
git --version

# 记住提交账号密码
git config --global credential.helper store

# 清除git已保存的用户名和密码
git credential-manager uninstall # windows
git config --global credential.helper "" # mac linux
git config --global --unset credential.helper # 或者 mac linux

# 清除本地git缓存
git rm -r --cached .

# 列出没有被 .gitignore 忽略的文件列表
git ls-files
```

## 帮助

```bash
# 详细打印所有git命令
git help

# 打印所有git命令, 此命令不会有详细信息，更清晰一些
git help -a

# 列出所有可配置的变量
git help -c
```

## 加速

在国内克隆或下载版本会很慢，可以借助下面2个镜像站点进行加速。

- [https://github.com.cnpmjs.org](https://github.com.cnpmjs.org/)
- [https://hub.fastgit.org](https://hub.fastgit.org/)

```bash
git clone https://github.com/xjh22222228/git-manual.git
# ↓ 只需要将域名替换即可, 例如:
git clone https://github.com.cnpmjs.org/xjh22222228/git-manual.git
```

资源加速：

```bash
https://raw.githubusercontent.com/xjh22222228/git-manual/master/media/poster.png
# ↓ 替换为
https://raw.sevencdn.com/xjh22222228/git-manual/master/media/poster.png
```
