import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("home", { path: "/", resetNamespace: true });
  this.route("about-us");
  this.route("partners");
  this.route("register");
  this.route("login");
  this.route("loading");
  this.route("profile");

  this.resource("packages", function() {
    this.route("detail", { path: "/:package_id" });
  });
});

export default Router;
