Closebuy
========
# Project Name

Closebuy, for selling and buying near you.

## Team

* forked from https://github.com/closebuy/closebuy


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Building the App](#Building the App)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Requirements

-Ionic
-Android SDK
-Cordova
-XCode

## Development

### Installing Dependencies

Make sure you have ionic and cordova installed. To install:
`npm install -g ionic`
`npm install -g cordova`

From within the app directory:

```sh
npm install
bower install
cordova plugin add org.apache.cordova.camera
```

### Building the App

For quick development and small changes, run `ionic serve` from the app directory. This will open the app in the browser—you can use chrome dev tools to emulate certain phones.

Make sure you have the Android SDK installed. For instructions on how to do this, visit http://dara.azurewebsites.net/ionic-android-osx/

To emulate the app or run it on your phone, you must first add the os you want. Run the appropriate ionic command from within the app directory:
`ionic platform add android`
`ionic platform add ios`

Then build the platform:
`ionic build android`
`ionic build ios`

to emulate: 
`ionic emulate android`
`ionic emulate ios`
If you're emulating on android, make sure you have the SDK downloaded and an AVD setup (see http://dara.azurewebsites.net/ionic-android-osx/).

Finally, if you want to put the app on your phone, make sure your phone is connected and type:
`ionic run android`
`ionic run ios`
If running on android, make sure you have USB debugging checked off in the developer options menu (under settings). If you can't see developer options, navigate to the about phone settings menu and tap the build number 7 times.

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
