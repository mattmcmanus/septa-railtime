import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: 'station',
  startChosen: false,
  stopChosen: false,

  actions: {
    selectStation: function(station) {
      if (!this.startChosen) {
        this.toggleProperty('startChosen');
        this.model.set('stationFrom', station);
      }
      else if (!this.stopChosen) {
        this.toggleProperty('stopChosen');
        this.model.set('stationTo', station);
      }
      if (this.startChosen && this.stopChosen) {
        this.model.save();
        this.transitionToRoute('trips.index');
      }
    }
  }
});
