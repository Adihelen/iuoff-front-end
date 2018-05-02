import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {  
  
    let packages = this.store.findAll('package');

    return packages;
  }
});
