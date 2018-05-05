import Ember from 'ember';

export default Ember.Route.extend({

  model() {

    let user;
    user = this.get('store').createRecord('user', {
      address: [
       {
        street: '',
        cep: '',
        state: '',
        city: '',
        number: '',
        complement: ''
       }
        
      ]
    });
    return user;
  },
});
