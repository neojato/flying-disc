(function() {
  'use strict';
  
  var config = function() {
    return {
      // modify these
      'eventName'     : 'DevFest KC 2015', // typically 'DevFest [year]'
      'eventURL'      : 'http://devfest.gdgkc.org', // link to event website (ex. G+, Meetup, Eventbrite, etc)
      'ticketURL'     : '', // link to where they can buy tickets
      'name'          : 'GDG Kansas City', // the name of your GDG
      'email'         : 'gdgkansascity@gmail.com', // the email where you receive GDG emails
      'id'            : '116015988631052616691', // Google+ profile id for the GDG
      'domain'        : 'http://gdgkc.org', // GDG website, custom domain or [your-app].appspot.com
    };
  };
  
  var app = angular.module('devfest')
    .factory('Config', [config]);
}())