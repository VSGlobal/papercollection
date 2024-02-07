import React from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import {useTheme, LightTheme, DarkTheme} from '../Components/ThemeContext'
import HapticFeedback from 'react-native-haptic-feedback'

const ThemeSwitcher = () => {
  const {theme, toggleTheme} = useTheme()

  const handleThemeChange = () => {
    // Toggle the theme state when the user presses the switch
    toggleTheme()
    HapticFeedback.trigger('impactMedium')
  }

  return (
    <View>
      {/* <Text
        style={{
          alignItems: 'center',
          color: 'black',
          fontWeight: 'bold',
          fontSize: Dimensions.get('window').width * 0.037,
        }}>
        Change Your Theme Here
      </Text> */}
      <View style={styles.switchmain}>
        {theme === LightTheme ? (
          <TouchableOpacity
            style={styles.switchContainer1}
            onPress={handleThemeChange}>
            <Image
              source={require('../../assets/icons/moon.png')}
              style={styles.backgroundImage}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.switchContainer2}
            onPress={handleThemeChange}>
            <Image
              source={require('../../assets/icons/sunW.png')}
              style={styles.backgroundImage}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   marginTop: 30,
  //   padding: 15,
  //   marginHorizontal: 15,
  //   alignItems: 'center',
  //   borderRadius: 15,
  //   backgroundColor: 'red',
  // },
  switchmain: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').height * 0.065,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width * 0.075,
    height: Dimensions.get('window').height * 0.035,
    // borderRadius: 2,
    alignSelf: 'center',
  },
  switchContainer1: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').height * 0.045,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  switchContainer2: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').height * 0.045,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
})

export default ThemeSwitcher
