import DS from 'ember-data';

var Trip = DS.Model.extend({
  stationFrom: DS.belongsTo('station'),
  stationTo: DS.belongsTo('station'),
  trains: DS.hasMany('train')
});

Trip.reopenClass({
  FIXTURES: [
    { id: 1, stationFrom: 90411, stationTo: 90006 }
  ]
});

export default Trip;
