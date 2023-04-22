import TableExample from './TableExample.vue';

import '../tailwind.css';
import '../assets/styles/index.css'

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Table example',
  component: TableExample,
};

export default meta;

export const Primary = {
  render: () => ({
    components: { TableExample },
    template: '<TableExample/>',
  }),
};
