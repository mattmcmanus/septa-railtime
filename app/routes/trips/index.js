import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('trip');
  },
  beforeModel: function(){
    this.store.find('station');
  }
});
