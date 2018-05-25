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
    "numDias", 
    "title", 
    "initialAmount"
  ],

  menuItemExternal: true,

  title: null, 
  origin: null,
  destination: null,
  travelStyle: null,
  numDias: null,    
  initialAmount: null, 

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
    "title",
    "initialAmount", 
    function() {
      let packages = this.get("model");

      let title =  this.get('title');
      let origin = this.get("origin");
      let destination = this.get("destination");      
      let numDias =  parseInt(this.get("numDias"));
      let initialAmount =  parseFloat(this.get('initialAmount'));
      // // estilos de viagem
      let travelStyle =  this.get("travelStyle");        

    
      if(title) {
        var rxTitle = new RegExp(this.get('title'), 'gi');
        return packages.filter((item) => {
          return item.get('title').match(rxTitle)
        });
      }

      if(origin) {
        var rxOrigin = new RegExp(this.get('origin'), 'gi');
        return packages.filter((item) => {
          return item.get('origin').match(rxOrigin)
        });
      }

      if(destination) {
        var rxDestination = new RegExp(this.get('destination'), 'gi');
        return packages.filter((item) => {
          return item.get('destination').match(rxDestination)
        });
      }
    
      if(numDias) {        
        return packages.filterBy('numDias', numDias);
      }
      // initialAmount
      if(initialAmount) {
        return packages.filterBy('initialAmount', initialAmount);
      }


      // travel styles
      if(travelStyle) {
        var rxStyles = new RegExp(this.get('travelStyle'), 'gi');
        return packages.filter((item) => {
          return item.get('styles').map((style) => {
            // console.log('style to filter:', style, 'rx: ', style.match(rxStyles));
            return style.match(rxStyles); 
          })
        });
      }      



      return packages;
    
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
      this.set('title', null); 
      this.set('initialAmount', null);
    }
  }
});
