import Ember from 'ember';
// TODO , add valitations on user, with cp-validation
export default Ember.Controller.extend({

  actions: {
    registerUser() {

      if(this.get('model')){
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
        console.error('ERRO não encontrou o modelo de users');
      }
    }
  }
});
