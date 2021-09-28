<template>
  <div>
    <h-button>默认按钮</h-button>
    <h-button icon="setting">按钮</h-button>
    <h-button icon="setting" icon-position="right">按钮</h-button>
    <h-button icon="loading" :loading="true">按钮</h-button>

    <!-- 代码展示 -->
    <pre>
      <code>
        {{ content }}
      </code>
    </pre>
  </div>
</template>

<script>
import Button from '../../../src/components/Button'

export default {
  components: {
    'h-button': Button
  },
  data() {
    return {
      content: `
        <h-button>默认按钮</h-button>
        <h-button icon="setting">按钮</h-button>
        <h-button icon="setting" icon-position="right">按钮</h-button>
        <h-button icon="loading" :loading="true">按钮</h-button>
      `
    }
  }
}
</script>

<style></style>
