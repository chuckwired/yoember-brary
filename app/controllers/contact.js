import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  contactMessage: '',
  emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageIsValid: Ember.computed.gte('contactMessage.length', 5),

  // This can also be written as:
  // isNotDisabled: Ember.computed.and('emailIsValid', 'messageIsValid')
  isDisabled: Ember.computed('emailIsValid', 'messageIsValid', function() {
    return !(this.get('emailIsValid') && this.get('messageIsValid'))
  }),

  actions: {
    sendMessage() {
      this.set('confirmationMessage', `Thanks for your enquiry. We'll get back to you as soon as possible using this email address: ${this.get('emailAddress')}`)
      this.set('emailAddress', '');
      this.set('contactMessage', '');
    }
  }
});
