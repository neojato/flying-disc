(function() {
  'use strict';
  
  var session = function($firebaseArray, furl) {
    var sessionRef = new Firebase(furl + '/sessions');
    return $firebaseArray(sessionRef);
  };

  var app = angular.module('devfest')
    .factory('SessionService', ['$firebaseArray', 'furl', session]);
}())