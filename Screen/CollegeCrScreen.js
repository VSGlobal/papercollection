import {useState, useEffect} from 'react'
import {
  SafeAreaView,
  SectionList,
  View,
  Share,
  Image,
  Animated,
  Pressable,
  Text,
} from 'react-native'

import styles from '../Style/raj'


import {NavigationContainer} from '@react-navigation/native'
import NavbarScreen from './Components/NavbarScreen'
import {useTheme} from '../Screen/Components/ThemeContext'

const CollegeCrScreen = ({navigation, route}) => {
  const {theme} = useTheme()
  const {Id} = route.params
  const {pdfTitle} = route.params
  // const { value } = route.params;

  const Cr1 = [
    {
      headtitle: 'MDSU Exams',
      data: [
        {
          id: 'Cr11',
          title: 'B. Ed',
          subtitle: 'Bachelor of Education',
        },
        {
          id: 'Cr12',
          title: 'M. Ed',
          subtitle: 'Master of Education',
        },
        {
          id: 'Cr13',
          title: 'B.A. B. Ed',
          subtitle: 'Bachelor of Education with B.A.',
        },
        {
          id: 'Cr14',
          title: 'B.Sc. B. Ed',
          subtitle: 'Bachelor of Education with B.Sc.',
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
    if (item.id == 'Cr11') {
      navigation.navigate('MDSUbed', {mId: 'Cr1', pdfTitle: 'B. Ed'})
    } else if (item.id == 'Cr12') {
      navigation.navigate('MDSUmed', {mId: 'Cr1', pdfTitle: 'M. Ed'})
    } else if (item.id == 'Cr13') {
      navigation.navigate('MDSUbabed', {mId: 'Cr1', pdfTitle: 'B.A. B. Ed'})
    } else if (item.id == 'Cr14') {
      navigation.navigate('MDSUbscbed', {mId: 'Cr1', pdfTitle: 'B.Sc. B. Ed'})
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
            sections={[...Cr1]}
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
export default CollegeCrScreen
