(function() {
  'use strict';
  
  var auth = function($firebaseAuth) {
    // Firebase integration - Register your app and get your App ID from https://www.firebase.com
    var usersRef = new Firebase('https://flying-disc.firebaseio.com/users');
    return $firebaseAuth(usersRef);
  };

  var app = angular.module('devfest')
    .factory('AuthService', ['$firebaseAuth', auth]);
}())