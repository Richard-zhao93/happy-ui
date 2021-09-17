import Vue from "vue";
import ButtonTest from './test/ButtonTest.vue';
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
 import chai from 'chai';
 import spies from 'chai-spies';

 const expect = chai.expect
// 使用 spies 
 chai.use(spies);

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
  let spy = chai.spy(() => {
    console.log('button click');
  });
  // TODO:
  gButton.$on('click', spy);
  
  let button = gButton.$el;
  button.click();
  // 期待 spy 函数被执行
  expect(spy).to.have.been.called();

  // 清除
  gButton.$el.remove();
  gButton.$destroy();
}
