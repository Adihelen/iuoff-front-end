import Ember from "ember";
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({

  store: Ember.inject.service("store"),
  
  filteredContent: Ember.computed.filterBy('content', 'isCompleted', false),

  filteredPackages: pagedArray('content', {perPage: 12}, function() {
      let packages = this.get('model');
      return packages;
    }
  ),

 

  menuItemExternal: true,

  travelStyles: Ember.computed("", function () {
    let _travelStyles = [];
    if (this.get("model")) {
      _travelStyles = this.get("store").findAll("style");
    }
    return _travelStyles;
  }),

  hasFilters: Ember.computed('queryParams', function () {
    let _hasfilters = false;
    if (this.get('queryParams')) {
      _hasfilters = true;
    }
    return _hasfilters;
  }),

  actions: {

    filterChanged() {

    },

    setTravelStyle(style) {
      this.set('travelStyle', style);
    },

    clearFilters() {
      this.set('origin', '');
      this.set('destination', '');
      this.set('travelStyle', '');
      this.set('numDias', '');
      this.set('title', '');
      this.set('initialAmount', '');
    }
  }
});
