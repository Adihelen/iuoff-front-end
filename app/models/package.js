import DS from 'ember-data';

import {
  //fragment,
  fragmentArray
  //array
} from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
  code: DS.attr('string'),
  title: DS.attr('string'),
  origin: DS.attr('string'),
  description: DS.attr('string'),
  initialAmount: DS.attr(''),
  initialPeriod: DS.attr('date'),
  finalPeriod: DS.attr('date'),
  validity: DS.attr('date'),
  destination: DS.attr('string'),
  includeds: fragmentArray('packages/includeds'), 
  styles: DS.attr('', {defaultValue: []}), 
  pictures: fragmentArray('packages/pictures'), 
  accommodations: DS.attr('', {defaultValue: []}), 
  services: fragmentArray('packages/services'), 
  status: DS.attr('boolean'), 
  numDias: DS.attr('number'),  // final period -  initial  period
  image: DS.attr('string')
});
