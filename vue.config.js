
// add package version dynamically to env variables
// https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code
// IMPORTANT: only require "".version" of the package.json,
// as imprting the whole file would be an hige security issue
// (public list o used paackages --> easy to find vulnerabilities)
process.env.VUE_APP_VERSION = require('./package.json').version;

// vue.config.js
module.exports = {
  // options...

  pwa: {
    // TODO: own service-worker https://cli.vuejs.org/core-plugins/pwa.html#configuration
    workboxOptions: {
      // TODO // NOTE research if it's a such sustainable Solution
      // Skip waiting the lifetime of the old serviceWorker
      // and override it by the new one
      skipWaiting: true,
    },
  },
};
