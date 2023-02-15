import { mount } from '@vue/test-utils';

const App = require('@/util/Human');
test('human', function () {
  const wrapper = mount(App);
  console.log(wrapper.text());
});
