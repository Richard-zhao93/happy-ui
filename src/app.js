import Vue from "vue";
import ButtonTest from './test/ButtonTest.vue';
import chai from 'chai'
import Button from './components/Button.vue';

new Vue({
  el: "#app",
  components: {
    ButtonTest
  }
})

/**
 * 单元测试
 */
 const expect = chai.expect

 /**
  * 按钮模块单元测试
  */
 /**
  * 按钮图标显示测试
  */
 {
   const Constructor = Vue.extend(Button);
   const button = new Constructor({
     propsData: {
       icon: 'setting'
     }
   });
 
   button.$mount()
   let useElement = button.$el.querySelector('use');
   let href = useElement.getAttribute('xlink:href');
   expect(href).to.eq('#i-setting')
   // 清除
   button.$el.remove();
   button.$destroy();
 }

 /**
  * loading 图标测试
  */
{
  const Constructor = Vue.extend(Button)
   const button = new Constructor({
     propsData: {
       icon: 'loading',
       loading: true
     }
   })

   button.$mount()
   let useElement = button.$el.querySelector('use')
   let href = useElement.getAttribute('xlink:href')
   expect(href).to.eq('#i-loading')
   // 清除
   button.$el.remove()
   button.$destroy()
}

/**
 * 图标右侧显示测试
 */
{
  const div = document.createElement('div');
  document.body.appendChild(div);

  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition:'right'
    }
  });

  button.$mount(div)
  let svg = button.$el.querySelector('svg');
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2');
  // 清除
  button.$el.remove();
  button.$destroy();
}

/**
 * 按钮点击事件触发测试
 */
{
  const div = document.createElement('div');
  document.body.appendChild(div);

  const Constructor = Vue.extend(Button);
  const gButton = new Constructor({
    propsData: {
      icon: 'setting'
    }
  });

  gButton.$mount(div);
  // TODO:
  gButton.$on('click', function() {
    console.log('button click');
  });
  
  let button = gButton.$el;
  button.click();

  // 清除
  // gButton.$el.remove();
  // gButton.$destroy();
}
