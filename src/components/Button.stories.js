import {QBtn} from 'quasar';

import '../tailwind.css';
import '../assets/styles/index.css'

export default {
    title: 'Button example',
    component: QBtn,
  };


export const Primary = {
    render: () => ({
      components: { QBtn },
      template: '<QBtn color="primary">I am primary</QBtn>',
    }),
  };

