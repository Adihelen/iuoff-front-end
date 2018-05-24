import Ember from "ember";

export default Ember.Controller.extend({
  // filtros

  queryParams: ["origin", "destination"],

  menuItemExternal: true,

  origin: null,
  destination: null,


  numberofFilters:  0,
  
  filteredPackages: Ember.computed(
    "model",
    "origin",
    "destination",
    function() {
      let origin = this.get("origin");
      let destination = this.get("destination");
      let packages = this.get("model");

      if (origin) {
        return packages.filterBy("origin", origin);
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
