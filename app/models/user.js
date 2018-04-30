import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cpf: DS.attr('string'),
  email: DS.attr('string'),
  cellPhone: DS.attr('string'),
  phoneIsWhatsapp: DS.attr('boolean'),
  passaword: DS.attr('string'),
  passawordConfirmation: DS.attr('string') 

});
