 /**
  * 按钮模块单元测试
  */
import Vue from 'vue';
import chai from 'chai';
import Button from '../src/components/button';

Vue.config.productionTip = false;
Vue.config.devtools = false;

const expect = chai.expect

describe('Button', () => {
  /**
   * 测试 button 组件是否存在
   */
  it('存在.', () => {
    expect(Button).to.exist;
  });

  /**
   * button 图标显示测试
   */
  it('设置 icon.', () => {
    const Constructor = Vue.extend(Button);
    const buttonVm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    }).$mount();

    let useElement = buttonVm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.equal('#i-setting');
    buttonVm.$destroy();
  });

  /**
   * loading 图标测试
   */
  it('设置 loading.', () => {
    const Constructor = Vue.extend(Button);
    const buttonVm = new Constructor({
      propsData: {
        icon: 'loading',
        loading: true
      }
    }).$mount();

    const useElements = buttonVm.$el.querySelectorAll('use');
    expect(useElements.length).to.equal(1)
    const href = useElements[0].getAttribute('xlink:href');
    expect(href).to.equal('#i-loading');
    buttonVm.$destroy();
  });

  /**
   * 图标左侧默认显示测试
   */
  it('icon 的默认排列在左， order 为 1.', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);
    const buttonVm = new Constructor({
      propsData: {
        icon: 'left',
      }
    }).$mount(div);

    const icons = buttonVm.$el.querySelectorAll('svg');
    expect(getComputedStyle(icons[0]).order).to.eq('1');

    // 清除
    buttonVm.$el.remove();
    buttonVm.$destroy();
  })

  /**
   * 图标右侧显示测试
   */
  it('设置 iconPosition 为 right', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);
    const buttonVm = new Constructor({
      propsData: {
        icon: 'right',
        iconPosition: 'right'
      }
    }).$mount(div);

    const icons = buttonVm.$el.querySelectorAll('svg');
    expect(getComputedStyle(icons[0]).order).to.eq('2');

    // 清除
    buttonVm.$el.remove();
    buttonVm.$destroy();
  });

  /**
   * button点击事件触发测试
   */
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button);
    const buttonVm = new Constructor({
      propsData: {
        icon: 'setting',
      }
    }).$mount();

    // TODO:
    const cb = sinon.fake();
    buttonVm.$on('click', cb);
    buttonVm.$el.click();
    cb.should.have.been.called;
  })
});
 