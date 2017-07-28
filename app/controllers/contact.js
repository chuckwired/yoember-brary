import Ember from 'ember';

export default Ember.Controller.extend({

  emailIsValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
  messageIsValid: Ember.computed.gte('model.message.length', 5),

  // This can also be written as:
  isNotDisabled: Ember.computed.and('emailIsValid', 'messageIsValid'),
  // isDisabled: Ember.computed('emailIsValid', 'messageIsValid', function() {
  //   return !(this.get('emailIsValid') && this.get('messageIsValid'))
  // }),

  actions: {

    sendMessage(newMessage) {
      newMessage.save().then(response => {
        this.set(
          'confirmationMessage',
          `Thanks for your enquiry. We'll get back to you as soon as possible using this email address: ${this.model.get('email')}`
        )

        // TODO: empty the contact fields

        //debugging
        // this.set('model')
        console.log(`Got response: ${response}`)
        console.log(`model...`)
        console.log(this.model)
        // const blankModel = this.model() // i.e. the route/contact.js
        // this.set('model', blankModel)
        // this.reopen()
        // this.model.destroyRecord()
      });
    }
  }
});
