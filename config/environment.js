/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'iuoff-client',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    i18n: {
      defaultLocale: 'pt-BR'
    },
    firebase: {
      apiKey: "AIzaSyBKS674gkztNLv5QLxYnGquo9sxNmhkO5M",
      authDomain: "iuoff-fire.firebaseapp.com",
      databaseURL: "https://iuoff-fire.firebaseio.com",
      projectId: "iuoff-fire",
      storageBucket: "",
      messagingSenderId: "187560743950"
    }, 
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {
      enabled: false
    };    
    // ENV.apiNamespace = 'api';
  }

  if (environment === 'test') {
    // ENV['ember-cli-mirage'] = {
    //   enabled: true
    // };    
    // ENV.apiNamespace = 'api';

    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
  //  ENV['ember-cli-mirage'] = {
  //     enabled: false,
  //     excludeFilesFromBuild: true
  //   };
  //   ENV.apiHost = 'http://iuoff-api.com.br';
  //   ENV.apiNamespace = 'dashboard';
    
  }

  return ENV;
};
