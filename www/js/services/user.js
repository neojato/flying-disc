(function() {
  'use strict';
  
  var user = function($firebaseArray, furl) {
    var usersRef = new Firebase(furl + '/users');
    return $firebaseArray(usersRef);
  };

  var app = angular.module('devfest')
    .factory('UserService', ['$firebaseArray', 'furl', user]);
}())