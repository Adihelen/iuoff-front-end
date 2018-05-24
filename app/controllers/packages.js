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
  travelStyle: null,
  numDias: null,    

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

      let numDias =  parseInt(this.get("numDias"));

      if (origin) {
        // let _origin =  origin.toLowerCase();
        return packages.filterBy("origin", origin);
      } else if (origin && destination) {
        return packages.filterBy("origin", origin, "destination", destination);
      } else if (destination) {
        return packages.filterBy("destination", destination);
      } else if (travelStyle) {
        let filteredStyles =  [];
        filteredStyles  = this.get('model').forEach((element) => {
        element.get('styles').forEach((style) => {
          return style === travelStyle
        })
       });
         
        return packages.filterBy('styles', filteredStyles);

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
    }, 
    clearFilters(){      
      this.set('origin', null);  
      this.set('destination', null);  
      this.set('travelStyle', null);  
      this.set('numDias', null);      
    }
  }
});
