import Ember from "ember";

export default Ember.Controller.extend({
  // filtros
  store: Ember.inject.service('store'),

  queryParams: ["origin", "destination"],

  menuItemExternal: true,

  origin: null,
  destination: null,


  numberofFilters:  0,

  travelStyles: Ember.computed('', function() {
    let _travelStyles = [];
    if(this.get('model')){
      _travelStyles =  this.get('store').findAll('style')
    }
    return _travelStyles;
  }),
  
  filteredPackages: Ember.computed(
    "model",
    "origin",
    "destination",
    function() {
      let origin = this.get("origin");
      let destination = this.get("destination");
      let packages = this.get("model");

      if (origin) {
        let _origin =  origin.toLowerCase();
        return packages.filterBy("origin", _origin);
      } else if (origin && destination) {
        return packages.filterBy("origin", origin, "destination", destination);
      } else if (destination) {
        return packages.filterBy("destination", destination);
      } else {        
        return packages;
      }
    }
  )
});
