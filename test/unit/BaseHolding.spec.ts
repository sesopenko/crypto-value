import { shallow } from '@vue/test-utils';

import BaseHolding from '@/components/BaseHolding.vue';

describe('BaseHolding.vue', () => {
  it('Renders the provided details', () => {
    const expectedCode = 'BTC';
    const expectedValue = 2.457;

    const wrapper = shallow(BaseHolding, {
      propsData: {
        code: expectedCode,
        value: expectedValue
      }
    });
    expect(wrapper.find('[data-test-holding-code]').text()).toContain(expectedCode);
    expect(wrapper.find('[data-test-holding-value]').text()).toContain('2.457');
  });
});