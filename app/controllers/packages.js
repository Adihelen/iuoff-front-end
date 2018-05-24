import Ember from "ember";

export default Ember.Controller.extend({
  // filtros
  store: Ember.inject.service("store"),

  queryParams: [
    "origin",
    "destination",
    "casal",
    "economy",
    "family",
    "confort",
    "friends",
    "xp", 
    "travelStyle",
    "numDias"
  ],

  menuItemExternal: true,

  origin: null,
  destination: null,

  numberOfFilters: 0,

  travelStyles: Ember.computed("", function() {
    let _travelStyles = [];
    if (this.get("model")) {
      _travelStyles = this.get("store").findAll("style");
    }
    return _travelStyles;
  }),

  filteredPackages: Ember.computed(
    "origin",
    "destination",
    "casal",
    "economy",
    "family",
    "confort",
    "friends",
    "xp",
    "travelStyle",
    "numDias",
    function() {
      let origin = this.get("origin");
      let destination = this.get("destination");
      let packages = this.get("model");

      // estilos de viagem
      let travelStyle =  this.get("travelStyle");

      let numDias =  this.get("numDias");

      if (origin) {
        // let _origin =  origin.toLowerCase();
        return packages.filterBy("origin", origin);
      } else if (origin && destination) {
        return packages.filterBy("origin", origin, "destination", destination);
      } else if (destination) {
        return packages.filterBy("destination", destination);
      } else if (travelStyle) {
        return packages.find((item ) => {
          item.styles.find((style) => {
            style.name.toLowerCase() === travelStyle.toLowerCase()
          })
        })
      } else if(numDias){
        return packages.filterBy("numDias", numDias);
      }
      else {
        return packages;
      }
    }
  ), 

  actions: {
    setTravelStyle(style){
      this.set('travelStyle', style);
    }
  }
});
