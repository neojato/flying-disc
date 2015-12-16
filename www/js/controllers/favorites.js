(function() {
  'use strict';
  
  var favoritesCtrl = function($scope, $ionicLoading, $ionicAnalytics, Config, FavoriteService, SessionService) {
    $scope.favorites = FavoriteService.favorites;
    $scope.showDelete = false;

    $scope.showBtn = function() {
      if ($scope.showDelete === false) {
        $scope.showDelete = true;
      } else {
        ($scope.showDelete = false);
      }
    };
    
    $scope.getTime = function(time) {
      var sHour = time.substring(0, time.indexOf(':'));
      var sMinutes = time.substring(time.indexOf(':')+1, time.indexOf(':')+3);
      var event = parseDate(Config.eventDate);
      return new Date(event.getFullYear(), event.getMonth(), event.getDate(), sHour, sMinutes, 0);
    };

    function parseDate(str) {
      var d = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
      return (d) ? new Date(d[1], d[2]-1, d[3]) : new Date();
    }
    
    $scope.getSessionIcon = function(session) {
      var icon = 'img/topicGDG.png';
      if (session.speaker) {
        if (session.track === '1') {
          icon = 'img/topicAndroid.png';
        } else if (session.track === '2') {
          icon = 'img/topicCloud.png';
        } else if (session.track === '3') {
          icon = 'img/topicWorkshop.png';
        }
      }
      return icon;
    };

    $scope.share = function(session) {
      if (window.plugins && window.plugins.socialsharing) {
        window.plugins.socialsharing.share('I\'ll be attending the session: "' + session.title + '" at #' + Config.eventName.replace(/\s+/g, '') + '!', null, null, Config.eventURL);
        $ionicAnalytics.track('Favorite Share Button', { session: session.title });
      } else {
        console.log('Share plugin not available');
      }
    };
    
    $scope.remove = function(session) {
      FavoriteService.removeFave(session);
      var ref = SessionService.$ref();
      ref.child(session.$id).child('faveCounter').set(session.faveCounter - 1);
    };
  };

  var app = angular.module('devfest')
    .controller('FavoritesCtrl', ['$scope', '$ionicLoading', '$ionicAnalytics', 'Config', 'FavoriteService', 'SessionService', favoritesCtrl]);
}())