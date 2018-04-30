import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    let login;
    login = this.get('store').createRecord('login', {
      
    });
    return login;
  },
});
