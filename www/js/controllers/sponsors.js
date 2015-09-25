(function() {
  'use strict';
  
  var sponsorsCtrl = function($scope, SponsorService) {
    $scope.sponsors = SponsorService;
  };

  var app = angular.module('devfest')
    .controller('SponsorsCtrl', ['$scope', 'SponsorService', sponsorsCtrl]);
}())