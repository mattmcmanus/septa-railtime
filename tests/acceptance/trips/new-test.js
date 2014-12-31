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

  clickStation('Jefferson Station');

  andThen(function() {
    equal(find('.trip-details .from').text(), 'Jefferson Station');
  });

  clickStation('Glenside');

  andThen(function() {
    // equal(find('.trip-details .to').text(), 'Jefferson Station');
    equal(currentRouteName(), 'trips.index');
    equal(currentPath(), 'trips.index');
    equal(currentURL(), '/');
    equal(find('.card-trip.station-from-jefferson-station .from').text(), 'Jefferson Station');
    equal(find('.card-trip.station-to-glenside .to').text(), 'Glenside');
  });
});
