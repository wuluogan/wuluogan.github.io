# IDE

## IDEA
## 配置
#### import 自动导入包和删除无用的 import
设置路径：Editor -> General -> Auto Import。
勾选其中的 add on the fly 和 optimize on the fly，

#### 智能提示不区分大小写
设置路径：Editor -> General -> code completion。
取消勾选 match case

#### 避免 import *
默认情况下，当 import 同一个包的 class 超过 5 个后，idea 会替换成 import *。
但是通常我们不建议这样写，遵循的原则就是使用哪些就明确写引用哪些！
设置路径：Editor -> Code Style -> Java -> Imports。
将 Class count to use import with 、Names count to use static import with * 都设置为 999（默认都是 5）

#### 保存文件时自动去掉末尾空格
设置路径：Editor -> General -> Other。
Strip trailing space on Save 选 All

## 插件

#### Translation
翻译插件，现支持Google翻译、有道翻译。


#### Properties to YAML Converter
将`Properties` 配置文件一键转换成`YAML`文件，很实用的一个插件。
注意：要提前备份原`Properties` 文件。


#### Key promoter
Key promoter这款插件适合新手使用。当你点击鼠标一个功能的时候，可以提示你这个功能快捷键是什么。这是一个非常有用的功能，很快就可以熟悉软件的快捷功能了。如果有快捷键的，会直接显示快捷键。

#### GenerateAllSetter

实际的开发中，可能会经常为某个对象中多个属性进行`set`赋值，尽管可以用`BeanUtil.copyProperties()`方式批量赋值，但这种方式有一些弊端，存在属性值覆盖的问题，所以不少场景还是需要手动`set`。如果一个对象属性太多`set`起来也很痛苦，`GenerateAllSetter`可以一键将对象属性都`set`出来。

快捷键：`Alt+Enter`



#### Alibaba Java Coding Guidelines

阿里出品的《Java 开发手册》时下已经成为了很多公司新员工入职必读的手册，前一段时间阿里发布了《Java 开发手册(泰山版)》， 又一次对`Java`开发规范做了完善。不过，又臭又长的手册背下来是不可能的，但集成到`IDEA`开发工具中就方便很多。

举个栗子：开发手册上不允许用`Executors`去创建线程池，而是通过`ThreadPoolExecutor`的方式。![图片](intellij-idea/20210708092532.jpg)

集成插件后再去使用`Executors`去创建线程池，会有如下的提示。


#### GsonFormat

`GsonFormat`个人觉得是一个非常非常实用的插件，它可以将`JSON`字符串自动转换成`Java`实体类。特别是在和其他系统对接时，往往以`JSON`格式传输数据，而我们需要用`Java`实体接收数据入库或者包装转发，如果字段太多一个一个编写那就太麻烦了。

快捷键：`Alt+ S`



#### Maven Helper

`Maven Helper`是解决`Maven`依赖冲突的利器，可以快速查找项目中的依赖冲突。安装后打开`pom`文件，底部有`Dependency Analyzer`视图。显示红色表示存在依赖冲突，点进去直接在包上右键`Exclude`排除，`pom`文件中会做出相应排除包的操作。


- Conflicts(冲突)
- All Dependencies as List(列表形式查看所有依赖)
- All Dependencies as Tree(树结构查看所有依赖)，并且这个页面还支持搜索。



#### Codota

用了`Codota`后不再怕对`API`不会用。举个栗子：当我们用`stream().filter()`对`List`操作，可是对`filter()`用法不熟，按常理我们会百度一下，而用`Codota`会提示很多`filter()`用法，节省不少查阅资料的时间。




#### Free MyBatis Plugin

在使用`MyBatis`作为持久框架时有一个尴尬的问题：`SQL` `xml`文件和定义的`Java`接口无法相互跳转，不能像 Java 接口间调用那样，只能全局搜索稍显麻烦。`Free MyBatis Plugin`将两者之间进行关联。![图片](intellij-idea/20210708092853.gif)



#### IntelliJad

`IntelliJad`是一个Java class文件的反编译工具，需要在`setting`中设置本地`Java` `jad.exe`工具的地址。随便找个`Jar`包选择`class`文件右键`Decompile`，会出现反编译的结果。



#### Properties to YAML Converter

将`Properties` 配置文件一键转换成`YAML`文件，很实用的一个插件。**「注意：要提前备份原`Properties`文件。」**



#### Lombok

`Lombok`插件应该比较熟，它替我们解决了那些繁琐又重复的代码，比如`Setter`、`Getter`、`toString`、`equals`等方法。





#### CodeGlance

`CodeGlance`是一款代码编辑区迷你缩放图插件，可以很方便地知道我们方法大致在什么位置。


`IDEA`还有不少的开发小技巧，有助于我们少些代码，不知道大家有没有发现？变量后`.`可以联想提示，而在联想列表的最后边有很多简洁的命令。

例如：

```
list.sout` =  `System.out.println(list);
list.var` =  `List<User> list1 = list
list.nn = list.if (list != null)
```


## 快捷键
- 万能提示神器：Alt + Enter
- Tab 自动补全
- 自动生成代码：Cmd + N
- 智能结束当前语句：Cmd + Shift + Enter