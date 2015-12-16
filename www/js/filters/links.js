(function() {
  'use strict';
  
  var links = function($sce, $sanitize) {
    return function(text) {
      var regex = /href="([\S]+)"/g;
      var newString = $sanitize(text).replace(regex, "onClick=\"window.open('$1', '_system', 'location=yes')\"");
      return $sce.trustAsHtml(newString);
    }
  };

  var app = angular.module('devfest')
    .filter('externalLinks', ['$sce', '$sanitize', links]);
}())