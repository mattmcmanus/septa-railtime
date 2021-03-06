import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['card card-station'],
  classNameBindings: ['isActive:active', 'stationClassName'],

  isActive: false,

  stationClassName: Ember.computed('station.name', function(){
    return (this.station) ?
      'station-'+this.station.get('name').dasherize()
      : false;
  }),

  click: function() {
    this.toggleProperty('isActive');
    this.sendAction('action', this.get('station'));
  },
});
