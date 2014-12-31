import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('clickStation',
  function (app, stationName) {
    click('.station-' + stationName.dasherize());
  });
