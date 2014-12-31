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

test('Creating a new trip', function() {
  visit('/new');

  clickStation('Glenside');

  andThen(function() {
    equal(find('.trip-details .from').text(), 'Glenside');
  });

  clickStation('Jefferson Station');

  andThen(function() {
    // equal(find('.trip-details .to').text(), 'Jefferson Station');
    equal(currentRouteName(), 'trips.index');
    equal(currentPath(), 'trips.index');
    equal(currentURL(), '/');
  });
});
