# 面试

## Java

### Java 基础

#### Java 面向对象有哪些特征
​		面向对象编程是利用类和对象编程的一种思想。万物可归类,类是对于世界事物的高度抽象，不同的事物之间有不同的关系，一个类自身与外界的封装关系，一个父类和子类的继承关系， 一个类和多个类的多态关系。万物皆对象，对象是具体的世界事物,面向对象的三大特征：封装，继承，多态。封装，封装说明一个类行为和属性与其他类的关系，低耦合，高内聚；继承是父类和子类的关系，多态说的是类与类的关系。

​		封装隐藏了类的内部实现机制，可以在不影响使用的情况下改变类的内部结构，同时也保护了数据。对外界而言它的内部细节是隐藏的，暴露给外界的只是它的访问方法。属性的封装：使用者只能通过事先定制好的方法来访问数据，可以方便地加入逻辑控制，限制对属性的不合理操作；方法的封装：使用者按照既定的方式调用方法，不必关心方法的内部实现，便于使用；便于修改，增强代码的可维护性。

​		继承是从已有的类中派生出新的类,新的类能吸收已有类的数据属性和行为，并能扩展新的能力。在本质上是特殊~一般的关系，即常说的is-a关系。子类继承父类，表明子类是一种特殊的父类,并且具有父类所不具有的一些属性或方法。从多种实现类中抽象出一个基类，使其具备多种实现类的共同特性，当实现类用`extends`关键字继承了基类(父类)后,实现类就具备了这些相同的属性。继承的类叫做子类(派生类或者超类)，被继承的类叫做父类(或者基类)。比如从猫类、狗类、虎类中可以抽象出一个动物类，具有和猫、狗、虎类的共同特性(吃、 跑、叫等)。Java通过`extends`关键字来实现继承，父类中通过`private`定义的变量和方法不会被继承，不能在子类中直接操作父类通过`private`定义的变量以及方法。继承避免了对一般类和特殊类之间共同特征进行的重复描述通过继承可以清晰地表达每一项共同特征所适应的概念范围，在一般类中定义的属性和操作适应于这个类本身以及它以下的每一层特殊类的全部对象。运用继承原则使得系统模型比较简练也比较清晰。 

​		相比于封装和继承，Java多态是三大特性中比较难的一个，封装和继承最后归结于多态，多态指的是类和类 的关系，两个类由继承关系，存在有方法的重写，故而可以在调用时有父类引用指向子类对象。多态必备三个要 素：继承，重写，父类引用指向子类对象。



#### ArrayList和LinkedList有什么区别

ArrayList和LinkedList都实现了List接口，他们有以下的不同点 ：

ArrayList是基于索引的数据接口，它的底层是数组。它可以以O(1)时间复杂度对元素进行随机访问。与此对应，LinkedList是以元素列表的形式存储它的数据，每一个元素都和它的前一个和后一个元素链接在一起，在这种情况 下，查找某个元素的时间复杂度是O(n)。 

相对于ArrayList，LinkedList的插入，添加，删除操作速度更快，因为当元素被添加到集合任意位置的时候，不需 要像数组那样重新计算大小或者是更新索引。 

LinkedList比ArrayList更占内存，因为LinkedList为每一个节点存储了两个引用，一个指向前一个元素，一个指向 下一个元素。 

也可以参考ArrayList vs. LinkedList。 

1) 因为 Array 是基于索引(index) 的数据结构，它使用索引在数组中搜索和读取数据是很快的。 Array 获取数据的 时间复杂度是 O(1)，但是要删除数据却是开销很大的，因为这需要重排数组中的所有数据。 

2) 相对于 ArrayList，LinkedList 插入是更快的。因为 LinkedList 不像 ArrayList 一样，不需要改变数组的大小， 也不需要在数组装满的时候要将所有的数据重新装入一个新的数组，这是 ArrayList 最坏的一种情况，时间复杂度 是 O(n)，而 LinkedList 中插入或删除的时间复杂度仅为 O(1)。 ArrayList 在插入数据时还需要更新索引(除了插入数组的尾部)。 

3) 类似于插入数据，删除数据时LinkedList 也优于 ArrayList 。 

4) LinkedList 需要更多的内存，因为 ArrayList 的每个索引的位置是实际的数据，而 LinkedList 中的每个节点中存 储的是实际的数据和前后节点的位置(一个 LinkedList 实例存储了两个值 : Node<E> first 和 Node<E> last 分别表示链表的其实节点和尾节点，每个 Node 实例存储了三个值 : E item，Node next，Node pre) 。 

什么场景下更适宜使用 LinkedList,而不用ArrayList 

1) 你的应用不会随机访问数据。因为如果你需要LinkedList中的第n个元素的时候,你需要从第一个元素顺序数到第n个数据,然后读取数据。 

2)你的应用更多的插入和删除元素，更少的读取数据。因为插入和删除元素不涉及重排数据，所以它要比ArrayList要快。



#### 高并发中的集合有哪些问题

**第一代线程安全集合类** 

Vector、Hashtabl

是怎么保证线程安排的：使用synchronized修饰方法 

缺点：效率低下 

**第二代线程非安全集合类** 

ArrayList、HashMap 

线程不安全，但是性能好，用来替代Vector、Hashtable 

使用ArrayList、HashMap,需要线程安全怎么办呢? 

使用 Collections.synchronizedList(list)；Collections.synchronizedMap(m); 

底层使用synchronized代码块锁，虽然也是锁住了所有的代码，但是锁在方法里边，并所在方法外边性能可以理解 为稍有提高吧。毕竟进方法本身就要分配资源的

**第三代线程安全集合类** 

在大量并发情况下如何提高集合的效率和安全呢? 

java.util.concurrent.* 

ConcurrentHashMap : 

CopyOnWriteArrayList : 

CopyOnWriteArraySet :  注意不是CopyOnWriteHashSet* 

底层大都采用Lock锁(1.8的ConcurrentHashMap不使用Lock锁),保证安全的同时，性能也很高。



#### JDK1.8的新特性有哪些

**一、接口的默认方法** 

Java 8允许我们给接口添加一个非抽象的方法实现，只需要使用 `default`关键字即可，这个特征又叫做扩展方法，示例如下 : 

代码如下 : 

```java
interface Formula { double calculate(int a); 
default double sqrt(int a) { return Math.sqrt(a); } } 
```

Formula接口在拥有calculate方法之外同时还定义了sqrt方法，实现了Formula接口的子类只需要实现一个 calculate方法，默认方法sqrt将在子类上可以直接使用。

代码如下 : 

```java
Formula formula = new Formula() { @Override public double calculateint a) { return sqrt(a * 100); } }; 
formula.calculate(100)// 100.0 
formula.sqrt(16); // 4.0 
```

文中的formula被实现为一个匿名类的实例，该代码非常容易理解，6行代码实现了计算 sqrt(a * 100)。在下一节 中,我们将会看到实现单方法接口的更简单的做法。 

注 : 在Java中只有单继承,如果要让一个类赋予新的特性，通常是使用接口来实现，在C++中支持多继承,允许一个子类同时具有多个父类的接口与功能，在其他语言中，让一个类同时具有其他的可复用代码的方法叫做mixin。新的Java 8的这个特新在编译器实现的角度上来说更加接近Scala的trait。 在C#中也有名为扩展方法的概念，允许给已存在的类型扩展方法，Java 8的这个在语义上有差别。



**二、Lambda 表达式** 

首先看看在老版本的Java中是如何排列字符串的 : 

代码如下 : 

```java
List<String> names = Arrays.asList("peterF", "anna", "mike", "xenia"); 

Collections.sort(namesnew Comparator<string>() { @Override public int compare(String aString b) { return b.compareTo(a); } }); 
```

只需要给静态方法 Collections.sort 传入一个List对象以及一个比较器来按指定顺序排列。通常做法都是创建一个 匿名的比较器对象然后将其传递给sort方法。 

在Java 8 中你就没必要使用这种传统的匿名对象的方式了，Java 8提供了更简洁的语法，lambda表达式 : 

代码如下 : 

```java
Collections.sort(names, (String aString b) -> { return b.compareTo(a); }); 
```

看到了吧,代码变得更段且更具有可读性,但是实际上还可以写得更短 : 

代码如下 : 

```java
Collections.sort(names, (String a, String b) -> b.compareTo(a));
```

对于函数体只有一行代码的,你可以去掉大括号{}以及return关键字,但是你还可以写得更短点 : 

代码如下 : 

```java
Collections.sort(names, ab) -> b.compareTo(a)); 
```

Java编译器可以自动推导出参数类型，所以你可以不用再写一次类型。接下来我们看看lambda表达式还能作出什 么更方便的东西来 : 

**三、函数式接口** 

Lambda表达式是如何在java的类型系统中表示的呢?每一个lambda表达式都对应一个类型，通常是接口类型。 而“函数式接口”是指仅仅只包含一个抽象方法的接口，每一个该类型的lambda表达式都会被匹配到这个抽象方 法。因为 默认方法 不算抽象方法，所以你也可以给你的函数式接口添加默认方法。 

我们可以将lambda表达式当作任意只包含一个抽象方法的接口类型，确保你的接口一定达到这个要求，你只需要 给你的接口添加 `@Functionallnterface` 注解，编译器如果发现你标注了这个注解的接口有多于一个抽象方法的时 候会报错的。 

示例如下 : 

代码如下 : 

```java
@Functionallnterface interface Converter<F, T> { T convert(F from); } Converter<String, Integer> converter = (from) -> Integer.valueOf(fromInteger converted = converter.convert("123"); 

System.out.println(converted)// 123 
```

需要注意如果`@Functionallnterface`如果没有指定,上面的代码也是对的。 

注： 将lambda表达式映射到一个单方法的接口上，这种做法在Java 8之前就有别的语言实现，比如Rhino JavaScript解释器，如果一个函数参数接收一个单方法的接口而你传递的是一个function，Rhino 解释器会自动做 一个单接口的实例到function的适配器，典型的应用场景有 org.w3c.dom.events.EventTarget 的addEventListener 第二个参数 EventListener。

**四、方法与构造函数引用** 

前一节中的代码还可以通过静态方法引用来表示 : 

代码如下 :

```java
Converter<StringInteger> converter = Integer::valueOf; Integer converted = converter.convert("123"); 
System.out.println(converted)// 123 
```

Java 8 允许你使用 `::` 关键字来传递方法或者构造函数引用，上面的代码展示了如何引用一个静态方法，我们也可 以引用一个对象的方法 : 

代码如下 : 

```java
converter = something::startsWith; String converted = converter.convert("Java"); System.out.println(converted); // "J" 
```

接下来看看构造函数是如何使用`::`关键字来引用的，首先我们定义一个包含多个构造函数的简单类 : 

代码如下 : 

```java
class Person { String firstName; String lastName; Person() {} Person(String firstNameString lastName) { this.firstName = firstName; this.lastName = lastName; }} 
```

接下来我们指定一个用来创建Person对象的对象工厂接口 : 

代码如下 : 

```java
interface PersonFactory<P extends Person> { Pcreate(String firstName, String lastName); } 
```

这里我们使用构造函数引用来将他们关联起来,而不是实现一个完整的工厂 :

代码如下 : 

```java
PersonFactory<Person> personFactory = Person : new; Person person = personFactory.create("Peter", "Parker"); 
```

我们只需要使用 `Person : new` 来获取Person类构造函数的引用，Java编译器会自动根据PersonFactory.create方 法的签名来选择合适的构造函数。 

**五、Lambda 作用域** 

在lambda表达式中访问外层作用域和老版本的匿名对象中的方式很相似。你可以直接访问标记了final的外层局部 变量，或者实例的字段以及静态变量。 

**六、访问局部变量** 

我们可以直接在lambda表达式中访问外层的局部变量 : 

代码如下 : 

```java
final int num = 1; Converter<Integer, String> stringConverter = (from) -> String.valueOf(from + num); stringConverter.convert(2); // 3 
```

但是和匿名对象不同的是,这里的变量num可以不用声明为final,该代码同样正确 : 

代码如下 : 

```java
int num = 1; Converter<Integer, String> stringConverter = (from) -> String.valueOf(from + num); stringConverter.convert(2); // 3 
```

不过这里的num必须不可被后面的代码修改(即隐性的具有final的语义)，  例如下面的就无法编译 : 

代码如下 :

```java
int num = 1; Converter<IntegerString> stringConverter = (from) -> String.valueOf(from + num); num = 3; 
```

在lambda表达式中试图修改num同样是不允许的。 

**七、访问对象字段与静态变量** 

和本地变量不同的是，lambda内部对于实例的字段以及静态变量是即可读又可写。该行为和匿名对象是一致的 : 代码如下 : 

```java
class Lambda4 { static int outerStaticNum; int outerNum; void testScopes() { Converter<Integer, String> stringConverter1 = (from) -> { outerNum = 23; return String.valueOf(from; }; Converter<Integer, String> stringConverter2 = (from) -> { outerStaticNum = 72; return String.valueOf(from); }; } } 
```

**八、访问接口的默认方法** 

还记得第一节中的formula例子么，接口Formula定义了一个默认方法sqrt可以直接被formula的实例包括匿名对 象访问到，但是在lambda表达式中这个是不行的。 Lambda表达式中是无法访问到默认方法的,以下代码将无法 编译 : 

代码如下 : 

```java
Formula formula = (a) -> sqrt( a * 100)
Built-in Functional Interfaces 
```

JDK 1.8 API包含了很多内建的函数式接口，在Java中常用到的比如Comparator或者Runnable接口这些接口 都增加了`@FunctionalInterface`注解以便能用在lambda上。Java 8 API同样还提供了很多全新的函数式接口来让 工作更加方便,有一些接口是来自Google Guava库里的,即便你对这些很熟悉了,还是有必要看看这些是如何扩展到lambda上使用的。 

***Predicate 接口***

Predicate 接口只有一个参数，返回boolean类型。该接口包含多种默认方法来将Predicate组合成其他复杂的逻辑 (比如 : 与,或,非) : 

代码如下 : 

```java
Predicate<String> predicate = (s)->s.length() > 0; 
predicate.test("foo"); // true 
predicate.negate().test("foo"); // false 
Predicate<Boolean> nonNull = Objects::nonNull; Predicate<Boolean> isNull = Objects::isNull; 
Predicate<String> isEmpty = String::isEmpty; Predicate<string> is NotEmpty = isEmpty.negate(); 
```

***Function 接口***

Function 接口有一个参数并且返回一个结果,并附带了一些可以和其他函数组合的默认方法(composeandThen) : 代码如下 : 

```java
Function<String, Integer>toInteger = Integer::valueOf; Function<String, String> backToString = tolnteger.andThen(String::valueOf); backToString.apply("123"); // "123" 
```

***Supplier 接口*** 

Supplier 接口返回一个任意范型的值,和Function接口不同的是该接口没有任何参数 

代码如下 : 

```java
Supplier<Person> personSupplier = Person::new; 
personSupplier.get(); // new Persp
```

***Consumer 接口*** 

Consumer 接口表示执行在单个参数上的操作。 

代码如下 : 

```java
Consumer<Person> greeter = (p) -> System.out.println("Hello, " + p.firstName)greeter.accept(new Person("Luke", "Skywalker")); 
```

***Comparator 接口*** 

Comparator 是Java中的经典接口,Java 8在此之上添加了多种默认方法 : 

代码如下 : 

```java
Comparator<Person> comparator = (p1,p2) -> p1.firstName.compareTo(p2.firstName); 
Person p1 = new Person("John", "Doe"); 
Person p2 = new Person("Alice", "Wonderland"); 
comparator.compare(p1,p2); // > 0 
comparator.reversed().compare(p1,p2); // < 0 
```

**Optional 接口** 

Optional 不是函数是接口,这是个用来防止NullPointerException异常的辅助类型,这是下一届中将要用到的重 要概念,现在先简单的看看这个接口能干什么 : 

Optional 被定义为一个简单的容器,其值可能是null或者不是null。在Java 8之前一般某个函数应该返回非空对象 但是偶尔却可能返回了null,而在Java 8中,不推荐你返回null而是返回Optional。

代码如下 : 

```java
Optional<String> optional = Optional.of("bam"); 
optional.isPresent(); // true 
optional.get(); // "bam" 
optional.or Else("fallback"); //"bam"
optional.ifPresent((s) -> System.out.println(s.charAt(0))); // "b" 
```

***Stream 接口*** 

java.util.Stream 表示能应用在一组元素上一次执行的操作序列。Stream 操作分为中间操作或者最终操作两种, 最终操作返回一特定类型的计算结果,而中间操作返回Stream本身,这样你就可以将多个操作依次串起来。 

Stream 的创建需要指定一个数据源,比如java.util.Collection的子类List或者SetMap不支持。Stream的操 作可以串行执行或者并行执行。 

首先看看Stream是怎么用,首先创建实例代码的用到的数据List : 

代码如下 : 

```java
List<String> stringCollection = new ArrayList<>(); 
stringCollection.add("ddd2"); 
stringCollection.add("aaa2"); 
stringCollection.add("bbb1")
stringCollection.add("aaa1");
stringCollection.add("bbb3"); 
stringCollection.add("ccc"); 
stringCollection.add("bbb2"); 
stringCollection.add("ddd1'); 
```

Java 8扩展了集合类,可以通过 Collection.stream() 或者 Collection.parallelStream() 来创建一个Stream。下面 几节将详细解释常用的Stream操作 : 

***Filter 过滤*** 

过滤通过一个predicate接口来过滤并只保留符合条件的元素,该操作属于中间操作,所以我们可以在过滤后的结 果来应用其他Stream操作(比如forEach)。 forEach需要一个函数来对过滤后的元素依次执行。forEach是一个 最终操作,所以我们不能在forEach之后来执行其他Stream操作。 

代码如下 : 

```java
stringCollection.stream().filter((s)-> s.startsWith("a")).forEach(System.out::println); //"aaa2", "aaa1" 
```

***Sort 排序*** 

排序是一个中间操作,返回的是排序好后的Stream。如果你不指定一个自定义的Comparator则会使用默认排 序。 代码如下 : 

```java
stringCollection .stream().sorted().filter((s) -> s.startsWith("a")) forEach(System.out::println); // "aaa1", "aaa2" 
```

需要注意的是,排序只创建了一个排列好后的Stream,而不会影响原有的数据源,排序之后原数据 stringCollection是不会被修改的 : 

代码如下 : 

```java
System.out.println(stringCollection); // ddd2, aaa2, bbb1 aaa1 bbb3 ccc bbb2 ddd1 
```

***Map 映射*** 

中间操作map会将元素根据指定的Function接口来依次将元素转成另外的对象,下面的示例展示了将字 符串转换为大写字符串。你也可以通过map来讲对象转换成其他类型,map返回的Stream类型是根据你map传递 进去的函数的返回值决定的。 

代码如下 : 

```java
stringCollection.stream().map(String::toUpperCase) .sorted((ab) -> b.compareTo(a)) .forEach(System.out::println); // "DDD2", "DDD1""CCC""BBB3""BBB2", "AAA2""AAA1" 
```

