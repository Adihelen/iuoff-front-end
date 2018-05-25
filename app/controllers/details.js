import Ember from 'ember';

export default Ember.Controller.extend({

    packageTravelStyles: Ember.computed('model', function() {
        let _styles = [];
        if(this.get('model')){
            _styles =  this.get('model.styles').map((style)=> {
                return style;
            });
        }
        return  _styles;
    })
});
