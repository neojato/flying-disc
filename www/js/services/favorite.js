(function() {
  'use strict';
  
  var favorite = function($filter) {
    return {
      favorites: [],
      addFave: function (item, successCallback, dupeCallback) {
        // Only add if doesn't exist
        var session = filterById(this.favorites,item.id);
        if (session == null) {
          this.favorites.push(item);
          successCallback(item);
        } else {
          dupeCallback();
        }

        // Filter function to look for a dupe
        function filterById(faves, id) {
          return faves.filter(function(faves) {
            return (faves['id'] == id);
          })[0];
        }
      },
      removeFave: function (item) {
        var obj = $filter('filter')(this.favorites, function (fave) {
          console.log("Fave id " + fave.id)
          return fave.id === item.id;})[0];
        service.favorites.splice(this.favorites.indexOf(obj),1);
      }
    };
  };

  var app = angular.module('devfest')
    .service('FavoriteService', ['$filter', favorite]);
}())