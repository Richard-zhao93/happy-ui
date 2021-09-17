<template>
  <div>
    <h-button icon="loading" icon-position="left" :loading="true">
      按钮
    </h-button>

    <h-button icon="setting">
      按钮
    </h-button>

    <div style="margin-top: 20px;"></div>
    <h-button-group>
      <h-button icon="left">上一页</h-button>
      <h-button icon="right" iconPosition="right">下一页</h-button>
    </h-button-group>
  </div>
</template>

<script>
import Button from '../components/Button'
import Svg from '../components/Svg'
import ButtonGroup from '../components/ButtonGroup'
export default {
  components: {
    'h-button': Button,
    'h-svg': Svg,
    'h-button-group': ButtonGroup
  }
}
</script>

<style></style>
