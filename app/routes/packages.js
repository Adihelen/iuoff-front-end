import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    origin: {
      refreshModel: true
    }, 
    destination: {
      refreshModel: true
    }, 
    casal: {
      refreshModel: true
    }, 
    economy: {
      refreshModel: true
    }, 
    family: {
      refreshModel: true
    }, 
    confort: {
      refreshModel: true
    },
    friends: {
      refreshModel: true
    }, 
    xp: {
      refreshModel: true
    }, 
    numDias: {
      refreshModel: true
    }

  },

  actions: {
    // willTransition: function(transition) {
    //   this.controller.set('origin').clear();
    //   this.controller.set('destination').clear();
    // }
  },

  model: function(){  
    
    let packages = this.store.findAll('package');

    return packages;
  }
});
