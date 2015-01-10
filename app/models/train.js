import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  line: DS.attr('string'),
  departureTime: DS.attr('date'),
  arrivalTime: DS.attr('date'),
  delay: DS.attr('number')
});
