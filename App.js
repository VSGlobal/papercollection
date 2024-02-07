import React from 'react';
import {Navigation} from 'react-native-navigation';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider, LightTheme} from './Screen/Components/ThemeContext';
import ThemeSwitcher from './Screen/Components/ThemeSwitcher';

//Home Screen
import HomeScreen from './Screen/HomeScreen';
//About Screen
// import BSTCScreen from './Papers/BSTCScreen'
//Enter Screen
import SplashScreen from './Screen/SplashScreen';
import PdfScreen from './Screen/PdfScreen';
import AboutScreen from './Screen/Menu/AboutScreen';
import MenuScreen from './Screen/Menu/MenuScreen';
import RajasthanScreen from './Screen/State/RajasthanScreen';
import IndiaScreen from './Screen/State/IndiaScreen';
import ExamScreen from './Screen/ExamScreen';
import ExamScreen20 from './Screen/ExamScreen20';
import ExamScreen30 from './Screen/ExamScreen30';
import ExamScreen30sec from './Screen/ExamScreen30sec';
import ThemeScreen from './Screen/Menu/ThemeScreen';

import QuizScreen from './src/screens/QuizScreen';
import BookScreen from './Screen/BookScreen';
import CopyrightScreen from './Screen/CopyrightScreen';
import ContactScreen from './Screen/Menu/ContactScreen';
import CollegeCrScreen from './Screen/CollegeCrScreen';
import MDSUbscbedScreen from './Screen/MDSUbscbedScreen';
import MDSUbabedScreen from './Screen/MDSUbabedScreen';
import MDSUbedScreen from './Screen/MDSUbedScreen';
import MDSUmedScreen from './Screen/MDSUmedScreen';
import RasScreen from './Screen/RasScreen';
import WelcomeScreen from './Screen/WelcomeScreen';
import UploadScreen from './Screen/UploadScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            initialRouteName="Splash"
            name="Splash"
            component={SplashScreen}
          />
          <Stack.Screen name="PdfScreen" component={PdfScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Raj" component={RajasthanScreen} />
          <Stack.Screen name="India" component={IndiaScreen} />
          <Stack.Screen name="Exam" component={ExamScreen} />
          <Stack.Screen name="Exam20" component={ExamScreen20} />
          <Stack.Screen name="Exam30" component={ExamScreen30} />
          <Stack.Screen name="Exam30sec" component={ExamScreen30sec} />
          <Stack.Screen name="Theme" component={ThemeScreen} />

          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            initialParams={{index: 0}}
          />
          <Stack.Screen name="Book" component={BookScreen} />
          <Stack.Screen name="Copyright" component={CopyrightScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="ClgCr" component={CollegeCrScreen} />
          <Stack.Screen name="MDSUbscbed" component={MDSUbscbedScreen} />
          <Stack.Screen name="MDSUbabed" component={MDSUbabedScreen} />
          <Stack.Screen name="MDSUbed" component={MDSUbedScreen} />
          <Stack.Screen name="MDSUmed" component={MDSUmedScreen} />
          <Stack.Screen name="Ras" component={RasScreen} />
          <Stack.Screen name="Upload" component={UploadScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
