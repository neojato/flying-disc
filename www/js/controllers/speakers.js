(function() {
  'use strict';
  
  var speakersCtrl = function($scope, SpeakerService) {
    $scope.speakers = SpeakerService;
  };

  var app = angular.module('devfest')
    .controller('SpeakersCtrl', ['$scope', 'SpeakerService', speakersCtrl]);
}())