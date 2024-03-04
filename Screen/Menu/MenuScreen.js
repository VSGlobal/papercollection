import {
  View,
  Text,
  Image,
  StyleSheet,
  openLink,
  TouchableOpacity,
  Dimensions,
  Linking
} from 'react-native'
import React from 'react'
// import global from '../global'
import { ScaledSheet } from 'react-native-size-matters'
import versionData from '../../package.json'

const MenuScreen = ({ navigation }) => {
  const openLink = url => {
    Linking.openURL(url)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#e8ecf9' }}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Image
            source={require('../../assets/close.png')}
            style={styles.backbtn}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.top}></View>

      <View
        style={[styles.ThreeBox, { flexWrap: 'wrap', flexDirection: 'column' }]}
      >
        <View
          style={{
            flexDirection: 'row',
            width: Dimensions.get('screen').width * 0.8,
            justifyContent: 'space-around'
          }}
        >
          <TouchableOpacity
            onPress={() => openLink('https://t.me/veesunetwork')}
          >
            <Image
              source={require('../../assets/tele.png')}
              style={styles.upperBoxChilds}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink('https://www.instagram.com/vs.global')}
          >
            <Image
              source={require('../../assets/instagram.png')}
              style={styles.upperBoxChilds}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openLink(
                'https://www.facebook.com/profile.php?id=100095097586771&mibextid=ZbWKwL'
              )
            }
          >
            <Image
              source={require('../../assets/facebook.png')}
              style={styles.upperBoxChilds}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: Dimensions.get('screen').width * 0.8,
            justifyContent: 'space-around'
          }}
        >
          <TouchableOpacity
            onPress={() => openLink('https://github.com/VSGlobal')}
          >
            <Image
              source={require('../../assets/github.png')}
              style={styles.upperBoxChilds}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openLink(
                'https://play.google.com/store/apps/dev?id=5521420784398616573'
              )
            }
          >
            <Image
              source={require('../../assets/playstore.jpg')}
              style={[styles.upperBoxChilds]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink('https://vsglobal.kesug.com')}
          >
            <Image
              source={require('../../assets/website.png')}
              style={styles.upperBoxChilds}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ThreeBox}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('About')
          }}
          style={styles.middleBoxChilds}
        >
          <Image
            source={require('../../assets/aboutill.png')}
            style={styles.aboutimg}
          />
          <Text
            style={{
              fontSize: 10,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'black'
            }}
          >
            About Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            openLink(
              'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Privacypolicynew.html?alt=media&token=597175fd-6c29-45d9-8f78-2d927110d601'
            )
          }}
          style={styles.middleBoxChilds}
        >
          <Image
            source={require('../../assets/privacyill.png')}
            style={styles.aboutimg}
          />
          <Text
            style={{
              fontSize: 10,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'black'
            }}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
         onPress={() => {
          Linking.openURL(
            'https://github.com/VSGlobal/papercollection',
          )
        }}
        style={[
          styles.ThreeBox,
          { borderRadius: 20, padding: '3%', flexDirection: 'column' }
        ]}
      >
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              color: 'gray',
              fontWeight: '400'
            }}
          >
            This project is open source and available for development
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              margin: '5%',
              color: 'black',
              fontWeight: 'bold'
            }}
          >
            Respected Contributor
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => openLink('https://github.com/VSGlobal')}
          >
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/159224104?v=4'
              }}
              style={styles.avtar}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink('https://github.com/Mns9983')}
          >
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/84082684?v=4 '
              }}
              style={styles.avtar}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink('https://github.com/Aarav-0')}
          >
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/152461134?v=4'
              }}
              style={styles.avtar}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={styles.ThreeBox}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Upload')
          }}
          style={[
            styles.middleBoxChilds,
            { width: '100%', flexDirection: 'row' }
          ]}
        >
          <Image
            source={require('../../assets/papers.png')}
            style={styles.aboutimg}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              textAlign: 'center',
              textAlignVertical: 'center',
              color: 'gray',
             
              textTransform: 'uppercase'
            }}
          >
            Upload Your Paper
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.circle}> */}
      <Image
        source={require('../../assets/icons/inlogo.png')}
        style={styles.circle}
      />
      {/* </View> */}
      <View style={styles.bottomView}>
        <Text
          style={{
            position: 'absolute',
            left: 5,
            alignSelf: 'center',
            fontSize: 12
          }}
        >
          V - {versionData.version}
        </Text>

        <Text
          onPress={() =>
            openLink(
              'https://play.google.com/store/apps/dev?id=5521420784398616573'
            )
          }
          style={{ alignSelf: 'center', fontSize: 12, fontWeight: 'bold' }}
        >
          VS Global
        </Text>
      </View>
    </View>
  )
}
const styles = ScaledSheet.create({
  categoryContainer: {
    height: '65@vs',
    justifyContent: 'center',
    width: Dimensions.get('screen').width
  },
  backbtn: {
    width: '60@s',
    height: '25@s',
    marginLeft: '5%',
    resizeMode: 'contain',
    borderRadius: 60,
    backgroundColor: 'white'
  },
  top: {
    height: Dimensions.get('screen').height * 0.03
  },

  ThreeBox: {
    width: Dimensions.get('screen').width * 0.8,
    minHeight: Dimensions.get('screen').height * 0.08,
    alignSelf: 'center',
    borderRadius: 35,
    marginVertical: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  upperBoxChilds: {
    width: Dimensions.get('screen').width * 0.1,
    height: Dimensions.get('screen').width * 0.1,
    alignSelf: 'center',
    borderRadius: 30,
    resizeMode: 'contain',
    marginVertical: Dimensions.get('screen').width * 0.024,
    marginHorizontal: Dimensions.get('screen').width * 0.024
  },
  middleBoxChilds: {
    height: Dimensions.get('screen').height * 0.065,
    width: Dimensions.get('screen').width * 0.35,
    borderRadius: 35,
    resizeMode: 'contain',
    alignSelf: 'center',
    //  backgroundColor: '#ffeceb',
    marginHorizontal: Dimensions.get('screen').height * 0.008
  },
  aboutimg: {
    height: Dimensions.get('screen').height * 0.045,
    width: Dimensions.get('screen').width * 0.25,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  circle: {
    height: Dimensions.get('screen').height * 0.1,
    width: Dimensions.get('screen').height * 0.1,
    alignSelf: 'center',
    borderRadius: Dimensions.get('screen').height * 0.1,
    marginTop: Dimensions.get('screen').height * 0.06,
    // backgroundColor: '#ffeceb',
    resizeMode: 'contain'
  },
  avtar: {
    height: Dimensions.get('screen').width * 0.07,
    width: Dimensions.get('screen').width * 0.07,
    resizeMode: 'contain',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 35,
    marginHorizontal: 5
  },
  bottomView: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.025,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
export default MenuScreen
