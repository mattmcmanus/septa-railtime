import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("trip", { path: "trip/:trip_id" });

  this.resource("trips", { path: "/" }, function() {
    this.route("new");
  });
});

export default Router;
