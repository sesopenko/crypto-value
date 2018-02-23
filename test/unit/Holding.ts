import { shallow } from '@vue/test-utils';

import Holding from '@/components/Holding.vue';

describe('Holding.vue', () => {
  it('Renders the provided details', () => {
    const expectedName = 'bitcoin';
    const expectedValue = 2.457;

    const wrapper = shallow(Holding, {
      propsData: {
        name: expectedName,
        value: expectedValue
      }
    });
    expect(wrapper.find('[data-test-holding-name]').text()).toContain(expectedName);
    expect(wrapper.find('[data-test-holding-value]').text()).toContain('2.457');
  });
});