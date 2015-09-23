(function() {
  'use strict';
  
  var user = function($firebaseArray, firebase_root) {
    var usersRef = new Firebase(firebase_root + '/users');
    return $firebaseArray(usersRef);
  };

  var app = angular.module('devfest')
    .factory('UserService', ['$firebaseArray', 'firebase_root', user]);
}())