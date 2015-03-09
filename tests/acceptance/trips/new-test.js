import Ember from 'ember';
import {module, test} from 'qunit';
import startApp from '../../helpers/start-app';

var application;

module('Acceptance: TripsNew', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

// [{"orig_train":"471","orig_line":"Warminster","orig_departure_time":" 9:59PM","orig_arrival_time":"10:25PM","orig_delay":"4 mins","isdirect":"true"},{"orig_train":"571","orig_line":"Lansdale\/Doylestown","orig_departure_time":"10:15PM","orig_arrival_time":"10:40PM","orig_delay":"On time","isdirect":"true"},{"orig_train":"475","orig_line":"Warminster","orig_departure_time":"10:59PM","orig_arrival_time":"11:25PM","orig_delay":"On time","isdirect":"true"},{"orig_train":"575","orig_line":"Lansdale\/Doylestown","orig_departure_time":"12:15AM","orig_arrival_time":"12:40AM","orig_delay":"On time","isdirect":"true"}]

test('Creating a new trip', function(assert) {
  visit('/new');

  clickStation('Jefferson Station');

  andThen(function() {
    assert.equal(find('.trip-details .from').text(), 'Jefferson Station');
  });

  clickStation('Glenside');

  andThen(function() {
    // equal(find('.trip-details .to').text(), 'Jefferson Station');
    assert.equal(currentRouteName(), 'trips.index');
    assert.equal(currentPath(), 'trips.index');
    assert.equal(currentURL(), '/');
    assert.equal(find('.card-trip.station-from-jefferson-station .from').text(), 'Jefferson Station');
    assert.equal(find('.card-trip.station-to-glenside .to').text(), 'Glenside');
  });
});
