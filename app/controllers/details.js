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

    actions: {
        tenhoInteresse(){
            $('#tenhoInteresseModal').modal('show');
            // this.set('modalPackage', true);
            let _solicitacao =  this.createRecord('solicitacoes', {
                code: this._randomString()
            });
            this.set('solicitacao', _solicitacao);
            console.log('solicitação: ', _solicitacao);
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
