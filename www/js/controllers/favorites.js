(function() {
  'use strict';
  
  var favoritesCtrl = function($scope, $ionicLoading, Config, FavoriteService, SessionService) {
    $scope.favorites = FavoriteService.favorites;
    $scope.showDelete = false;

    $scope.showBtn = function() {
      if ($scope.showDelete === false) {
        $scope.showDelete = true;
      } else {
        ($scope.showDelete = false);
      }
    };

    $scope.share = function(session) {
      if (window.plugins && window.plugins.socialsharing) {
        window.plugins.socialsharing.share(
          'I\'ll be attending the session: ' + session.title + '.',
          Config.eventName, null, Config.eventURL,
          function() {
            console.log('Success')
          },
          function (error) {
            console.log('Share fail ' + error)
          });
      } else {
        console.log('Share plugin not available');
      }
    };
    
    $scope.remove = function(session) {
      FavoriteService.removeFave(session);
      var ref = SessionService.$ref();
      ref.child(currentSession.$id).child('faveCounter').set(session.faveCounter - 1);
    };
  };

  var app = angular.module('devfest')
    .controller('FavoritesCtrl', ['$scope', '$ionicLoading', 'Config', 'FavoriteService', 'SessionService', favoritesCtrl]);
}())