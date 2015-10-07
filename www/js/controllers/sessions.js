(function() {
  'use strict';
  
  var sessionsCtrl = function($scope, SessionService) {
    $scope.sessions = SessionService;

    $scope.setFilter = function() {
      var search = $scope.searchTxt;
      var field = this.field;

      if (field === 'title')
        $scope.search = {title:search};
      else if (field === 'speaker')
        $scope.search = {speaker:search};
      else if (field === 'description')
        $scope.search = {description:search};
      else $scope.search = {$:search}; // ALL cases
    };

    $scope.clear = function() { $scope.searchTxt = '' };
  };

  var app = angular.module('devfest')
    .controller('SessionsCtrl', ['$scope', 'SessionService', sessionsCtrl]);
}())