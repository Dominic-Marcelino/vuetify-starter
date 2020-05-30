/**
 * Submodule for the VueX state containing session Data
 * @see https://vuex.vuejs.org/guide/modules.html to learn about submodules
 */
const appInformationModule = {
  state: {
    version: process.env.VUE_APP_VERSION, // Build-version from package.json
  },

  mutations: {
    //
  },


  actions: {
    //
  },

  getters: {
    /**
     * Get the current notification state
     * @param  {Object} state  VueX module state
     * @return {Array}         Notification-Objects
     */
    appVersion(state) {
      return state.version;
    },
  },

};

export default appInformationModule;
