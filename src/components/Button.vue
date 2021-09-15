<template>
  <button class="h-button" :class="{ [`icon-${iconPosition}`]: true }">
    <!-- 图标 -->
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>

    <div class="content">
      <!-- 默认插槽 -->
      <slot></slot>
    </div>
  </button>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: 'h-button',
  props: [
    'icon',
    'iconPosition' // left / right
  ]
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

  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--border-hover-color);
  }
  &:active {
    border-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }

  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
}
</style>
