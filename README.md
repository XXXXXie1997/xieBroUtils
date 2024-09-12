# xxxxxie 自用工具库

没什么好描述的，一切为了**早点下班**

人在公司身不由己，随缘更新

```
// 安装
npm install -s xie-bro-utils
```

## 分类

### local 本地存储

1. get(key)

获取并解析 `key` 为 `localStorage` 数据(如果有)

2. set(key,value)

将 `value` 存入 `localStorage`

### session 会话存储

1. get(key)

获取并解析 `key` 为 `sessionStorage` 数据(如果有)

2. set(key,value)

将 `value` 存入 `sessionStorage`

### array 数组

1. diff(oldArr,newArr,key?)

对比 `oldArr` 和 `newArr`,若传入 `key`，将按照对象数组处理，根据数组项的 `key` 进行对比，否则按照普通数组处理。

得到`{ intersection 交集, added 新增项, removed 删除项}`

### date 时间

1. format(date,formatStr)

将传入的时间转换为根据`formatStr`定义的格式（东八时区），默认为`YYYY-MM-DD HH:mm:ss`
