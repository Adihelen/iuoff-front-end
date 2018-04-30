import Ember from 'ember';
// TODO , add valitations on user, with cp-validation
export default Ember.Controller.extend({

  actions: {
    registerUser() {
      // todo check isValid
      if(this.get('model') && this.get('model.name') && this.get('model.email') && this.get('model.passaword') === this.get('model.passawordConfirmation')){
        this.get('model').save().then(() =>{
          // usar toastr
          alert('SUCESSO ! usuário registrado com sucesso');
          this.transitionToRoute('home');
        }).catch((error) =>{
          // usar toastr
          alert('ERRO ao registrar usuário');
          console.error('ERRO: não foi possível registrar o usuário, erro: ', error);
        });
      } else {
        alert('Por favor preencha todos os campos marcados com *')
        console.error('ERRO formulário inválido');
      }
    }
  }
});
