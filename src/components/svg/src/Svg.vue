<template>
  <svg class="h-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import '../../../../assests/svg'
export default {
  name: 'HSvg',
  props: ['name']
}
</script>

<style lang="scss" scoped>
.h-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
