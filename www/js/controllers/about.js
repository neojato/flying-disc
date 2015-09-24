(function() {
  'use strict';
  
  var aboutCtrl = function($scope, $sce, Config, AboutService) {
    $scope.loading = true;
    $scope.organizers = [];
    $scope.images = [];
    
    AboutService.getAbout().then(function(response) {
      var data = response.data;
      $scope.name = Config.name;
      $scope.desc = data.aboutMe;
      $sce.trustAsHtml($scope.desc);

      var users = [];
      var links = [];
      for (var i=0, j=data.urls.length; i < j; i++) {
        var url = data.urls[i];
        if (url.label.substring(0, 9) == 'Organizer') {
          var uid = url.value.substring(url.value.lastIndexOf('/')+1);
          var user = {
            id: uid,
            name: url.label.replace(/Organizer: /g, ''),
            url: url.value
          };
          AboutService.getImage(uid).then(function(response) {
            var str = response.config.url;
            var img = {
              id: str.substring(str.lastIndexOf('/')+1, str.indexOf('?')),
              url: response.data.image.url
            };
            $scope.images.push(img);
          });
          users.push(user);
        } else {
          var link = {
            label: url.label,
            url: url.value,
            image: 'http://www.google.com/s2/favicons?domain=' + url.value
          };
          links.push(link);
        }
      }
      $scope.organizers = users;
      $scope.links = links;
      $scope.loading = false;
    });
    
    $scope.getImage = function(uid) {
      var imgs = $scope.images;
      for (var i=0,j=imgs.length; i < j; i++) {
        if (imgs[i].id === uid) {
          return imgs[i].url;
        }
      }
    };
    
    $scope.openLink = function(link) {
      window.open(link, '_system', 'location=yes');
      return false;
    };
  };

  var app = angular.module('devfest')
    .controller('AboutCtrl', ['$scope', '$sce', 'Config', 'AboutService', aboutCtrl]);
}())