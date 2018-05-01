import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {  
  
    let packages = this.get('store').findAll('package');

    return packages;
  }
});
