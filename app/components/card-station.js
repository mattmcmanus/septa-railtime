import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card card-station'],
  classNameBindings: ['isActive:active'],
  isActive: false,

  click: function() {
    this.toggleProperty('isActive');
    this.sendAction('action', this.get('station'));
  },
});
