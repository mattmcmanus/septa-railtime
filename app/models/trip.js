import DS from 'ember-data';

export default DS.Model.extend({
  startStation: DS.belongsTo('station'),
  stopStation: DS.belongsTo('station'),
  trains: DS.hasMany('train')
});
