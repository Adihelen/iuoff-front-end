import Ember from 'ember';

export function formatMoney(params/*, hash*/) {
  var numero = params[0].toFixed(2).split('.');
  numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}

export default Ember.Helper.helper(formatMoney);
