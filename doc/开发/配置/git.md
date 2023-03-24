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





















## 入门清单

### 创建存储库

```bash
# 创建一个新的本地存储库
$ git init [项目名称]

# 克隆存储库
$ git clone <git仓库url地址>

# 将存储库克隆到指定目录
$ git clone <git仓库url地址> <我的文件夹>
```

### 配置

```bash
# 设置将附加到您的提交(commit)和标签(tags)的名称
$ git config --global user.name "name"

# 设置将附加到您的提交(commit)和标签(tags)的电子邮件地址
$ git config --global user.email "email"

# 启用 Git 输出的一些着色
$ git config --global color.ui auto

# 在文本编辑器中编辑全局配置文件
$ git config --global --edit
```

### 变更

```bash
# 在工作目录中显示修改后的文件，为您的下一次提交暂存
$ git status

# 暂存文件，准备提交
$ git add [file]

# 暂存所有更改的文件，准备提交
$ git add .

# 将所有暂存文件提交到版本化历史记录
$ git commit -m "commit message"

# 将所有跟踪的文件提交到版本化历史记录
$ git commit -am "commit message"

# 取消暂存文件，保留文件更改
$ git reset [file]

# 将所有内容恢复到最后一次提交
$ git reset --hard

# 已更改但未暂存（staged）的内容的差异
$ git diff

# 已暂存（staged）但尚未提交的内容的差异
$ git diff --staged

# 在指定之前应用当前分支的任何提交
$ git rebase [branch]
```

### 分支

```bash
# 列出所有本地分支
$ git branch

# 列出所有分支，本地和远程
$ git branch -av

# 切换到 my_branch，并更新工作目录
$ git checkout my_branch

# 创建一个名为 new_branch 的新分支
$ git checkout -b new_branch

# 删除名为 my_branch 的分支
$ git branch -d my_branch

# 将 branchA 分支合并到 branchB 分之上
$ git checkout branchB
$ git merge branchA

# 标记当前提交
$ git tag my_tag

# 重命名为 new_name
$ git branch -m <new_name>

# 推送和重置
$ git push origin -u <new_name>

# 删除远程分支
$ git push origin --delete <old>
```

### 观察存储库

```bash
# 显示当前活动分支的提交历史
$ git log

# 显示 branchA 上不在 branchB 上的提交
$ git log branchB..branchA

# 显示更改文件的提交，即使重命名
$ git log --follow [file]

# 显示 branchA 中的内容与 branchB 中的差异
$ git diff branchB...branchA

# 在 Git 中以 人类可读 格式显示任何对象
$ git show [SHA]

# 按内容搜索更改
$ git log -S'<a term in the source>'

# 显示特定文件随时间的变化
$ git log -p <file_name>

# 打印出很酷的日志可视化
$ git log --pretty=oneline --graph --decorate --all
```

### 同步

```bash
# 从该 Git 远程获取所有分支
$ git fetch [alias]

# 将远程分支合并到当前分支以使其保持最新状态
$ git merge [alias]/[branch]
  No fast-forward
$ git merge --no-ff [alias]/[branch]
  Only fast-forward
$ git merge --ff-only [alias]/[branch]

# 将本地分支提交传输到远程存储库分支
$ git push [alias] [branch]

# 从跟踪远程分支获取并合并任何提交
$ git pull

# 将另一个分支的一个特定提交合并到当前分支
$ git cherry-pick [commit_id]
```

### 远程

```bash
# 添加一个 git URL 作为别名(alias)
$ git remote add [alias] [url]

# 显示您设置的远程存储库的名称
$ git remote

# 显示远程存储库的名称和 URL
$ git remote -v

# 删除远程存储库
$ git remote rm [remote repo name]

# 更改 git repo 的 URL
$ git remote set-url origin [git_url]
```

### 临时提交

```bash
# 保存已修改和分阶段的更改
$ git stash

# 列出隐藏文件更改的堆栈顺序
$ git stash list

# 从存储堆栈顶部编写工作
$ git stash pop

# 丢弃存储堆栈顶部的更改
$ git stash drop
```

### 跟踪路径更改

```bash
# 从项目中删除文件并暂存删除以进行提交
$ git rm [file]

# 更改现有文件路径并暂存移动
$ git mv [existing-path] [new-path]

# 显示所有提交日志，并指示任何移动的路径
$ git log --stat -M
```

### 忽略文件

`.gitignore` 文件指定了 Git 应该忽略的故意未跟踪的文件

```bash
/logs/*

# "!" 意思是不要忽视
!logs/.gitkeep

# 忽略 Mac 系统文件
.DS_store

# 忽略 node_modules 文件夹
node_modules

# 忽略 SASS 配置文件
.sass-cache
```

### 分支

```bash
# 列出所有分支及其上游
$ git branch -vv 

# 快速切换到上一个分支
$ git checkout -

# 只获取远程分支
$ git branch -r

# 从另一个分支签出单个文件
$ git checkout <branch> -- <file>
```









## 安装卸载

[官方教程](https://git-scm.com/download/linux)，在 Linux/Unix 系统中，通过工具在中安装 `git`,这种方式比较简单，便于升级卸载工具。

下面介绍在 CentOS 系统中，通过 yum 来安装 git

> **Red Hat Enterprise Linux, Oracle Linux, CentOS, Scientific Linux, et al.** RHEL and derivatives typically ship older versions of git. You can [download a tarball](https://www.kernel.org/pub/software/scm/git/) and build from source, or use a 3rd-party repository such as [the IUS Community Project](https://ius.io/) to obtain a more recent version of git.

官方文档说 git 在 `RHEL` 和衍生产品通常都会发布旧版本的 `git`，我们需要源码编译安装，或者使用第三方存储库（如[IUS社区项目](https://ius.io/)）。

现在我们通过，[IUS社区](https://ius.io/GettingStarted/)下载 [ius-release.rpm](https://centos7.iuscommunity.org/ius-release.rpm) 文件进行安装

```bash
# 注意下载不同的版本，本机 CentOS 7
wget https://centos7.iuscommunity.org/ius-release.rpm
# 安装rpm文件
rpm -ivh ius-release.rpm
```

查看可安装的git安装包

```bash
repoquery --whatprovides git
# git-0:1.8.3.1-13.el7.x86_64
# git2u-0:2.16.5-1.ius.centos7.x86_64
# git2u-0:2.16.2-1.ius.centos7.x86_64
# git2u-0:2.16.4-1.ius.centos7.x86_64
# git-0:1.8.3.1-14.el7_5.x86_64
```

**yum 卸载 git 安装新版本**

卸载 `1.8.3` 的 `git`，安装 `2.16.5` 的 `git`

```bash
# 卸载老的版本
yum remove git
# 安装新的版本
yum install git2u
```

## 配置管理

首先是配置帐号信息 `ssh -T git@github.com` 测试。

```bash
git help config    # 获取帮助信息，查看修改个人信息的参数  
git config --list  # 查看配置的信息
git config --global user.name "小弟调调"          # 修改全局名字
git config --global user.email "wowohoo@qq.com"  # 修改全局邮箱
git config --global --unset <entry-name>  # 删除全局设置
```

## 不常见的使用场景

### 忽略文件的权限变化

不再将文件的权限变化视作改动

```bash
git config core.fileMode false
```

### 设置大小写敏感

```bash
git config --get core.ignorecase # 查看git 的设置
git config core.ignorecase false # 设置大小写敏感
git rm -r --cached <目录/文件>  # 远程有俩相同目录，通过这种方式清除掉，然后提交记录
```

### 配置自动换行

自动转换坑太大，提交到git是自动将换行符转换为lf

```bash
git config --global core.autocrlf input
```

### 创建SSH密钥

这个密钥用来跟 github 通信，在本地终端里生成然后上传到 github

```bash
ssh-keygen -t rsa -C 'wowohoo@qq.com' # 生成密钥  
ssh-keygen -t rsa -C "wowohoo@qq.com" -f ~/.ssh/ww_rsa # 指定生成目录文件名字
ssh -T git@github.com # 测试是否成功  
```

### 多账号ssh配置

**1.生成指定名字的密钥**

`ssh-keygen -t rsa -C "邮箱地址" -f ~/.ssh/jslite_rsa`
会生成 `jslite_rsa` 和 `jslite_rsa.pub` 这两个文件

**2.密钥复制到托管平台上**

`vim ~/.ssh/jslite_rsa.pub`
打开公钥文件 `jslite_rsa.pub` ，并把内容复制至代码托管平台上

**3.修改config文件**

```
vim ~/.ssh/config` #修改config文件，如果没有创建 `config
Host jslite.github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/jslite_rsa

Host work.github.com
  HostName github.com
  # Port 服务器open-ssh端口（默认：22,默认时一般不写此行）
  # PreferredAuthentications 配置登录时用什么权限认证 
  #                          publickey|password publickey|keyboard-interactive等
  User git
  IdentityFile ~/.ssh/work_rsa
```

- `Host` 这里是个别名可以随便命名
- `HostName` 一般是网站如：`git@ss.github.com:username/repo.git` 填写 `github.com`
- `User` 通常填写`git`
- `IdentityFile` 使用的公钥文件地址

**4.测试**

```bash
ssh -T git@jslite.github.com  # `@`后面跟上定义的Host  
ssh -T work.github.com        # 通过别名测试
ssh -i ~/公钥文件地址 Host别名  # 如 ssh -i ~/.ssh/work_rsa work.github.com
```

**5.使用**

```bash
# 原来的写法
git clone git@github.com:<jslite的用户名>/learngit.git
# 现在的写法
git clone git@jslite.github.com:<jslite的用户名>/learngit.git
git clone git@work.github.com:<work的用户名>/learngit.git
```

**5.注意**

如果你修改了id_rsa的名字，你需要将ssh key添加到SSH agent中，如：

```bash
ssh-add ~/.ssh/jslite_rsa
ssh-add -l  # 查看所有的key
ssh-add -D  # 删除所有的key
ssh-add -d  ~/.ssh/jslite_rsa # 删除指定的key
```

### 免密码登录远程服务器

```bash
$ ssh-keygen -t rsa -P '' -f ~/.ssh/aliyunserver.key
$ ssh-copy-id -i ~/.ssh/aliyunserver.key.pub root@192.168.182.112 # 这里需要输入密码一次
```

编辑 `~/.ssh/config`

```bash
Host aliyun1
  HostName 192.168.182.112
  User root
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/aliyunserver.key
```

上面配置完了，可以通过命令登录，不需要输入IP地址和密码 `ssh aliyun1`

### https协议下提交代码免密码

```bash
git clone https://github.com/username/rep.git
```

通过上面方式克隆可能需要密码，解决办法：进入当前克隆的项目 `vi rep/.git/config` 编辑 `config`, 按照下面方式修改，你就可以提交代码不用输入密码了。

```diff
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "origin"]
-	url = https://github.com/username/rep.git
+	url = https://用户名:密码@github.com/username/rep.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
```

### 文件推向3个git库

**1. 增加3个远程库地址**

```shell
git remote add origin https://github.com/JSLite/JSLite.git  
git remote set-url --add origin https://gitlab.com/wang/JSLite.js.git  
git remote set-url --add origin https://oschina.net/wang/JSLite.js.git  
```

**2. 删除其中一个 set-url 地址**

```shell
usage: git remote set-url [--push] <name> <newurl> [<oldurl>]
   or: git remote set-url --add <name> <newurl>
   or: git remote set-url --delete <name> <url>
git remote set-url --delete origin https://oschina.net/wang/JSLite.js.git
```

**3.推送代码**

```bash
git push origin master
git push -f origin master  # 强制推送  
```

**4.拉代码**

只能拉取 `origin` 里的一个url地址，这个fetch-url
默认为你添加的到 `origin`的第一个地址

```shell
git pull origin master   
git pull --all # 获取远程所有内容包括tag  
git pull origin next:master # 取回origin主机的next分支，与本地的master分支合并  
git pull origin next # 远程分支是与当前分支合并  

# 上面一条命令等同于下面两条命令   
git fetch origin  
git merge origin/next  
```

如果远程主机删除了某个分支，默认情况下，git pull 不会在拉取远程分支的时候，删除对应的本地分支。这是为了防止，由于其他人操作了远程主机，导致git pull不知不觉删除了本地分支。
但是，你可以改变这个行为，加上参数 -p 就会在本地删除远程已经删除的分支。

```shell
$ git pull -p
# 等同于下面的命令
$ git fetch --prune origin 
$ git fetch -p
```

**5.更改pull**

只需要更改config文件里，那三个url的顺序即可，fetch-url会直接对应排行第一的那个utl连接。

### 修改远程仓库地址

```bash
git remote remove origin  # 删除该远程路径  
git remote add origin git@jslite.github.com:JSLite/JSLite.git  # 添加远程路径 
```

### 撤销远程记录

```shell
git reset --hard HEAD~1 # 撤销一条记录   
git push -f origin HEAD:master # 同步到远程仓库  
```

### 放弃本地的文件修改

```shell
git reset --hard FETCH_HEAD # FETCH_HEAD表示上一次成功git pull之后形成的commit点。然后git pull
```

`git reset --hard FETCH_HEAD` 出现错误

```bash
git pull
You are not currently on a branch, so I cannot use any
'branch.<branchname>.merge' in your configuration file.
Please specify which remote branch you want to use on the command
line and try again (e.g. 'git pull <repository> <refspec>').
See git-pull(1) FOR details.
```

解决方法：

```bash
git checkout -b temp # 新建+切换到temp分支 
git checkout master
```

### 最简单放弃本地修改内容

```bash
# 如果有的修改以及加入暂存区的话
git reset --hard 
# 还原所有修改，不会删除新增的文件
git checkout . 
# 下面命令会删除新增的文件
git clean -xdf
```

通过存储暂存区stash，在删除暂存区的方法放弃本地修改。

```bash
git stash && git stash drop 
```

### 回退到某一个版本

```bash
git reset --hard <hash>
# 例如 git reset --hard a3hd73r
# --hard代表丢弃工作区的修改，让工作区与版本代码一模一样，与之对应，
# --soft参数代表保留工作区的修改。
```

### 搜索 commit 历史记录

```shell
git log --grep=224
# 这条命令是查看含有 "224" 关键字的 git commit 
```

### 回滚到某个commit提交

```shell
git revert HEAD~1 # 撤销一条记录 会弹出 commit 编辑
git push # 提交回滚
```

### 去掉某个commit

```bash
# 实质是新建了一个与原来完全相反的commit，抵消了原来commit的效果
git revert <commit-hash> 
```

### 把 A 分支的某一个 commit，放到 B 分支上

对两个分支，同时都拥有的文件，进行修改后，再同时 `commit` 到这两个分支，比如 `master` 分支和 `branch1` 分支，都拥有文件 `test.js` ，在 `master` 或者 `branch1` 分支下对 `test.js` 进行修改后，把修改的 `test.js` 同时提交到 `master` 分支和 `branch1` 分支。

```bash
git checkout <branch-name> && git cherry-pick <commit-id>
```

### 获取最近一次提交的 commit id

```bash
git rev-parse HEAD # e10721cb8859b2cd340d31a52ef4bf4b9629ddda
git rev-parse --short HEAD # e10721c
```

### 两个 git 仓库合并

现在有两个仓库 [kktjs/kkt](https://github.com/kktjs/kkt.git) 和 [kktjs/kkt-next](https://github.com/kktjs/kkt-next.git) 我们需要将 `kkt-next` 仓库合并到 `kkt` 并保留 `kkt-next` 的所有提交内容。

```bash
# 1. 克隆主仓库代码
git clone git@github.com:kktjs/kkt.git
# 2. 将 kkt-next 作为远程仓库，添加到 kkt 中，设置别名为 other
git remote add other git@github.com:kktjs/kkt-next.git
# 3. 从 kkt-next 仓库中拉取数据到本仓库
git fetch other
# 4. 将 kkt-next 仓库拉取的 master 分支作为新分支 checkout 到本地，新分支名设定为 kkt-next
git checkout -b kkt-next other/master
# 5. 切换回 kkt 的 master 分支
git checkout master
# 6. 将 kkt-next 合并入 kkt 的 master 分支
git merge kkt-next
# 如果第 6 步报错 `fatal: refusing to merge unrelated histories`
# 请执行下面命令 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
git merge kkt-next --allow-unrelated-histories
```

在合并时有可能两个分支对同一个文件都做了修改，这时需要解决冲突，对文本文件来说很简单，根据需要对冲突的位置进行处理就可以。对于二进制文件，需要用到如下命令:

```bash
git checkout --theirs YOUR_BINARY_FILES     # 保留需要合并进来的分支的修改
git checkout --ours YOUR_BINARY_FILES       # 保留自己的修改
git add YOUR_BINARY_FILES
```

### 合并多个commit

```bash
# 这个命令，将最近4个commit合并为1个，HEAD代表当前版本。
# 将进入VIM界面，你可以修改提交信息。
git rebase -i HEAD~4 
# 可以看到其中分为两个部分，上方未注释的部分是填写要执行的指令，
# 而下方注释的部分则是指令的提示说明。指令部分中由前方的命令名称、commit hash 和 commit message 组成
# 当前我们只要知道 pick 和 squash 这两个命令即可。
# --> pick 的意思是要会执行这个 commit
# --> squash 的意思是这个 commit 会被合并到前一个commit

# 我们将 需要保留的 这个 commit 前方的命令改成 squash 或 s，然后输入:wq以保存并退出
# 这是我们会看到 commit message 的编辑界面

# 其中, 非注释部分就是两次的 commit message, 你要做的就是将这两个修改成新的 commit message。
# 
# 输入wq保存并推出, 再次输入git log查看 commit 历史信息，你会发现这两个 commit 已经合并了。
# 将修改强制推送到前端
git push -f origin master
```

### 修改远程Commit记录

```bash
git commit --amend
# amend只能修改没有提交到线上的，最后一次commit记录
git rebase -i HEAD~3
# 表示要修改当前版本的倒数第三次状态
# 将要更改的记录行首单词 pick 改为 edit
pick 96dc3f9 doc: Update quick-start.md
pick f1cce8a test(Transition):Add transition test (#47)
pick 6293516 feat(Divider): Add Divider component.
# Rebase eeb03a4..6293516 onto eeb03a4 (3 commands)
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
```

保存并退出，会弹出下面提示

```bash
# You can amend the commit now, with
# 
#   git commit --amend
# 
# Once you are satisfied with your changes, run
# 
#   git rebase --continue

# 通过这条命令进入编辑页面更改commit，保存退出
git commit --amend
# 保存退出确认修改，继续执行 rebase, 
git rebase --continue
# 如果修改多条记录反复执行上面两条命令直到完成所有修改

# 最后，确保别人没有提交进行push，最好不要加 -f 强制推送
git push -f origin master
```

### 利用commit关闭一个issue

这个功能在Github上可以玩儿，Gitlab上特别老的版本不能玩儿哦，那么如何跟随着commit关闭一个issue呢? 在confirm merge的时候可以使用一下命令来关闭相关issue:

`fixes #xxx`、 `fixed #xxx`、 `fix #xxx`、 `closes #xxx`、 `close #xxx`、 `closed #xxx`、

### 新建一个空分支

```bash
# 这种方式新建的分支(gh-pages)是没有 commit 记录的
git checkout --orphan gh-pages
# 删除新建的gh-pages分支原本的内容，如果不删除，提交将作为当前分支的第一个commit
git rm -rf .
# 查看一下状态 有可能上面一条命令，没有删除还没有提交的的文件
git state 
```

### 添加忽略文件

```
echo node_modules/ >> .gitignore
```

### 忽略某个文件的改动

```bash
git update-index --assume-unchanged path/to/file # 关闭 track 指定文件的改动，也就是 Git 将不会在记录这个文件的改动
git update-index --no-assume-unchanged path/to/file # 恢复 track 指定文件的改动
```

### 同步fork的上游仓库

[Github教程同步fork教程](https://help.github.com/articles/syncing-a-fork/)，[在Github上同步一个分支(fork)](http://www.miss77.net/549.html)

**设置添加多个远程仓库地址。**

在同步之前，需要创建一个远程点指向上游仓库(repo).如果你已经派生了一个原始仓库，可以按照如下方法做。

```shell
$ git remote -v
# List the current remotes （列出当前远程仓库）
# origin  https://github.com/user/repo.git (fetch)
# origin  https://github.com/user/repo.git (push)
$ git remote add upstream https://github.com/otheruser/repo.git
# Set a new remote (设置一个新的远程仓库)
$ git remote -v
# Verify new remote (验证新的原唱仓库)
# origin    https://github.com/user/repo.git (fetch)
# origin    https://github.com/user/repo.git (push)
# upstream  https://github.com/otheruser/repo.git (fetch)
# upstream  https://github.com/otheruser/repo.git (push)
```

**同步更新仓库内容**

同步上游仓库到你的仓库需要执行两步：首先你需要从远程拉去，之后你需要合并你希望的分支到你的本地副本分支。从上游的存储库中提取分支以及各自的提交内容。 `master` 将被存储在本地分支机构 `upstream/master`

```shell
git fetch upstream
# remote: Counting objects: 75, done.
# remote: Compressing objects: 100% (53/53), done.
# remote: Total 62 (delta 27), reused 44 (delta 9)
# Unpacking objects: 100% (62/62), done.
# From https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY
#  * [new branch]      master     -> upstream/master
```

检查你的 fork's 本地 `master` 分支

```shell
git checkout master
# Switched to branch 'master'
```

合并来自 `upstream/master` 的更改到本地 master 分支上。 这使你的前 fork's `master` 分支与上游资源库同步，而不会丢失你本地修改。

```shell
git merge upstream/master
# Updating a422352..5fdff0f
# Fast-forward
#  README                    |    9 -------
#  README.md                 |    7 ++++++
#  2 files changed, 7 insertions(+), 9 deletions(-)
#  delete mode 100644 README
#  create mode 100644 README.md
```

### 手动合并冲突的 Pull Request

以 [tsbbjs/tsbb](https://github.com/tsbbjs/tsbb) 为例，合并来自 [jaywcjlove/tsbb](https://github.com/jaywcjlove/tsbb) master分支的 `Pull Request`。

```bash
# 1. 克隆主仓库
git clone git@github.com:tsbbjs/tsbb.git 
# 2. 在主仓库 master 分支切个 jaywcjlove-master 分支出来，并且切换到 jaywcjlove-master 分支
git checkout -b jaywcjlove-master master
# 3. 获取 jaywcjlove/tsbb 仓库 master 分支最新代码
git pull https://github.com/jaywcjlove/tsbb.git master
# ⚠️ 注意下面是输出内容：
# ----------------------
# Auto-merging src/babel/transform.ts
# CONFLICT (content): Merge conflict in src/babel/transform.ts
# ----------------------
# ⚠️ 注意上面 CONFLICT 标识是有冲突无法自动合并的代码，根据路径进入代码手动合并
# 4. 合并完成之后，进行 commit 说明合并内容
git commit -m "Merge branch 'master' of github.com:jaywcjlove/tsbb #3"
# 5. 切换到 master 分支，如果是 PR 其它分支，这里就切其它分支
git checkout master
# 6. 合并 jaywcjlove-master 分支的代码
git merge --no-ff jaywcjlove-master
# 7. 提交代码
git push origin master
```

### 修改作者名

```
git commit --amend --author='Author Name <email@address.com>'
```

### 批量修改历史commit中的名字和邮箱

这是 [Github官方教程](https://help.github.com/articles/changing-author-info/)

**1.克隆仓库**

注意参数，这个不是普通的clone，clone下来的仓库并不能参与开发

```bash
git clone --bare https://github.com/user/repo.git
cd repo.git
```

**2.命令行中运行代码**

OLD_EMAIL原来的邮箱
CORRECT_NAME更正的名字
CORRECT_EMAIL更正的邮箱

将下面代码复制放到命令行中执行

```bash
git filter-branch -f --env-filter '
OLD_EMAIL="wowohoo@qq.com"
CORRECT_NAME="小弟调调"
CORRECT_EMAIL="更正的邮箱@qq.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

执行过程

```bash
Rewrite 160d4df2689ff6df3820563bfd13b5f1fb9ba832 (479/508) (16 seconds passed, remaining 0 predicted)
Ref 'refs/heads/dev' was rewritten
Ref 'refs/heads/master' was rewritten
```

**3.同步到远程仓库**

同步到push远程git仓库

```bash
git push --force --tags origin 'refs/heads/*'
```

我还遇到了如下面错误，lab默认给master分支加了保护，不允许强制覆盖。`Project(项目)`->`Setting`->`Repository` 菜单下面的`Protected branches`把master的保护去掉就可以了。修改完之后，建议把master的保护再加回来，毕竟强推不是件好事。

```bash
remote: GitLab: You are not allowed to force push code to a protected branch on this project.
```

当上面的push 不上去的时候，先 `git pull` 确保最新代码

```bash
git pull  --allow-unrelated-histories
# 或者指定分枝
git pull origin master --allow-unrelated-histories
```

**4. 删除仓库**

```bash
cd ..
rm -rf repo.git
```

### 查看两个星期内的改动

```
git whatchanged --since='2 weeks ago'
```

### 查看某个文件历史

```shell
git log --pretty=oneline 文件名  # 列出文件的所有改动历史  
git show c178bf49   # 某次的改动的修改记录  
git log -p c178bf49 # 某次的改动的修改记录  
git blame 文件名     # 显示文件的每一行是在那个版本最后修改。  
git whatchanged 文件名  # 显示某个文件的每个版本提交信息：提交日期，提交人员，版本号，提交备注（没有修改细节）  
```

### 查看git仓库中最近修改的分支

```bash
git for-each-ref --count=30 --sort=-committerdate refs/heads/ --format='%(refname:short)'
```

### 更新所有本地分支

```bash
git branch \
  --format "%(if)%(upstream:short)%(then)git push . %(upstream:short):%(refname:short)%(end)" |
  sh
```

### 打造自己的git命令

```sh
git config --global alias.st status
git config --global alias.br branch
git config --global alias.co checkout
git config --global alias.ci commit
```

配置好后再输入git命令的时候就不用再输入一大段了，例如我们要查看状态，只需：

```sh
git st
```

### 删除已经合并到 master 的分支

```bash
git branch --merged master | grep -v '^\*\|  master' | xargs -n 1 git branch -d
```

### 中文乱码的解决方案

```bash
git config --global core.quotepath false
```

### 提交一个空文件夹

在空文件夹中建立一个文件 `.gitkeep`, 你就可以提交这个空文件夹了。

## 新建仓库

### init

`git init` #初始化

### status

`git status` #获取状态

### add

`git add file` # .或*代表全部添加
`git rm --cached ` # 在commit之前撤销git add操作
`git reset head` # 好像比上面`git rm --cached`更方便

### commit

`git commit -m "message"` #此处注意乱码

### remote

`git remote add origin git@github.com:JSLite/test.git` #添加源

### push

```bash
git push -u origin master # push同事设置默认跟踪分支  
git push origin master  
git push -f origin master # 强制推送文件，缩写 -f（全写--force）
```

## clone

```bash
git clone git://github.com/JSLite/JSLite.js.git   
git clone git://github.com/JSLite/JSLite.js.git --depth=1  
git clone git://github.com/JSLite/JSLite.js.git mypro # 克隆到自定义文件夹  
git clone [user@]example.com:path/to/repo.git/ # SSH协议还有另一种写法。  
```

git clone支持多种协议，除了HTTP(s)以外，还支持SSH、Git、本地文件协议等，下面是一些例子。`git clone <版本库的网址> <本地目录名>`

```shell
$ git clone http[s]://example.com/path/to/repo.git/
$ git clone ssh://example.com/path/to/repo.git/
$ git clone ssh://example.com/path/to/repo.git/
$ git clone git://example.com/path/to/repo.git/
$ git clone /opt/git/project.git 
$ git clone file:///opt/git/project.git
$ git clone ftp[s]://example.com/path/to/repo.git/
$ git clone rsync://example.com/path/to/repo.git/
```

## 本地

### help

```bash
git help config # 获取帮助信息  
```

### add

```shell
git add *   # 跟踪新文件   
git add -u [path]   # 添加[指定路径下]已跟踪文件   
```

### rm

```shell
rm *&git rm *          # 移除文件  
git rm -f *            # 移除文件  
git rm --cached *      # 取消跟踪  
git mv file_from file_to  # 重命名跟踪文件  
git log   # 查看提交记录  
```

### commit

```shell
git commit #提交更新   
git commit -m 'message' #提交说明   
git commit -a #跳过使用暂存区域，把所有已经跟踪过的文件暂存起来一并提交   
git commit --amend #修改最后一次提交   
git commit log #查看所有提交，包括没有push的commit    
git commit -m "#133" #关联issue 任意位置带上# 符号加上issue号码  
git commit -m "fix #133" commit关闭issue  
git commit -m '概要描述'$'\n\n''1.详细描述'$'\n''2.详细描述' #提交简要描述和详细描述  
```

### reset

```shell
git reset HEAD *  # 取消已经暂存的文件   
git reset --mixed HEAD * # 同上   
git reset --soft HEAD *  # 重置到指定状态，不会修改索引区和工作树   
git reset --hard HEAD *  # 重置到指定状态，会修改索引区和工作树   
git reset -- files *     # 重置index区文件   
```

### revert

```shell
git revert HEAD   # 撤销前一次操作   
git revert HEAD~  # 撤销前前一次操作   
git revert commit # 撤销指定操作   
```

### checkout

```shell
git checkout -- file  # 取消对文件的修改（从暂存区——覆盖worktree file）  
git checkout branch|tag|commit -- file_name  # 从仓库取出file覆盖当前分支   
git checkout HEAD~1 [文件]  # 将会更新 working directory 去匹配某次 commit   
git checkout -- .          # 从暂存区取出文件覆盖工作区   
git checkout -b gh-pages  0c304c9  # 这个表示 从当前分支 commit 哈希值为 0c304c9 的节点，分一个新的分支gh-pages出来，并切换到 gh-pages   
```

### diff

```shell
git diff file     # 查看指定文件的差异   
git diff --stat   # 查看简单的diff结果   
git diff          # 比较 Worktree 和 Index 之间的差异   
git diff --cached   # 比较Index和HEAD之间的差异   
git diff HEAD       # 比较Worktree和HEAD之间的差异   
git diff branch     # 比较Worktree和branch之间的差异   
git diff branch1 branch2  # 比较两次分支之间的差异   
git diff commit commit    # 比较两次提交之间的差异   
git diff master..test   # 上面这条命令只显示两个分支间的差异  
git diff master...test    # 你想找出‘master’,‘test’的共有 父分支和'test'分支之间的差异，你用3个‘.'来取代前面的两个'.'  
```

### stash

存储当前的修改，但不用提交 commit

```shell
git stash # 将工作区现场（已跟踪文件）储藏起来，等以后恢复后继续工作。  
git stash -u    # 保存当前状态，包括 untracked 的文件
git stash list  # 查看保存的工作现场   
git stash apply # 恢复工作现场   
git stash drop  # 删除stash内容
git stash clear # 删除所有的 stash
git stash pop   # 恢复的同时直接删除stash内容   
git stash apply stash@{0} # 恢复指定的工作现场，当你保存了不只一份工作现场时。
git checkout <stash@{n}> -- <file-path> # 从 stash 中拿出某个文件的修改
```

### merge

```bash
git merge --squash test # 合并压缩，将test上的commit压缩为一条   
```

### cherry-pick

```shell
git cherry-pick commit    # 拣选合并，将commit合并到当前分支   
git cherry-pick -n commit # 拣选多个提交，合并完后可以继续拣选下一个提交   
```

### rebase

```shell
git rebase master   # 将master分之上超前的提交，变基到当前分支  
git rebase --onto master 169a6  # 限制回滚范围，rebase当前分支从169a6以后的提交  
git rebase --interactive # 交互模式，修改commit   
git rebase --continue    # 处理完冲突继续合并   
git rebase --skip        # 跳过   
git rebase --abort       # 取消合并    
```

## 分支branch

### 删除

```shell
git push origin :branchName  # 删除远程分支  
git push origin --delete new # 删除远程分支new   
git branch -d branchName     # 删除本地分支，强制删除用-D  
git branch -d test      # 删除本地test分支   
git branch -D test      # 强制删除本地test分支   
git remote prune origin # 远程删除了，本地还能看到远程存在，这条命令删除远程不存在的分支
```

### 提交

```bash
git push -u origin branchName # 提交分支到远程origin主机中  
```

### 拉取

```bash
git fetch -p # 拉取远程分支时，自动清理 远程分支已删除，本地还存在的对应同名分支。  
git fetch origin '+refs/heads/*:refs/heads/*' # 更新所有分支内容
```

### 分支合并

```shell
git merge branchName      # 合并分支 - 将分支branchName和当前所在分支合并   
git merge origin/master   # 在本地分支上合并远程分支。   
git rebase origin/master  # 在本地分支上合并远程分支。   
git merge test            # 将test分支合并到当前分支   
```

### 重命名

```bash
git branch -m old new # 重命名分支  
```

### 查看

```shell
git branch      # 列出本地分支   
git branch -r   # 列出远端分支   
git branch -a   # 列出所有分支   
git branch -v   # 查看各个分支最后一个提交对象的信息   
git branch --merge      # 查看已经合并到当前分支的分支   
git branch --no-merge   # 查看为合并到当前分支的分支   
git remote show origin  # 可以查看remote地址，远程分支
```

### 新建

```shell
git branch test # 新建test分支  
git branch newBrach 3defc69 # 指定哈希3defc69，新建分支名字为newBrach
git checkout -b newBrach origin/master # 取回远程主机的更新以后，在它的基础上创建一个新的分支  
git checkout -b newBrach 3defc69 # 以哈希值3defc69，新建 newBrach 分支，并切换到该分支
```

### 连接

```shell
git branch --set-upstream dev origin/dev     # 将本地dev分支与远程dev分支之间建立链接  
git branch --set-upstream master origin/next # 手动建立追踪关系  
```

### 分支切换

```shell
git checkout -        # 快速切换分支上一个分支
git checkout test     # 切换到test分支   
git checkout -b test  # 新建+切换到test分支   
git checkout -b test dev # 基于dev新建test分支，并切换   
```

## 远端

```shell
git fetch <远程主机名> <分支名>   # fetch取回所有分支（branch）的更新  
git fetch origin remotebranch[:localbranch]   #  从远端拉去分支[到本地指定分支]   
git merge origin/branch   # 合并远端上指定分支   
git pull origin remotebranch:localbranch  #  拉去远端分支到本地分支   
git push origin branch    # 将当前分支，推送到远端上指定分支   
git push origin localbranch:remotebranch  # 推送本地指定分支，到远端上指定分支   
git push origin :remotebranch   # 删除远端指定分支   
git checkout -b [--track] test origin/dev # 基于远端dev分支，新建本地test分支[同时设置跟踪]  
```

## submodule

克隆项目同时克隆 submodule

```bash
git clone https://github.com/jaywcjlove/handbook.git --depth=1 --recurse-submodules
```

克隆项目，之后再手动克隆 submodule 子项目

```bash
git submodule add -b gh-pages --force '仓库地址' '路径'
git submodule add --force '仓库地址' '路径'
# 其中，仓库地址是指子模块仓库地址，路径指将子模块放置在当前工程下的路径。
# 注意：路径不能以 / 结尾（会造成修改不生效）、不能是现有工程已有的目录（不能順利 Clone）
git submodule init # 初始化 submodule
git submodule update # 更新submodule(必须在根目录执行命令)
git submodule update --init --recursive  # 下载的工程带有submodule
git submodule update --recursive --remote # 对于 git 1.8.2 或更高版本，添加了选项 --remote 以支持更新远程分支
git pull --recurse-submodules # 更新 submodule git 1.7.3 版本
```

当使用`git clone`下来的工程中带有submodule时，初始的时候，submodule的内容并不会自动下载下来的，此时，只需执行如下命令：

```bash
git submodule foreach --recursive git submodule init
```

### 更新 submodule

```bash
git submodule foreach git pull  # submodule 里有其他的 submodule 一次更新
git submodule foreach git pull origin master # submodule更新
git submodule foreach --recursive git submodule update
git submodule update --recursive --remote
git pull --recurse-submodules
git submodule deinit --all -f # 清理 submodule
```

### 删除 submodule

```bash
git ls-files --stage <子项目名称路径> # 查看子项目
vim .gitmodules # 删除对应的 submodule
vim .git/config # 删除对应的 submodule
git rm --cached <子模块名称> # 删除缓存中的子项目，注意没有 `/`
git rm --cached subProjectName
rm -rf project/subProjectName
rm .git/module/* # 删除模块下的子模块目录，每个子模块对应一个目录，注意只删除对应的子模块目录即可
```

### 转换分支

```bash
$ git config -f .gitmodules submodule.public.branch gh-pages
```

下面是更改 `.gitmodules` 文件内容

```
[submodule "public"]
  path = public
  url = git@github.com:jaywcjlove/gitke.git
  branch = gh-pages
```

## 删除文件

```bash
git rm -rf node_modules/
```

## remote

git是一个分布式代码管理工具，所以可以支持多个仓库，在git里，服务器上的仓库在本地称之为remote。个人开发时，多源用的可能不多，但多源其实非常有用。

```shell
git remote add origin1 git@github.com:yanhaijing/data.js.git  
git remote    # 显示全部源  
git remote -v # 显示全部源+详细信息  
git remote rename origin1 origin2 # 重命名  
git remote rm origin    # 删除  
git remote show origin  # 查看指定源的全部信息  
```

## 标签tag

当开发到一定阶段时，给程序打标签是非常棒的功能。

```bash
git tag -a v0.1.1 9fbc3d0           # 补打 tag，根据 hash 创建 tag
git tag -a v0.1 -m 'my version 1.4' # 新建带注释标签   
git push origin --tags              # 一次性推送所有分支 
git push origin v1.5                # 推送单个tag到orgin源上 
git tag -v v1.4.2.1                 # 验证标签，验证已经签署的标签
git show v1.5                       # 看到对应的 GPG 签

git tag        # 列出现有标签   
git tag v0gi.1 # 新建标签   
git checkout tagname   # 切换到标签       
git tag -d v0.1 # 删除标签   
git push origin :refs/tags/v0.1 # 删除远程标签   
git pull --all # 获取远程所有内容包括tag  
git --git-dir='<绝对地址>/.git' describe --tags HEAD # 查看本地版本信息  
```

### 重命名Tag

```bash
mv .git/refs/tags/1.9.1 .git/refs/tags/v1.9.1
git push -f --tags
```

## 日志log

```bash
git config --global format.pretty "%Cgreen%h%Creset %s %Cblue@%cn%Creset %Cred%ai%Creset" # 全局配置彩色 log 输出
git config --global format.pretty "%h: %s @%cn %ai" # 全局配置格式化后的 log
git config format.pretty oneline  # 显示历史记录时，每个提交的信息只显示一行   
git config color.ui true # 彩色的 git 输出   
git log # 查看最近的提交日志
git log --grep=224 # 这条命令是查看含有 "224" 关键字的 git commit 
git log --pretty=oneline # 单行显示提交日志   
git log --graph --pretty=oneline --abbrev-commit   
git log -num # 显示第几条log（倒数）   
git reflog   # 查看所有分支的所有操作记录   
git log --since=1.day # 一天内的提交；你可以给出各种时间格式，比如说具体的某一天（“2008-01-15”），或者是多久以前（“2 years 1 day 3 minutes ago”）。   
git log --pretty="%h - %s" --author=自己的名字 # 查看自己的日志   
git log -p -2  # 展开两次更新显示每次提交的内容差异   
git log --stat # 要快速浏览其他协作者提交的更新都作了哪些改动   
git log --pretty=format:"%h - %an, %ar : %s"# 定制要显示的记录格式   
git log --pretty=format:'%h : %s' --date-order --graph # 拓扑顺序展示   
git log --pretty=format:'%h : %s - %ad' --date=short   # 日期YYYY-MM-DD显示
git log --pretty=oneline --graph --decorate --all # 展示简化的 commit 历史
git log <last tag> HEAD --pretty=format:%s # 只显示commit   
git config --global format.pretty '%h : %s - %ad' --date=short #日期YYYY-MM-DD显示 写入全局配置
```

| 选项 | 说明                             | 选项 | 说明                                       |
| ---- | -------------------------------- | ---- | ------------------------------------------ |
| %H   | 提交对象（commit）的完整哈希字串 | %ad  | 作者修订日期（可以用 -date= 选项定制格式） |
| %h   | 提交对象的简短哈希字串           | %ar  | 作者修订日期，按多久以前的方式显示         |
| %T   | 树对象（tree）的完整哈希字串     | %cn  | 提交者(committer)的名字                    |
| %t   | 树对象的简短哈希字串             | %ce  | 提交者的电子邮件地址                       |
| %P   | 父对象（parent）的完整哈希字串   | %cd  | 提交日期                                   |
| %p   | 父对象的简短哈希字串             | %cr  | 提交日期，按多久以前的方式显示             |
| %an  | 作者（author）的名字             | %s   | 提交说明                                   |
| %ae  | 作者的电子邮件地址               | -    | -                                          |

[Pretty Formats](https://git-scm.com/docs/git-log#_pretty_formats)

## 重写历史

```bash
git commit --amend    # 改变最近一次提交  
git rebase -i HEAD~3  # 修改最近三次的提交说明，或者其中任意一次  
git commit --amend    # 保存好了，这些指示很明确地告诉了你该干什么  
git rebase --continue # 修改提交说明，退出编辑器。  
pick f7f3f6d changed my name a bit
pick 310154e updated README formatting and added blame
pick a5f4a0d added cat-file
```

改成

```
pick 310154e updated README formatting and added blame
pick f7f3f6d changed my name a bit
```

## 其它

```bash
git help *  # 获取命令的帮助信息  
git status  # 获取当前的状态，非常有用，因为git会提示接下来的能做的操作  
```

## 报错问题解决

**1. `git fatal: protocol error: bad line length character: No s`**

解决办法：更换remote地址为 `http/https` 的

**2. `The requested URL returned error: 403 Forbidden while accessing`**

解决github push错误的办法：

```shell
#vim 编辑器打开 当前项目中的config文件
vim .git/config

#修改
[remote "origin"]  
    url = https://github.com/jaywcjlove/example.git  

#为下面代码
[remote "origin"]  
    url = https://jaywcjlove@github.com/jaywcjlove/example.git  
```

**3. git status 显示中文问题**

在查看状态的时候 git status 如果是中文就显示下面的情况

```bash
\344\272\247\345\223\201\351\234\200\346\261\202
```

解决这个问题方法是：

```bash
git config --global core.quotepath false
```

**4. The authenticity of host 192.168.0.xxx can't be establis**

修改 `/etc/ssh/ssh_config` 中的 `StrictHostKeyChecking` 的 `ask` 为 `no` 解决问题。

**5. SSH连接时出现 Host key verification failed 的原因及解决方法**

用 OpenSSH 的人都知 ssh 会把你每个你访问过计算机的公钥(public key)都记录在~/.ssh/known_hosts。当下次访问相同计算机时，OpenSSH 会核对公钥。如果公钥不同，OpenSSH 会发出警告，避免你受到 DNS Hijack 之类的攻击。 SSH 对主机的 public_key 的检查等级是根据

```bash
StrictHostKeyChecking=no  # 最不安全的级别，当然也没有那么多烦人的提示了，相对安全的内网测试时建议使用。如果连接server的key在本地不存在，那么就自动添加到文件中（默认是known_hosts），并且给出一个警告。
StrictHostKeyChecking=ask # 默认的级别，就是出现刚才的提示了。如果连接和key不匹配，给出提示，并拒绝登录。
StrictHostKeyChecking=yes # 最安全的级别，如果连接与key不匹配，就拒绝连接，不会提示详细信息。
```

【解决方法1】在 `.ssh/config`（或者`/etc/ssh/ssh_config`）中配置：

```conf
StrictHostKeyChecking no
UserKnownHostsFile /dev/null
```

解决方法 2

```bash
vi ~/.ssh/known_hosts # 删除对应ip的相关rsa信息
rm known_hosts # 或者直接全部删除
```

**5. insufficient permission for adding an object to repository database .git/objects**

```
cd .git/objects
ls -al
sudo chown -R yourname:yourgroup *
```

