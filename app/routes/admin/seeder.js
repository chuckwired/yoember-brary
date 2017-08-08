import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      libraries: this.store.findAll('library'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('author')
    })
  },

  /*
   * Alternatively, you can set computed alias properties
   * in the controller. e.g.
   *
   * libraries: Ember.computed.alias('model.libraries')
   */
  setupController(controller, model) {
    controller.set('libraries', model.libraries),
    controller.set('books', model.books),
    controller.set('authors', model.authors)
  }

});
