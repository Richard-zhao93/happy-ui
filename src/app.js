import Vue from "vue";
import Button from './components/Button.vue';
import Svg from './components/Svg.vue';

Vue.component('h-button', Button);
Vue.component('h-svg', Svg);

new Vue({
  el: "#app",
  components: {}
})