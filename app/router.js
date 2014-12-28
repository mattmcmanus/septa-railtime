import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('trip', { path: 'trips/:trip_id' }, function() { });
  this.resource('trips', function() {
    this.route('new');
  });
});

export default Router;
