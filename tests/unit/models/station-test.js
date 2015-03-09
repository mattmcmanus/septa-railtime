import Ember from "ember";
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('station', 'Station', {});

test('it exists', function(assert) {
  var model = this.subject( { id: 90411, name: "Glenside", description: "Multiple Lines", longitude: 40.1013889, latitude: -75.1536111, zone: "3", wheelchairBoarding: false } );

  assert.equal(model.get('name'), 'Glenside');
});
