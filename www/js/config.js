(function() {
  'use strict';
  
  var config = function() {
    return {
      /* modify these */
      
      // group/site config
      'name'          : 'GDG Kansas City', // the name of your GDG
      'location'      : 'Kansas City metro', // city location of GDG
      'email'         : 'gdgkansascity@gmail.com', // the email where you receive GDG emails
      'id'            : '116015988631052616691', // Google+ profile id for the GDG
      'googleAPI'     : 'AIzaSyB3g3Fr3M56bILSK2aqn6arqU1CQt1zb3E', // Google API Key
      'website'       : 'http://gdgkc.org', // GDG website, custom domain or [your-app].appspot.com
      'allowRegister' : false, // set to false once your "admin" login has been setup to prevent unauthorized account creations
      
      // event details
      'eventName'     : 'GDG DevFest KC', // typically 'DevFest [place]'
      'eventLocation' : 'Jack Reardon Convention Center', // location of event
      'eventAddress'  : '520 Minnesota Ave, Kansas City, KS 66101', // address of event
      'eventURL'      : 'http://devfest.gdgkc.org', // link to event website (ex. G+, Meetup, Eventbrite, etc)
      'eventEmail'    : 'devfest@gdgkc.org', // Email where event inquries should go
      'speakerURL'    : 'https://goo.gl/rEypu0', // link to the 'Call for Papers' form
      'sponsorURL'    : 'https://goo.gl/n4KoLu', // link to the sponsorship form
      'ticketURL'     : '', // link to buy tickets
      'eventDate'     : '2015-12-05', // ISO formatted YYYY-MM-DD (currently only supports a single day DevFest)
      'eventStart'    : '09:00:00', // start time
      'eventEnd'      : '16:00:00', // end time
      'sessionLength' : '2700000', // use minutes in milliseconds
      'sessionTracks' : '3', // number of tracks sessions are split into (ie. Mobile, Web, Cloud, etc.)
      
      // social details
      // Google+ social details are derived from the keys above
      'twitter'       : 'GDGKansasCity', // Twitter handle
      'facebook'      : 'GDGKansasCity', // Facebook handle
      'meetup'        : 'GDG-Kansas-City', // Meetup handle
      'github'        : 'GDGKansasCity', // GitHub Handle
    };
  };
  
  var app = angular.module('devfest')
    .factory('Config', [config]);
}())