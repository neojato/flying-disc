GDG DevFest KC 2015 App
===========================

The flying-disc project is a template for a dynamic Android/iOS application for GDG DevFest. It pulls data from Google+ API utilizing [Firebase](https://www.firebase.com/), [Ionic Framework](http://ionic.io/), and [Cordova](https://cordova.apache.org/).

Setting up the DevFest App
-------------------------
1. Ensure you have [Ionic](http://ionicframework.com/getting-started/) installed (and are using the latest version)

2. Create a new Ionic project

        ionic start devfest sidemenu

3. Replace the **/www** folder with the **/www** folder from this project.

4. Update GDG branding and Firebase project ID

** Update GDG branding in `/js/config.js`

** Update Firebase project ID in `/js/app.js`

5. Add required plugins:

** Add the InAppBrowser plugin (needed for Facebook OAuth on device)

        cordova plugin add cordova-plugin-inappbrowser

** Add the dialogs plugin (for native style alert dialogs)

        cordova plugin add cordova-plugin-dialogs

** Add the status bar plugin (to fix iOS status bar &amp; app header issue)

        cordova plugin add cordova-plugin-statusbar

** Add the toast plugin (for native style toast notifications)

        ionic plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin

** Add the social sharing plugin (for device's native sharing options)

        ionic plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/

** Add the calendar plugin (for device's native calendar access)

        ionic plugin add https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin.git

6. Add desired platforms (NOTE: you can only `add ios` if on a Mac)

        ionic platform add ios
        ionic platform add android

7. Test in an emulator (NOTE: you can only `emulate ios` if on a Mac)

        sudo npm install -g ios-sim
        cordova emulate ios
        cordova emulate android

8. Run on desired platform (NOTE: you can only `run ios` if on a Mac)

        ionic run ios
        ionic run android
