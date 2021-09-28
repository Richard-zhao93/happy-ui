<template>
  <div class="cascader-item">
    {{ option.name }}

    <template v-if="option.children">
      <h-cascader-item
        v-for="item in option.children"
        :key="item.name"
        :option="item"
      ></h-cascader-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'HCascaderItem',
  props: {
    option: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.cascader-item {
  border: 1px solid red;
  margin: 15px;
}
</style>
