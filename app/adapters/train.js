import DS from 'ember-data';

// NextToArrive/?req1=Airport%20Terminal%20B&req2=Ardmore&req3=10&callback=?
export default DS.RESTAdapter.extend({
  namespace: 'hackathon/NextToArrive',
  host: 'http://www3.septa.org',
  buildURL: function(type, id, record) {
    type = false;
    var url = this._super(type, id, record);
    console.log('buildURL', url);
    return url + "?callback=?";
  },
  find: function(store, type, id, record) {
    console.log('find',arguments);
    return this.ajax(this.buildURL(type.typeKey, id, record), 'GET', {dataType:'jsonp'});
  },
  findQuery: function(store, type, query) {
    console.log('findQuery', arguments);
    return this.ajax(this.buildURL(type.typeKey), 'GET', { data: query });
  },
  ajaxOptions: function(url, type, options) {
    console.log('ajaxOptions', arguments);
    var hash = this._super(url, type, options);
    hash.dataType = 'jsonp';
    return hash;
  }
});
