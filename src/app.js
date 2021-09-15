import Vue from "vue";
import Button from './components/button.vue';

// Vue.component('h-button', Button);

new Vue({
  el: "#app",
  components: { 
    'h-button': Button
  }
})