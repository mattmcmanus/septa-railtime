import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('train', 'Train');

test('#departsIn', function() {
  var model = this.subject({
    departureTime: moment().add(2, 'minutes'),
    delay: 5
  });

  equal(model.get('departsIn'), 6);
});
