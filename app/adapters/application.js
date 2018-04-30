import DS from 'ember-data';
import config from 'iuoff-client/config/environment';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host: config.apiHost,
  namespace: config.apiNamespace,
  // modalService: Ember.inject.service("modal-service"),

  pathForType: function (type) {
    var dasherized = Ember.String.dasherize(type);
    return Ember.String.pluralize(dasherized);
  },

  headers: Ember.computed(function () {
    let headers;
    if (document.cookie && document.cookie.match(/userToken\=([^;]*)/)) {
      headers = { "User-Token": Ember.get(document.cookie.match(/userToken\=([^;]*)/), "1") };
    }
    return headers;
  }),

  // handleResponse(status) {

  //   if (401 === status || 403 === status) {
  //     if (this.get("modalService")) {
  //       this.get("modalService").showUnauthorizedAlert();
  //     }
  //   }

  //   return this._super(...arguments);
  // }

});
