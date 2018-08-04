import Ember from "ember";
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  // filtros
  store: Ember.inject.service("store"),
  
  queryParams: ["page", "perPage"],
  page: 1,
  perPage: 10,

  filteredContent: Ember.computed.filterBy('content', 'isCompleted', false),
  
  filteredPackages: pagedArray('content',
    function () {
      let packages = this.get("model");
      return packages;
    }
  ), 
  
  page: Ember.computed.alias("filteredPackages.page"),
  perPage: Ember.computed.alias("filteredPackages.perPage"),
  totalPages: Ember.computed.oneWay("filteredPackages.totalPages"),

  menuItemExternal: true,

  travelStyles: Ember.computed("", function() {
    let _travelStyles = [];
    if (this.get("model")) {
      _travelStyles = this.get("store").findAll("style");
    }
    return _travelStyles; 
  }),

  hasFilters: Ember.computed('queryParams', function(){
    let _hasfilters = false;
    if(this.get('queryParams')){
      _hasfilters =  true;
    }
    return _hasfilters;
  }),


  actions: {

    setTravelStyle(style) {
      this.set('travelStyle', style);
    },

    clearFilters(){      
      this.set('origin', null);  
      this.set('destination', null);  
      this.set('travelStyle', null);  
      this.set('numDias', null);      
      this.set('title', null); 
      this.set('initialAmount', null);
    }
  }
});
