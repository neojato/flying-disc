GDG DevFest KC 2015 App
===========================

The flying-disc project is a template for a dynamic Android/iOS app for a chapter's GDG DevFest. It pulls data from the Google+ API and utilizes [Firebase](https://www.firebase.com/), [Ionic Framework](http://ionic.io/), and [Cordova](https://cordova.apache.org/).

Setting up the DevFest App
-------------------------
1. Ensure you have [Ionic](http://ionicframework.com/getting-started/) installed (and are using the latest version)

2. Create a Firebase account, create a new app, and setup [Firebase auth](https://www.firebase.com/docs/web/guide/user-auth.html) for the social logins
    * Google+
    * Facebook
    * Twitter
    * GitHub

3. Create Google Cloud project for API key

    * Can use the same project created when setting up Google+ login in step 2

4. Create a new Ionic project

    ```bash
    ionic start devfest sidemenu
    ```

5. Replace the **/www** folder with the **/www** folder from this project.

6. Update GDG branding and Firebase project ID

    * Update GDG branding in `/js/config.js`

    * Update Firebase project ID in `/js/app.js`

7. Add required plugins:
    * Add the InAppBrowser plugin (needed for Facebook OAuth on device)

        ```bash
        cordova plugin add cordova-plugin-inappbrowser
        ```

    * Add the dialogs plugin (for native style alert dialogs)

        ```bash
        cordova plugin add cordova-plugin-dialogs
        ```

    * Add the status bar plugin (to fix iOS status bar &amp; app header issue)

        ```bash
        cordova plugin add cordova-plugin-statusbar
        ```

    * Add the toast plugin (for native style toast notifications)

        ```bash
        ionic plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin
        ```

    * Add the social sharing plugin (for device's native sharing options)

        ```bash
        ionic plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/
        ```

    * Add the calendar plugin (for device's native calendar access)

        ```bash
        ionic plugin add https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin.git
        ```

    * Add the Ionic User service

        ```bash
        ionic add ionic-platform-web-client
        ionic io init
        ```

    * Add the Ionic Analytics service (only if not including User service above)

        ```bash
        ionic add ionic-platform-web-client
        ionic io init
        ```

    * Add the Ionic Analytics service

        ```bash
        ionic add ionic-platform-web-client
        ionic plugin add phonegap-plugin-push
        ionic io init
        ```

8. Add desired platforms (NOTE: you can only `add ios` if on a Mac)

      ```bash
      ionic platform add ios
      ionic platform add android
      ```

9. Test in an emulator (NOTE: you can only `emulate ios` if on a Mac)

      ```bash
      sudo npm install -g ios-sim
      cordova emulate ios
      cordova emulate android
      ```

10. Run on desired platform (NOTE: you can only `run ios` if on a Mac)

      ```bash
      ionic build ios
      ionic run ios
      
      ionic build android
      ionic run android
      ```
