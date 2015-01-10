import DS from 'ember-data';

// NextToArrive/?req1=Airport%20Terminal%20B&req2=Ardmore&req3=10&callback=?
export default DS.RESTAdapter.extend({
  namespace: 'hackathon/NextToArrive',
  host: 'http://www3.septa.org',
  buildURL: function(type, id, record) {
    type = false;
    var url = this._super(type, id, record);
    return url + "?callback=?";
  },
  find: function(store, type, id, record) {
    return this.ajax(this.buildURL(type.typeKey, id, record), 'GET', {dataType:'jsonp'});
  },
  findQuery: function(store, type, query) {
    return this.ajax(this.buildURL(type.typeKey), 'GET', { data: query });
  },
  ajaxOptions: function(url, type, options) {
    var hash = this._super(url, type, options);
    hash.dataType = 'jsonp';
    return hash;
  }
});
