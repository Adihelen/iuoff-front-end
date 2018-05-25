import Ember from 'ember';

export default Ember.Route.extend({
    model(params){        
        let packageDetail = this.get('store').findRecord('package', params.package_id);    
        return packageDetail;
    }
});
