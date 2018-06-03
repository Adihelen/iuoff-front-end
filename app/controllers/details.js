import Ember from 'ember';
// import $ from  'jQuery';

export default Ember.Controller.extend({
    modalPackage: true,

    solicitacao: {},
    salvandoSolicitacao: false,

    packageTravelStyles: Ember.computed('model', function() {
        let _styles = [];
        if(this.get('model')){
            _styles =  this.get('model.styles').map((style)=> {
                return style;
            });
        }
        return  _styles;
    }),

    servicosInclusosComputed:  Ember.computed('model', function(){
        let _servicos =  [];
        if(this.get('model') && this.get('model.accommodations')){
            let _accomodations = this.get('model.accommodations').join(',');
            _servicos = _accomodations;
        }
        return _servicos;
    }),

    today:  Ember.computed('model', function() {
        return new Date().getFullYear()+"/"+new Date().getMonth()+"/"+new Date().getDay();
    }),
    actions: {
        tenhoInteresse(){
            // model  = package
            if(this.get('model')){
                let _solicitacao =  this.get('store').createRecord('solicitacoes', {
                    code: this._randomString(), 
                    pacoteCode: this.get('model.code'),
                    origem: this.get('model.origin'),
                    destino: this.get('model.destination'),
                    servicosInclusos: this.get('servicosInclusosComputed'),                   
                    valorInicial: this.get('model.initialAmount'),
                    valorInicialTipo: '',
                    dataInicio: this._formatDate(this.get('model.initialPeriod')), 
                    dataVolta: this._formatDate(this.get('model.finalPeriod')),
                    descricaoPacote: this.get('model.description'),
                    dataSolicitacao: this._formatDate(new Date()),
                    iswhatsapp: true,
                    agree: true,
                    profilename: "user",
                    userType: "user",
                    agent: "pacotes-site",
                    status: "aguardando-propostas"

                });
                this.set('solicitacao', _solicitacao);
            } else {
                console.error('model não encontrada.');
            }
           
        }, 
        salvarSolicitacao() {
            
            if(this.get('solicitacao')){
              this.set('salvandoSolicitacao', true);   
              this.get("solicitacao").save().then((solicitacao) => {          
                this.toast.success('solicitação criado com sucesso', 'SUCESSO');
                console.log("nova solicitação criada com sucesso id: ", solicitacao.id);
              }).catch((error) => {
                console.error("erro ao salvar solicitação", error);
                this.toast.error("Erro ao criar solicitação", "ERRO");
              }).finally(() =>{
                  this.set('salvandoSolicitacao', false);
                  $('#tenhoInteresseModal').modal('hide');
              });
            } else {
              this.toast.error("formulário incompleto", "ERRO");
            }
            
          }, 
    }, 
    _randomString() {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = 8;
        var randomstring = "";
        for (var i = 0; i < string_length; i++) {
          var rnum = Math.floor(Math.random() * chars.length);
          randomstring += chars.substring(rnum, rnum + 1);
        }
        return randomstring.toUpperCase();
      }, 

    _formatDate(date) {
        let _date =  "";
        let _dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
        if(date) {
            _date =  date.toLocaleString('pt-BR', _dateOptions);
        }
        return _date
    }
});
