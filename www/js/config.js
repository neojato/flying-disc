(function() {
  'use strict';
  
  var config = function() {
    return {
      // modify these
      'name'          : 'GDG Kansas City', // the name of your GDG
      'email'         : 'gdgkansascity@gmail.com', // the email where you receive GDG emails
      'id'            : '116015988631052616691', // Google+ profile id for the GDG
      'google_api'    : 'AIzaSyB3g3Fr3M56bILSK2aqn6arqU1CQt1zb3E', // Google API Key
      'domain'        : 'http://gdgkc.org', // GDG website, custom domain or [your-app].appspot.com
      'eventName'     : 'DevFest KC 2015', // typically 'DevFest [year]'
      'eventURL'      : 'http://devfest.gdgkc.org', // link to event website (ex. G+, Meetup, Eventbrite, etc)
      'ticketURL'     : '', // link to where they can buy tickets
    };
  };
  
  var app = angular.module('devfest')
    .factory('Config', [config]);
}())