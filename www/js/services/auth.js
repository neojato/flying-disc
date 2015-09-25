(function() {
  'use strict';
  
  var auth = function($firebaseAuth, furl) {
    var ref = new Firebase(furl);
    return $firebaseAuth(ref);
  };

  var app = angular.module('devfest')
    .factory('AuthService', ['$firebaseAuth', 'furl', auth]);
}())