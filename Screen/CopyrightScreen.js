import React from 'react'
import {View, Text, StyleSheet, Pressable, Linking} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {useTheme} from './Components/ThemeContext'

const CopyrightScreen = () => {
  
  return (
    <View style={[styles.container, {backgroundColor: theme.bg}]}>
      <Text style={[styles.heading, {color: theme.t}]}>Credits</Text>
      <Text style={[styles.subtitle, {color: theme.ts}]}>
        Below are the websites that have provided source files that were used in
        this application :
      </Text>

      
      <Text style={[styles.thankYouText, {color: theme.ts}]}>
        Thank you to all the websites mentioned above for their contributions!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    marginTop: 50,
    fontWeight: 'bold',
    marginBottom: 30,
    // textTransform: 'uppercase',
    backgroundColor: 'transparent',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 25,
    textAlign: 'center',
  },
  websiteContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  websiteName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    // textDecorationLine: 'underline',
  },
  websiteDescription: {
    fontSize: 13,
    textAlign: 'left',
  },
  thankYouText: {
    bottom: 50,
    position: 'absolute',
    marginBottom: 10,
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
})

export default CopyrightScreen
