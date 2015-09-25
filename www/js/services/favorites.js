(function() {
  'use strict';
  
  var favorite = function($filter, $localStorage) {
    return {
      favorites: $localStorage.favorites || [],
      addFave: function (item, successCallback, dupeCallback) {
        // only add if doesn't exist
        var session = filterById(this.favorites, item.$id);
        if (session == null) {
          this.favorites.push(item);
          $localStorage.favorites = this.favorites;
          successCallback(item);
        } else {
          dupeCallback();
        }

        // look for any dupes
        function filterById(faves, id) {
          return faves.filter(function(faves) {
            return (faves.$id == id);
          })[0];
        }
      },
      removeFave: function (item) {
        var obj = $filter('filter')(this.favorites, function(fave) {
          return fave.$id === item.$id;
        })[0];
        this.favorites.splice(this.favorites.indexOf(obj), 1);
        $localStorage.favorites = this.favorites;
      }
    };
  };

  var app = angular.module('devfest')
    .service('FavoriteService', ['$filter', '$localStorage', favorite]);
}())