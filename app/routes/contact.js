import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  test() {
    console.log('Clearing the model!')
    console.log(this)
    model.rollbackAttributes()
    console.log(model)
  }

});
