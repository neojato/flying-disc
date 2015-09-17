(function() {
  'use strict';
  
  var session = function($firebaseArray) {
    // Firebase integration - Register your app and get your App ID from https://www.firebase.com
    var sessionRef = new Firebase('http://[project-id].firebaseio.com/sessions');
    return $firebaseArray(sessionRef);
  };

  var app = angular.module('devfest')
    .factory('SessionService', ['$firebaseArray', session]);
}())