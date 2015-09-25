(function() {
  'use strict';
  
  var session = function($firebaseArray, furl) {
    var ref = new Firebase(furl + '/sessions');
    return $firebaseArray(ref);
  };

  var app = angular.module('devfest')
    .factory('SessionService', ['$firebaseArray', 'furl', session]);
}())