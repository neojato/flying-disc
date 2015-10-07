(function() {
  'use strict';
  
  var speakerCtrl = function($scope, $stateParams, SpeakerService) {
    $scope.speaker = SpeakerService.$getRecord($stateParams.speakerId);
    
    $scope.openLink = function(link) {
      window.open(link, '_system', 'location=yes');
      return false;
    };
    
    $scope.socialLink = function(network, handle) {
      var link = '';
      
      switch(network) {
        case 'google_plus':
          link = 'https://plus.google.com/' + handle;
          break;
        case 'facebook':
          link = 'https://www.facebook.com/' + handle;
          break;
        case 'twitter':
          link = 'http://twitter.com/intent/user?screen_name=' + handle;
          break;
        case 'github':
          link = 'https://github.com/' + handle;
          break;
      };
      
      return link;
    };
    
    $scope.favIcon = function(link) {
      return 'http://www.google.com/s2/favicons?domain=' + link;
    };
  };

  var app = angular.module('devfest')
    .controller('SpeakerCtrl', ['$scope', '$stateParams', 'SpeakerService', speakerCtrl]);
}())