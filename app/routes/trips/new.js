import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('trip');
  },

  setupController: function(controller, model){
    this._super(controller, model);
    controller.set('stations', this.store.find('station'));
  }
});
