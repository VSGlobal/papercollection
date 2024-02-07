import React, {useEffect, useCallback, useState} from 'react'
import {
  SafeAreaView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Button,
  StyleSheet,
  Share,Animated,
  Text,
  Dimensions,
} from 'react-native'
import styles from '../Style/book'
import Comingsoon from './Comingsoon'

import {NavigationContainer} from '@react-navigation/native'
import NavbarScreen from './Components/NavbarScreen'
import {useTheme} from './Components/ThemeContext'

const BookScreen = ({navigation, route}) => {
  const {theme} = useTheme()
  let listViewRef
  const [dataSource, setDataSource] = useState([
    {
      id: '1',
      title: 'Rich Dad Poor Dad (Hindi)',
      imgUrl:{uri:'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/image%2Fbi.jpg?alt=media&token=5c9d766a-042a-4922-a9c9-2d8c6287a0cc'}
      ,
      subtitle: 'Pages: 225 | Language: Hindi | Author: Robert T. Kiyosaki',
    },
    {
      id: '2',
      title: 'The Law Of Attraction (Hindi)',
      imgUrl:{uri:'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/image%2Fb2.png?alt=media&token=2de839e2-0548-4974-8a0d-4f5b4b9880b5'}
      ,
      subtitle:
        'Pages: 129 | Language: Hindi | Author: Esther, Jerry Hicks, Napoleon Hill',
    },
    {
      id: '3',
      title: 'Albert Einstein (Hindi)',
      imgUrl:(require('../assets/icons/no-photos.png')),
      subtitle:
        '',
    },
    {
      id: '4',
      title: 'Valmiki RAMAYAN (Hindi)',
      imgUrl:(require('../assets/icons/no-photos.png')),
      subtitle:
        '',
    },
    {
      id: '5',
      title: 'Holy Quran (Hindi)',
      imgUrl:(require('../assets/icons/no-photos.png')),
      subtitle:
        '',
    },
    {
      id: '6',
      title: '1857 ki kahani (Hindi)',
      imgUrl:(require('../assets/icons/no-photos.png')),
      subtitle:
        '',
    },
    {
      id: '7',
      title: 'ManuSmriti (Hindi)',
      imgUrl:(require('../assets/icons/no-photos.png')),
      subtitle:
        '',
    },
    {
      id: '8',
      title: 'Anant ki pukar OSHO (Hindi)',
      imgUrl:(require('../assets/icons/no-photos.png')),
      subtitle:
        '',
    },
  ])
  // Create animated values for opacity and translateY
  const opacity = useState(new Animated.Value(0))[0];
  const translateY = useState(new Animated.Value(100))[0];

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
    ]).start();
  };

  useEffect(() => {
    // Call the fadeIn function after a delay (e.g., 1000ms) to trigger the animation
    const animationTimeout = setTimeout(fadeIn, 100);

    return () => {
      // Clear the timeout to prevent memory leaks when the component unmounts
      clearTimeout(animationTimeout);
    };
  }, []);

  const getItem = item => {
    if (item.id == '1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Books%2FBRDPD.pdf?alt=media&token=72dfb3c0-a41f-48ae-b8d6-3c8522f6dea3'
      navigation.navigate('PdfScreen', {
        Id: '1',
        pdfTitle: 'Rich Dad Poor Dad (Hindi)',
        pdfHead: 'Rich Dad Poor Dad',
        link: linktext,
      })
    } else if (item.id == '2') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Books%2FBLOA.pdf?alt=media&token=acaf9cdd-090d-4900-b582-5430b30858e4'
      navigation.navigate('PdfScreen', {
        Id: '2',
        pdfTitle: 'The Law Of Attraction (Hindi)',
        pdfHead: 'The Law Of Attraction',
        link: linktext,
      })
    }else if (item.id == '3') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Books%2Falbert-einstein-161.pdf?alt=media&token=8a5cb37d-5b06-4830-8015-47ed2b4214bc'
      navigation.navigate('PdfScreen', {
        Id: '3',
        pdfTitle: 'Albert Einstein (Hindi)',
        pdfHead: 'Albert Einstein',
        link: linktext,
      })
    }else if (item.id == '4') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Books%2F%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A5%8D%E0%A4%AE%E0%A5%80%E0%A4%95%E0%A4%BF-%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%BE%E0%A4%AF%E0%A4%A3-366.pdf?alt=media&token=7fc23b8c-e153-4b2d-9b47-31ea82249133'
      navigation.navigate('PdfScreen', {
        Id: '4',
        pdfTitle: 'Valmiki RAMAYAN (Hindi)',
        pdfHead: 'Valmiki RAMAYAN',
        link: linktext,
      })
    }else if (item.id == '5') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Books%2FHoly-Quran-Hindi.pdf?alt=media&token=a66691b6-6392-45ee-a293-2deb5869e7ce'
      navigation.navigate('PdfScreen', {
        Id: '5',
        pdfTitle: 'Holy Quran (Hindi)',
        pdfHead: 'Holy Quran',
        link: linktext,
      })
    }else if (item.id == '6') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Books%2F1857-ki-kahani-382.pdf?alt=media&token=9808d599-c92e-4965-b1ea-665994a9e8b7'
      navigation.navigate('PdfScreen', {
        Id: '6',
        pdfTitle: '1857 ki kahani (Hindi)',
        pdfHead: '1857 ki kahani',
        link: linktext,
      })
    }else if (item.id == '7') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Books%2FManuSmritHindi-GpDwivedi.pdf?alt=media&token=133eb804-9ac4-458d-a3f1-1475e328d026'
      navigation.navigate('PdfScreen', {
        Id: '7',
        pdfTitle: 'ManuSmriti (Hindi)',
        pdfHead: 'ManuSmriti',
        link: linktext,
      })
    }else if (item.id == '8') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Books%2Fanant-ki-pukar-osho-book-934.pdf?alt=media&token=0b81e247-2f9f-4e29-accd-778c5ffe4a45'
      navigation.navigate('PdfScreen', {
        Id: '8',
        pdfTitle: 'Anant ki pukar OSHO (Hindi)',
        pdfHead: 'Anant ki pukar OSHO',
        link: linktext,
      })
    }
  }

  return (
    <View style={[styles.spr_container, {backgroundColor: theme.bg}]}>
      <View style={styles.container}>
        <NavbarScreen navigation={navigation} pdfTitle='Books' />
        <SafeAreaView style={styles.listContainer0}>
          <FlatList
            // numColumns={2}
            showsVerticalScrollIndicator={false}
            style={[styles.list_line]}
            keyExtractor={(item, index) => index.toString()}
            data={dataSource}
            renderItem={({item}) => (
              <Animated.View
              style={{
                opacity: opacity, 
                transform: [{ translateY: translateY }], 
              }}
            >
              <Pressable
                style={[
                  styles.item,
                  styles.shadow_list_i,
                  styles.shadow_list_a,
                  {backgroundColor: theme.bgI},
                ]}
                onPress={() => getItem(item)}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={(item.imgUrl)} style={styles.logo_img} />
                  <View style={styles.logo_txt_container}>
                    <Text style={[styles.logo_txt, {color: theme.t}]}>
                      {item.title}
                    </Text>
                    {/* <Text style={[styles.logo_sub_txt, {color: theme.ts}]}>
                      {item.subtitle}
                    </Text> */}
                  </View>
                </View>
              </Pressable>
              </Animated.View>
            )}
            ref={ref => {
              listViewRef = ref
            }}
          />
        </SafeAreaView>
        {/* <Comingsoon style={styles.for_book} /> */}
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
export default BookScreen
