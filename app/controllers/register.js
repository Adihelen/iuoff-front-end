import Ember from 'ember';
// TODO , add valitations on user, with cp-validation
export default Ember.Controller.extend({

  actions: {
    registerUser() {
      // todo check isValid
      if(this.get('model') && this.get('model.name') && this.get('model.email') && this.get('model.passaword') === this.get('model.passawordConfirmation')){

        let _passaword = btoa(this.get('model.passaword'));
        let _passawordConfirmation = btoa(this.get('model.passawordConfirmation'));        

        this.set('model.passaword',_passaword);
        this.set('model.passawordConfirmation',_passawordConfirmation);      

        this.get('model').save().then(() =>{         
          this.toast.success('usuário registrado com sucesso');
          this.transitionToRoute('home');
        }).catch((error) =>{          
          alert('ERRO ao registrar usuário');
          this.toast.success('usuário registrado com sucesso');
          console.error('ERRO: não foi possível registrar o usuário, erro: ', error);
        });
      } else {
        alert('Por favor preencha todos os campos marcados com *')
        console.error('ERRO formulário inválido');
      }
    }
  }
});
