import Ember from 'ember';

export default Ember.Controller.extend({
 
  init: function () {

      Ember.run.later((function () {
        Ember.$('.umiw-launcher-container').click();
      }), 5000);
  }

});
