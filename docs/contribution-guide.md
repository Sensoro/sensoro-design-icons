---
title: 贡献指南
order: 10
group:
  path: /
nav:
  title: 文档
  path: /docs
---

## 生成流程

通过运行命令

```sh
pnpm generate
```

开始 gulp 构建，整个构建流程如下

```
1. 清理之前生成的文件
2. 并行运行下列任务
  2.1 直接拷贝部分代码至 src 目录，例如辅助函数 helpers.ts、类型定义 types.ts
  2.2 生成 filled 主题风格的图标抽象节点
  2.3 生成 outlined 主题风格的图标抽象节点
  2.4 生成 twotone 主题风格的图标抽象节点
3. 并行运行下列任务
  3.1 生成入口文件 index.ts
  3.2 生成内联图标 inline-svg
  3.3 生成包含名字空间的内联图标 inline-namespaced-svg
4. 美化生成的代码
```

## 编译流程

通过运行命令

```sh
pnpm build
```

输出至 es、lib 目录

## 新增图标

首先确保图标符合以下设计上的要求：

1. 符合 [设计规格](https://ant.design/docs/spec/icon-cn#%E8%AE%BE%E8%AE%A1%E8%A7%84%E6%A0%BC) 的图标
1. 图标的 viewBox 为 0 0 1024 1024
2. 图标外围有预留 64px 的出血位

然后将需要新增的图标添加至 svg 目录下对应的主题风格目录中，即 filled, outlined, twotone 中的一个

运行目录下的 npm scripts

```sh
# 生成 ts 源文件至 src
pnpm generate

# 编译 src 文件至 es、lib
pnpm build
```

## 修改/删除图标

修改和删除跟新增图标类似，直接修改/删除 svg 目录下对应主题风格目录中的 .svg 图标即可
