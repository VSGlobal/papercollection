import React from 'react'
import {
  SafeAreaView,
  SectionList,
  View,
  Share,
  Image,
  Pressable,
  Text,
} from 'react-native'

import styles from '../Style/examsLsec'

import {NavigationContainer} from '@react-navigation/native'
import NavbarScreen from './Components/NavbarScreen'
import {useTheme} from './Components/ThemeContext'

const MDSUmedScreen = ({navigation, route}) => {
  const {theme} = useTheme()
  const {Id} = route.params
  const {pdfTitle} = route.params
  // const { value } = route.params;

  const CM1 = [
    {
      headtitle: 'M.Ed part 1(1st Year)',
      data: [
        {
          id: 'CM1PSE',
          title: 'Philosophy and Sociology of Education',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM1PL',
          title: 'Psychology of Learner',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM1IE',
          title: 'Inclusive Education',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM1MERDA',
          title: 'Methods of Educational Research and Data Analysis',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM1PAS',
          title: 'Pedagogy and Assessment of Science',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM1PASS',
          title: 'Pedagogy and Assessment of Social Science',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM1PAL',
          title: 'Pedagogy of Assessment of Language',
          subtitle: '2017',
        },
        {
          id: 'CM1ICE',
          title: 'ICT in Education',
          subtitle: '2016,17,18,19,21',
        },
      ],
    },
  ]
  const CM2 = [
    {
      headtitle: 'M.Ed part 2(2nd Year)',
      data: [
        {
          id: 'CM2PL',
          title: 'Psychology of Learning',
          subtitle: '2017,18,19,20,21',
        },
        {
          id: 'CM2QER',
          title: 'Qualitative Educational Research',
          subtitle: '2017,18,19,20,21',
        },
        {
          id: 'CM2QnER',
          title: 'Quantitative Educational Research',
          subtitle: '2017,18,19,20,21',
        },
        {
          id: 'CM2CES',
          title:
            'Curriculum and Evaluation at Secondary and Senior Secondary Level',
          subtitle: '2017,18,19,20,21',
        },
        {
          id: 'CM2PSS',
          title:
            'Preparation of Secondary and Senior Secondary Teachers-Pre-Service and In-Service',
          subtitle: '2015,16,17,18,19,20,21',
        },
      ],
    },
  ]
  const getItem = item => {
    if (item.id == 'CM1PSE') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed1%2FPSE.pdf?alt=media&token=ba3db1c1-daf1-46ae-abdc-cbe16fbfef65'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1PSE',
        pdfTitle: 'Philosophy and Sociology of Education',
        pdfHead: 'M.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1PL') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed1%2FPL.pdf?alt=media&token=afb59e7c-6a13-496f-ab57-bb8281cfc496'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1PL',
        pdfTitle: 'Psychology of Learner',
        pdfHead: 'M.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1IE') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed1%2FIE.pdf?alt=media&token=8ebb44ee-49ca-4e21-83a8-93799151853c'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1IE',
        pdfTitle: 'Inclusive Education',
        pdfHead: 'M.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1MERDA') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed1%2FMER.pdf?alt=media&token=b3b2e638-b5bd-44e5-8b08-f8c6a3e176a1'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1MERDA',
        pdfTitle: 'Methods of Educational Research and Data Analysis',
        pdfHead: 'M.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1PAS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed1%2FPAS.pdf?alt=media&token=db47f69a-9794-407e-9616-3de539569188'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1PAS',
        pdfTitle: 'Pedagogy and Assessment of Science',
        pdfHead: 'M.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1PASS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed1%2FPASS.pdf?alt=media&token=ca2ad93a-dbd2-4def-b556-f0acdcca18a3'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1PASS',
        pdfTitle: 'Pedagogy and Assessment of Social Science',
        pdfHead: 'M.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1PAL') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed1%2FPedagogy%20of%20Assessment%20of%20Language.pdf?alt=media&token=ac1ad2b5-1597-4b90-a7b6-a7a1a937b79c'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1PAL',
        pdfTitle: 'Pedagogy of Assessment of Language',
        pdfHead: 'M.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1ICE') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed1%2FICE.pdf?alt=media&token=a405ce03-824a-42e7-9b8d-9c7a1c74a3db'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1ICE',
        pdfTitle: 'ICT in Education',
        pdfHead: 'M.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM2PL') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed2%2FPS.pdf?alt=media&token=20667a1c-ce6d-409e-ae62-b78b0b2e5a54'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2PL',
        pdfTitle: 'Psychology of Learning',
        pdfHead: 'M.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2QER') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed2%2FQnER.pdf?alt=media&token=5034e51a-fd5c-4921-aa8d-42986c586e69'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2QER',
        pdfTitle: 'Qualitative Educational Research',
        pdfHead: 'M.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2QnER') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed2%2FQER.pdf?alt=media&token=67db1d21-d2b4-43c7-b499-ba64572db51e'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2QnER',
        pdfTitle: 'Quantitative Educational Research',
        pdfHead: 'M.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2CES') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed2%2FCESS.pdf?alt=media&token=4a328ae8-929b-4fe2-bf60-81d2d9eee5f4'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2CES',
        pdfTitle:
          'Curriculum and Evaluation at Secondary and Senior Secondary Level',
        pdfHead: 'M.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2PSS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsumed2%2FPSSS.pdf?alt=media&token=3a165cd5-61ec-4a80-9384-447964d08329'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2PSS',
        pdfTitle:
          'Preparation of Secondary and Senior Secondary Teachers-Pre-Service and In-Service',
        pdfHead: 'M.Ed part 2',
        link: linktext,
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
            sections={[...CM1, ...CM2]}
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
                </View>
                <Text
                  style={[
                    styles.logo_sub_txt,
                    {backgroundColor: theme.bgSI, color: theme.t},
                  ]}>
                  {item.subtitle}
                </Text>
              </Pressable>
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
export default MDSUmedScreen
