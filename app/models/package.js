import DS from 'ember-data';

import {
  //fragment,
  fragmentArray
  //array
} from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
  title: DS.attr('string'), 
  code: DS.attr('string'),
  initialAmount: DS.attr('number'),
  initialPeriod: DS.attr('date'),
  finalPeriod: DS.attr('date'),
  validity: DS.attr('date'),
  origin: DS.attr('string'),
  destination: DS.attr('string'),
  includeds: fragmentArray('packages/includeds'), 
  styles: fragmentArray('packages/styles'), 
  pictures: fragmentArray('packages/pictures'), 
  accommodations: fragmentArray('packages/accommodations'), 
  services: fragmentArray('packages/services'), 
  status: DS.attr('boolean'), 
  numDias: DS.attr('number'),  // final period -  initial  period
  image: DS.attr('string', {defaultValue: 'https://iuoff-admin.azurewebsites.net/assets/app/media/img/pacotes/iuoff-thumb.jpeg'})

});
