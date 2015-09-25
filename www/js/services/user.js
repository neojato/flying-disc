(function() {
  'use strict';
  
  var user = function($firebaseArray, furl) {
    var ref = new Firebase(furl + '/users');
    return $firebaseArray(ref);
  };

  var app = angular.module('devfest')
    .factory('UserService', ['$firebaseArray', 'furl', user]);
}())