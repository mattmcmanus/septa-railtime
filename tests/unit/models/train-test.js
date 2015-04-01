import { moment } from 'moment';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('train', 'Train');

test('#name', function(assert) {
  var model = this.subject({
    line: 'Traintown',
    departing: moment('05:56PM','hh:mmA').toISOString(),
  });

  assert.equal(model.get('name'), '5:56PM Traintown');
});

test('#departsIn', function(assert) {
  var model = this.subject({
    departing: moment().add(2, 'minutes'),
    delay: 5
  });

  assert.equal(model.get('departsIn'), 6);
});

test('#state is on-time', function(assert) {
  var model = this.subject({delay: 0});

  assert.equal(model.get('status'), 'on-time');
});

test('#state is delayed', function(assert) {
  var model = this.subject({delay: 5});

  assert.equal(model.get('status'), 'delayed');
});

test('#state is late', function(assert) {
  var model = this.subject({delay: 15});

  assert.equal(model.get('status'), 'late');
});
