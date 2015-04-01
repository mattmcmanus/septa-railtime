import Ember from 'ember';
import DS from 'ember-data';

var Trip = DS.Model.extend({
  stationFrom: DS.belongsTo('station'),
  stationTo: DS.belongsTo('station'),
  trainsCount: DS.attr('number'),
  trains: DS.hasMany('train', { async: true }),

  trainsQuery: Ember.computed('stationFrom', 'stationTo', function() {
    return {
      req1: this.get('stationFrom.name'),
      req2: this.get('stationTo.name'),
      req3: this.get('trainsCount')
    };
  })
});

Trip.reopenClass({
  FIXTURES: [
    { id: 1, stationFrom: 90411, stationTo: 90006 }
  ]
});

export default Trip;
