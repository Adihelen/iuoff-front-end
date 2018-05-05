import attr from 'ember-data/attr';
import Fragment from 'ember-data-model-fragments/fragment';

export default Fragment.extend({
    street: attr('string'),
    cep: attr('string'),
    state: attr('string'),
    city: attr('string'),
    number: attr('string'),
    complement: attr('string')
});
