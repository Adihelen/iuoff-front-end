import DS from 'ember-data';

export default DS.Model.extend({
    street: DS.attr('string'),
    cep: DS.attr('string'),
    state: DS.attr('string'),
    city: DS.attr('string'),
    number: DS.attr('string'),
    complement: DS.attr('string')
});
