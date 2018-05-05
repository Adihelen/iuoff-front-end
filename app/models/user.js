import DS from 'ember-data';

import {  
  fragmentArray
} from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
  name: DS.attr('string'),
  cpf: DS.attr('string'),
  avatar: DS.attr('string', {defaultValue: ''}),
  email: DS.attr('string'),
  cellPhone: DS.attr('string'),
  phoneIsWhatsapp: DS.attr('boolean'),
  passaword: DS.attr('string'),
  passawordConfirmation: DS.attr('string') ,

  address: fragmentArray('users/address', {defaultValue: []})

});
