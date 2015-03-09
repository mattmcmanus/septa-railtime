import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('card-trip', 'CardTripComponent', {
  needs: ['model:station']
});

test('it renders', function(assert) {
  assert.expect(4);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  var $component = this.append();
  assert.equal(component._state, 'inDOM');

  var trip = Ember.Object.create({
    id: 1,
    stationFrom: Ember.Object.create({ name: 'Glenside' }),
    stationTo: Ember.Object.create({ name: 'Jefferson Station' })
  });

  Ember.run(function() {
    component.set('trip', trip);
  });

  assert.equal('Glenside', $component.find('.from').text());
  assert.equal('Jefferson Station', $component.find('.to').text());
});
