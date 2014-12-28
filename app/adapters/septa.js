import DS from 'ember-data';

// NextToArrive/?req1=Airport%20Terminal%20B&req2=Ardmore&req3=10&callback=?
export default DS.RESTAdapter.extend({
  namespace: 'hackathon',
  host: 'http://www3.septa.org/',
  find: function(store, type, id) {
     var item;
     $.ajax({
      url: 'http://api.domain/someModel',
      dataType: 'jsonp',
      success: function(response){
        item = App.someModel.create(order)
      }
    });
    return item;
  }
});
