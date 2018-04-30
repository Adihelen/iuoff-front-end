import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {

    let user;
    user = this.get('store').createRecord('user', {
      phoneIsWhatsapp: true
    });
    return user;
  },
});
