import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';

import BaseDialog from '@/components/base/BaseDialog.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('BaseDialog.vue', () => {
  it('renders with ok button', async () => {
    const wrapper = shallowMount(BaseDialog, {
      localVue,
      propsData: { show: true, type: 'OK' }
    });
    await wrapper.vm.closeDialog();
    await localVue.nextTick();

    expect(wrapper.text()).toMatch('OK');
  });

  it('renders with continue button', async () => {
    const wrapper = shallowMount(BaseDialog, {
      localVue,
      propsData: { show: true, type: 'CONTINUE' }
    });
    await wrapper.vm.continueDialog();
    await localVue.nextTick();

    expect(wrapper.text()).toMatch('Continue');
  });

  it('renders with no action buttons and the close X', async () => {
    const wrapper = shallowMount(BaseDialog, {
      localVue,
      propsData: { show: true, showCloseButton: true }
    });
    await wrapper.vm.closeDialog();
    await localVue.nextTick();

    expect(wrapper.text()).toMatch('close');
  });

});
