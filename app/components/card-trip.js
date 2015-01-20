import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card card-trip'],
  classNameBindings: ['stationsClasses'],

  stationsClasses: function(){
    if (this.trip) {
      return [
        'station-from-'+this.get('trip.stationFrom.name').dasherize(),
        'station-to-'+this.get('trip.stationTo.name').dasherize()
      ].join(' ');
    }
  }.property('trip.stationTo.name', 'trip.stationFrom.name'),
});
