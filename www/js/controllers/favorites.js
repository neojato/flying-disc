(function() {
  'use strict';
  
  // Uses the Favorites Service to filter the list that we've marked...
  var favoritesCtrl = function($scope, $ionicLoading, FavoriteService, FacebookService, TwitterService) {
    $scope.favorites = FavoriteService.favorites;
    $scope.showDelete = false;

    $scope.showBtn = function() {
      if ($scope.showDelete === false) {
        $scope.showDelete = true;
      } else {
        ($scope.showDelete = false);
      }
    };

    $scope.shareNative = function() {
      if (window.plugins && window.plugins.socialsharing) {
        window.plugins.socialsharing.share(
          'I\'ll be attending the session: ' + $scope.session.title + '.',
          'DevFest KC 2015', null, 'http://devfest.gdgkc.org',
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

    $scope.follow = function(screenname) {
      if (TwitterService.isReady()) {
        TwitterService.follow(screenname).then(function (data) {
          console.log('Speaker has ' + data.followers_count + ' followers');
          showToast('You are now following ' + screenname + ' (total number of followers ' + data.followers_count + ')');
        });
      } else {
        alert('You must first login with Twitter to use this feature.');
      }
    };

    function showToast(message) {
      if (window.plugins && window.plugins.toast) {
        window.plugins.toast.showShortCenter(message);
      } else {
        $ionicLoading.show({ template: message, noBackdrop: true, duration: 2000 });
      }
    }
  };

  var app = angular.module('devfest')
    .controller('FavoritesCtrl', ['$scope', '$ionicLoading', 'FavoriteService', 'FacebookService', 'TwitterService', favoritesCtrl]);
}())