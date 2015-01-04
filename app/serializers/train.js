import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  // normalizePayload: function(payload) {
  //   console.log('normalizePayload', payload);
  //   return {'trains': payload};
  // },

  // From: [{
  //  "orig_train":"471",
  //  "orig_line":"Warminster",
  //  "orig_departure_time":" 9:59PM",
  //  "orig_arrival_time":"10:25PM",
  //  "orig_delay":"4 mins",
  //  "isdirect":"true"]
  // To: {
  //    line: 'Err',
  //    departureTime:
  //    arrivalTime:
  //    delay:
  // }
  extractArray: function(store, type, payload) {
    console.log('extractArray', arguments);
    var trains_payload = [];

    function delay(orig_delay) {
      if (orig_delay === 'On time') {
        return 0;
      } else {
        return orig_delay.split(' ')[0];
      }
    }

    payload.forEach(function(train){
      trains_payload.push({
        id: train.orig_train,
        line: train.orig_line,
        departureTime: train.orig_departure_time,
        arrivalTime: train.orig_arrival_time,
        delay: delay(train.orig_delay)
      });
    });

    payload = { trains: trains_payload };

    return this._super(store, type, payload);
  },
});
