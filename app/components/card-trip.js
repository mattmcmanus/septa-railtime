import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card card-trip'],
  classNameBindings: ['stationsClasses'],

  stationsClasses: function(){
    if (this.trip) {
      return [
        'station-from-'+this.trip.get('stationFrom').get('name').dasherize(),
        'station-to-'+this.trip.get('stationTo').get('name').dasherize()
      ].join(' ');
    }
  }.property('trip.stationTo.name', 'trip.stationFrom.name'),
});
