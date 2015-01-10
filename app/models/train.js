import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  line: DS.attr('string'),
  departureTime: DS.attr('string'),
  arrivalTime: DS.attr('string'),
  delay: DS.attr('number'),
});
