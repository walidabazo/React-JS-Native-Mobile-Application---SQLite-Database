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



### To Run the React Native App Android
   
    react-native run-android
    
### To Run the React Native App IOS  (macOS only).

    react-native run-ios


