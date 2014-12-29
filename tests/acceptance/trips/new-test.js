import Ember from 'ember';
import startApp from '../../helpers/start-app';

var application;

module('Acceptance: TripsNew', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /trips/new', function() {
  visit('/trips/new');

  andThen(function() {
    equal(currentPath(), 'trips.new');
  });
});
