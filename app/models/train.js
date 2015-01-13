import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  line: DS.attr('string'),
  departureTime: DS.attr('date'),
  arrivalTime: DS.attr('date'),
  delay: DS.attr('number'),

  departsIn: function(){
    var actualDepartureTime = moment(this.get('departureTime')).add(this.get('delay'), 'minutes');
    return actualDepartureTime.diff(moment(),'minutes');
  }.property('departureTime','delay')
});
