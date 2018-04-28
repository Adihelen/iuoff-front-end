import Ember from 'ember';

export default Ember.Controller.extend({

  continue: true,

  actions: {
    continue(){
      this.toggleProperty('continue');
    }, 
    openModal(){
      $('#modal-oqtdb').modal('show');
    }
  }
});
