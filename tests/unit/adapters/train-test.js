import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:train', 'TrainAdapter', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('buildURL', function(assert) {
  var adapter = this.subject();
  var url = adapter.buildURL('train', '');
  assert.ok(adapter);
});
