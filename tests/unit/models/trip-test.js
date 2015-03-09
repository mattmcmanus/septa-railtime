import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('trip', 'Trip', {
  // Specify the other units that are required for this test.
  needs: ['model:station', 'model:train']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
