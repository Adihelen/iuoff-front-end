import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    let login;
    login = this.get('store').createRecord('login', {
      
    });
    return login;
  },
});
