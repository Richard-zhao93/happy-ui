 /**
  * 输入框模块单元测试
  */

import Vue from 'vue';
import chai from 'chai';
import Input from '../src/components/input';

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

    let vm;
    afterEach(() => {
      vm.$destroy();
    });

    it('接收 value', () => {
      const ret = createCons({ value: '1' });
      vm = ret.vm;
      const inputElement = ret.inputElement;
      expect(inputElement.value).to.eql('1');
      vm.$destroy();
    });

    it('接收 disabled', () => {
      const ret = createCons({ disabled: true });
      vm = ret.vm;
      const inputElement = ret.inputElement;
      expect(inputElement.disabled).to.eql(true);
      vm.$destroy();
    });

    it('接收 readonly', () => {
      const ret = createCons({ readonly: true });
      vm = ret.vm;
      const inputElement = ret.inputElement;
      expect(inputElement.readOnly).to.eql(true);
      vm.$destroy();
    });
  });

  // 事件分组
  describe('event', () => {
    let vm;
    afterEach(() => {
      vm.$destroy();
    });

    const Constructor = Vue.extend(Input);

    it('支持 change / input / focus / blur 事件', () => {
      ['change', 'input', 'focus', 'blur']
      .forEach((eventName) => {
        vm = new Constructor().$mount();
        const cb = sinon.fake();

        vm.$on(eventName, cb);
        let event = new Event(eventName);
        let inputElement = vm.$el.querySelector('input');
        inputElement.dispatchEvent(event);
        cb.should.have.been.called;
      });
    });
  });
});