(function() {
  'use strict';
  
  var sessionCtrl = function($scope, $stateParams, $q, $ionicLoading, $timeout, Config, SessionService, FavoriteService) {
    $scope.favorites = FavoriteService.favorites;
    $scope.session = SessionService.$getRecord($stateParams.sessionId);
    $scope.session.isFave = false;
    
    angular.forEach($scope.favorites, function(fave) {
      if ($scope.session.$id == fave.$id)
        $scope.session.isFave = true;
    });
    
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

    $scope.share = function() {
      if (window.plugins && window.plugins.socialsharing) {
        window.plugins.socialsharing.share('I\'ll be attending the session: "' + $scope.session.title + '" at #' + Config.eventName.replace(/\s+/g, '') + '!', null, null, Config.eventURL);
      } else {
        console.log('Share plugin not available');
      }
    };
    
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

    $scope.addFavorite = function() {
      var currentSession = $scope.session,
          ref = SessionService.$ref();
      
      currentSession.faveCounter = $scope.session.faveCounter || 0;
      
      if (!currentSession.isFave) {
        FavoriteService.addFave(currentSession, successCB, errorCB);
        ref.child(currentSession.$id).child('faveCounter').set(currentSession.faveCounter + 1);
        currentSession.isFave = true;
      } else {
        currentSession.isFave = false;
        FavoriteService.removeFave(currentSession);
        ref.child(currentSession.$id).child('faveCounter').set(currentSession.faveCounter - 1);
      }
    };

    function errorCB() { showToast('Session was already added.') }
    function successCB(session) { showToast('Added to favorites!'); session.isFave = true; }

    function showToast(message) {
      if (window.plugins && window.plugins.toast) {
        window.plugins.toast.showShortCenter(message);
      } else {
        $ionicLoading.show({ template: message, noBackdrop: true, duration: 2000 });
      }
    }

    $scope.addToCalendar = function() {
      if (window.plugins && window.plugins.calendar) {
        var hour = $scope.session.time.substring(0, $scope.session.time.indexOf(':'));
        var minutes = $scope.session.time.substring($scope.session.time.indexOf(':')+1, $scope.session.time.indexOf(':')+3);
        
        function parseDate(str) {
          var d = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
          return (d) ? new Date(d[1], d[2]-1, d[3]) : new Date();
        }
        
        var event = parseDate(Config.eventDate);
        var sessionStart = new Date(event.getFullYear(), event.getMonth(), event.getDate(), parseInt(hour), parseInt(minutes), 0);
        var sessionEnd = parseDate(Config.eventDate);
        sessionEnd.setTime(parseInt(sessionStart.getTime()) + parseInt(Config.sessionLength));
        
        var calOptions = window.plugins.calendar.getCalendarOptions();
        calOptions.firstReminderMinutes = 10;
        calOptions.secondReminderMinutes = 5;
        window.plugins.calendar.createEventWithOptions($scope.session.title, $scope.session.room, $scope.session.description, sessionStart, sessionEnd, calOptions,
          function() {
            showToast($scope.session.title + ' has been added to your calendar.');
          },
          function(error) {
            console.log('Calendar fail ' + error);
          }
        );
      } else {
        console.log('Calendar plugin not available.');
      }
    };
  };

  var app = angular.module('devfest')
    .controller('SessionCtrl', ['$scope', '$stateParams', '$q', '$ionicLoading', '$timeout', 'Config', 'SessionService', 'FavoriteService', sessionCtrl]);
}())