import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: New', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /new', function() {
  visit('/new');

  andThen(function() {
    equal(currentPath(), 'trips.new');
  });
});
