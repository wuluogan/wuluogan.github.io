给定一个实体类

```
@Data 
public class ReviewerRest { 
  private Long id; 
  private Long reviewerId; 
  private Bigdecimal price; 
  private LocalDate date; 
  private Integer rest; 
} 
```

## 将对象集合转成对象中某个属性的集合

```
List<ReviewerRest> list = new ArrayList<>(); 
List<Long> ids = list.stream().map(ReviewerRest::getId).collect(Collectors.toList()); 
```

## 将某个属性的集合转成对象集合

```
List<Long> ids = new ArrayList<>(); 
 
List<ReviewerRest> list = ids.stream().map(id -> { 
  ReviewerRest rest = new ReviewerRest(); 
  rest.setRest(1); 
  rest.setDate(LocalDate.now()); 
  rest.setReviewerId(1000L); 
  return rest; 
}).collect(Collectors.toList()); 
```

## 判断集合中是否有一个对象包含某个属性

```
boolean exist = list.stream().anyMatch(rest -> rest.getReviewerId().equals(1000L)); 
//...... allMatch 和 anyMatch 类似 
```

## 对集合中某个对象的属性求和

```
BigDecimal reduce = list.stream().map(ReviewerRest::getPrice).reduce(BigDecimal.ZERO, BigDecimal::add); 
```

## 集合转 Map （普通）

```
Map<Long, ReviewerRest> map = list.stream().collect(Collectors.toMap(ReviewerRest::getId, x -> x)); 
```

## 集合转 Map （key 存在重复）

当集合中 id 会存在重复时，上面那种方式会报错，此时需要指定重复时选用哪一个 value

```
Map<Long, ReviewerRest> map = list.stream().collect(Collectors.toMap(ReviewerRest::getId, x -> x, (before, after) -> after)); 
```

## 集合转 Map （value 存在 null 值）

当 value 存在 null 值时上面那种方式会报错，此时需要换一种写法

```
Map<Long, LocalDate> map = list.stream().collect(HashMap::new, (mapItem, item) -> mapItem.put(item.getId(), item.getDate()), HashMap::putAll); 
```

## 集合分组 转 Map

```
Map<Long, List<ReviewerRest>> map = list.stream().collect(Collectors.groupingBy(ReviewerRest::getId)); 
```

## 集合分区 转 Map

```
Map<Boolean, List<ReviewerRest>> map = list.stream().collect(Collectors.partitioningBy(r -> r.getRest() == 1)); 
```

## 集合分组个数统计

```
Map<Long, Long> map = list.stream().collect(Collectors.groupingBy(ReviewerRest::getId,Collectors.counting())); 
```

## 集合分组转某个属性集合

```
Map<Long, List<Integer>> map = list.stream().collect(Collectors.groupingBy(ReviewerRest::getId,Collectors.mapping(ReviewerRest::getRest,Collectors.toList()))); 
```

## 集合分组聚合查询最大元素

```
Map<Long, Optional<ReviewerRest>> map = list.stream().collect(Collectors.groupingBy(ReviewerRest::getReviewerId, Collectors.maxBy(Comparator.comparing(ReviewerRest::getDate)))); 
```

## 集合分组聚合求和

```
//目前只支持 int、double、long 
Map<Long, Long> map = list.stream().collect(Collectors.groupingBy(ReviewerRest::getReviewerId, Collectors.summingLong(ReviewerRest::getRest))); 
```

## 结语

这篇文章没什么好说的，也不算一篇文章，做个笔记吧。。。以后有用到的话直接过来 copy ......暂时只想起来这么多，后续用到其他再来更新~~