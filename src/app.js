import Vue from "vue";
import ButtonTest from './test/ButtonTest.vue';
import InputTest from './test/InputTest.vue';
import GridTest from './test/GridTest.vue';
import CascaderTest from './test/CascaderTest.vue';

new Vue({
  el: "#app",
  components: {
    ButtonTest,
    InputTest,
    GridTest,
    CascaderTest
  }
})
