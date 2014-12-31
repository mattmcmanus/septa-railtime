import DS from 'ember-data';

var Trip = DS.Model.extend({
  startStation: DS.belongsTo('station'),
  stopStation: DS.belongsTo('station'),
  trains: DS.hasMany('train')
});

Trip.reopenClass({
  FIXTURES: [
    { id: 1, startStation: 1, stopStation: 2 }
  ]
});

export default Trip;
