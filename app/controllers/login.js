import Ember from "ember";
import firebase from "firebase";

export default Ember.Controller.extend({
 
  actions: {
    login() {
      if (
        this.get("model") &&
        this.get("model.email") &&
        this.get("model.password")
      ) {
        let _email = this.get("model.email");
        let _passaword = this.get("model.password");        
      

        firebase
          .auth()
          .signInWithEmailAndPassword(_email, _passaword)
          .then(() => {                       
            if(_email === 'admin@teste.com'){
                            
              let host = window.location.origin;
              // todo mudar pra /admin
              window.location.replace(host + "/login");
            } else {
              this.transitionToRoute("home");              
            }
            this.toast.success("Bem-vindo", "IUOFF");
          })
          .catch(error => {
            let errorCode = error.code;
            let errorMessage = error.message;

            if (errorCode === "auth/wrong-password") {
              this.toast.error("Usuário ou senha inválidos", "ERRO");
            } else {
              this.toast.error("ao logar usuário", "ERRO");
            }

            error(
              "Erro ao  logar com usuário code: ",
              errorCode,
              " Msg: ",
              errorMessage
            );
          });
      } else {
        this.toast.error("usuários ou senha inválido", "ERRO");
      }
    }
  }
});
