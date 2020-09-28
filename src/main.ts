import 'reflect-metadata';
import Vue from 'vue';
// import * as Sentry from '@sentry/browser';
// import * as Integrations from '@sentry/integrations';
import * as _ from 'lodash';
// import 'material-design-icons-iconfont/disst/material-design-icons.css';
import Vuetify from 'vuetify/lib';
import App from './App.vue';
import router from './router';
import store from './store';
// import camelCase from 'lodash/camelCas
import 'vuetify/dist/vuetify.min.css';
// import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;
const requireComponent = require.context(
  // The relative path of the components folder
  './components/base',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/,
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = _.upperFirst(
    _.camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        ?.replace(/\.\w+$/, ''),
    ),
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig,
  );
});

Vue.use(Vuetify);

new Vue({
  router,
  store,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg',
    },
  }),
  render: (h) => h(App),
}).$mount('#app');
