<template>
  <!-- <div class="h-button-cotainer"> -->
  <button
    class="h-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <!-- 图标 -->
    <h-svg
      v-if="icon"
      :name="icon"
      :class="[loading && icon === 'loading' ? 'icon loading' : 'icon']"
    ></h-svg>
    <!-- 插槽内容区域 -->
    <div class="h-button-content">
      <!-- 默认插槽 -->
      <slot></slot>
    </div>
    <div style="”clear:both”"></div>
  </button>
  <!-- </div> -->
</template>
<script>
import Svg from './Svg'
export default {
  name: 'HButton',
  components: {
    'h-svg': Svg
  },
  props: {
    icon: {},
    iconPosition: {
      // left / right
      type: String,
      default: 'left',
      // 属性检查器
      validator(value) {
        if (value !== 'left' && value !== 'right') {
          return false
        }
        return true
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.h-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  cursor: pointer;

  // 清除 inline- 产生的水平间隙问题
  // float: left;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    color: var(--border-hover-color);
    border-color: var(--border-hover-color);
  }
  &:active {
    color: var(--button-active-bg);
    border-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }

  // 设置图标靠左的样式
  > .h-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-left: 0;
    margin-right: 0.3em;
  }

  // 设置图标靠右的样式
  &.icon-right {
    > .h-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }

  .loading {
    animation: spin 1s infinite linear;
  }
}

// 清浮动
// .h-button-cotainer::after {
//   display: block;
//   content: '';
//   height: 0;
//   clear: both;
//   visibility: hidden;
// }
</style>
