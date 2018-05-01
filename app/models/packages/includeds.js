import attr from 'ember-data/attr';
import Fragment from 'ember-data-model-fragments/fragment';
// icon = https://icomoon.io/app/#/select  
export default Fragment.extend({
  name  : attr('string'),
  icon : attr('string')
});