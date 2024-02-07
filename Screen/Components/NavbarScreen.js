import React from 'react'
import {
  View,
  Pressable,
  Image,
  Text,
  Share,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native'
import {useTheme} from './ThemeContext'

const NavbarScreen = ({navigation, pdfTitle}) => {
  const {theme} = useTheme()
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Install this app for Previous Year Papers , AppLink :https://play.google.com/store/apps/details?id=com.papercollection',
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activityType
        } else {
          // Shared without activityType
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      Alert.alert(error.message) // Use Alert.alert to display the error message
    }
  }
  const imageSourceB =
    theme.bgI === '#000000'
      ? require('../../assets/icons/backW.png')
      : require('../../assets/icons/backB.png')
  const imageSourceS =
    theme.bgI === '#000000'
      ? require('../../assets/icons/shareW.png')
      : require('../../assets/icons/shareB.png')
  return (
    <View
      style={[
        styles.title_container,
        {backgroundColor: theme.bgI},
        styles.shadowa,
        styles.shadowi,
      ]}>
      <Pressable
        style={styles.Pressable_size1}
        onPress={() => navigation.goBack()}>
        <Image style={styles.back_btn1} source={imageSourceB} />
      </Pressable>
      <Text style={[styles.title_name, {color: theme.t}]}>{pdfTitle}</Text>
      <Pressable style={styles.Pressable_size2} onPress={onShare}>
        <Image style={styles.back_btn2} source={imageSourceS} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  Pressable_size1: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').height * 0.045,
    borderRadius: 35,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Pressable_size2: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').height * 0.045,
    borderRadius: 35,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  back_btn1: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width * 0.075,
    height: Dimensions.get('window').height * 0.035,
    borderRadius: 35,
    alignSelf: 'center',
  },
  back_btn2: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width * 0.075,
    height: Dimensions.get('window').height * 0.035,
    borderRadius: 35,
    alignSelf: 'center',
  },
  title_container: {
    marginTop: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: +1,
    height: Dimensions.get('window').height * 0.065,
    width: Dimensions.get('window').width,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    position: 'absolute',
  },

  title_name: {
    height: Dimensions.get('window').height * 0.04,
    width: Dimensions.get('window').width * 0.6,
    fontSize: Dimensions.get('window').width * 0.044,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Ubuntu-Bold',
  },
  shadowa: {
    elevation: 30,
    shadowColor: '#1a00ff',
  },
  shadowi: {
    shadowColor: '#1a00ff',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 20,
    shadowRadius: 3,
  },
})
export default NavbarScreen
