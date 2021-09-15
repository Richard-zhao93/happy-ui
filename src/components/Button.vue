<template>
  <button class="h-button">按钮</button>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: 'h-button'
}
</script>

<style lang="scss" scoped>
.h-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);

  &:hover {
    border-color: var(--border-hover-color);
  }

  &:active {
    border-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}
</style>
