import DS from 'ember-data';

import {
  //fragment,
  fragmentArray
  //array
} from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
  title: DS.attr('string'), 
  code: DS.attr('string'),
  initialAmount: DS.attr(''),
  initialPeriod: DS.attr('date'),
  finalPeriod: DS.attr('date'),
  validity: DS.attr('date'),
  origin: DS.attr('string'),
  destination: DS.attr('string'),
  description: DS.attr('string'),
  includeds: fragmentArray('packages/includeds'), 
  styles: DS.attr('', {defaultValue: []}), 
  pictures: fragmentArray('packages/pictures'), 
  accommodations: DS.attr('', {defaultValue: []}), 
  services: fragmentArray('packages/services'), 
  status: DS.attr('boolean'), 
  numDias: DS.attr('number'),  // final period -  initial  period
  image: DS.attr('string')

});
