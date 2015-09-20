(function() {
  'use strict';
  
  var session = function($firebaseArray, firebase_root) {
    var sessionRef = new Firebase(firebase_root + '/sessions');
    return $firebaseArray(sessionRef);
  };

  var app = angular.module('devfest')
    .factory('SessionService', ['$firebaseArray', 'firebase_root', session]);
}())