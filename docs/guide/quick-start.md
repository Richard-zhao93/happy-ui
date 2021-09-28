---
快速上手
---
# 快速上手
本节将介绍如何在项目中使用 Happy UI。

## 引入 Happy UI

### 完整引入
在 `main.js` 中写入以下内容：

```js
import Vue from 'vue';
import HappyUI from 'happy-ui-demo';
import 'happy-ui-demo/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(HappyUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
