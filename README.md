DevFest KC 2015 App (flying-disc)
===========================

Android/iOS application for GDG DevFest

Setting up the Ionic App
-------------------------
01. Ensure you have [Ionic](http://ionicframework.com/getting-started/) installed (and are using latest version)

02. Create a new Ionic project

        ionic start DevFest sidemenu

03. Replace the **/www** folder with the **/www** folder from this project.

04. Update GDG branding, Firebase app, Facebook app ID, etc.

05. Add the InAppBrowser plugin (needed for Facebook OAuth on device)

        cordova plugin add cordova-plugin-inappbrowser

06. Add the dialogs plugin (for native style alert dialogs)

        cordova plugin add cordova-plugin-dialogs

07. Add the status bar plugin (to fix iOS status bar &amp; app header issue)

        cordova plugin add cordova-plugin-statusbar

08. Add the toast plugin (for native style toast notifications)

        ionic plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin

09. Add the social sharing plugin (for device's native sharing options)

        ionic plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/

10. Add the calendar plugin (for device's native calendar access)

        ionic plugin add https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin.git

11. Add desired platforms (when ready to test on device)

        ionic platform add ios
        ionic platform add android

12. Run on desired platform

        ionic run ios
        ionic run android

**IMPORTANT NOTE:** Facebook integration for Login with Facebook and Profile menu option (currently) does not work via Ionic run/serve.


