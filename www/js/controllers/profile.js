(function() {
  'use strict';
  
  var profileCtrl = function($scope, FacebookService, TwitterService, LinkedInService) {
    $scope.user = {};
    var fbConnected = false;

    FacebookService.getStatus(function (result) {
      if (result.status == 'connected')
        fbConnected = true;
    })

    if (fbConnected) {
      FacebookService.getProfile(function (user) {
        $scope.user = user;
        $scope.user.pic = 'http://graph.facebook.com/' + user.id + '/picture?height=100&type=normal&width=100';
      }, null);
    } else if (TwitterService.isReady()) {
      TwitterService.getProfile().then(function (data) {
        $scope.user.pic = data.avatar;
        $scope.user.name = data.name;
        $scope.user.email = data.alias; // use this for now - it's actually screenname
      });
    } else if (LinkedInService.isReady()) {
      LinkedInService.getProfile().then(function (data) {
        $scope.user.pic = data.avatar;
        $scope.user.name = data.firstname + ' ' + data.lastname;
        $scope.user.email = data.email;
      });
    } else {
      // Some Default User Info
      $scope.user.name = 'GDG Kansas City';
      $scope.user.email = 'user@gdgkc.org';
      $scope.user.pic = 'img/default-user.jpg'
    }
  };

  var app = angular.module('devfest')
    .controller('ProfileCtrl', ['$scope', 'FacebookService', 'TwitterService', 'LinkedInService', profileCtrl]);
}())