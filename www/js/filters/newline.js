(function() {
  'use strict';
  
  var newline = function() {
    return function(text) {
      return text.replace(/\n/g, '<br/>');
    }
  };

  var app = angular.module('devfest')
    .filter('newline', [newline]);
}())