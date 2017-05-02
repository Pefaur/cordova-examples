# Example Facebook Plugin in Cordova

Using the official plugin for Facebook in Apache Cordova/PhoneGap

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

* Nodejs: v4.2.6+
* Cordova: v6.5.0+
* Android platform: v5.1.1 (version 6 not supported)

## Installing 

### Plugin not supported on Android platform 6 or higher: 

Update to Android 5.1.1 platform (optional):
```
cordova platform update android@5.1.1
```

In higher versions, remove and then install Android platform 5.1.1:
```
cordova platform rm android
cordova platform add android@5.1.1
```
### Sign APK and configure facebook App:

Generate keystore:
```
keytool -genkey -v -keystore <YOUR_KEYSTORE_NAME>.keystore -alias <YOUR_KEYSTORE_ALIAS_NAME> -keyalg RSA -keysize 2048 -validity 10000
```

Generate Hash Key (for facebook app):
```
keytool -exportcert -alias <YOUR_KEYSTORE_ALIAS_NAME> -keystore <YOUR_KEYSTORE_NAME>.keystore | openssl sha1 -binary | openssl base64
```

### Edit the build.json file:

```json
{
    "android": {
        "debug": {
            "keystore": "<YOUR_KEYSTORE_NAME>.keystore",
            "storePassword": "<YOUR_KEYSTORE_PASSWORD>",
            "alias": "<YOUR_ALIAS_NAME>",
            "password" : "<YOUR_ALIAS_PASSWORD>",
            "keystoreType": ""
        },
        "release": {
            "keystore": "<YOUR_KEYSTORE_NAME>.keystore",
            "storePassword": "<YOUR_KEYSTORE_PASSWORD>",
            "alias": "<YOUR_ALIAS_NAME>",
            "password" : "YOUR_ALIAS_PASSWORD>",
            "keystoreType": ""
        }
    }
 }
```

Create facebook application:

* Create App
* Add Android Platform  (set: Hash_key, Android_package_name and Android_class_name)


Edit the config.conf file:

```xml
<plugin name="phonegap-facebook-plugin" spec="~0.12.0">
    <variable name="APP_ID" value="<YOUR_FACEBOOK_APP_ID>" />
    <variable name="APP_NAME" value="<YOUR_FACEBOOK_APP_NAME>" />
</plugin>
```


Compile signed application:

```
cordova build --release
```

## Example of the application in google play


* [Download Android App](https://play.google.com/store/apps/details?id=com.pefaur.cordovafb)

## Plugin repository:
* **Wizcorp** - *Plugin Author* - [Wizcorp](https://github.com/Wizcorp/phonegap-facebook-plugin)


