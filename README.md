# css 的 BEM 规范 之 scss mixin 沉淀

BEM 规范，[请阅读](https://www.w3cplus.com/blog/tags/325.html)

## b()

创建一个 block 块

```
@include b(page){
    content: "I'm page."
}
```

## e()

创建一个 element 元素

## m()

创建当前 `块` 或者 `元素` 的 modifier

## configurable-m()

在 `父级` 下创建当前 `块` 或者 `元素` 的 modifier

## meb()

当前元素下的 `块` 或者 `元素` 的 modifier

## when()

当前元素的 `状态`
