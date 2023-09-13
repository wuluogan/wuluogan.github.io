# Java

## MyBatis
### 常用OGNL表达式

- `e1 or e2`
- `e1 and e2`
- `e1 == e2`,`e1 eq e2`
- `e1 != e2`,`e1 neq e2`
- `e1 lt e2`：小于
- `e1 lte e2`：小于等于，其他`gt`（大于）,`gte`（大于等于）
- `e1 in e2`
- `e1 not in e2`
- `e1 + e2`,`e1 * e2`,`e1/e2`,`e1 - e2`,`e1%e2`
- `!e`,`not e`：非，求反
- `e.method(args)`调用对象方法
- `e.property`对象属性值
- `e1[ e2 ]`按索引取值，List,数组和Map
- `@class@method(args)`调用类的静态方法
- `@class@field`调用类的静态字段值

上述内容只是合适在MyBatis中使用的OGNL表达式，完整的表达式点击[这里](https://commons.apache.org/proper/commons-ognl/language-guide.html)。

可以通过`#{}`或 `${}` 方式获取，`#{}`可以防止注入。

#### 生成主键

在通用Mapper中支持一种UUID的主键，在通用Mapper中的实现就是使用了`<bind>`标签，这个标签调用了一个静态方法，大概方法如下：

```
<bind name="username_bind"  
      value='@java.util.UUID@randomUUID().toString().replace("-", "")' /> 
```

这种方式虽然能自动调用静态方法，但是没法回写对应的属性值，因此使用时需要注意。


### 代码优化小技巧
#### 1.用String.format拼接字符串

不知道你有没有拼接过字符串，特别是那种有多个参数，字符串比较长的情况。

比如现在有个需求：要用get请求调用第三方接口，url后需要拼接多个参数。

以前我们的请求地址是这样拼接的：

```
String url = "http://susan.sc.cn?userName="+userName+"&age="+age+"&address="+address+"&sex="+sex+"&roledId="+roleId; 
```

字符串使用`+`号拼接，非常容易出错。

后面优化了一下，改为使用`StringBuilder`拼接字符串：

```
StringBuilder urlBuilder = new StringBuilder("http://susan.sc.cn?"); 
urlBuilder.append("userName=") 
.append(userName) 
.append("&age=") 
.append(age) 
.append("&address=") 
.append(address) 
.append("&sex=") 
.append(sex) 
.append("&roledId=") 
.append(roledId); 
```

代码优化之后，稍微直观点。

但还是看起来比较别扭。

这时可以使用`String.format`方法优化：

```
String requestUrl = "http://susan.sc.cn?userName=%s&age=%s&address=%s&sex=%s&roledId=%s"; 
String url = String.format(requestUrl,userName,age,address,sex,roledId); 
```

代码的可读性，一下子提升了很多。

我们平常可以使用`String.format`方法拼接url请求参数，日志打印等字符串。

> 但不建议在for循环中用它拼接字符串，因为它的执行效率，比使用+号拼接字符串，或者使用StringBuilder拼接字符串都要慢一些。

#### 2.创建可缓冲的IO流

`IO流`想必大家都使用得比较多，我们经常需要把数据`写入`某个文件，或者从某个文件中`读取`数据到`内存`中，甚至还有可能把文件a，从目录b，`复制`到目录c下等。

JDK给我们提供了非常丰富的API，可以去操作IO流。

例如：

```
public class IoTest1 { 
    public static void main(String[] args) { 
        FileInputStream fis = null; 
        FileOutputStream fos = null; 
        try { 
            File srcFile = new File("/Users/dv_susan/Documents/workspace/jump/src/main/java/com/sue/jump/service/test1/1.txt"); 
            File destFile = new File("/Users/dv_susan/Documents/workspace/jump/src/main/java/com/sue/jump/service/test1/2.txt"); 
            fis = new FileInputStream(srcFile); 
            fos = new FileOutputStream(destFile); 
            int len; 
            while ((len = fis.read()) != -1) { 
                fos.write(len); 
            } 
            fos.flush(); 
        } catch (IOException e) { 
            e.printStackTrace(); 
        } finally { 
            try { 
                if (fos != null) { 
                    fos.close(); 
                } 
            } catch (IOException e) { 
                e.printStackTrace(); 
            } 
            try { 
                if (fis != null) { 
                    fis.close(); 
                } 
            } catch (IOException e) { 
                e.printStackTrace(); 
            } 
        } 
    } 
} 
```

这个例子主要的功能，是将1.txt文件中的内容复制到2.txt文件中。这例子使用普通的IO流从功能的角度来说，也能满足需求，但性能却不太好。

因为这个例子中，从1.txt文件中读一个字节的数据，就会马上写入2.txt文件中，需要非常频繁的读写文件。

优化：

```
public class IoTest { 
    public static void main(String[] args) { 
        BufferedInputStream bis = null; 
        BufferedOutputStream bos = null; 
        FileInputStream fis = null; 
        FileOutputStream fos = null; 
        try { 
            File srcFile = new File("/Users/dv_susan/Documents/workspace/jump/src/main/java/com/sue/jump/service/test1/1.txt"); 
            File destFile = new File("/Users/dv_susan/Documents/workspace/jump/src/main/java/com/sue/jump/service/test1/2.txt"); 
            fis = new FileInputStream(srcFile); 
            fos = new FileOutputStream(destFile); 
            bis = new BufferedInputStream(fis); 
            bos = new BufferedOutputStream(fos); 
            byte[] buffer = new byte[1024]; 
            int len; 
            while ((len = bis.read(buffer)) != -1) { 
                bos.write(buffer, 0, len); 
            } 
            bos.flush(); 
        } catch (IOException e) { 
            e.printStackTrace(); 
        } finally { 
            try { 
                if (bos != null) { 
                    bos.close(); 
                } 
                if (fos != null) { 
                    fos.close(); 
                } 
            } catch (IOException e) { 
                e.printStackTrace(); 
            } 
            try { 
                if (bis != null) { 
                    bis.close(); 
                } 
                if (fis != null) { 
                    fis.close(); 
                } 
            } catch (IOException e) { 
                e.printStackTrace(); 
            } 
        } 
    } 
} 
```

这个例子使用`BufferedInputStream`和`BufferedOutputStream`创建了`可缓冲`的输入输出流。

最关键的地方是定义了一个buffer字节数组，把从1.txt文件中读取的数据临时保存起来，后面再把该buffer字节数组的数据，一次性批量写入到2.txt中。

这样做的好处是，减少了读写文件的次数，而我们都知道读写文件是非常耗时的操作。也就是说使用可缓存的输入输出流，可以提升IO的性能，特别是遇到文件非常大时，效率会得到显著提升。

#### 3.减少循环次数

在我们日常开发中，循环遍历集合是必不可少的操作。

但如果循环层级比较深，循环中套循环，可能会影响代码的执行效率。

`反例`：

```
for(User user: userList) { 
   for(Role role: roleList) { 
      if(user.getRoleId().equals(role.getId())) { 
         user.setRoleName(role.getName()); 
      } 
   } 
} 
```

这个例子中有两层循环，如果userList和roleList数据比较多的话，需要循环遍历很多次，才能获取我们所需要的数据，非常消耗cpu资源。

`正例`：

```
Map<Long, List<Role>> roleMap = roleList.stream().collect(Collectors.groupingBy(Role::getId)); 
for (User user : userList) { 
    List<Role> roles = roleMap.get(user.getRoleId()); 
    if(CollectionUtils.isNotEmpty(roles)) { 
        user.setRoleName(roles.get(0).getName()); 
    } 
} 
```

减少循环次数，最简单的办法是，把第二层循环的集合变成`map`，这样可以直接通过`key`，获取想要的`value`数据。

虽说map的key存在`hash冲突`的情况，但遍历存放数据的`链表`或者`红黑树`的`时间复杂度`，比遍历整个list集合要小很多。

#### 4.用完资源记得及时关闭

在我们日常开发中，可能经常访问`资源`，比如：获取数据库连接，读取文件等。

我们以获取数据库连接为例。

`反例`：

```
//1. 加载驱动类 
Class.forName("com.mysql.jdbc.Driver"); 
//2. 创建连接 
Connectionconnection = DriverManager.getConnection("jdbc:mysql//localhost:3306/db?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8","root","123456"); 
//3.编写sql 
String sql ="select * from user"; 
//4.创建PreparedStatement 
PreparedStatement pstmt = conn.prepareStatement(sql); 
//5.获取查询结果 
ResultSet rs = pstmt.execteQuery(); 
while(rs.next()){ 
   int id = rs.getInt("id"); 
   String name = rs.getString("name"); 
} 
```

上面这段代码可以正常运行，但却犯了一个很大的错误，即：ResultSet、PreparedStatement和Connection对象的资源，使用完之后，没有关闭。

我们都知道，数据库连接是非常宝贵的资源。我们不可能一直创建连接，并且用完之后，也不回收，白白浪费数据库资源。

`正例`：

```
//1. 加载驱动类 
Class.forName("com.mysql.jdbc.Driver"); 
 
Connectionconnection = null; 
PreparedStatement pstmt = null; 
ResultSet rs = null; 
try { 
    //2. 创建连接 
    connection = DriverManager.getConnection("jdbc:mysql//localhost:3306/db?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8","root","123456"); 
    //3.编写sql 
    String sql ="select * from user"; 
    //4.创建PreparedStatement 
    pstmt = conn.prepareStatement(sql); 
    //5.获取查询结果 
    rs = pstmt.execteQuery(); 
    while(rs.next()){ 
       int id = rs.getInt("id"); 
       String name = rs.getString("name"); 
    } 
} catch(Exception e) { 
  log.error(e.getMessage(),e); 
} finally { 
   if(rs != null) { 
      rs.close(); 
   } 
    
   if(pstmt != null) { 
      pstmt.close(); 
   } 
    
   if(connection != null) { 
      connection.close(); 
   } 
} 
```

这个例子中，无论是ResultSet，或者PreparedStatement，还是Connection对象，使用完之后，都会调用`close`方法关闭资源。

> 在这里温馨提醒一句：ResultSet，或者PreparedStatement，还是Connection对象，这三者关闭资源的顺序不能反了，不然可能会出现异常。

#### 5.使用池技术

我们都知道，从数据库查数据，首先要连接数据库，获取`Connection`资源。

想让程序多线程执行，需要使用`Thread`类创建线程，线程也是一种资源。

通常一次数据库操作的过程是这样的：

1. 创建连接
2. 进行数据库操作
3. 关闭连接

而创建连接和关闭连接，是非常耗时的操作，创建连接需要同时会创建一些资源，关闭连接时，需要回收那些资源。

如果用户的每一次数据库请求，程序都都需要去创建连接和关闭连接的话，可能会浪费大量的时间。

此外，可能会导致数据库连接过多。

我们都知道数据库的`最大连接数`是有限的，以mysql为例，最大连接数是：`100`，不过可以通过参数调整这个数量。

如果用户请求的连接数超过最大连接数，就会报：`too many connections`异常。如果有新的请求过来，会发现数据库变得不可用。

这时可以通过命令：

```
show variables like max_connections 
```

查看最大连接数。

然后通过命令：

```
set GLOBAL max_connections=1000 
```

手动修改最大连接数。

这种做法只能暂时缓解问题，不是一个好的方案，无法从根本上解决问题。

最大的问题是：数据库连接数可以无限增长，不受控制。

这时我们可以使用`数据库连接池`。

目前Java开源的数据库连接池有：

- DBCP：是一个依赖Jakarta commons-pool对象池机制的数据库连接池。
- C3P0：是一个开放源代码的JDBC连接池，它在lib目录中与Hibernate一起发布，包括了实现jdbc3和jdbc2扩展规范说明的Connection 和Statement 池的DataSources 对象。
- Druid：阿里的Druid，不仅是一个数据库连接池，还包含一个ProxyDriver、一系列内置的JDBC组件库、一个SQL Parser。
- Proxool：是一个Java SQL Driver驱动程序，它提供了对选择的其它类型的驱动程序的连接池封装，可以非常简单的移植到已有代码中。

目前用的最多的数据库连接池是:`Druid`。

#### 6.反射时加缓存

我们都知道通过`反射`创建对象实例，比使用`new`关键字要慢很多。

由此，不太建议在用户请求过来时，每次都通过反射`实时`创建实例。

有时候，为了代码的灵活性，又不得不用反射创建实例，这时该怎么办呢？

答：加`缓存`。

其实spring中就使用了大量的反射，我们以支付方法为例。

根据前端传入不同的支付code，动态找到对应的支付方法，发起支付。

我们先定义一个注解。

```
@Retention(RetentionPolicy.RUNTIME)   
@Target(ElementType.TYPE)   
public @interface PayCode {   
     String value();     
     String name();   
} 
```

在所有的支付类上都加上该注解

```
@PayCode(value = "alia", name = "支付宝支付")   
@Service 
public class AliaPay implements IPay {   
 
     @Override 
     public void pay() {   
         System.out.println("===发起支付宝支付===");   
     }   
}   
 
@PayCode(value = "weixin", name = "微信支付")   
@Service 
public class WeixinPay implements IPay {   
  
     @Override 
     public void pay() {   
         System.out.println("===发起微信支付===");   
     }   
}  
  
@PayCode(value = "jingdong", name = "京东支付")   
@Service 
public class JingDongPay implements IPay {   
     @Override 
     public void pay() {   
        System.out.println("===发起京东支付===");   
     }   
} 
```

然后增加最关键的类：

```
@Service 
public class PayService2 implements ApplicationListener<ContextRefreshedEvent> {   
     private static Map<String, IPay> payMap = null;   
      
     @Override 
     public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {   
         ApplicationContext applicationContext = contextRefreshedEvent.getApplicationContext();   
         Map<String, Object> beansWithAnnotation = applicationContext.getBeansWithAnnotation(PayCode.class);   
         
         if (beansWithAnnotation != null) {   
             payMap = new HashMap<>();   
             beansWithAnnotation.forEach((key, value) ->{   
                 String bizType = value.getClass().getAnnotation(PayCode.class).value();   
                 payMap.put(bizType, (IPay) value);   
             });   
         }   
     }   
     
     public void pay(String code) {   
        payMap.get(code).pay();   
     }   
} 
```

PayService2类实现了`ApplicationListener`接口，这样在`onApplicationEvent方法`中，就可以拿到`ApplicationContext`的实例。这一步，其实是在spring容器启动的时候，spring通过反射我们处理好了。

我们再获取打了PayCode注解的类，放到一个`map`中，map中的`key`就是PayCode注解中定义的value，跟code参数一致，value是支付类的实例。

这样，每次就可以每次直接通过code获取支付类实例，而不用if...else判断了。如果要加新的支付方法，只需在支付类上面打上PayCode注解定义一个新的code即可。

注意：这种方式的code可以没有业务含义，可以是纯数字，只要不重复就行。

#### 7.多线程处理

很多时候，我们需要在某个接口中，调用其他服务的接口。

比如有这样的业务场景：

在用户信息查询接口中需要返回：用户名称、性别、等级、头像、积分、成长值等信息。

而用户名称、性别、等级、头像在用户服务中，积分在积分服务中，成长值在成长值服务中。为了汇总这些数据统一返回，需要另外提供一个对外接口服务。

于是，用户信息查询接口需要调用用户查询接口、积分查询接口 和 成长值查询接口，然后汇总数据统一返回。

调用过程如下图所示：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99ffe8d1982941c69e76f54a20227917~tplv-k3u1fbpfcp-zoom-1.image)


调用远程接口总耗时 530ms = 200ms + 150ms + 180ms

显然这种串行调用远程接口性能是非常不好的，调用远程接口总的耗时为所有的远程接口耗时之和。

那么如何优化远程接口性能呢？

上面说到，既然串行调用多个远程接口性能很差，为什么不改成并行呢？

如下图所示：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75394d0b168446b9bc143f46b67c0f6f~tplv-k3u1fbpfcp-zoom-1.image)


调用远程接口总耗时 200ms = 200ms（即耗时最长的那次远程接口调用）

在java8之前可以通过实现`Callable`接口，获取线程返回结果。

java8以后通过`CompleteFuture`类实现该功能。我们这里以CompleteFuture为例：

```
public UserInfo getUserInfo(Long id) throws InterruptedException, ExecutionException { 
    final UserInfo userInfo = new UserInfo(); 
    CompletableFuture userFuture = CompletableFuture.supplyAsync(() -> { 
        getRemoteUserAndFill(id, userInfo); 
        return Boolean.TRUE; 
    }, executor); 
 
    CompletableFuture bonusFuture = CompletableFuture.supplyAsync(() -> { 
        getRemoteBonusAndFill(id, userInfo); 
        return Boolean.TRUE; 
    }, executor); 
 
    CompletableFuture growthFuture = CompletableFuture.supplyAsync(() -> { 
        getRemoteGrowthAndFill(id, userInfo); 
        return Boolean.TRUE; 
    }, executor); 
    CompletableFuture.allOf(userFuture, bonusFuture, growthFuture).join(); 
 
    userFuture.get(); 
    bonusFuture.get(); 
    growthFuture.get(); 
 
    return userInfo; 
} 
```

> 温馨提醒一下，这两种方式别忘了使用线程池。示例中我用到了executor，表示自定义的线程池，为了防止高并发场景下，出现线程过多的问题。

#### 8.懒加载

有时候，创建对象是一个非常耗时的操作，特别是在该对象的创建过程中，还需要创建很多其他的对象时。

我们以单例模式为例。

在介绍单例模式的时候，必须要先介绍它的两种非常著名的实现方式：`饿汉模式` 和 `懒汉模式`。

##### 8.1 饿汉模式

实例在初始化的时候就已经建好了，不管你有没有用到，先建好了再说。具体代码如下：

```
public class SimpleSingleton { 
    //持有自己类的引用 
    private static final SimpleSingleton INSTANCE = new SimpleSingleton(); 
 
    //私有的构造方法 
    private SimpleSingleton() { 
    } 
    //对外提供获取实例的静态方法 
    public static SimpleSingleton getInstance() { 
        return INSTANCE; 
    } 
} 
```

使用饿汉模式的好处是：`没有线程安全的问题`，但带来的坏处也很明显。

```
private static final SimpleSingleton INSTANCE = new SimpleSingleton(); 
```

一开始就实例化对象了，如果实例化过程非常耗时，并且最后这个对象没有被使用，不是白白造成资源浪费吗？

还真是啊。

这个时候你也许会想到，不用提前实例化对象，在真正使用的时候再实例化不就可以了？

这就是我接下来要介绍的：`懒汉模式`。

##### 8.2 懒汉模式

顾名思义就是实例在用到的时候才去创建，“比较懒”，用的时候才去检查有没有实例，如果有则返回，没有则新建。具体代码如下：

```
public class SimpleSingleton2 { 
 
    private static SimpleSingleton2 INSTANCE; 
 
    private SimpleSingleton2() { 
    } 
 
    public static SimpleSingleton2 getInstance() { 
        if (INSTANCE == null) { 
            INSTANCE = new SimpleSingleton2(); 
        } 
        return INSTANCE; 
    } 
} 
```

示例中的INSTANCE对象一开始是空的，在调用getInstance方法才会真正实例化。

懒汉模式相对于饿汉模式，没有提前实例化对象，在真正使用的时候再实例化，在实例化对象的阶段效率更高一些。

除了单例模式之外，懒加载的思想，使用比较多的可能是：

1. spring的@Lazy注解。在spring容器启动的时候，不会调用其getBean方法初始化实例。
2. mybatis的懒加载。在mybatis做级联查询的时候，比如查用户的同时需要查角色信息。如果用了懒加载，先只查用户信息，真正使用到角色了，才取查角色信息。

#### 9.初始化集合时指定大小

我们在实际项目开发中，需要经常使用集合，比如：ArrayList、HashMap等。

但有个问题：你在初始化集合时指定了大小的吗？

`反例`：

```
public class Test2 { 
 
    public static void main(String[] args) { 
        List<Integer> list = new ArrayList<>(); 
        long time1 = System.currentTimeMillis(); 
        for (int i = 0; i < 100000; i++) { 
            list.add(i); 
        } 
        System.out.println(System.currentTimeMillis() - time1); 
    } 
} 
```

执行时间：

```
12 
```

如果在初始化集合时指定了大小。

`正例`：

```
public class Test2 { 
 
    public static void main(String[] args) { 
        List<Integer> list2 = new ArrayList<>(100000); 
        long time2 = System.currentTimeMillis(); 
        for (int i = 0; i < 100000; i++) { 
            list2.add(i); 
        } 
        System.out.println(System.currentTimeMillis() - time2); 
    } 
} 
```

执行时间：

```
6 
```

我们惊奇的发现，在创建集合时指定了大小，比没有指定大小，添加10万个元素的效率提升了一倍。

如果你看过`ArrayList`源码，你就会发现它的默认大小是`10`，如果添加元素超过了一定的阀值，会按`1.5`倍的大小扩容。

你想想，如果装10万条数据，需要扩容多少次呀？而每次扩容都需要不停的复制元素，从老集合复制到新集合中，需要浪费多少时间呀。

#### 10.不要满屏try...catch异常

以前我们在开发接口时，如果出现`异常`，为了给用户一个更友好的提示，例如：

```
@RequestMapping("/test") 
@RestController 
public class TestController { 
 
    @GetMapping("/add") 
    public String add() { 
        int a = 10 / 0; 
        return "成功"; 
    } 
} 
```

如果不做任何处理，当我们请求add接口时，执行结果直接报错：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b46044944224588b1f9c86e4cc30a5d~tplv-k3u1fbpfcp-zoom-1.image)


what？用户能直接看到错误信息？

这种交互方式给用户的体验非常差，为了解决这个问题，我们通常会在接口中捕获异常：

```
@GetMapping("/add") 
public String add() { 
    String result = "成功"; 
    try { 
        int a = 10 / 0; 
    } catch (Exception e) { 
        result = "数据异常"; 
    } 
    return result; 
} 
```

接口改造后，出现异常时会提示：“数据异常”，对用户来说更友好。

看起来挺不错的，但是有问题。。。

如果只是一个接口还好，但是如果项目中有成百上千个接口，都要加上异常捕获代码吗？

答案是否定的，这时全局异常处理就派上用场了：`RestControllerAdvice`。

```
@RestControllerAdvice 
public class GlobalExceptionHandler { 
 
    @ExceptionHandler(Exception.class) 
    public String handleException(Exception e) { 
        if (e instanceof ArithmeticException) { 
            return "数据异常"; 
        } 
        if (e instanceof Exception) { 
            return "服务器内部异常"; 
        } 
        retur nnull; 
    } 
} 
```

只需在`handleException`方法中处理异常情况，业务接口中可以放心使用，不再需要捕获异常（有人统一处理了）。真是爽歪歪。

#### 11.位运算效率更高

如果你读过JDK的源码，比如：`ThreadLocal`、`HashMap`等类，你就会发现，它们的底层都用了`位运算`。

为什么开发JDK的大神们，都喜欢用位运算？

答：因为位运算的效率更高。

在ThreadLocal的get、set、remove方法中都有这样一行代码：

```
int i = key.threadLocalHashCode & (len-1); 
```

通过key的hashCode值，`与`数组的长度减1。其中key就是ThreadLocal对象，`与`数组的长度减1，相当于除以数组的长度减1，然后`取模`。

这是一种hash算法。

接下来给大家举个例子：假设len=16，key.threadLocalHashCode=31，

于是： int i = 31 & 15 = 15

相当于：int i = 31 % 16 = 15

计算的结果是一样的，但是使用`与运算`效率跟高一些。

为什么与运算效率更高？

答：因为ThreadLocal的初始大小是`16`，每次都是按`2`倍扩容，数组的大小其实一直都是2的n次方。

这种数据有个规律就是高位是0，低位都是1。在做与运算时，可以不用考虑高位，因为与运算的结果必定是0。只需考虑低位的与运算，所以效率更高。

#### 12.巧用第三方工具类

在Java的庞大体系中，其实有很多不错的小工具，也就是我们平常说的：`轮子`。

如果在我们的日常工作当中，能够将这些轮子用户，再配合一下idea的快捷键，可以极大得提升我们的开发效率。

如果你引入`com.google.guava`的pom文件，会获得很多好用的小工具。这里推荐一款`com.google.common.collect`包下的集合工具：`Lists`。

它是在太好用了，让我爱不释手。

如果你想将一个`大集合`分成若干个`小集合`。

之前我们是这样做的：

```
List<Integer> list = Lists.newArrayList(1, 2, 3, 4, 5); 
 
List<List<Integer>> partitionList = Lists.newArrayList(); 
int size = 0; 
List<Integer> dataList = Lists.newArrayList(); 
for(Integer data : list) { 
   if(size >= 2) { 
      dataList = Lists.newArrayList(); 
      size = 0; 
   }  
   size++; 
   dataList.add(data); 
} 
```

将list按size=2分成多个小集合，上面的代码看起来比较麻烦。

如果使用`Lists`的`partition`方法，可以这样写代码：

```
List<Integer> list = Lists.newArrayList(1, 2, 3, 4, 5); 
List<List<Integer>> partitionList = Lists.partition(list, 2); 
System.out.println(partitionList); 
```

执行结果：

```
[[1, 2], [3, 4], [5]] 
```

这个例子中，list有5条数据，我将list集合按大小为2，分成了3页，即变成3个小集合。

这个是我最喜欢的方法之一，经常在项目中使用。

比如有个需求：现在有5000个id，需要调用批量用户查询接口，查出用户数据。但如果你直接查5000个用户，单次接口响应时间可能会非常慢。如果改成分页处理，每次只查500个用户，异步调用10次接口，就不会有单次接口响应慢的问题。

如果你了解更多非常有用的第三方工具类的话，可以看看我的另一篇文章《[吐血推荐17个提升开发效率的“轮子”](https://mp.weixin.qq.com/s?__biz=MzkwNjMwMTgzMQ==&mid=2247495296&idx=1&sn=6ff4affb2d00dce011c08d8eb5448d7a&chksm=c0e83668f79fbf7ead1410a998f4d4406badd65f943ca1b6833a7b1d663d5d5d0808e4c462e4&token=1690710950%E2%8C%A9=zh_CN#rd)》。

#### 13.用同步代码块代替同步方法

在某些业务场景中，为了防止多个线程并发修改某个共享数据，造成数据异常。

为了解决并发场景下，多个线程同时修改数据，造成数据不一致的情况。通常情况下，我们会：`加锁`。

但如果锁加得不好，导致`锁的粒度太粗`，也会非常影响接口性能。

在java中提供了`synchronized`关键字给我们的代码加锁。

通常有两种写法：`在方法上加锁` 和 `在代码块上加锁`。

先看看如何在方法上加锁：

```
public synchronized doSave(String fileUrl) { 
    mkdir(); 
    uploadFile(fileUrl); 
    sendMessage(fileUrl); 
} 
```

这里加锁的目的是为了防止并发的情况下，创建了相同的目录，第二次会创建失败，影响业务功能。

但这种直接在方法上加锁，锁的粒度有点粗。因为doSave方法中的上传文件和发消息方法，是不需要加锁的。只有创建目录方法，才需要加锁。

我们都知道文件上传操作是非常耗时的，如果将整个方法加锁，那么需要等到整个方法执行完之后才能释放锁。显然，这会导致该方法的性能很差，变得得不偿失。

这时，我们可以改成在代码块上加锁了，具体代码如下：

```
public void doSave(String path,String fileUrl) { 
    synchronized(this) { 
      if(!exists(path)) { 
          mkdir(path); 
       } 
    } 
    uploadFile(fileUrl); 
    sendMessage(fileUrl); 
} 
```

这样改造之后，锁的粒度一下子变小了，只有并发创建目录功能才加了锁。而创建目录是一个非常快的操作，即使加锁对接口的性能影响也不大。

最重要的是，其他的上传文件和发送消息功能，任然可以并发执行。

#### 14.不用的数据及时清理

在Java中保证线程安全的技术有很多，可以使用`synchroized`、`Lock`等关键字给代码块`加锁`。

但是它们有个共同的特点，就是加锁会对代码的性能有一定的损耗。

其实，在jdk中还提供了另外一种思想即：`用空间换时间`。

没错，使用`ThreadLocal`类就是对这种思想的一种具体体现。

ThreadLocal为每个使用变量的线程提供了一个独立的变量副本，这样每一个线程都能独立地改变自己的副本，而不会影响其它线程所对应的副本。

ThreadLocal的用法大致是这样的：

1. 先创建一个CurrentUser类，其中包含了ThreadLocal的逻辑。

```
public class CurrentUser { 
    private static final ThreadLocal<UserInfo> THREA_LOCAL = new ThreadLocal(); 
     
    public static void set(UserInfo userInfo) { 
        THREA_LOCAL.set(userInfo); 
    } 
     
    public static UserInfo get() { 
       THREA_LOCAL.get(); 
    } 
     
    public static void remove() { 
       THREA_LOCAL.remove(); 
    } 
} 
```

1. 在业务代码中调用CurrentUser类。

```
public void doSamething(UserDto userDto) { 
   UserInfo userInfo = convert(userDto); 
   CurrentUser.set(userInfo); 
   ... 
 
   //业务代码 
   UserInfo userInfo = CurrentUser.get(); 
   ... 
} 
```

在业务代码的第一行，将userInfo对象设置到CurrentUser，这样在业务代码中，就能通过CurrentUser.get()获取到刚刚设置的userInfo对象。特别是对业务代码调用层级比较深的情况，这种用法非常有用，可以减少很多不必要传参。

但在高并发的场景下，这段代码有问题，只往ThreadLocal存数据，数据用完之后并没有及时清理。

ThreadLocal即使使用了`WeakReference`（弱引用）也可能会存在`内存泄露`问题，因为 entry对象中只把key(即threadLocal对象)设置成了弱引用，但是value值没有。

那么，如何解决这个问题呢？

```
public void doSamething(UserDto userDto) { 
   UserInfo userInfo = convert(userDto); 
    
   try{ 
     CurrentUser.set(userInfo); 
     ... 
      
     //业务代码 
     UserInfo userInfo = CurrentUser.get(); 
     ... 
   } finally { 
      CurrentUser.remove(); 
   } 
} 
```

需要在`finally`代码块中，调用`remove`方法清理没用的数据。

#### 15.用equals方法比较是否相等

不知道你在项目中有没有见过，有些同事对`Integer`类型的两个参数使用`==`号比较是否相等？

反正我见过的，那么这种用法对吗？

我的回答是看具体场景，不能说一定对，或不对。

有些状态字段，比如：orderStatus有：-1(未下单)，0（已下单），1（已支付），2（已完成），3（取消），5种状态。

这时如果用==判断是否相等：

```
Integer orderStatus1 = new Integer(1); 
Integer orderStatus2 = new Integer(1); 
System.out.println(orderStatus1 == orderStatus2); 
```

返回结果会是true吗？

答案：是false。

有些同学可能会反驳，Integer中不是有范围是：`-128-127`的缓存吗？

为什么是false？

先看看Integer的构造方法：

![](https://pic.imgdb.cn/item/610fe6d05132923bf81605cd.jpg)



它其实并没有用到`缓存`。

那么缓存是在哪里用的？

答案在`valueOf`方法中：

![](https://pic.imgdb.cn/item/610fe6f15132923bf8165237.jpg)



如果上面的判断改成这样：

```
String orderStatus1 = new String("1"); 
String orderStatus2 = new String("1"); 
System.out.println(Integer.valueOf(orderStatus1) == Integer.valueOf(orderStatus2)); 
```

返回结果会是true吗？

答案：还真是true。

我们要养成良好编码习惯，尽量少用==判断两个Integer类型数据是否相等，只有在上述非常特殊的场景下才相等。

而应该改成使用`equals`方法判断：

```
Integer orderStatus1 = new Integer(1); 
Integer orderStatus2 = new Integer(1); 
System.out.println(orderStatus1.equals(orderStatus2)); 
```

运行结果为true。

#### 16.避免创建大集合

很多时候，我们在日常开发中，需要创建集合。比如：为了性能考虑，从数据库查询某张表的所有数据，一次性加载到内存的某个集合中，然后做业务逻辑处理。

例如：

```
List<User> userList = userMapper.getAllUser(); 
for(User user:userList) { 
   doSamething(); 
} 
```

从数据库一次性查询出所有用户，然后在循环中，对每个用户进行业务逻辑处理。

如果`用户表`的数据量非常多时，这样userList集合会很大，可能直接导致内存不足，而使整个应用挂掉。

针对这种情况，必须做`分页处理`。

例如：

```
private static final int PAGE_SIZE = 500; 
 
int currentPage = 1; 
RequestPage page = new RequestPage(); 
page.setPageNo(currentPage); 
page.setPageSize(PAGE_SIZE); 
 
Page<User> pageUser = userMapper.search(page); 
 
while(pageUser.getPageCount() >= currentPage) { 
    for(User user:pageUser.getData()) { 
       doSamething(); 
    } 
   page.setPageNo(++currentPage); 
   pageUser = userMapper.search(page); 
} 
```

通过上面的分页改造之后，每次从数据库中只查询`500`条记录，保存到userList集合中，这样userList不会占用太多的内存。

> 这里特别说明一下，如果你查询的表中的数据量本来就很少，一次性保存到内存中，也不会占用太多内存，这种情况也可以不做分页处理。

此外，还有中特殊的情况，即表中的记录数并算不多，但每一条记录，都有很多字段，单条记录就占用很多内存空间，这时也需要做分页处理，不然也会有问题。

整体的原则是要尽量避免创建大集合，导致内存不足的问题，但是具体多大才算大集合。目前没有一个唯一的衡量标准，需要结合实际的业务场景进行单独分析。

#### 17.状态用枚举

在我们建的表中，有很多状态字段，比如：订单状态、禁用状态、删除状态等。

每种状态都有多个值，代表不同的含义。

比如订单状态有：

- 1：表示下单
- 2：表示支付
- 3：表示完成
- 4：表示撤销

如果没有使用枚举，一般是这样做的：

```
public static final int ORDER_STATUS_CREATE = 1; 
public static final int ORDER_STATUS_PAY = 2; 
public static final int ORDER_STATUS_DONE = 3; 
public static final int ORDER_STATUS_CANCEL = 4; 
public static final String ORDER_STATUS_CREATE_MESSAGE = "下单"; 
public static final String ORDER_STATUS_PAY = "下单"; 
public static final String ORDER_STATUS_DONE = "下单"; 
public static final String ORDER_STATUS_CANCEL = "下单"; 
```

需要定义很多静态常量，包含不同的状态和状态的描述。

使用`枚举`定义之后，代码如下：

```
public enum OrderStatusEnum {   
     CREATE(1, "下单"),   
     PAY(2, "支付"),   
     DONE(3, "完成"),   
     CANCEL(4, "撤销");   
 
     private int code;   
     private String message;   
 
     OrderStatusEnum(int code, String message) {   
         this.code = code;   
         this.message = message;   
     }   
    
     public int getCode() {   
        return this.code;   
     }   
 
     public String getMessage() {   
        return this.message;   
     }   
   
     public static OrderStatusEnum getOrderStatusEnum(int code) {   
        return Arrays.stream(OrderStatusEnum.values()).filter(x -> x.code == code).findFirst().orElse(null);   
     }   
} 
```

使用枚举改造之后，职责更单一了。

而且使用枚举的好处是：

1. 代码的可读性变强了，不同的状态，有不同的枚举进行统一管理和维护。
2. 枚举是天然单例的，可以直接使用==号进行比较。
3. code和message可以成对出现，比较容易相关转换。
4. 枚举可以消除if...else过多问题。

#### 18.把固定值定义成静态常量

不知道你在实际的项目开发中，有没有使用过固定值？

例如：

```
if(user.getId() < 1000L) { 
   doSamething(); 
} 
```

或者：

```
if(Objects.isNull(user)) { 
   throw new BusinessException("该用户不存在"); 
} 
```

其中`1000L`和`该用户不存在`是固定值，每次都是一样的。

既然是固定值，我们为什么不把它们定义成静态常量呢？

这样语义上更直观，方便统一管理和维护，更方便代码复用。

代码优化为：

```
private static final int DEFAULT_USER_ID = 1000L; 
... 
if(user.getId() < DEFAULT_USER_ID) { 
   doSamething(); 
} 
```

或者：

```
private static final String NOT_FOUND_MESSAGE = "该用户不存在"; 
... 
if(Objects.isNull(user)) { 
   throw new BusinessException(NOT_FOUND_MESSAGE); 
} 
```

使用`static final`关键字修饰静态常量，`static`表示`静态`的意思，即类变量，而`final`表示`不允许修改`。

两个关键字加在一起，告诉Java虚拟机这种变量，在内存中只有一份，在全局上是唯一的，不能修改，也就是`静态常量`。

#### 19.避免大事务

很多小伙伴在使用spring框架开发项目时，为了方便，喜欢使用`@Transactional`注解提供事务功能。

没错，使用@Transactional注解这种声明式事务的方式提供事务功能，确实能少写很多代码，提升开发效率。

但也容易造成大事务，引发其他的问题。

下面用一张图看看大事务引发的问题。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8cd919302c504bd7b64c53e9cf1daeb4~tplv-k3u1fbpfcp-zoom-1.image)


从图中能够看出，大事务问题可能会造成接口超时，对接口的性能有直接的影响。

我们该如何优化大事务呢？

1. 少用@Transactional注解
2. 将查询(select)方法放到事务外
3. 事务中避免远程调用
4. 事务中避免一次性处理太多数据
5. 有些功能可以非事务执行
6. 有些功能可以异步处理

关于大事务问题我的另一篇文章《[让人头痛的大事务问题到底要如何解决？](https://mp.weixin.qq.com/s?__biz=MzkwNjMwMTgzMQ==&mid=2247490259&idx=1&sn=1dd11c5f49103ca303a61fc82ce406e0&chksm=c0ebc23bf79c4b2db58b28ef752560bd91a1932ceb6713c9b19b821db0f29e1c58275d334076&token=2041133408%E2%8C%A9=zh_CN#rd)》，它里面做了非常详细的介绍，如果大家感兴趣可以看看。

#### 20.消除过长的if...else

我们在写代码的时候，if...else的判断条件是必不可少的。不同的判断条件，走的代码逻辑通常会不一样。

废话不多说，先看看下面的代码。

```
public interface IPay {   
    void pay();   
}   
 
@Service 
public class AliaPay implements IPay {   
     @Override 
     public void pay() {   
        System.out.println("===发起支付宝支付===");   
     }   
}   
 
@Service 
public class WeixinPay implements IPay {   
     @Override 
     public void pay() {   
         System.out.println("===发起微信支付===");   
     }   
}   
   
@Service 
public class JingDongPay implements IPay {   
     @Override 
     public void pay() {   
        System.out.println("===发起京东支付===");  
     }   
}   
 
@Service 
public class PayService {   
     @Autowired 
     private AliaPay aliaPay;   
     @Autowired 
     private WeixinPay weixinPay;   
     @Autowired 
     private JingDongPay jingDongPay;   
    
     public void toPay(String code) {   
         if ("alia".equals(code)) {   
             aliaPay.pay();   
         } elseif ("weixin".equals(code)) {   
              weixinPay.pay();   
         } elseif ("jingdong".equals(code)) {   
              jingDongPay.pay();   
         } else {   
              System.out.println("找不到支付方式");   
         }   
     }   
} 
```

PayService类的toPay方法主要是为了发起支付，根据不同的code，决定调用用不同的支付类（比如：aliaPay）的pay方法进行支付。

这段代码有什么问题呢？也许有些人就是这么干的。

试想一下，如果支付方式越来越多，比如：又加了百度支付、美团支付、银联支付等等，就需要改toPay方法的代码，增加新的else...if判断，判断多了就会导致逻辑越来越多？

很明显，这里违法了设计模式六大原则的：开闭原则 和 单一职责原则。

> 开闭原则：对扩展开放，对修改关闭。就是说增加新功能要尽量少改动已有代码。

> 单一职责原则：顾名思义，要求逻辑尽量单一，不要太复杂，便于复用。

那么，如何优化if...else判断呢？

答：使用 `策略模式`+`工厂模式`。

策略模式定义了一组算法，把它们一个个封装起来, 并且使它们可相互替换。 工厂模式用于封装和管理对象的创建，是一种创建型模式。

```
public interface IPay { 
    void pay(); 
} 
 
@Service 
public class AliaPay implements IPay { 
 
    @PostConstruct 
    public void init() { 
        PayStrategyFactory.register("aliaPay", this); 
    } 
 
    @Override 
    public void pay() { 
        System.out.println("===发起支付宝支付==="); 
    } 
} 
 
@Service 
public class WeixinPay implements IPay { 
 
    @PostConstruct 
    public void init() { 
        PayStrategyFactory.register("weixinPay", this); 
    } 
 
    @Override 
    public void pay() { 
        System.out.println("===发起微信支付==="); 
    } 
} 
 
@Service 
public class JingDongPay implements IPay { 
 
    @PostConstruct 
    public void init() { 
        PayStrategyFactory.register("jingDongPay", this); 
    } 
 
    @Override 
    public void pay() { 
        System.out.println("===发起京东支付==="); 
    } 
} 
 
public class PayStrategyFactory { 
 
    private static Map<String, IPay> PAY_REGISTERS = new HashMap<>(); 
 
    public static void register(String code, IPay iPay) { 
        if (null != code && !"".equals(code)) { 
            PAY_REGISTERS.put(code, iPay); 
        } 
    } 
 
    public static IPay get(String code) { 
        return PAY_REGISTERS.get(code); 
    } 
} 
 
@Service 
public class PayService3 { 
 
    public void toPay(String code) { 
        PayStrategyFactory.get(code).pay(); 
    } 
} 
```

这段代码的关键是PayStrategyFactory类，它是一个策略工厂，里面定义了一个全局的map，在所有IPay的实现类中注册当前实例到map中，然后在调用的地方通过PayStrategyFactory类根据code从map获取支付类实例即可。

如果加了一个新的支付方式，只需新加一个类实现IPay接口，定义init方法，并且重写pay方法即可，其他代码基本上可以不用动。

当然，消除又臭又长的if...else判断，还有很多方法，比如：使用注解、动态拼接类名称、模板方法、枚举等等。由于篇幅有限，在这里我就不过多介绍了，更详细的内容可以看看我的另一篇文章《[消除if...else是9条锦囊妙计](https://mp.weixin.qq.com/s/WpdfBydLFQQDKjRbweqOYQ)》

#### 21.防止死循环

有些小伙伴看到这个标题，可能会感到有点意外，代码中不是应该避免死循环吗？为啥还是会产生死循环？

殊不知有些死循环是我们自己写的，例如下面这段代码：

```
while(true) { 
    if(condition) { 
        break; 
    } 
    System.out.println("do samething"); 
} 
```

这里使用了while(true)的循环调用，这种写法在`CAS自旋锁`中使用比较多。

当满足condition等于true的时候，则自动退出该循环。

如果condition条件非常复杂，一旦出现判断不正确，或者少写了一些逻辑判断，就可能在某些场景下出现死循环的问题。

出现死循环，大概率是开发人员人为的bug导致的，不过这种情况很容易被测出来。

> 还有一种隐藏的比较深的死循环，是由于代码写的不太严谨导致的。如果用正常数据，可能测不出问题，但一旦出现异常数据，就会立即出现死循环。

其实，还有另一种死循环：`无限递归`。

如果想要打印某个分类的所有父分类，可以用类似这样的递归方法实现：

```
public void printCategory(Category category) { 
  if(category == null  
      || category.getParentId() == null) { 
     return; 
  }  
  System.out.println("父分类名称："+ category.getName()); 
  Category parent = categoryMapper.getCategoryById(category.getParentId()); 
  printCategory(parent); 
} 
```

正常情况下，这段代码是没有问题的。

但如果某次有人误操作，把某个分类的parentId指向了它自己，这样就会出现无限递归的情况。导致接口一直不能返回数据，最终会发生堆栈溢出。

> 建议写递归方法时，设定一个递归的深度，比如：分类最大等级有4级，则深度可以设置为4。然后在递归方法中做判断，如果深度大于4时，则自动返回，这样就能避免无限循环的情况。

#### 22.注意BigDecimal的坑

通常我们会把一些小数类型的字段（比如：金额），定义成`BigDecimal`，而不是`Double`，避免丢失精度问题。

使用Double时可能会有这种场景：

```
double amount1 = 0.02; 
double amount2 = 0.03; 
System.out.println(amount2 - amount1); 
```

正常情况下预计amount2 - amount1应该等于0.01

但是执行结果，却为：

```
0.009999999999999998 
```

实际结果小于预计结果。

Double类型的两个参数相减会转换成二进制，因为Double有效位数为16位这就会出现存储小数位数不够的情况，这种情况下就会出现误差。

常识告诉我们使用`BigDecimal`能避免丢失精度。

但是使用BigDecimal能避免丢失精度吗？

答案是否定的。

为什么？

```
BigDecimal amount1 = new BigDecimal(0.02); 
BigDecimal amount2 = new BigDecimal(0.03); 
System.out.println(amount2.subtract(amount1)); 
```

这个例子中定义了两个BigDecimal类型参数，使用构造函数初始化数据，然后打印两个参数相减后的值。

结果：

```
0.0099999999999999984734433411404097569175064563751220703125 
```

不科学呀，为啥还是丢失精度了？

`Jdk`中`BigDecimal`的`构造方法`上有这样一段描述：

![](https://pic.imgdb.cn/item/610fe72f5132923bf816deee.jpg)



大致的意思是此构造函数的结果可能不可预测，可能会出现创建时为0.1，但实际是0.1000000000000000055511151231257827021181583404541015625的情况。

由此可见，使用BigDecimal构造函数初始化对象，也会丢失精度。

那么，如何才能不丢失精度呢？

```
BigDecimal amount1 = new BigDecimal(Double.toString(0.02)); 
BigDecimal amount2 = new BigDecimal(Double.toString(0.03)); 
System.out.println(amount2.subtract(amount1)); 
```

我们可以使用`Double.toString`方法，对double类型的小数进行转换，这样能保证精度不丢失。

其实，还有更好的办法：

```
BigDecimal amount1 = BigDecimal.valueOf(0.02); 
BigDecimal amount2 = BigDecimal.valueOf(0.03); 
System.out.println(amount2.subtract(amount1)); 
```

使用`BigDecimal.valueOf`方法初始化BigDecimal类型参数，也能保证精度不丢失。在新版的阿里巴巴开发手册中，也推荐使用这种方式创建BigDecimal参数。

#### 23.尽可能复用代码

`ctrl + c` 和 `ctrl + v`可能是程序员使用最多的快捷键了。

没错，我们是大自然的搬运工。哈哈哈。

在项目初期，我们使用这种工作模式，确实可以提高一些工作效率，可以少写（实际上是少敲）很多代码。

但它带来的问题是：会出现大量的代码重复。例如：

```
@Service 
@Slf4j 
public class TestService1 { 
 
    public void test1()  { 
        addLog("test1"); 
    } 
 
    private void addLog(String info) { 
        if (log.isInfoEnabled()) { 
            log.info("info:{}", info); 
        } 
    } 
} 
```

```
@Service 
@Slf4j 
public class TestService2 { 
 
    public void test2()  { 
        addLog("test2"); 
    } 
 
    private void addLog(String info) { 
        if (log.isInfoEnabled()) { 
            log.info("info:{}", info); 
        } 
    } 
} 
```

```
@Service 
@Slf4j 
public class TestService3 { 
 
    public void test3()  { 
        addLog("test3"); 
    } 
 
    private void addLog(String info) { 
        if (log.isInfoEnabled()) { 
            log.info("info:{}", info); 
        } 
    } 
} 
```

在TestService1、TestService2、TestService3类中，都有一个addLog方法用于添加日志。

本来该功能用得好好的，直到有一天，线上出现了一个事故：服务器磁盘满了。

原因是打印的日志太多，记了很多没必要的日志，比如：查询接口的所有返回值，大对象的具体打印等。

没办法，只能将addLog方法改成只记录`debug`日志。

于是乎，你需要全文搜索，addLog方法去修改，改成如下代码：

```
private void addLog(String info) { 
    if (log.isDebugEnabled()) { 
        log.debug("debug:{}", info); 
    } 
} 
```

这里是有三个类中需要修改这段代码，但如果实际工作中有三十个、三百个类需要修改，会让你非常痛苦。改错了，或者改漏了，都会埋下隐患，把自己坑了。

为何不把这种功能的代码提取出来，放到某个工具类中呢？

```
@Slf4j 
public class LogUtil { 
 
    private LogUtil() { 
        throw new RuntimeException("初始化失败"); 
    } 
 
    public static void addLog(String info) { 
        if (log.isDebugEnabled()) { 
            log.debug("debug:{}", info); 
        } 
    } 
} 
```

然后，在其他的地方，只需要调用。

```
@Service 
@Slf4j 
public class TestService1 { 
 
    public void test1()  { 
        LogUtil.addLog("test1"); 
    } 
} 
```

如果哪天addLog的逻辑又要改了，只需要修改LogUtil类的addLog方法即可。你可以自信满满的修改，不需要再小心翼翼了。

我们写的代码，绝大多数是可维护性的代码，而非一次性的。所以，建议在写代码的过程中，如果出现重复的代码，尽量提取成公共方法。千万别因为项目初期一时的爽快，而给项目埋下隐患，后面的维护成本可能会非常高。

#### 24.foreach循环中不remove元素

我们知道在Java中，循环有很多种写法，比如：while、for、foreach等。

```
public class Test2 { 
    public static void main(String[] args) { 
        List<String> list = Lists.newArrayList("a","b","c"); 
        for (String temp : list) { 
            if ("c".equals(temp)) { 
                list.remove(temp); 
            } 
        } 
        System.out.println(list); 
    } 
} 
```

执行结果：

```
Exception in thread "main" java.util.ConcurrentModificationException 
at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:901) 
at java.util.ArrayList$Itr.next(ArrayList.java:851) 
at com.sue.jump.service.test1.Test2.main(Test2.java:24) 
```

这种在`foreach`循环中调用`remove`方法删除元素，可能会报`ConcurrentModificationException`异常。

如果想在遍历集合时，删除其中的元素，可以用for循环，例如：

```
public class Test2 { 
 
    public static void main(String[] args) { 
        List<String> list = Lists.newArrayList("a","b","c"); 
        for (int i = 0; i < list.size(); i++) { 
            String temp = list.get(i); 
            if ("c".equals(temp)) { 
                list.remove(temp); 
            } 
        } 
        System.out.println(list); 
    } 
} 
```

执行结果：

```
[a, b] 
```

#### 25.避免随意打印日志

在我们写代码的时候，打印日志是必不可少的工作之一。

因为日志可以帮我们快速定位问题，判断代码当时真正的执行逻辑。

但打印日志的时候也需要注意，不是说任何时候都要打印日志，比如：

```
@PostMapping("/query") 
public List<User> query(@RequestBody List<Long> ids) { 
    log.info("request params:{}", ids); 
    List<User> userList = userService.query(ids); 
    log.info("response:{}", userList); 
    return userList; 
} 
```

对于有些查询接口，在日志中打印出了请求参数和接口返回值。

咋一看没啥问题。

但如果ids中传入值非常多，比如有1000个。而该接口被调用的频次又很高，一下子就会打印大量的日志，用不了多久就可能把`磁盘空间`打满。

如果真的想打印这些日志该怎么办？

```
@PostMapping("/query") 
public List<User> query(@RequestBody List<Long> ids) { 
    if (log.isDebugEnabled()) { 
        log.debug("request params:{}", ids); 
    } 
 
    List<User> userList = userService.query(ids); 
 
    if (log.isDebugEnabled()) { 
        log.debug("response:{}", userList); 
    } 
    return userList; 
} 
```

使用`isDebugEnabled`判断一下，如果当前的日志级别是`debug`才打印日志。生产环境默认日志级别是`info`，在有些紧急情况下，把某个接口或者方法的日志级别改成debug，打印完我们需要的日志后，又调整回去。

方便我们定位问题，又不会产生大量的垃圾日志，一举两得。

#### 26.比较时把常量写前面

在比较两个参数值是否相等时，通常我们会使用`==`号，或者`equals`方法。

我在第15章节中说过，使用`==`号比较两个值是否相等时，可能会存在问题，建议使用`equals`方法做比较。

`反例`：

```
if(user.getName().equals("苏三")) { 
   System.out.println("找到："+user.getName()); 
} 
```

在上面这段代码中，如果user对象，或者user.getName()方法返回值为`null`，则都报`NullPointerException`异常。

那么，如何避免空指针异常呢？

`正例`：

```
private static final String FOUND_NAME = "苏三"; 
... 
 
if(null == user) { 
  return; 
} 
if(FOUND_NAME.equals(user.getName())) { 
   System.out.println("找到："+user.getName()); 
} 
```

在使用`equals`做比较时，尽量将`常量`写在前面，即equals方法的左边。

这样即使user.getName()返回的数据为null，equals方法会直接返回false，而不再是报空指针异常。

#### 27.名称要见名知意

java中没有强制规定参数、方法、类或者包名该怎么起名。但如果我们没有养成良好的起名习惯，随意起名的话，可能会出现很多奇怪的代码。

##### 27.1 有意义的参数名

有时候，我们写代码时为了省事（可以少敲几个字母），参数名起得越简单越好。假如同事A写的代码如下：

```
int a = 1; 
int b = 2; 
String c = "abc"; 
boolean b = false; 
```

一段时间之后，同事A离职了，同事B接手了这段代码。

他此时一脸懵逼，a是什么意思，b又是什么意思，还有c...然后心里一万个草泥马。

给参数起一个有意义的名字，是非常重要的事情，避免给自己或者别人埋坑。

正解：

```
int supplierCount = 1; 
int purchaserCount = 2; 
String userName = "abc"; 
boolean hasSuccess = false; 
```

##### 27.2 见名知意

光起有意义的参数名还不够，我们不能就这点追求。我们起的参数名称最好能够`见名知意`，不然就会出现这样的情况：

```
String yongHuMing = "苏三"; 
String 用户Name = "苏三"; 
String su3 = "苏三"; 
String suThree = "苏三"; 
```

这几种参数名看起来是不是有点怪怪的？

为啥不定义成国际上通用的（地球人都能看懂）英文单词呢？

```
String userName = "苏三"; 
String susan = "苏三"; 
```

上面的这两个参数名，基本上大家都能看懂，减少了好多沟通成本。

所以建议在定义不管是参数名、方法名、类名时，优先使用国际上通用的英文单词，更简单直观，减少沟通成本。少用汉子、拼音，或者数字定义名称。

##### 27.3 参数名风格一致

参数名其实有多种风格，列如：

```
//字母全小写 
int suppliercount = 1; 
 
//字母全大写 
int SUPPLIERCOUNT = 1; 
 
//小写字母 + 下划线 
int supplier_count = 1; 
 
//大写字母 + 下划线 
int SUPPLIER_COUNT = 1; 
 
//驼峰标识 
int supplierCount = 1; 
```

如果某个类中定义了多种风格的参数名称，看起来是不是有点杂乱无章？

所以建议类的成员变量、局部变量和方法参数使用supplierCount，这种`驼峰风格`，即：第一个字母小写，后面的每个单词首字母大写。例如：

```
int supplierCount = 1; 
```

此外，为了好做区分，静态常量建议使用SUPPLIER\_COUNT，即：`大写字母` `+` `下划线`分隔的参数名。例如：

```
private static final int SUPPLIER_COUNT = 1; 
```

#### 28.SimpleDateFormat线程不安全

在java8之前，我们对时间的格式化处理，一般都是用的`SimpleDateFormat`类实现的。例如：

```
@Service 
public class SimpleDateFormatService { 
 
    public Date time(String time) throws ParseException { 
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
        return dateFormat.parse(time); 
    } 
} 
```

如果你真的这样写，是没问题的。

就怕哪天抽风，你觉得dateFormat是一段固定的代码，应该要把它抽取成常量。

于是把代码改成下面的这样：

```
@Service 
public class SimpleDateFormatService { 
 
   private static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
 
    public Date time(String time) throws ParseException { 
        return dateFormat.parse(time); 
    } 
} 
```

dateFormat对象被定义成了静态常量，这样就能被所有对象共用。

如果只有一个线程调用time方法，也不会出现问题。

但Serivce类的方法，往往是被Controller类调用的，而Controller类的接口方法，则会被`tomcat`的`线程池`调用。换句话说，可能会出现多个线程调用同一个Controller类的同一个方法，也就是会出现多个线程会同时调用time方法。

而time方法会调用`SimpleDateFormat`类的`parse`方法：

```
@Override 
public Date parse(String text, ParsePosition pos) { 
    ... 
    Date parsedDate; 
    try { 
        parsedDate = calb.establish(calendar).getTime(); 
        ... 
    } catch (IllegalArgumentException e) { 
        pos.errorIndex = start; 
        pos.index = oldStart; 
        return null; 
    } 
   return parsedDate; 
}  
```

该方法会调用`establish`方法：

```
Calendar establish(Calendar cal) { 
    ... 
    //1.清空数据 
    cal.clear(); 
    //2.设置时间 
    cal.set(...); 
    //3.返回 
    return cal; 
} 
```

其中的步骤1、2、3是非原子操作。

但如果cal对象是局部变量还好，坏就坏在parse方法调用establish方法时，传入的calendar是`SimpleDateFormat`类的父类`DateFormat`的成员变量：

```
public abstract class DateFormat extends Forma { 
    .... 
    protected Calendar calendar; 
    ... 
} 
```

这样就可能会出现多个线程，同时修改同一个对象即：dateFormat，它的同一个成员变量即：Calendar值的情况。

这样可能会出现，某个线程设置好了时间，又被其他的线程修改了，从而出现时间错误的情况。

那么，如何解决这个问题呢？

1. SimpleDateFormat类的对象不要定义成静态的，可以改成方法的局部变量。
2. 使用ThreadLocal保存SimpleDateFormat类的数据。
3. 使用java8的DateTimeFormatter类。

#### 29.少用Executors创建线程池

我们都知道`JDK5`之后，提供了`ThreadPoolExecutor`类，用它可以`自定义线程池`。

线程池的好处有很多，下面主要说说这3个方面。

1. `降低资源消耗`：避免了频繁的创建线程和销毁线程，可以直接复用已有线程。而我们都知道，创建线程是非常耗时的操作。
2. `提供速度`：任务过来之后，因为线程已存在，可以拿来直接使用。
3. `提高线程的可管理性`：线程是非常宝贵的资源，如果创建过多的线程，不仅会消耗系统资源，甚至会影响系统的稳定。使用线程池，可以非常方便的创建、管理和监控线程。

当然JDK为了我们使用更便捷，专门提供了：`Executors`类，给我们快速创建`线程池`。

该类中包含了很多`静态方法`：

- `newCachedThreadPool`：创建一个可缓冲的线程，如果线程池大小超过处理需要，可灵活回收空闲线程，若无可回收，则新建线程。
- `newFixedThreadPool`：创建一个固定大小的线程池，如果任务数量超过线程池大小，则将多余的任务放到队列中。
- `newScheduledThreadPool`：创建一个固定大小，并且能执行定时周期任务的线程池。
- `newSingleThreadExecutor`：创建只有一个线程的线程池，保证所有的任务安装顺序执行。

在高并发的场景下，如果大家使用这些静态方法创建线程池，会有一些问题。

那么，我们一起看看有哪些问题？

- `newFixedThreadPool`： 允许请求的队列长度是Integer.MAX\_VALUE，可能会堆积大量的请求，从而导致OOM。
- `newSingleThreadExecutor`：允许请求的队列长度是Integer.MAX\_VALUE，可能会堆积大量的请求，从而导致OOM。
- `newCachedThreadPool`：允许创建的线程数是Integer.MAX\_VALUE，可能会创建大量的线程，从而导致OOM。

那我们该怎办呢？

优先推荐使用`ThreadPoolExecutor`类，我们自定义线程池。

具体代码如下：

```
ExecutorService threadPool = new ThreadPoolExecutor( 
    8, //corePoolSize线程池中核心线程数 
    10, //maximumPoolSize 线程池中最大线程数 
    60, //线程池中线程的最大空闲时间，超过这个时间空闲线程将被回收 
    TimeUnit.SECONDS,//时间单位 
    new ArrayBlockingQueue(500), //队列 
    new ThreadPoolExecutor.CallerRunsPolicy()); //拒绝策略 
```

顺便说一下，如果是一些低并发场景，使用`Executors`类创建线程池也未尝不可，也不能完全一棍子打死。在这些低并发场景下，很难出现`OOM`问题，所以我们需要根据实际业务场景选择。

#### 30.Arrays.asList转换的集合别修改

在我们日常工作中，经常需要把`数组`转换成`List`集合。

因为数组的长度是固定的，不太好扩容，而List的长度是可变的，它的长度会根据元素的数量动态扩容。

在JDK的`Arrays`类中提供了`asList`方法，可以把`数组`转换成`List`。

`正例`：

```
String [] array = new String [] {"a","b","c"}; 
List<String> list = Arrays.asList(array); 
for (String str : list) { 
    System.out.println(str); 
} 
```

在这个例子中，使用Arrays.asList方法将array数组，直接转换成了list。然后在for循环中遍历list，打印出它里面的元素。

如果转换后的list，只是使用，没新增或修改元素，不会有问题。

`反例`：

```
String[] array = new String[]{"a", "b", "c"}; 
List<String> list = Arrays.asList(array); 
list.add("d"); 
for (String str : list) { 
    System.out.println(str); 
} 
```

执行结果：

```
Exception in thread "main" java.lang.UnsupportedOperationException 
at java.util.AbstractList.add(AbstractList.java:148) 
at java.util.AbstractList.add(AbstractList.java:108) 
at com.sue.jump.service.test1.Test2.main(Test2.java:24) 
```

会直接报`UnsupportedOperationException`异常。

为什么呢？

答：使用`Arrays.asList`方法转换后的`ArrayList`，是`Arrays`类的内部类，并非`java.util`包下我们常用的`ArrayList`。

Arrays类的内部ArrayList类，它没有实现父类的add和remove方法,用的是父类AbstractList的默认实现。

我们看看`AbstractList`是如何实现的：

```
public void add(int index, E element) { 
   throw new UnsupportedOperationException(); 
} 
 
public E remove(int index) { 
   throw new UnsupportedOperationException(); 
} 
```

该类的`add`和`remove`方法直接抛异常了，因此调用Arrays类的内部ArrayList类的add和remove方法，同样会抛异常。



### 5 种限流算法，7 种限流方式，挡住突发流量？

#### 前言

最近几年，随着微服务的流行，服务和服务之间的依赖越来越强，调用关系越来越复杂，服务和服务之间的**稳定性**越来越重要。在遇到突发的请求量激增，恶意的用户访问，亦或请求频率过高给下游服务带来较大压力时，我们常常需要通过缓存、限流、熔断降级、负载均衡等多种方式保证服务的稳定性。其中**限流**是不可或缺的一环，这篇文章介绍**限流**相关知识。

#### 1. 限流

**限流**顾名思义，就是对请求或并发数进行限制；通过对一个时间窗口内的请求量进行限制来保障系统的正常运行。如果我们的服务资源有限、处理能力有限，就需要对调用我们服务的上游请求进行限制，以防止自身服务由于资源耗尽而停止服务。

在限流中有两个概念需要了解。

- **阈值**：在一个单位时间内允许的请求量。如 QPS 限制为 10，说明 1 秒内最多接受 10 次请求。
- **拒绝策略**：超过阈值的请求的拒绝策略，常见的拒绝策略有直接拒绝、排队等待等。

#### 2. 固定窗口算法

**固定窗口算法**又叫**计数器算法**，是一种**简单**方便的限流算法。主要通过一个支持**原子操作**的计数器来累计 1 秒内的请求次数，当 1 秒内计数达到限流阈值时触发拒绝策略。每过 1 秒，计数器重置为 0 开始重新计数。

##### 2.1. 代码实现

下面是简单的代码实现，QPS 限制为 2，这里的代码做了一些**优化**，并没有单独开一个线程去每隔 1 秒重置计数器，而是在每次调用时进行时间间隔计算来确定是否先重置计数器。

```
/**
 * @author https://www.wdbyte.com
 */
public class RateLimiterSimpleWindow {
    // 阈值
    private static Integer QPS = 2;
    // 时间窗口（毫秒）
    private static long TIME_WINDOWS = 1000;
    // 计数器
    private static AtomicInteger REQ_COUNT = new AtomicInteger();
    
    private static long START_TIME = System.currentTimeMillis();

    public synchronized static boolean tryAcquire() {
        if ((System.currentTimeMillis() - START_TIME) > TIME_WINDOWS) {
            REQ_COUNT.set(0);
            START_TIME = System.currentTimeMillis();
        }
        return REQ_COUNT.incrementAndGet() <= QPS;
    }

    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 10; i++) {
            Thread.sleep(250);
            LocalTime now = LocalTime.now();
            if (!tryAcquire()) {
                System.out.println(now + " 被限流");
            } else {
                System.out.println(now + " 做点什么");
            }
        }
    }
}
```

运行结果：

```
20:53:43.038922 做点什么
20:53:43.291435 做点什么
20:53:43.543087 被限流
20:53:43.796666 做点什么
20:53:44.050855 做点什么
20:53:44.303547 被限流
20:53:44.555008 被限流
20:53:44.809083 做点什么
20:53:45.063828 做点什么
20:53:45.314433 被限流
```


从输出结果中可以看到大概每秒操作 3 次，由于限制 QPS 为 2，所以平均会有一次被限流。看起来可以了，不过我们思考一下就会发现这种简单的限流方式是有问题的，虽然我们限制了 QPS 为 2，但是当遇到时间窗口的临界突变时，如 1s 中的后 500 ms 和第 2s 的前 500ms 时，虽然是加起来是 1s 时间，却可以被请求 4 次。

![固定窗口算法](https://img.wdbyte.com/git/2021/20220223215006.png)

简单修改测试代码，可以进行验证：

```
// 先休眠 400ms，可以更快的到达时间窗口。
Thread.sleep(400);
for (int i = 0; i < 10; i++) {
    Thread.sleep(250);
    if (!tryAcquire()) {
        System.out.println("被限流");
    } else {
        System.out.println("做点什么");
    }
}
```

得到输出中可以看到连续 4 次请求，间隔 250 ms 没有却被限制。：

```
20:51:17.395087 做点什么
20:51:17.653114 做点什么
20:51:17.903543 做点什么
20:51:18.154104 被限流
20:51:18.405497 做点什么
20:51:18.655885 做点什么
20:51:18.906177 做点什么
20:51:19.158113 被限流
20:51:19.410512 做点什么
20:51:19.661629 做点什么
```


#### 3. 滑动窗口算法

我们已经知道固定窗口算法的实现方式以及它所存在的问题，而滑动窗口算法是对固定窗口算法的改进。既然固定窗口算法在遇到时间窗口的临界突变时会有问题，那么我们在遇到下一个时间窗口前也调整时间窗口不就可以了吗？

下面是滑动窗口的示意图。

![滑动窗口算法](https://img.wdbyte.com/git/2021/20220223215316.png)

上图的示例中，每 500ms 滑动一次窗口，可以发现窗口滑动的间隔越短，时间窗口的临界突变问题发生的概率也就越小，不过只要有时间窗口的存在，还是有可能发生**时间窗口的临界突变问题**。

##### 3.1. 代码实现

下面是基于以上滑动窗口思路实现的简单的滑动窗口限流工具类。

```
package com.wdbyte.rate.limiter;

import java.time.LocalTime;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * 滑动窗口限流工具类
 *
 * @author https://www.wdbyte.com
 */
public class RateLimiterSlidingWindow {
    /**
     * 阈值
     */
    private int qps = 2;
    /**
     * 时间窗口总大小（毫秒）
     */
    private long windowSize = 1000;
    /**
     * 多少个子窗口
     */
    private Integer windowCount = 10;
    /**
     * 窗口列表
     */
    private WindowInfo[] windowArray = new WindowInfo[windowCount];

    public RateLimiterSlidingWindow(int qps) {
        this.qps = qps;
        long currentTimeMillis = System.currentTimeMillis();
        for (int i = 0; i < windowArray.length; i++) {
            windowArray[i] = new WindowInfo(currentTimeMillis, new AtomicInteger(0));
        }
    }

    /**
     * 1. 计算当前时间窗口
     * 2. 更新当前窗口计数 & 重置过期窗口计数
     * 3. 当前 QPS 是否超过限制
     *
     * @return
     */
    public synchronized boolean tryAcquire() {
        long currentTimeMillis = System.currentTimeMillis();
        // 1. 计算当前时间窗口
        int currentIndex = (int)(currentTimeMillis % windowSize / (windowSize / windowCount));
        // 2.  更新当前窗口计数 & 重置过期窗口计数
        int sum = 0;
        for (int i = 0; i < windowArray.length; i++) {
            WindowInfo windowInfo = windowArray[i];
            if ((currentTimeMillis - windowInfo.getTime()) > windowSize) {
                windowInfo.getNumber().set(0);
                windowInfo.setTime(currentTimeMillis);
            }
            if (currentIndex == i && windowInfo.getNumber().get() < qps) {
                windowInfo.getNumber().incrementAndGet();
            }
            sum = sum + windowInfo.getNumber().get();
        }
        // 3. 当前 QPS 是否超过限制
        return sum <= qps;
    }

    private class WindowInfo {
        // 窗口开始时间
        private Long time;
        // 计数器
        private AtomicInteger number;

        public WindowInfo(long time, AtomicInteger number) {
            this.time = time;
            this.number = number;
        }
        // get...set...
    }
}
```


下面是测试用例，设置 QPS 为 2, 测试次数 20 次，每次间隔 300 毫秒，预计成功次数在 12 次左右。

```
public static void main(String[] args) throws InterruptedException {
    int qps = 2, count = 20, sleep = 300, success = count * sleep / 1000 * qps;
    System.out.println(String.format("当前QPS限制为:%d,当前测试次数:%d,间隔:%dms,预计成功次数:%d", qps, count, sleep, success));
    success = 0;
    RateLimiterSlidingWindow myRateLimiter = new RateLimiterSlidingWindow(qps);
    for (int i = 0; i < count; i++) {
        Thread.sleep(sleep);
        if (myRateLimiter.tryAcquire()) {
            success++;
            if (success % qps == 0) {
                System.out.println(LocalTime.now() + ": success, ");
            } else {
                System.out.print(LocalTime.now() + ": success, ");
            }
        } else {
            System.out.println(LocalTime.now() + ": fail");
        }
    }
    System.out.println();
    System.out.println("实际测试成功次数:" + success);
}
```


#### 4. 滑动日志算法

滑动日志算法是实现限流的另一种方法，这种方法比较简单。基本逻辑就是记录下所有的请求时间点，新请求到来时先判断最近指定时间范围内的请求数量是否超过指定阈值，由此来确定是否达到限流，这种方式没有了时间窗口突变的问题，限流比较准确，但是因为要记录下每次请求的时间点，所以**占用的内存较多**。

##### 4.1. 代码实现

下面是简单实现的 一个滑动日志算法，因为滑动日志要每次请求单独存储一条记录，可能占用内存过多。所以下面这个实现其实不算严谨的滑动日志，更像一个把 1 秒时间切分成 1000 个时间窗口的滑动窗口算法。

```
package com.wdbyte.rate.limiter;

import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;
import java.util.TreeMap;

/**
 * 滑动日志方式限流
 * 设置 QPS 为 2.
 *
 * @author https://www.wdbyte.com
 */
public class RateLimiterSildingLog {

    /**
     * 阈值
     */
    private Integer qps = 2;
    /**
     * 记录请求的时间戳,和数量
     */
    private TreeMap<Long, Long> treeMap = new TreeMap<>();

    /**
     * 清理请求记录间隔, 60 秒
     */
    private long claerTime = 60 * 1000;

    public RateLimiterSildingLog(Integer qps) {
        this.qps = qps;
    }

    public synchronized boolean tryAcquire() {
        long now = System.currentTimeMillis();
        // 清理过期的数据老数据，最长 60 秒清理一次
        if (!treeMap.isEmpty() && (treeMap.firstKey() - now) > claerTime) {
            Set<Long> keySet = new HashSet<>(treeMap.subMap(0L, now - 1000).keySet());
            for (Long key : keySet) {
                treeMap.remove(key);
            }
        }
        // 计算当前请求次数
        int sum = 0;
        for (Long value : treeMap.subMap(now - 1000, now).values()) {
            sum += value;
        }
        // 超过QPS限制，直接返回 false
        if (sum + 1 > qps) {
            return false;
        }
        // 记录本次请求
        if (treeMap.containsKey(now)) {
            treeMap.compute(now, (k, v) -> v + 1);
        } else {
            treeMap.put(now, 1L);
        }
        return sum <= qps;
    }

    public static void main(String[] args) throws InterruptedException {
        RateLimiterSildingLog rateLimiterSildingLog = new RateLimiterSildingLog(3);
        for (int i = 0; i < 10; i++) {
            Thread.sleep(250);
            LocalTime now = LocalTime.now();
            if (rateLimiterSildingLog.tryAcquire()) {
                System.out.println(now + " 做点什么");
            } else {
                System.out.println(now + " 被限流");
            }
        }
    }
}
```

代码中把阈值 QPS 设定为 3，运行可以得到如下日志：

```
20:51:17.395087 做点什么
20:51:17.653114 做点什么
20:51:17.903543 做点什么
20:51:18.154104 被限流
20:51:18.405497 做点什么
20:51:18.655885 做点什么
20:51:18.906177 做点什么
20:51:19.158113 被限流
20:51:19.410512 做点什么
20:51:19.661629 做点什么
```


#### 5. 漏桶算法

漏桶算法中的漏桶是一个形象的比喻，这里可以用生产者消费者模式进行说明，请求是一个生产者，每一个请求都如一滴水，请求到来后放到一个队列（漏桶）中，而桶底有一个孔，不断的漏出水滴，就如消费者不断的在消费队列中的内容，消费的速率（漏出的速度）等于限流阈值。即假如 QPS 为 2，则每 `1s / 2= 500ms` 消费一次。漏桶的桶有大小，就如队列的容量，当请求堆积超过指定容量时，会触发拒绝策略。

下面是漏桶算法的示意图。

![漏桶算法](https://img.wdbyte.com/git/2021/20220225161827.png)

由介绍可以知道，漏桶模式中的消费处理总是能以恒定的速度进行，可以很好的**保护自身系统**不被突如其来的流量冲垮；但是这也是漏桶模式的缺点，假设 QPS 为 2，同时 2 个请求进来，2 个请求并不能同时进行处理响应，因为每 `1s / 2= 500ms` 只能处理一个请求。

#### 6. 令牌桶算法

令牌桶算法同样是实现限流是一种常见的思路，最为常用的 Google 的 Java 开发工具包 Guava 中的限流工具类 RateLimiter 就是令牌桶的一个实现。令牌桶的实现思路类似于生产者和消费之间的关系。

系统服务作为生产者，按照指定频率向桶（容器）中添加令牌，如 QPS 为 2，每 500ms 向桶中添加一个令牌，如果桶中令牌数量达到阈值，则不再添加。

请求执行作为消费者，每个请求都需要去桶中拿取一个令牌，取到令牌则继续执行；如果桶中无令牌可取，就触发拒绝策略，可以是超时等待，也可以是直接拒绝本次请求，由此达到限流目的。

下面是令牌桶限流算法示意图。

![令牌桶算法](https://img.wdbyte.com/git/2021/20220225160801.png)

思考令牌桶的实现可以以下特点。

1. 1s / 阈值（QPS） = 令牌添加时间间隔。
2. 桶的容量等于限流的阈值，令牌数量达到阈值时，不再添加。
3. 可以适应流量突发，N 个请求到来只需要从桶中获取 N 个令牌就可以继续处理。
4. 有启动过程，令牌桶启动时桶中无令牌，然后按照令牌添加时间间隔添加令牌，若启动时就有阈值数量的请求过来，会因为桶中没有足够的令牌而触发拒绝策略，不过如 RateLimiter 限流工具已经优化了这类问题。

代码实现

Google 的 Java 开发工具包 Guava 中的限流工具类 RateLimiter 就是令牌桶的一个实现，日常开发中我们也不会手动实现了，这里直接使用 RateLimiter 进行测试。

引入依赖：

```
<exclusion>
  	<groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
  	<version>31.0.1-jre</version>
</exclusion>
```


RateLimiter 限流体验：

```
// qps 2
RateLimiter rateLimiter = RateLimiter.create(2);
for (int i = 0; i < 10; i++) {
    String time = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_TIME);
    System.out.println(time + ":" + rateLimiter.tryAcquire());
    Thread.sleep(250);
}
```


代码中限制 QPS 为 2，也就是每隔 500ms 生成一个令牌，但是程序每隔 250ms 获取一次令牌，所以两次获取中只有一次会成功。

```
17:19:06.797557:true
17:19:07.061419:false
17:19:07.316283:true
17:19:07.566746:false
17:19:07.817035:true
17:19:08.072483:false
17:19:08.326347:true
17:19:08.577661:false
17:19:08.830252:true
17:19:09.085327:false
```


 6.2. 思考

虽然演示了 Google Guava 工具包中的 RateLimiter 的实现，但是我们需要思考一个问题，就是令牌的添加方式，如果按照指定间隔添加令牌，那么需要开一个线程去定时添加，如果有很多个接口很多个 RateLimiter 实例，**线程数会随之增加**，这显然不是一个好的办法。显然 Google 也考虑到了这个问题，在 RateLimiter 中，是**在每次令牌获取时才进行计算令牌是否足够的**。它通过存储的下一个令牌生成的时间，和当前获取令牌的时间差，再结合阈值，去计算令牌是否足够，同时再记录下一个令牌的生成时间以便下一次调用。

下面是 Guava 中 RateLimiter 类的子类 SmoothRateLimiter 的 `resync()` 方法的代码分析，可以看到其中的令牌计算逻辑。

```
void resync(long nowMicros) { // 当前微秒时间
    // 当前时间是否大于下一个令牌生成时间
    if (nowMicros > this.nextFreeTicketMicros) { 
      	// 可生成的令牌数 newPermits = （当前时间 - 下一个令牌生成时间）/ 令牌生成时间间隔。
      	// 如果 QPS 为2，这里的 coolDownIntervalMicros 就是 500000.0 微秒(500ms)
        double newPermits = (double)(nowMicros - this.nextFreeTicketMicros) / this.coolDownIntervalMicros();
				// 更新令牌库存 storedPermits。
      	this.storedPermits = Math.min(this.maxPermits, this.storedPermits + newPermits);
				// 更新下一个令牌生成时间 nextFreeTicketMicros
      	this.nextFreeTicketMicros = nowMicros;
    }
}
```



#### 7. Redis 分布式限流

Redis 是一个开源的内存数据库，可以用来作为数据库、缓存、消息中间件等。Redis 是单线程的，又在内存中操作，所以速度极快，得益于 Redis 的各种特性，所以使用 Redis 实现一个限流工具是十分方便的。

下面的演示都基于 Spring Boot 项目，并需要以下依赖。

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```


配置 Redis 信息。

```
spring:
  redis:
    database: 0
    password: 
    port: 6379
    host: 127.0.0.1
    lettuce:
      shutdown-timeout: 100ms
      pool:
        min-idle: 5
        max-idle: 10
        max-active: 8
        max-wait: 1ms
```


##### 7.1. 固定窗口限流

Redis 中的固定窗口限流是使用 `incr` 命令实现的，`incr` 命令通常用来自增计数；如果我们使用时间戳信息作为 key，自然就可以统计每秒的请求量了，以此达到限流目的。

这里有两点要注意。

1. 对于不存在的 key，第一次新增时，value 始终为 1。
2. INCR 和 EXPIRE 命令操作应该在一个**原子操作**中提交，以保证每个 key 都正确设置了过期时间，不然会有 key 值无法自动删除而导致的内存溢出。

由于 Redis 中实现事务的复杂性，所以这里直接只用 `lua` 脚本来实现原子操作。下面是 `lua` 脚本内容。

```
local count = redis.call("incr",KEYS[1])
if count == 1 then
  redis.call('expire',KEYS[1],ARGV[2])
end
if count > tonumber(ARGV[1]) then
  return 0
end
return 1
```

下面是使用 Spring Boot 中 `RedisTemplate` 来实现的 `lua` 脚本调用测试代码。

```
/**
 * @author https://www.wdbyte.com
 */
@SpringBootTest
class RedisLuaLimiterByIncr {
    private static String KEY_PREFIX = "limiter_";
    private static String QPS = "4";
    private static String EXPIRE_TIME = "1";

    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    @Test
    public void redisLuaLimiterTests() throws InterruptedException, IOException {
        for (int i = 0; i < 15; i++) {
            Thread.sleep(200);
            System.out.println(LocalTime.now() + " " + acquire("user1"));
        }
    }

    /**
     * 计数器限流
     *
     * @param key
     * @return
     */
    public boolean acquire(String key) {
        // 当前秒数作为 key
        key = KEY_PREFIX + key + System.currentTimeMillis() / 1000;
        DefaultRedisScript<Long> redisScript = new DefaultRedisScript<>();
        redisScript.setResultType(Long.class);
        //lua文件存放在resources目录下
        redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource("limiter.lua")));
        return stringRedisTemplate.execute(redisScript, Arrays.asList(key), QPS, EXPIRE_TIME) == 1;
    }
}
```

代码中虽然限制了 QPS 为 4，但是因为这种限流实现是把毫秒时间戳作为 key 的，所以会有临界窗口突变的问题，下面是运行结果，可以看到因为时间窗口的变化，导致了 QPS 超过了限制值 4。

```
17:38:23.122044 true
17:38:23.695124 true
17:38:23.903220 true
# 此处有时间窗口变化，所以下面继续 true
17:38:24.106206 true
17:38:24.313458 true
17:38:24.519431 true
17:38:24.724446 true
17:38:24.932387 false
17:38:25.137912 true
17:38:25.355595 true
17:38:25.558219 true
17:38:25.765801 true
17:38:25.969426 false
17:38:26.176220 true
17:38:26.381918 true
```

##### 7.3. 滑动窗口限流

通过对上面的基于 `incr` 命令实现的 Redis 限流方式的测试，我们已经发现了固定窗口限流所带来的问题，在这篇文章的第三部分已经介绍了滑动窗口限流的优势，它可以大幅度降低因为窗口临界突变带来的问题，那么如何使用 Redis 来实现滑动窗口限流呢？

这里主要使用 `ZSET` 有序集合来实现滑动窗口限流，`ZSET` 集合有下面几个特点：

1. ZSET 集合中的 key 值可以自动排序。
2. ZSET 集合中的 value 不能有重复值。
3. ZSET 集合可以方便的使用 ZCARD 命令获取元素个数。
4. ZSET 集合可以方便的使用 ZREMRANGEBYLEX 命令移除指定范围的 key 值。

基于上面的四点特性，可以编写出基于 `ZSET` 的滑动窗口限流 `lua` 脚本。

```
--KEYS[1]: 限流 key
--ARGV[1]: 时间戳 - 时间窗口
--ARGV[2]: 当前时间戳（作为score）
--ARGV[3]: 阈值
--ARGV[4]: score 对应的唯一value
-- 1. 移除时间窗口之前的数据
redis.call('zremrangeByScore', KEYS[1], 0, ARGV[1])
-- 2. 统计当前元素数量
local res = redis.call('zcard', KEYS[1])
-- 3. 是否超过阈值
if (res == nil) or (res < tonumber(ARGV[3])) then
    redis.call('zadd', KEYS[1], ARGV[2], ARGV[4])
    return 1
else
    return 0
end
```


下面是使用 Spring Boot 中 `RedisTemplate` 来实现的 `lua` 脚本调用测试代码。

```
@SpringBootTest
class RedisLuaLimiterByZset {

    private String KEY_PREFIX = "limiter_";
    private String QPS = "4";

    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    @Test
    public void redisLuaLimiterTests() throws InterruptedException, IOException {
        for (int i = 0; i < 15; i++) {
            Thread.sleep(200);
            System.out.println(LocalTime.now() + " " + acquire("user1"));
        }
    }

    /**
     * 计数器限流
     *
     * @param key
     * @return
     */
    public boolean acquire(String key) {
        long now = System.currentTimeMillis();
        key = KEY_PREFIX + key;
        String oldest = String.valueOf(now - 1_000);
        String score = String.valueOf(now);
        String scoreValue = score;
        DefaultRedisScript<Long> redisScript = new DefaultRedisScript<>();
        redisScript.setResultType(Long.class);
        //lua文件存放在resources目录下
        redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource("limiter2.lua")));
        return stringRedisTemplate.execute(redisScript, Arrays.asList(key), oldest, score, QPS, scoreValue) == 1;
    }
}
```

代码中限制 QPS 为 4，运行结果信息与之一致。

```
17:36:37.150370 true
17:36:37.716341 true
17:36:37.922577 true
17:36:38.127497 true
17:36:38.335879 true
17:36:38.539225 false
17:36:38.745903 true
17:36:38.952491 true
17:36:39.159497 true
17:36:39.365239 true
17:36:39.570572 false
17:36:39.776635 true
17:36:39.982022 true
17:36:40.185614 true
17:36:40.389469 true
```


这里介绍了 Redis 实现限流的两种方式，当然使用 Redis 也可以实现漏桶和令牌桶两种限流算法，这里就不做演示了，感兴趣的可以自己研究下。

#### 8. 总结

这篇文章介绍实现限流的几种方式，主要是**窗口算法和桶算法**，两者各有优势。

- 窗口算法实现简单，逻辑清晰，可以很直观的得到当前的 QPS 情况，但是会有时间窗口的临界突变问题，而且不像桶一样有队列可以缓冲。
- 桶算法虽然稍微复杂，不好统计 QPS 情况，但是桶算法也有优势所在。
    - 漏桶模式消费速率恒定，可以很好的**保护自身系统**，可以对流量进行整形，但是面对突发流量不能快速响应。
    - 令牌桶模式可以面对突发流量，但是启动时会有缓慢加速的过程，不过常见的开源工具中已经对此优化。

**单机限流与分布式限流**

上面演示的基于代码形式的窗口算法和桶算法限流都适用于单机限流，如果需要分布式限流可以结合注册中心、负载均衡计算每个服务的限流阈值，但这样会降低一定精度，如果对精度要求不是太高，可以使用。

而 Redis 的限流，由于 Redis 的单机性，本身就可以用于分布式限流。使用 Redis 可以实现各种可以用于限流算法，如果觉得麻烦也可以使用开源工具如 redisson，已经封装了基于 Redis 的限流。

**其他限流工具**

文中已经提到了 `Guava` 的限流工具包，不过它毕竟是单机的，开源社区中也有很多分布式限流工具，如阿里开源的 Sentinel 就是不错的工具，Sentinel 以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。


### Java 中的对象池实现
最近在分析一个应用中的某个接口的耗时情况时，发现一个看起来极其普通的对象创建操作，竟然每次需要消耗 8ms 左右时间，分析后发现这个对象可以通过对象池模式进行优化，优化后此步耗时仅有 0.01ms，这篇文章介绍对象池相关知识。

![对象初始化耗时 8ms](https://img.wdbyte.com/img/22/20220710235653.png?x-oss-process=style/1000px)

#### 1. 什么是对象池

池化并不是什么新鲜的技术，它更像一种软件设计模式，主要功能是缓存一组已经初始化的对象，以供随时可以使用。对象池大多数场景下都是缓存着创建成本过高或者需要重复创建使用的对象，从池子中取对象的时间是可以预测的，但是新建一个对象的时间是不确定的。

当需要一个新对象时，就向池中借出一个，然后对象池标记当前对象正在使用，使用完毕后归还到对象池，以便再次借出。

常见的使用对象池化场景：

1. 对象创建成本过高。
2. 需要频繁的创建大量重复对象，会产生很多内存碎片。
3. 同时使用的对象不会太多。
4. 常见的具体场景如数据库连接池、线程池等。

#### 2. 为什么需要对象池

如果一个对象的**创建成本很高**，比如建立数据库的连接时耗时过长，在不使用池化技术的情况下，我们的查询过程可能是这样的。

```
查询 1：建立数据库连接 -> 发起查询 -> 收到响应 -> 关闭连接
查询 2：建立数据库连接 -> 发起查询 -> 收到响应 -> 关闭连接
查询 3：建立数据库连接 -> 发起查询 -> 收到响应 -> 关闭连接
 ```

在这种模式下，每次查询都要重新建立关闭连接，因为建立连接是一个耗时的操作，所以这种模式会影响程序的总体性能。

那么使用池化思想是怎么样的呢？同样的过程会转变成下面的步骤。

```
初始化：建立 N 个数据库连接 -> 缓存起来
查询 1：从缓存借到数据库连接 -> 发起查询 -> 收到响应 -> 归还数据库连接对象到缓存
查询 2：从缓存借到数据库连接 -> 发起查询 -> 收到响应 -> 归还数据库连接对象到缓存
查询 3：从缓存借到数据库连接 -> 发起查询 -> 收到响应 -> 归还数据库连接对象到缓存
```


使用池化思想后，数据库连接并不会频繁的创建关闭，而是启动后就初始化了 N 个连接以供后续使用，使用完毕后归还对象，这样程序的总体性能得到提升。

#### 3. 对象池的实现

通过上面的例子也可以发现池化思想的几个关键步骤：**初始化、借出、归还**。上面没有展示**销毁**步骤， 某些场景下还需要对象的销毁这一过程，比如释放连接。

下面我们手动实现一个简陋的对象池，加深下对对象池的理解。主要是定一个对象池管理类，然后在里面实现对象的**初始化、借出、归还、销毁**等操作。

```
package com.wdbyet.tool.objectpool.mypool;

import java.io.Closeable;
import java.io.IOException;
import java.util.HashSet;
import java.util.Stack;

/**
 * @author https://www.wdbyte.com
 */
public class MyObjectPool<T extends Closeable> {

    // 池子大小
    private Integer size = 5;
    // 对象池栈。后进先出
    private Stack<T> stackPool = new Stack<>();
    // 借出的对象的 hashCode 集合
    private HashSet<Integer> borrowHashCodeSet = new HashSet<>();

    /**
     * 增加一个对象
     *
     * @param t
     */
    public synchronized void addObj(T t) {
        if ((stackPool.size() + borrowHashCodeSet.size()) == size) {
            throw new RuntimeException("池中对象已经达到最大值");
        }
        stackPool.add(t);
        System.out.println("添加了对象:" + t.hashCode());
    }

    /**
     * 借出一个对象
     *
     * @return
     */
    public synchronized T borrowObj() {
        if (stackPool.isEmpty()) {
            System.out.println("没有可以被借出的对象");
            return null;
        }
        T pop = stackPool.pop();
        borrowHashCodeSet.add(pop.hashCode());
        System.out.println("借出了对象:" + pop.hashCode());
        return pop;
    }

    /**
     * 归还一个对象
     *
     * @param t
     */
    public synchronized void returnObj(T t) {
        if (borrowHashCodeSet.contains(t.hashCode())) {
            stackPool.add(t);
            borrowHashCodeSet.remove(t.hashCode());
            System.out.println("归还了对象:" + t.hashCode());
            return;
        }
        throw new RuntimeException("只能归还从池中借出的对象");
    }

    /**
     * 销毁池中对象
     */
    public synchronized void destory() {
        if (!borrowHashCodeSet.isEmpty()) {
            throw new RuntimeException("尚有未归还的对象，不能关闭所有对象");
        }
        while (!stackPool.isEmpty()) {
            T pop = stackPool.pop();
            try {
                pop.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        System.out.println("已经销毁了所有对象");
    }
}
```


代码还是比较简单的，只是简单的示例，下面我们通过池化一个 Redis 连接对象 Jedis 来演示如何使用。

> 其实 Jedis 中已经有对应的 Jedis 池化管理对象了 JedisPool 了，不过我们这里为了演示对象池的实现，就不使用官方提供的 JedisPool 了。

启动一个 Redis 服务这里不做介绍，假设你已经有了一个 Redis 服务，下面引入 Java 中连接 Redis 需要用到的 Maven 依赖。

```
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>4.2.0</version>
</dependency>
```


正常情况下 Jedis 对象的使用方式：

```
Jedis jedis = new Jedis("localhost", 6379);
String name = jedis.get("name");
System.out.println(name);
jedis.close();
```


如果使用上面的对象池，就可以像下面这样使用。

```
package com.wdbyet.tool.objectpool.mypool;

import redis.clients.jedis.Jedis;

/**
 * @author niulang
 * @date 2022/07/02
 */
public class MyObjectPoolTest {

    public static void main(String[] args) {
        MyObjectPool<Jedis> objectPool = new MyObjectPool<>();
        // 增加一个 jedis 连接对象
        objectPool.addObj(new Jedis("127.0.0.1", 6379));
        objectPool.addObj(new Jedis("127.0.0.1", 6379));
        // 从对象池中借出一个 jedis 对象
        Jedis jedis = objectPool.borrowObj();
        // 一次 redis 查询
        String name = jedis.get("name");
        System.out.println(String.format("redis get:" + name));
        // 归还 redis 连接对象
        objectPool.returnObj(jedis);
        // 销毁对象池中的所有对象
        objectPool.destory();
        // 再次借用对象
        objectPool.borrowObj();
    }
}

```

输出日志：

```
添加了对象:1556956098
添加了对象:1252585652
借出了对象:1252585652
redis get:www.wdbyte.com
归还了对象:1252585652
已经销毁了所有对象
没有可以被借出的对象
```


如果使用 JMH 对使用对象池化进行 Redis 查询，和正常创建 Redis 连接然后查询关闭连接的方式进行性能对比，会发现两者的性能差异很大。下面是测试结果，可以发现使用对象池化后的性能是非池化方式的 5 倍左右。

```
Benchmark                   Mode  Cnt      Score       Error  Units
MyObjectPoolTest.test      thrpt   15   2612.689 ±   358.767  ops/s
MyObjectPoolTest.testPool  thrpt    9  12414.228 ± 11669.484  ops/s
```
 

#### 4. 开源的对象池工具

上面自己实现的对象池总归有些简陋了，其实开源工具中已经有了非常好用的对象池的实现，如 Apache 的 `commons-pool2` 工具，很多开源工具中的对象池都是基于此工具实现，下面介绍这个工具的使用方式。

maven 依赖：

```
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-pool2</artifactId>
    <version>2.11.1</version>
</dependency>
```


在 `commons-pool2` 对象池工具中有几个关键的类。

- `PooledObjectFactory` 类是一个工厂接口，用于实现想要池化对象的创建、验证、销毁等操作。
- `GenericObjectPool` 类是一个通用的对象池管理类，可以进行对象的借出、归还等操作。
- `GenericObjectPoolConfig` 类是对象池的配置类，可以进行对象的最大、最小等容量信息进行配置。

下面通过一个具体的示例演示 `commons-pool2` 工具类的使用，这里依旧选择 Redis 连接对象 Jedis 作为演示。

实现 `PooledObjectFactory` 工厂类，实现其中的对象创建和销毁方法。

```
public class MyPooledObjectFactory implements PooledObjectFactory<Jedis> {

    @Override
    public void activateObject(PooledObject<Jedis> pooledObject) throws Exception {

    }

    @Override
    public void destroyObject(PooledObject<Jedis> pooledObject) throws Exception {
        Jedis jedis = pooledObject.getObject();
        jedis.close();
      	System.out.println("释放连接");
    }

    @Override
    public PooledObject<Jedis> makeObject() throws Exception {
        return new DefaultPooledObject(new Jedis("localhost", 6379));
    }

    @Override
    public void passivateObject(PooledObject<Jedis> pooledObject) throws Exception {
    }

    @Override
    public boolean validateObject(PooledObject<Jedis> pooledObject) {
        return false;
    }
}
```


继承 `GenericObjectPool` 类，实现对对象的借出、归还等操作。

```
public class MyGenericObjectPool extends GenericObjectPool<Jedis> {

    public MyGenericObjectPool(PooledObjectFactory factory) {
        super(factory);
    }

    public MyGenericObjectPool(PooledObjectFactory factory, GenericObjectPoolConfig config) {
        super(factory, config);
    }

    public MyGenericObjectPool(PooledObjectFactory factory, GenericObjectPoolConfig config,
        AbandonedConfig abandonedConfig) {
        super(factory, config, abandonedConfig);
    }
}
```


可以看到 `MyGenericObjectPool` 类的构造函数中的入参有 `GenericObjectPoolConfig` 对象，这是个对象池的配置对象，可以配置对象池的容量大小等信息，这里就不配置了，使用默认配置。

通过 `GenericObjectPoolConfig` 的源码可以看到**默认配置中，对象池的容量是 8 个**。

```
public class GenericObjectPoolConfig<T> extends BaseObjectPoolConfig<T> {

    /**
     * The default value for the {@code maxTotal} configuration attribute.
     * @see GenericObjectPool#getMaxTotal()
     */
    public static final int DEFAULT_MAX_TOTAL = 8;

    /**
     * The default value for the {@code maxIdle} configuration attribute.
     * @see GenericObjectPool#getMaxIdle()
     */
    public static final int DEFAULT_MAX_IDLE = 8;
```


下面编写一个对象池使用测试类。

```
public class ApachePool {

    public static void main(String[] args) throws Exception {
        MyGenericObjectPool objectMyObjectPool = new MyGenericObjectPool(new MyPooledObjectFactory());
        Jedis jedis = objectMyObjectPool.borrowObject();
        String name = jedis.get("name");
        System.out.println(name);
        objectMyObjectPool.returnObject(jedis);
        objectMyObjectPool.close();
    }

}
```


输出日志：

```
redis get:www.wdbyte.com
释放连接
```


上面已经演示了 `commons-pool2` 工具中的对象池的使用方式，从上面的例子中可以发现这种对象池中只能存放同一种初始化条件的对象，如果这里的 Redis 我们需要存储一个本地连接和一个远程连接的两种 Jedis 对象，就不能满足了。那么怎么办呢？

其实 `commons-pool2` 工具已经考虑到了这种情况，通过增加一个 key 值可以在同一个对象池管理中进行区分，代码和上面类似，直接贴出完整的代码实现。

```
package com.wdbyet.tool.objectpool.apachekeyedpool;

import org.apache.commons.pool2.BaseKeyedPooledObjectFactory;
import org.apache.commons.pool2.KeyedPooledObjectFactory;
import org.apache.commons.pool2.PooledObject;
import org.apache.commons.pool2.impl.AbandonedConfig;
import org.apache.commons.pool2.impl.DefaultPooledObject;
import org.apache.commons.pool2.impl.GenericKeyedObjectPool;
import org.apache.commons.pool2.impl.GenericKeyedObjectPoolConfig;
import redis.clients.jedis.Jedis;

/**
 * @author https://www.wdbyte.com
 * @date 2022/07/07
 */
public class ApacheKeyedPool {

    public static void main(String[] args) throws Exception {
        String key = "local";
        MyGenericKeyedObjectPool objectMyObjectPool = new MyGenericKeyedObjectPool(new MyKeyedPooledObjectFactory());
        Jedis jedis = objectMyObjectPool.borrowObject(key);
        String name = jedis.get("name");
        System.out.println("redis get :" + name);
        objectMyObjectPool.returnObject(key, jedis);
    }
}

class MyKeyedPooledObjectFactory extends BaseKeyedPooledObjectFactory<String, Jedis> {

    @Override
    public Jedis create(String key) throws Exception {
        if ("local".equals(key)) {
            return new Jedis("localhost", 6379);
        }
        if ("remote".equals(key)) {
            return new Jedis("192.168.0.105", 6379);
        }
        return null;
    }

    @Override
    public PooledObject<Jedis> wrap(Jedis value) {
        return new DefaultPooledObject<>(value);
    }
}

class MyGenericKeyedObjectPool extends GenericKeyedObjectPool<String, Jedis> {

    public MyGenericKeyedObjectPool(KeyedPooledObjectFactory<String, Jedis> factory) {
        super(factory);
    }

    public MyGenericKeyedObjectPool(KeyedPooledObjectFactory<String, Jedis> factory,
        GenericKeyedObjectPoolConfig<Jedis> config) {
        super(factory, config);
    }

    public MyGenericKeyedObjectPool(KeyedPooledObjectFactory<String, Jedis> factory,
        GenericKeyedObjectPoolConfig<Jedis> config, AbandonedConfig abandonedConfig) {
        super(factory, config, abandonedConfig);
    }
}
```


输出日志：

```
redis get :www.wdbyte.com
```


#### 5. JedisPool 对象池实现分析

这篇文章中的演示都使用了 Jedis 连接对象，其实在 Jedis SDK 中已经实现了相应的对象池，也就是我们常用的 JedisPool 类。那么这里的 JedisPool 是怎么实现的呢？我们先看一下 JedisPool 的使用方式。

```
package com.wdbyet.tool.objectpool;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

/**
 * @author https://www.wdbyte.com
 */
public class JedisPoolTest {

    public static void main(String[] args) {
        JedisPool jedisPool = new JedisPool("localhost", 6379);
        // 从对象池中借一个对象
        Jedis jedis = jedisPool.getResource();
        String name = jedis.get("name");
        System.out.println("redis get :" + name);
        jedis.close();
        // 彻底退出前，关闭 Redis 连接池
        jedisPool.close();
    }
}
```


代码中添加了注释，可以看到通过 `jedisPool.getResource()` 拿到了一个对象，这里和上面 `commons-pool2` 工具中的 `borrowObject` 十分相似，继续追踪它的代码实现可以看到下面的代码。

```
// redis.clients.jedis.JedisPool
// public class JedisPool extends Pool<Jedis> {
public Jedis getResource() {
    Jedis jedis = (Jedis)super.getResource();
    jedis.setDataSource(this);
    return jedis;
}
// 继续追踪 super.getResource()
// redis.clients.jedis.util.Pool
public T getResource() {
    try {
        return super.borrowObject();
    } catch (JedisException var2) {
        throw var2;
    } catch (Exception var3) {
        throw new JedisException("Could not get a resource from the pool", var3);
    }
}
```

竟然看到了 `super.borrowObject()` ，多么熟悉的方法，继续分析代码可以发现 Jedis 对象池也是适用了 `commons-pool2` 工具作为实现。既然如此，那么 `jedis.close()` 方法的逻辑我们应该也可以猜到了，应该有一个归还的操作，查看代码发现果然如此。

```
// redis.clients.jedis.JedisPool
// public class JedisPool extends Pool<Jedis> {
public void close() {
    if (this.dataSource != null) {
        Pool<Jedis> pool = this.dataSource;
        this.dataSource = null;
        if (this.isBroken()) {
            pool.returnBrokenResource(this);
        } else {
            pool.returnResource(this);
        }
    } else {
        this.connection.close();
    }
}
// 继续追踪 super.getResource()
// redis.clients.jedis.util.Pool
public void returnResource(T resource) {
    if (resource != null) {
        try {
            super.returnObject(resource);
        } catch (RuntimeException var3) {
            throw new JedisException("Could not return the resource to the pool", var3);
        }
    }
}
```


通过上面的分析，可见 Jedis 确实使用了 `commons-pool2` 工具进行对象池的管理，通过分析 JedisPool 类的继承关系图也可以发现。

![JedisPool 继承关系](https://img.wdbyte.com/img/22/20220709231947.png?x-oss-process=style/1000px)

## [#](https://www.wdbyte.com/java/object-pool.html#_6-%E5%AF%B9%E8%B1%A1%E6%B1%A0%E6%80%BB%E7%BB%93) 6. 对象池总结

通过这篇文章的介绍，可以发现池化思想有几个明显的优势。

1. 可以显著的提高应用程序的性能。
2. 如果一个对象创建成本过高，那么使用池化非常有效。
3. 池化提供了一种对象的管理以及重复使用的方式，减少内存碎片。
4. 可以为对象的创建数量提供限制，对某些对象不能创建过多的场景提供保护。

但是使用对象池化也有一些需要注意的地方，比如归还对象时应确保对象已经被重置为可以重复使用的状态。同时也要注意，使用池化时要根据具体的场景**合理的设置池子的大小**，过小达不到想要的效果，过大会造成内存浪费。