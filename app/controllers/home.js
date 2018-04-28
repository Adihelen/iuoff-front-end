import Ember from 'ember';

export default Ember.Controller.extend({

  continue: true,

  actions: {
    continue(){
      this.toggleProperty('continue');
    }, 
    // #TODO, abrir modal de solicitação: passo 3 e 4
    openModal(){
      alert('continuar');
    }
  }
});
