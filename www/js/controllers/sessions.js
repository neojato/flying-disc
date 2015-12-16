(function() {
  'use strict';
  
  var sessionsCtrl = function($scope, Config, SessionService) {
    $scope.sessions = SessionService;
    
    $scope.getTime = function(time) {
      var sHour = time.substring(0, time.indexOf(':'));
      var sMinutes = time.substring(time.indexOf(':')+1, time.indexOf(':')+3);
      var event = parseDate(Config.eventDate);
      return new Date(event.getFullYear(), event.getMonth(), event.getDate(), sHour, sMinutes, 0);
    };

    function parseDate(str) {
      var d = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
      return (d) ? new Date(d[1], d[2]-1, d[3]) : new Date();
    }
    
    $scope.getSessionIcon = function(session) {
      var icon = 'img/topicGDG.png';
      if (session.speaker) {
        if (session.track === '1') {
          icon = 'img/topicAndroid.png';
        } else if (session.track === '2') {
          icon = 'img/topicCloud.png';
        } else if (session.track === '3') {
          icon = 'img/topicWorkshop.png';
        }
      }
      return icon;
    };
  };

  var app = angular.module('devfest')
    .controller('SessionsCtrl', ['$scope', 'Config', 'SessionService', sessionsCtrl]);
}())