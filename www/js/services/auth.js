(function() {
  'use strict';
  
  var auth = function($firebaseAuth, firebase_root) {
    var usersRef = new Firebase(firebase_root + '/users');
    return $firebaseAuth(usersRef);
  };

  var app = angular.module('devfest')
    .factory('AuthService', ['$firebaseAuth', 'firebase_root', auth]);
}())