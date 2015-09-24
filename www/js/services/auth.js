(function() {
  'use strict';
  
  var auth = function($firebaseAuth, furl) {
    var usersRef = new Firebase(furl);
    return $firebaseAuth(usersRef);
  };

  var app = angular.module('devfest')
    .factory('AuthService', ['$firebaseAuth', 'furl', auth]);
}())