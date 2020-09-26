import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const requireModules = require.context(
  './modules',
  true,
  /index\w+\.(ts)$/ 
)
console.log("require module", requireModules)
export default new Vuex.Store({
  modules: {

  }
});
