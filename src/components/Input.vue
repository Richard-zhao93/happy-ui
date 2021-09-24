<template>
  <div class="wrapper" :class="{ error }">
    <!-- 输入框 -->
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />

    <!-- 错误提示 信息部分 -->
    <template v-if="error">
      <h-svg name="error"></h-svg>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Svg from './Svg'
export default {
  name: 'HInput',
  components: {
    'h-svg': Svg
  },
  props: {
    // 输入值
    value: {
      type: String
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 错误信息
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$height: 40px;
$border-radius: 4px;
$color: #606266;
$border-color: #dcdfe6;
$border-color-hover: #c0c4cc;
$border-color-focus: #409eff;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f56c6c;

.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }

  > input {
    border-radius: $border-radius;
    border: 1px solid $border-color;
    color: $color;
    height: $height;
    line-height: $height;
    padding: 0 15px;
    // width: 100%;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.35);

    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      border-color: $border-color-focus;
      outline: none;
    }
    &[disabled] {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

  // 错误样式
  &.error {
    > input {
      border-color: $red;
    }
  }
  // 错误信息样式
  .errorMessage {
    color: $red;
  }
}
</style>
