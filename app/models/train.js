import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  line: DS.attr('string'),
  departing: DS.attr('date'),
  arriving: DS.attr('date'),
  delay: DS.attr('number'),

  name: function(){
    return this.get('departureTime') + ' ' + this.get('line');
  }.property('line','departureTime'),

  departureTime: function(){
    return moment(this.get('departing')).format('h:mmA');
  }.property('departing'),

  departsIn: function(){
    var actualDepartureTime = moment(this.get('departing')).add(this.get('delay'), 'minutes');
    return actualDepartureTime.diff(moment(),'minutes');
  }.property('departing','delay')
});
