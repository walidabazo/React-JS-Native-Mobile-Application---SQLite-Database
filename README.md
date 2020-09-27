## React-JS-Native-Mobile-Application--SQLite-Database
#### Example of the SQLite Database in React Native
###### we will use the SQLite3 Native Plugin which will work in both Android and iOS. It is based on the Cordova SQLite plugin.
###### We will be having some custom components like (Button, Text, Textinput).

Download Node js https://nodejs.org/en/download/

## To Make a React Native App
 Can make a React Native project.you can use npm to install the react-native-cli command line utility.
 Open windows cmd commands 
  
     npm install -g react-native-cli

Create a new React Native project

     react-native init ContactList
     
You want to start a new project with a specific React Native version

    react-native init ContactList --version X.XX.X
    
    react-native init ContactList --version react-native@next
    
### Installation of Dependencies
To install the dependencies jump into your project

    cd ContactList
    
Dependency to use SQLite    
    
    npm install react-native-sqlite-storage --save

Dependencies for react-navigation

    npm install @react-navigation/native --save
    
    npm install @react-navigation/stack --save
    
    npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save

### Project Structure

1 - Edit App.js 

2 - Download Pages folder  


### Error  android SDK Not found 

Go to your ContactList -> Android -> Create a file  local.properties
Such as :
paste your Android SDK path 

#### in Windows: 
sdk.dir = C:\\\Users\\\USERNAME\\\AppData\\\Local\\\Android\\\sdk
#### in macOS 
sdk.dir = /Users/USERNAME/Library/Android/sdk

#### in linux 
sdk.dir = /home/USERNAME/Android/Sdk

### If ReactNative Metro Bundler not starting automatically

Create folder   ContactList/android/app/src/main/assets


                   
    run react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res



### To Run the React Native App Android
   
    react-native run-android
    
### To Run the React Native App IOS  (macOS only).

    react-native run-ios
    
### If Update and not show must be

    run react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
    
### Video

[![Watch the video](https://img.youtube.com/vi/VCN5Th19hZM/0.jpg)](https://youtu.be/VCN5Th19hZM)
### Websites
https://wwww.edafait.com <br>
Https://Blog.edafait.com<br>
https://webxr.edafait.com <br>


