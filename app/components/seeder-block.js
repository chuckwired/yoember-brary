import Ember from 'ember';

const MAX_VALUE = 100

export default Ember.Component.extend({

  counter: null,

  // TODO i want not empty AND <= MAX_VALUE
  isCounterValid: Ember.computed('counter', function() {
    let counterValue = this.get('counter')
    console.log(`THIS COUNTER IS: ${this.get('counter')}`)

    let notEmpty = Ember.computed.notEmpty(counterValue)
    let lte = counterValue <= 100
    return notEmpty && lte
  }),


  // isCounterValid: Ember.computed.lte('counter', MAX_VALUE),
  isCounterNotValid: Ember.computed.not('isCounterValid'),
  placeholder: `Maximum of ${MAX_VALUE}`,

  generateReady: false,
  deleteReady: false,

  generateInProgress: false,
  deleteInProgress: false,

  generateIsDisabled: Ember.computed.or('isCounterNotValid', 'generateInProgress', 'deleteInProgress'),
  deleteIsDisabled: Ember.computed.or('generateInProgress', 'deleteInProgress'),

  actions: {

    generateAction() {
      if (this.get('isCounterValid')) {

        this.sendAction('generateAction', this.get('counter'))
      }
    },

    deleteAction() {
      this.sendAction('deleteAction')
    }

  }

});
