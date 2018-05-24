import DS from 'ember-data';

export default DS.Model.extend({
    icon: DS.attr('string'), 
    name: DS.attr('string')
});
