import {useState, useEffect} from 'react'
import {
  SafeAreaView,
  SectionList,
  View,
  Share,
  Image,
  Pressable,
  Animated,
  Text,
} from 'react-native'

import styles from '../../Style/india'
// import {Ionicons} from '@expo/vector-icons'
// import AdBanner3 from '../Components/Adsscreen3'
import {NavigationContainer} from '@react-navigation/native'
import NavbarScreen from '../Components/NavbarScreen'
import {useTheme} from '../Components/ThemeContext'

const IndiaScreen = ({navigation, route}) => {
  const {theme} = useTheme()
  const {Id} = route.params
  const {pdfTitle} = route.params

  const AF = [
    {
      headtitle: 'Central Services',
      data: [
        {
          id: 'AFC',
          title: 'UPSC Civil Service Exams (IAS)',
          subtitle: 'Union Public Service Commission',
        },
        {
          id: 'AFN',
          title: 'NEET',
          subtitle: 'National Eligibility cum Entrance Test',
        },
        {
          id: 'AFSC',
          title: 'SSC CGL',
          subtitle: 'Staff Selection Commission',
        },
        {
          id: 'AFCT',
          title: 'CTET',
          subtitle: 'Central Teacher Eligibility Test',
        },
      ],
    },
  ]
  // Create animated values for opacity and translateY
  const opacity = useState(new Animated.Value(0))[0]
  const translateY = useState(new Animated.Value(100))[0]

  // Function to trigger the fade-in and slide-up animation
  const fadeIn = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500, // 2 seconds
        useNativeDriver: true, // Add this for better performance
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500, // 2 seconds
        useNativeDriver: true, // Add this for better performance
      }),
    ]).start()
  }

  useEffect(() => {
    // Call the fadeIn function after a delay (e.g., 1000ms) to trigger the animation
    const animationTimeout = setTimeout(fadeIn, 100)

    return () => {
      // Clear the timeout to prevent memory leaks when the component unmounts
      clearTimeout(animationTimeout)
    }
  }, [])

  const getItem = item => {
    if (item.id == 'AFC') {
      navigation.navigate('Exam30sec', {
        mId: 'AFC',
        pdfTitle: 'UPSC Civil Service Exams',
      })
    } else if (item.id == 'AFN') {
      navigation.navigate('Exam', {mId: 'AFN', pdfTitle: 'NEET'})
    } else if (item.id == 'AFSC') {
      navigation.navigate('Exam', {mId: 'AFSC', pdfTitle: 'SSC CGL'})
    } else if (item.id == 'AFCT') {
      navigation.navigate('Exam', {mId: 'AFCT', pdfTitle: 'CTET'})
    }
  }

  return (
    <View style={[styles.spr_container, {backgroundColor: theme.bg}]}>
      <View style={styles.container}>
        <NavbarScreen navigation={navigation} pdfTitle={pdfTitle} />
        <SafeAreaView style={styles.listContainer0}>
          <SectionList
            // numColumns={2}
            showsVerticalScrollIndicator={false}
            style={[styles.list_line]}
            keyExtractor={(item, index) => index.toString()}
            sections={[...AF]}
            renderItem={({item}) => (
              <Animated.View
                style={{
                  opacity: opacity,
                  transform: [{translateY: translateY}],
                }}>
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
              </Animated.View>
            )}
            ref={ref => {
              listViewRef = ref
            }}
            renderSectionHeader={({section}) => (
              <View style={[styles.card_view_s]}>
                <Text style={[styles.card_t, {color: theme.t}]}>
                  {section.headtitle}
                </Text>
              </View>
            )}
          />
        </SafeAreaView>
      </View>
      <View
        style={{
          width:'100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: 'transparent',
        }}>
        
      </View>
    </View>
  )
}
export default IndiaScreen
