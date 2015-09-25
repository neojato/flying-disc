(function() {
  'use strict';
  
  var sponsor = function($firebaseArray, furl) {
    var ref = new Firebase(furl + '/sponsors');
    return $firebaseArray(ref);
  };

  var app = angular.module('devfest')
    .factory('SponsorService', ['$firebaseArray', 'furl', sponsor]);
}())