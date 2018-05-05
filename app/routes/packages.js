import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){  
    
    let packages = this.store.findAll('package');
    // console.log('packages from route: ', packages);
    let newPackage =  this.store.createRecord('package', {
      title: "Novo Pacote",
      initialAmount: 1500.00, 
      includeds: [
        {
          icon: "fa fa-home",
          name: "4 Diárias"
        }
      ]
    });

    newPackage =  this.store.createRecord('package', {
      title: "SP - Tokyo",
      initialAmount: 2150.00, 
      includeds: [
        {
          icon: "fa fa-smile",
          name: "15 Diárias"
        }
      ]
    });
    return packages;
  }
});
