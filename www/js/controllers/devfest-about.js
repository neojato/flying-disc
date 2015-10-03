(function() {
  'use strict';
  
  var dfCtrl = function($scope, Config) {
    $scope.site = Config;
    
    $scope.openLink = function(link) {
      window.open(link, '_system', 'location=yes');
      return false;
    };
  };

  var app = angular.module('devfest')
    .controller('DevFestAboutCtrl', ['$scope', 'Config', dfCtrl]);
}())