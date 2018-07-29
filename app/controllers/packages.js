import Ember from "ember";

export default Ember.Controller.extend({
  // filtros
  store: Ember.inject.service("store"),
  
  queryParams: [
    "title",
    "origin",
    "destination",
    "numDias",
    "initialAmount",
    "travelStyle"
  ],

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

  filteredPackages: Ember.computed(
    "title",
    "origin",

    function() {

      let packages = this.get("model");

      let title = this.get('title');

      if (title) {
        var rxTitle = new RegExp(title, 'gi');
        return packages.filter((item) => {
          return item.get('title').match(rxTitle)
        });
      }
  
      return packages;
    }
  ), 

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
