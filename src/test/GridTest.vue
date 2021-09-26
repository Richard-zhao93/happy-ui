<template>
  <div class="container">
    <h-row gutter="30">
      <h-col></h-col>
      <h-col></h-col>
      <h-col></h-col>
    </h-row>
    <h-row gutter="30">
      <h-col></h-col>
      <h-col></h-col>
      <h-col></h-col>
      <h-col></h-col>
    </h-row>
    <h-row>
      <h-col></h-col>
      <h-col></h-col>
      <h-col></h-col>
    </h-row>
  </div>
</template>

<script>
import Col from '../components/Col'
import Row from '../components/Row'
export default {
  components: {
    'h-col': Col,
    'h-row': Row
  }
}
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid red;
}
</style>
