import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:train', 'TrainAdapter', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('buildURL', function() {
  var adapter = this.subject();
  var url = adapter.buildURL('train', '');
  ok(adapter);
});
