<template>
  <div>
    <h-button icon="loading" icon-position="left" :loading="true">
      按钮
    </h-button>

    <h-button icon="setting">
      按钮
    </h-button>

    <h-svg name="download"></h-svg>
  </div>
</template>

<script>
import Button from '../components/Button'
import Svg from '../components/Svg'
export default {
  components: {
    'h-button': Button,
    'h-svg': Svg
  }
}
</script>

<style></style>
