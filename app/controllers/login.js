import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login() {

      if(this.get('model') && this.get('model.email') && this.get('model.password')){
        this.get('model').save().then(() =>{         
          this.toast.success('Bem-vindo a IUOFF', 'SUCESSO'); 
          this.transitionToRoute('profile');         
        }).catch((error) =>{     
          this.toast.error('erro logar com usuário', 'ERRO');
          console.error('ERRO: não foi possível logar com este usuário, erro: ', error);
        });       
      } else {
        this.toast.error('usuários ou senha inválido', 'ERRO');     
      }
    }
  }
});
