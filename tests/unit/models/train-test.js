import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('train', 'Train');

test('#name', function(){
  var model = this.subject({
    line: 'Traintown',
    departing: moment('05:56PM','hh:mmA').toISOString(),
  });

  equal(model.get('name'), '5:56PM Traintown');
});

test('#departsIn', function() {
  var model = this.subject({
    departing: moment().add(2, 'minutes'),
    delay: 5
  });

  equal(model.get('departsIn'), 6);
});
