import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    origin: {
      refreshModel: true
    }, 
    destination: {
      refreshModel: true
    }
  },

  model: function(){  
    
    let packages = this.store.findAll('package');

    return packages;
  }
});
