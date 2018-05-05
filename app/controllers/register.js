import Ember from 'ember';
import firebase from 'firebase';

export default Ember.Controller.extend({
  // TODO começar a utlizar no .hbs canRegister,  add valitations on user, with cp-validation
  canRegister: Ember.computed('model', ()=>{
    let _canRegister = false;

    if(this.get('model') && this.get('model.name') && this.get('model.cellPhone') && this.get('model.phoneIsWhatsapp') && this.get('model.email') && this.get('model.passaword') === this.get('model.passawordConfirmation')){
      _canRegister = true;
    }
    return _canRegister;
  }),
  

  actions: {
    registerUser() {
     
      if(this.get('model') && this.get('model.name') && this.get('model.cellPhone') && this.get('model.phoneIsWhatsapp') && this.get('model.email') && this.get('model.passaword') === this.get('model.passawordConfirmation')){

        let _email =  this.get('model.email');
        let _passaword = btoa(this.get('model.passaword'));
        let _passawordConfirmation = btoa(this.get('model.passawordConfirmation'));        

        this.set('model.passaword',_passaword);
        this.set('model.passawordConfirmation',_passawordConfirmation);    
        
        firebase.auth().
         createUserWithEmailAndPassword(_email, _passaword).
         then(() => {

            this.get('model').save().then(() =>{         
              this.toast.success('usuário registrado com sucesso', 'SUCESSO');
              this.transitionToRoute('home');
            }).catch((error) =>{     
              this.toast.error('ao registrar usuário', 'ERRO');
              console.error('ERRO: não foi possível registrar o usuário, erro: ', error);
            });

         }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          this.toast.error('ao registrar usuário', 'ERRO');
          console.log('Erro ao  registrar usuário code: ', errorCode, ' Msg: ', errorMessage);
          // ...
        });
       
      } else {
        this.toast.error('Por favor preencha todos os campos marcados com *', 'ERRO');       
        console.error('ERRO formulário inválido');
      }
    }
  }
});
