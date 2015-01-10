import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('trip');
  },
  beforeModel: function(){
    this.store.find('station'); // Load stations before trips
  },
  afterModel: function(trips) {
    var store = this.store;
    trips.forEach(function(trip){
      store.find('train', trip.get('trainsQuery')).then(function(data){
        trip.get('trains').pushObjects(data);
      });
    });
  }
});
