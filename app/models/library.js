import DS from 'ember-data';

export default DS.Model.extend({
  // attribute properties
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),

  // validation properties
  isValid: Ember.computed.notEmpty('name')
});
