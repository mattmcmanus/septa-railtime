import Ember from "ember";
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('card-station', 'CardStationComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  assert.equal(component._state, 'inDOM');
});

test('it has the proper classes', function(assert) {
  assert.expect(1);
  var component = this.subject();
  var $component = this.append();

  Ember.run(function() {
    component.set('station', Ember.Object.create({ name: 'Wayne Junction' }));
  });

  assert.ok($component.hasClass('station-wayne-junction'));
});


test('it fires an action on click', function(assert) {
  assert.expect(2);
  var component = this.subject();
  var $component = this.append();

  Ember.run(function() {
    component.set('station', Ember.Object.create({ name: 'station' }));
  });

  var targetObject = {
    selectStation: function(station){
      // we have the assertion here which will be
      // called when the action is triggered
      assert.ok(true, 'selectStation was called');
      assert.equal(station.name, 'station', 'it passes a station');
    }
  };

  component.set('action', 'selectStation');
  component.set('targetObject', targetObject);

  $component.click();
});
