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

import styles from '../../Style/raj'
// import {Ionicons} from '@expo/vector-icons'
// import AdBanner3 from '../Components/Adsscreen3'
import {NavigationContainer} from '@react-navigation/native'
import NavbarScreen from '../Components/NavbarScreen'
import {useTheme} from '../Components/ThemeContext'

const RajasthanScreen = ({navigation, route}) => {
  const {theme} = useTheme()
  const {Id} = route.params
  const {pdfTitle} = route.params
  // const { value } = route.params;

  const CS = [
    {
      headtitle: 'Civil Service',
      data: [
        {
          id: 'CSras',
          title: 'RPSC RAS',
          subtitle: 'Rajasthan Administrative Service',
        },
      ],
    },
  ]
  const O = [
    {
      headtitle: 'Other',
      data: [
        {
          id: 'Optw',
          title: 'Rajasthan Patwari',
          subtitle: 'Rajasthan Patwari',
        },
      ],
    },
  ]
  const Tf = [
    {
      headtitle: 'Teaching field',
      data: [
        {
          id: 'TFptet',
          title: 'Pre-Teacher Education Test(PTET)',
          subtitle: 'Pre Teacher Education Test',
        },
        {
          id: 'TFbstc',
          title: 'Pre D.El.Ed (BSTC)',
          subtitle: 'Diploma in Elementary Education',
        },
        {
          id: 'TF1stge',
          title: '1st Grade Teacher Exam',
          subtitle: 'RPSC Exam For 1st Grade Teacher',
        },
        {
          id: 'TF2ndge',
          title: '2nd Grade Teacher Exam',
          subtitle: 'RPSC Exam For 2nd Grade Teacher',
        },
        {
          id: 'TFreet1',
          title: 'REET 3rd Grade / Level 1',
          subtitle: 'REET Exam For 3rd Grade Level 1',
        },
        {
          id: 'TFreet2',
          title: 'REET 3rd Grade / Level 2',
          subtitle: 'REET Exam For 3rd Grade Level 2',
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
    if (item.id == 'TFptet') {
      navigation.navigate('Exam', {
        mId: 'TFptet',
        pdfTitle: 'PTET',
      })
    } else if (item.id == 'TFbstc') {
      navigation.navigate('Exam', {
        mId: 'TFbstc',
        pdfTitle: 'Pre D.El.Ed (BSTC)',
      })
    } else if (item.id == 'TF1stge') {
      navigation.navigate('Exam30', {
        mId: 'TF1stge',
        pdfTitle: 'RPSC 1st Grade',
      })
    } else if (item.id == 'TF2ndge') {
      navigation.navigate('Exam20', {
        mId: 'TF2ndge',
        pdfTitle: 'RPSC 2nd Grade',
      })
    } else if (item.id == 'TFreet1') {
      navigation.navigate('Exam', {
        mId: 'TFreet1',
        pdfTitle: 'REET Level 1',
      })
    } else if (item.id == 'TFreet2') {
      navigation.navigate('Exam', {
        mId: 'TFreet2',
        pdfTitle: 'REET Level 2',
      })
    } else if (item.id == 'CSras') {
      navigation.navigate('Ras', {
        mId: 'CSras',
        pdfTitle: 'RPSC RAS',
      })
    } else if (item.id == 'Optw') {
      navigation.navigate('Exam', {
        mId: 'Optw',
        pdfTitle: 'Rajasthan Patwari',
      })
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
            sections={[...CS, ...O, ...Tf]}
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
export default RajasthanScreen
