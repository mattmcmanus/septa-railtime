import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card-trip-train train'],
  classNameBindings: ['train.status'],
});
