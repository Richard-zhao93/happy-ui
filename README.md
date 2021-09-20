# Happy-UI

[![Build Status](https://app.travis-ci.com/Richard-zhao93/happy-ui.svg?branch=master)](https://app.travis-ci.com/Richard-zhao93/happy-ui)

> A Vue UI component library.

## 介绍

这是一个我在学习 Vue 过程中做的一个 Vue-UI 框架。

### 用户体验要素
可用性 > 易用性 > 美观

### 交互设计
1. 反馈性
2. 一致性
3. 可预测性

## 开始使用
### 安装
1. 添加 CSS 样式
  使用本框架前，请在 CSS 中开启 `border-box`
  ```
  * { box-sizing: border-box; }
  ```

2. 安装
```
 npm i --save happy-ui
```

3. 使用
```
import { Button, ButtonGroup, Svg} from 'happy-ui'
import 'happy-ui/dist/index.css'

export default {
  name: 'app',
  components: {
    Button, 
    ButtonGroup,
    Svg
  }
}
```

## 文档
