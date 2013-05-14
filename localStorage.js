/**
 * An angular directive that provides easy access to localStorage and sessionsStorage
 *
 * @author Achilleas Tsoumitas
 * @version 1.0.0
 *
 */

(function() {

	"use strict";

	var Storage = angular.module("Storage", []);

	Storage.service("Storage", function($window) {

		var save = function(type, key, value, expiration) {
			var object = {
				data: value
			};
			if (expiration) {
				object.expiration = expiration && Math.round(new Date().getTime() / 1000) + expiration * 60;
			}
			$window[type + "Storage"].setObject(key, object);
		};

		var load = function(type, key) {
			var data = $window[type + "Storage"].getObject(key) || null;
			if (data) {
				// if data was found, check if it has expired, or if no expiration exists
				if (data.expiration && data.expiration > Math.round(new Date().getTime() / 1000) || !data.expiration) {
					return data.data;
				} else {
					// if it has expired, remove it as well
					$window[type + "Storage"].removeItem(key);
					return null;
				}
			} else {
				return null;
			}
		};

		var Storage = {
			local: {
				save: function(key, value, expiration) {
					return save("local", key, value, expiration);
				},
				load: function(key) {
					return load("local", key);
				},
				remove: function(key) {
					$window.localStorage.removeItem(key);
				},
				clear: function() {
					$window.localStorage.clear();
				}
			},
			session: {
				save: function(key, value, expiration) {
					return save("session", key, value, expiration);
				},
				load: function(key) {
					return load("session", key);
				},
				remove: function(key) {
					$window.sessionStorage.removeItem(key);
				},
				clear: function() {
					$window.sessionStorage.clear();
				}
			}
		};

		return Storage;

	});

	window.Storage.prototype.setObject = function(key, value) {
		this.setItem(key, JSON.stringify(value));
	};

	window.Storage.prototype.getObject = function(key) {
		var value = this.getItem(key);
		return value && JSON.parse(value);
	};

}(window));