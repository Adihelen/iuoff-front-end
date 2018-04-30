import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  cellPhone: DS.attr('string'),
  phoneIsWhatsapp: DS.attr('boolean', {defaultValue: false}), // use x-toggle.
  passaword: DS.attr('number'),
  passawordConfirmation: DS.attr('number')

});
