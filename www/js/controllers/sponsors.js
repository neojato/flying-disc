(function() {
  'use strict';
  
  var sponsorsCtrl = function($scope, Config, SponsorService) {
    $scope.eventName = Config.eventName;
    $scope.sponsors = SponsorService;
    
    $scope.openLink = function(link) {
      window.open(link, '_system', 'location=yes');
      return false;
    };
  };

  var app = angular.module('devfest')
    .controller('SponsorsCtrl', ['$scope', 'Config', 'SponsorService', sponsorsCtrl]);
}())