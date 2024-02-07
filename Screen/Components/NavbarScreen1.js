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

const NavbarScreen1 = ({navigation, pdfTitle}) => {
  const {theme} = useTheme()

  const imageSourceB =
    theme.bgI === '#000000'
      ? require('../../assets/icons/backW.png')
      : require('../../assets/icons/backB.png')

  const handleDownload = {
   
  }
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
      <Pressable style={styles.Pressable_size2} onPress={() => handleDownload(item.urls?.regular)}>
        <Image
          style={styles.back_btn2}
          source={require('../../assets/download.png')}
        />
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
export default NavbarScreen1
