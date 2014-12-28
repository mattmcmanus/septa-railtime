import Ember from "ember";
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('station', 'Station', { });

test('it exists', function() {
  var model = this.subject();
  var store = this.store();

  Ember.run(function() {
    model = store.find('station', 90411);
  });

  ok(!!model);
});
