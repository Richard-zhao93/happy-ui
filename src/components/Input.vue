<template>
  <div class="h-input-container">
    <div class="h-input" :class="{ error }">
      <!-- 输入框 -->
      <input
        ref="input"
        type="text"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @change="handleChange($event)"
        @input="handleInput($event)"
        @focus="$emit('focus', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
      />

      <!-- 输入框图标 -->
      <div class="h-input-suffix" v-if="showClear">
        <h-svg name="clear" class="h-input-suffix-svg"></h-svg>
      </div>

      <!-- 覆盖在 svg 上的为了触发点击事件而存在的透明块 -->
      <div class="svg-to-click" @click="clickSvg" v-if="showClear"></div>
    </div>

    <!-- 错误提示 信息部分 TODO: -->
    <template v-if="error">
      <div class="errorMessage">
        <h-svg name="error"></h-svg>
        <span>{{ error }}</span>
      </div>
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
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    // 输入值
    value: {
      type: [String, Number],
      default: ''
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
    },
    // 是否可清空
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    nativeInputValue: {
      get: function() {
        return this.value === null || this.value === undefined
          ? ''
          : String(this.value)
      },
      set: function() {}
    },
    // 是否展示可清空图标
    showClear() {
      // TODO: 条件还需要完善，比如是否聚焦 focus
      return !!(this.clearable && !this.readonly && this.nativeInputValue)
    }
  },

  watch: {
    nativeInputValue() {
      this.setNativeInputValue()
    }
  },

  methods: {
    clickSvg() {
      console.log('click svg')
      this.clear()
    },

    // 输入事件触发
    handleInput($event) {
      // if ($event.target.value === this.nativeInputValue) return
      this.nativeInputValue = this.getInput().value
      this.$emit('input', $event.target.value)
      this.$nextTick(this.setNativeInputValue)
    },

    // change 事件触发
    handleChange($event) {
      this.$emit('change', $event.target.value)
    },

    // 获取输入框 DOM 对象
    getInput() {
      return this.$refs.input
    },

    // 同步输入框值
    setNativeInputValue() {
      const input = this.getInput()
      if (!input) return
      if (this.value === this.nativeInputValue) return
      input.value = this.nativeInputValue
    },

    // 清空输入框
    clear() {
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear')
    }
  },
  mounted() {
    this.setNativeInputValue()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assests/variable';

.h-input-container {
  .h-input {
    position: relative;
    width: 180px;
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > input {
      border-radius: $border-radius;
      border: 1px solid $border-color;
      color: $color;
      height: $height;
      line-height: $height;
      padding: 0 30px 0 15px;
      width: 100%;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.35);

      &::placeholder {
        color: $input-placeholder-color;
      }

      &:hover {
        border-color: $border-color-hover;
        cursor: pointer;
      }
      &:focus {
        border-color: $border-color-focus;
        outline: none;
      }
      &[disabled] {
        background-color: $button-bg-disabled;
        border-color: $border-color-disabled;
        color: $border-color-hover;
        cursor: not-allowed;
      }
    }

    // 后缀图标样式
    .h-input-suffix {
      position: absolute;
      height: 100%;
      right: 8px;
      top: 0;
      color: $border-color-hover;
      transition: all 0.3s;
      pointer-events: none;

      display: flex;
      align-items: center;
      z-index: 99999;

      // TODO:
      color: #c0c4cc;
      &:hover {
        color: #909399;
      }
    }

    // 错误样式
    &.error {
      > input {
        border-color: $red;
      }
    }

    .svg-to-click {
      width: $font-size;
      height: $font-size;
      position: absolute;
      right: 8px;
      cursor: pointer;
    }
  }
  // 错误信息样式
  .errorMessage {
    display: flex;
    align-items: center;
    color: $red;

    > span {
      font-size: 12px;
      padding-left: 5px;
    }
  }
}
</style>
