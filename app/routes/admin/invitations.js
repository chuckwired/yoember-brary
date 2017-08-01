import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('invitation');
  },

  actions: {

    deleteInvitation(invitation) {
      let confirmation = confirm(`Are you sure you want to delete invitation from ${invitation.get('email')}?`)
      confirmation ? invitation.destroyRecord() : {}
    }

  }

});
