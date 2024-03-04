import React, {useEffect, useState} from 'react'
import {
  SafeAreaView,
  FlatList,
  View,
  StatusBar,
  Share,
  Image,
  Pressable,
  TouchableOpacity,
  Text,
  Linking,
  Alert,
} from 'react-native'
import versionData from '../package.json'
// import {useFonts} from 'expo-font'
import styles from '../Style/home'
// import AdBanner2 from './Components/Adsscreen2'
import {BackHandler, ToastAndroid} from 'react-native'
import exitMessages from './exitMessages.json' // Import the JSON file
import HapticFeedback from 'react-native-haptic-feedback'
import {useTheme} from './Components/ThemeContext'
import ThemeSwitcher from './Components/ThemeSwitcher'
const HomeScreen = ({route, navigation}) => {
  const [exitInteractionShown, setExitInteractionShown] = useState(false)
  const {theme} = useTheme()
  const barStyle = theme.bgI === '#000000' ? 'light-content' : 'dark-content'
  const imageSourceM =
    theme.bgI === '#000000'
      ? require('../assets/icons/menuW.png')
      : require('../assets/icons/menuB.png')
  const imageSourceS =
    theme.bgI === '#000000'
      ? require('../assets/icons/shareW.png')
      : require('../assets/icons/shareB.png')

  useEffect(() => {
    const backAction = () => {
      if (!exitInteractionShown) {
        // Show a random exit interaction message
        const randomIndex = Math.floor(Math.random() * exitMessages.length)
        const randomMessage = exitMessages[randomIndex]
        ToastAndroid.show(randomMessage, ToastAndroid.SHORT)

        // Exit the app immediately
        BackHandler.exitApp()

        return true // Prevent default back behavior
      }
      return false // Allow default back behavior
    }

    // Add back button listener
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    )

    return () => {
      // Remove back button listener on component unmount
      backHandler.remove()
    }
  }, [exitInteractionShown])
  useEffect(() => {
    checkAppVersion()
  }, [])

  const checkAppVersion = async () => {
    const currentVersion = versionData.version
    console.log('1st check', currentVersion)
    try {
      const response = await fetch(
        'https://api.jsonbin.io/v3/b/649bd260b89b1e2299b684af',
      )
      const data = await response.json()
      const latestVersion = data.record.version
      console.log('2nd check', latestVersion, currentVersion)
      if (currentVersion !== latestVersion) {
        Alert.alert(
          'Update Available',
          'Stay current, update your app for the latest features!',
          [
            {
              text: 'Not Now', // Add 'Not Now' button
              style: 'cancel', // Set style to cancel
            },
            {
              text: 'Update',
              onPress: () => {
                Linking.openURL(
                  'https://play.google.com/store/apps/details?id=com.oldpapers',
                )
              },
            },
          ],
        )
      }
    } catch (error) {
      console.log('Error fetching version data:', error)
    }
  }

  // console.log('3rd check')

  // const handleImagePress = () => {
  //   Linking.openURL(
  //     'https://vsglobal.kesug.com',
  //   )
  // }
const openLink = url => {
  Linking.openURL(url)
}

  let listViewRef
  const [dataSource, setDataSource] = useState([
    {
      id: 'CL',
      title: 'Central Level',
      subtitle: 'UPSC | NEET | SSC | CTET | GATE | CMSE',
    },
    {
      id: 'RL',
      title: 'Rajasthan Level',
      subtitle:
        'RAS | PTET | BSTC | 1ST GRADE | 2ND GRADE | REET L1 | REET L2 | OTHER',
    },
    {
      id: 'CLG',
      title: 'College Old Papers',
      subtitle: 'MDSU | MGSU | RU | BED | MED | BA BED | BSC BED',
    },
  ])


  const getItem = item => {
    HapticFeedback.trigger('impactMedium')
    if (item.id == 'CL') {
      navigation.navigate('India', {Id: 'CL', pdfTitle: 'Central Level'})
    } else if (item.id == 'RL') {
      navigation.navigate('Raj', {Id: 'RL', pdfTitle: 'Rajasthan Leval'})
    } else if (item.id == 'CLG') {
      navigation.navigate('ClgCr', {
        Id: 'CLGCr',
        pdfTitle: 'College Old Papers',
      })
    }
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Install this app for Previous Year Papers , AppLink :https://play.google.com/store/apps/details?id=com.oldpapers',
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert(error.message)
    }
  }

  const [animationCompleted, setAnimationCompleted] = useState(false)
  const [animatedText, setAnimatedText] = useState('')

  useEffect(() => {
    if (!animationCompleted) {
      startTextAnimation('Paper Zone')
    }
  }, [animationCompleted])

  const startTextAnimation = text => {
    const animationDuration = 700 // Animation duration in milliseconds

    let currentIndex = 0
    const textInterval = setInterval(() => {
      setAnimatedText(text.substring(0, currentIndex + 1))
      currentIndex++

      if (currentIndex === text.length) {
        clearInterval(textInterval)
        setTimeout(() => setAnimationCompleted(true), animationDuration)
      }
    }, animationDuration / text.length)
  }

  return (
    <View style={[styles.spr_container, {backgroundColor: theme.bg}]}>
      <StatusBar backgroundColor={theme.bgI} barStyle={barStyle} />
      <View style={styles.container}>
        <View
          style={[
            styles.title_container,
            {backgroundColor: theme.bgI},
            styles.shadowa,
            styles.shadowi,
          ]}>
          <Pressable
            style={styles.Pressable_size1}
            onPress={() => navigation.navigate('Menu')}>
            <Image style={styles.back_btn1} source={imageSourceM} />
          </Pressable>
          <Text style={[styles.title_name, {color: theme.t}]}>
            {animatedText}
          </Text>
          {/* <Text style={styles.title_name1}>{animatedText1}</Text> */}
          {/* <Pressable style={styles.Pressable_size2} onPress={onShare}>
            <Image style={styles.back_btn2} source={imageSourceS} />
          </Pressable> */}
          <ThemeSwitcher />
        </View>
        <SafeAreaView style={styles.listContainer0}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={[styles.list_line]}
            keyExtractor={(item, index) => index.toString()}
            data={dataSource}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.item,
                  styles.shadow_list_i,
                  styles.shadow_list_a,
                  {backgroundColor: theme.bgI},
                ]}
                onPress={() => getItem(item)}>
                <View style={styles.logo_txt_container}>
                  <Text style={[styles.logo_txt, {color: theme.t}]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.logo_sub_txt, {color: theme.ts}]}>
                    {item.subtitle}
                  </Text>
                </View>
              </Pressable>
            )}
            ref={ref => {
              listViewRef = ref
            }}
          />
        </SafeAreaView>
        <View style={styles.item2_contain}>
          <Pressable
            // backgroundColor={bg2}
            style={[
              styles.item2,
              {backgroundColor: theme.bgI},
              styles.shadow_list_i,
              styles.shadow_list_a,
            ]}
            onPress={() => navigation.navigate('Quiz')}>
            <View style={styles.logo_txt_containersmall}>
              <Image
                style={styles.about_img}
                source={require('../assets/quiz1.png')}
              />
              <Text style={[styles.logo_sub_txtsmall, {color: theme.ts}]}>
                Quiz
              </Text>
            </View>
          </Pressable>
          <Pressable
            // backgroundColor={bg2}
            style={[
              styles.item2,
              {backgroundColor: theme.bgI},
              styles.shadow_list_i,
              styles.shadow_list_a,
            ]}
            onPress={() => navigation.navigate('Book')}>
            <View style={styles.logo_txt_containersmall}>
              <Image
                style={styles.about_img}
                source={require('../assets/bookN1.png')}
              />
              <Text style={[styles.logo_sub_txtsmall, {color: theme.ts}]}>
                Books
              </Text>
            </View>
          </Pressable>
        </View>
        <TouchableOpacity
          style={[styles.noti_container, {backgroundColor: theme.bgI}]}
             onPress={() =>
            openLink(
              'https://play.google.com/store/apps/dev?id=5521420784398616573',
            )
          }>
          <Image
            style={styles.noti_img}
            source={require('../assets/annN2.png')}
          />
          <Text style={[styles.noti_text, {color: theme.ts}]}>
            Discover, Install Our Other Apps!
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            'https://github.com/VSGlobal/papercollection',
          )
        }}
        style={{
          height: 60,
          width:'100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
        }}>
        <Text style={{ color: 'black', textAlign: "center", padding: 5,paddingHorizontal:50, backgroundColor: 'white', borderRadius: 30, fontWeight:'bold', margin: 10, fontSize: 10, alignSelf:'center'}}>Now We Are Open Source</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HomeScreen
