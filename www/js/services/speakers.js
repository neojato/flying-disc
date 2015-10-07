(function() {
  'use strict';
  
  var speaker = function($firebaseArray, furl) {
    var ref = new Firebase(furl + '/speakers');
    return $firebaseArray(ref);
  };

  var app = angular.module('devfest')
    .factory('SpeakerService', ['$firebaseArray', 'furl', speaker]);
}())