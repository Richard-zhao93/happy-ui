<template>
  <div class="demo">
    <!-- <h-container class="h-container">
      <h-header class="h-header">Header</h-header>
      <h-main class="h-mian">Main</h-main>
      <h-footer class="h-footer">Footer</h-footer>
    </h-container> -->

    <!-- <h-container class="h-container">
      <h-aside class="h-aside">Aside</h-aside>
      <h-main class="h-mian">Main</h-main>
    </h-container> -->

    <!-- <h-container class="h-container">
      <h-header class="h-header">Header</h-header>
      <h-container>
        <h-aside class="h-aside">Aside</h-aside>
        <h-main class="h-mian">Main</h-main>
      </h-container>
    </h-container> -->

    <!-- <h-container class="h-container">
      <h-header class="h-header">Header</h-header>
      <h-container>
        <h-aside class="h-aside">Aside</h-aside>
        <h-container>
          <h-main class="h-mian">Main</h-main>
          <h-footer class="h-footer">Footer</h-footer>
        </h-container>
      </h-container>
    </h-container> -->

    <h-container class="h-container">
      <h-aside class="h-aside">Aside</h-aside>
      <h-container>
        <h-header class="h-header">Header</h-header>
        <h-main class="h-mian">Main</h-main>
        <h-footer class="h-footer">Footer</h-footer>
      </h-container>
    </h-container>
  </div>
</template>

<script>
import Container from '../components/Container'
import Header from '../components/Header'
import Aside from '../components/Aside'
import Main from '../components/Main'
import Footer from '../components/Footer'
export default {
  components: {
    'h-container': Container,
    'h-header': Header,
    'h-aside': Aside,
    'h-main': Main,
    'h-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
.demo {
  border: 1px solid red;
  text-align: center;

  .h-container {
    height: 100vh;
  }

  .h-header {
    background-color: #ccc;
    height: 60px;
    line-height: 60px;
  }

  .h-aside {
    // line-height: 200px;
    background-color: #d3dce6;
  }

  .h-footer {
    background-color: #999;
    height: 60px;
    line-height: 60px;
  }
}
</style>
