## Groovy简述

### 前言

由于性能测试的JSR223 Sampler取样器需要用到 Groovy 语言，这两天对其进行了粗略的学习，本文是对学习做的一个简单总结，主要内容参考于官方文档（Groovy 的官方文档还是非常不错的，强烈推荐阅读），希望本文对准备学习使用或者对 Groovy 感兴趣的同学有所帮助，如有不对之处还望指出哈，对这门语言的理解还是比较肤浅的。

### 简介

- Groovy 是 Apache 旗下的一门基于 JVM 平台的动态/敏捷编程语言
- 在语言的设计上它吸纳了 Python、Ruby 和 Smalltalk 语言的优秀特性，语法非常简练和优美，开发效率也非常高（编程语言的开发效率和性能是相互矛盾的，越高级的编程语言性能越差，因为意味着更多底层的封装，不过开发效率会更高，需结合使用场景做取舍）。
- Groovy 可以与 Java 语言无缝对接，在写 Groovy 的时候如果忘记了语法可以直接按Java的语法继续写，
- 也可以在 Java 中调用 Groovy 脚本，都可以很好的工作，这有效的降低了 Java 开发者学习 Groovy 的成本。
- Groovy 也并不会替代 Java，而是相辅相成、互补的关系，具体使用哪门语言这取决于要解决的问题和使用的场景。

### 下载

就我工作而言，只有性能测试使用JSR223 Sampler取样器会牵扯到Groovy。Jmeter下载后，其lib目录下就有jar包，因此如果你也是性能测试并且读到了这篇随笔，不需要下载；使用IDEA编写Groovy时，配置下环境变量

**Windows安装groovy**

- 安装好JDK环境
- 到groovy官网下载[groovySDK](http://www.groovy-lang.org/)，解压到合适位置
- 配置groovy环境变量

**Linux安装groovy**

```bash
#下载，或者直接复制到Linux中
wget http://www.groovy-lang.org/download.html

#解压
unzip apache-groovy-sdk-2.5.8.zip -d /usr/local

#创建软链接
ln -sv groovy-2.5.8/ groovy

#配置环境变量
cat > /etc/profile.d/groovy.sh <EOF
export GROOVY_HOME=/usr/local/groovy
export PATH=$PATH:$GROOVY_HOME/bin
EOF

#source groovy.sh
source /etc/profile.d/groovy.sh

#查看版本
groovy -version
```



待更新

https://www.cnblogs.com/gltou/p/15175723.html