import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  number: DS.attr('number'),
  line: DS.attr('string'),
  departing: DS.attr('date'),
  arriving: DS.attr('date'),
  delay: DS.attr('number'),

  name: Ember.computed('line', 'departureTime', function(){
    return this.get('departureTime') + ' ' + this.get('line');
  }),

  departureTime: Ember.computed('departing', function(){
    return moment(this.get('departing')).format('h:mmA');
  }),

  departsIn: Ember.computed('departing', 'delay', function(){
    var actualDepartureTime = moment(this.get('departing')).add(this.get('delay'), 'minutes');
    return actualDepartureTime.diff(moment(),'minutes');
  }),

  status: Ember.computed('delay', function(){
    var delay = this.get('delay');
    if (delay >= 10) {
      return 'late';
    } else if (delay < 10 && delay > 0) {
      return 'delayed';
    } else {
      return 'on-time';
    }
  })
});
