import Ember from 'ember';
// import $ from  'jQuery';

export default Ember.Controller.extend({
    modalPackage: true,

    solicitacao: {},

    packageTravelStyles: Ember.computed('model', function() {
        let _styles = [];
        if(this.get('model')){
            _styles =  this.get('model.styles').map((style)=> {
                return style;
            });
        }
        return  _styles;
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
                    servicosInclusos: this.get('model.includeds'),                   
                    valorInicial: this.get('model.initialAmount'),
                    valorInicialTipo: '',
                    dataInicio: this.get('model.initialPeriod'), 
                    dataVolta: this.get('model.finalPeriod'),
                    isDetalhes: this.get('model.description'),
                    dataSolicitacao: this.get('today'),
                    
                });
                this.set('solicitacao', _solicitacao);
            } else {
                console.error('model não encontrada.');
            }
           
        }, 
        savePackage(){

        }, 
        addAccomodation(){

        },
        removeService(){

        }, 
        addService(){

        }
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
});
