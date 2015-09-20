(function() {
  'use strict';
  
  var profileCtrl = function($scope, $ionicLoading, AuthService) {
    $scope.user = {};

    if ($scope.authData === undefined) {
      showToast('You\'re not logged in yet!');
    }
    
    function showToast(message) {
      if (window.plugins && window.plugins.toast) {
        window.plugins.toast.showShortCenter(message);
      } else {
        $ionicLoading.show({ template: message, noBackdrop: true, duration: 2000 });
      }
    }
  };

  var app = angular.module('devfest')
    .controller('ProfileCtrl', ['$scope', '$ionicLoading', 'AuthService', profileCtrl]);
}())