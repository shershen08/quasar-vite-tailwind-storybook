import { setup } from '@storybook/vue3';
import { Quasar } from 'quasar';

setup((app) => {
  app.use(Quasar, {});
});

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

import '../src/tailwind.css';
import '../src/assets/styles/index.css'

export default preview;
