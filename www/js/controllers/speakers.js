(function() {
  'use strict';
  
  var speakersCtrl = function($scope, SpeakerService) {
    $scope.loading = true;
    $scope.listEmpty = false;
    $scope.speakers = SpeakerService;
    
    $scope.speakers.$loaded(function(list) {
      if (list !== $scope.speakers) {
        $scope.listEmpty = true;
      }
      
      $scope.loading = false;
    });
  };

  var app = angular.module('devfest')
    .controller('SpeakersCtrl', ['$scope', 'SpeakerService', speakersCtrl]);
}())