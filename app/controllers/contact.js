import Ember from 'ember';

export default Ember.Controller.extend({

  // Data
  email: '',
  message: '',

  // Validation
  emailIsValid: Ember.computed.match('email', /^.+@.+\..+$/),
  messageIsValid: Ember.computed.gte('message.length', 5),
  detailsValid: Ember.computed.and('emailIsValid', 'messageIsValid'),

  // UI States
  isDisabled: Ember.computed.not('detailsValid'),

  actions: {

    sendMessage() {
      const email = this.get('email')
      const message = this.get('message')
      const newContact = this.store.createRecord('contact', { email: email, message: message });

      newContact.save().then(response => {

        console.log(`Saved with ID: ${response.get('id')}`)

        this.setProperties({
          confirmationMessage: `Thanks for your enquiry. We'll get back to you as soon as possible using this email address: ${this.get('email')}`,
          email: '',
          message: ''
        })

      });
    }
  }
});
