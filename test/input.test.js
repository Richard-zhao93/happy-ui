 /**
  * 输入框模块单元测试
  */

import Vue from 'vue';
import chai from 'chai';
import Input from '../src/components/Input.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

const expect = chai.expect;
describe('Input', () => {
  /**
   * 测试 Input 组件是否存在
   */
  it('存在.', () => {
    expect(Input).to.exist;
  });

  // props 分组
  describe('props', () => {
    const createCons = (props) => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: props
      }).$mount();

      const inputElement = vm.$el.querySelector('input');

      return {
        vm,
        inputElement
      };
    }

    it('接收 value', () => {
      const { vm, inputElement } = createCons({ value: '1' });
      expect(inputElement.value).to.eql('1');
      vm.$destroy();
    });

    it('接收 disabled', () => {
      const { vm, inputElement } = createCons({ disabled: true });
      expect(inputElement.disabled).to.eql(true);
      vm.$destroy();
    });

    it('接收 readonly', () => {
      const { vm, inputElement } = createCons({ readonly: true });
      expect(inputElement.readOnly).to.eql(true);
      vm.$destroy();
    })
  });
})