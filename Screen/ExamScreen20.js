import React, {useState} from 'react'
import {
  FlatList,
  SafeAreaView,
  Share,
  Pressable,
  Image,
  Text,
  Alert,
  View,
} from 'react-native'

import styles from '../Style/examsL'


import {NavigationContainer} from '@react-navigation/native'
import NavbarScreen from './Components/NavbarScreen'
import {useTheme} from '../Screen/Components/ThemeContext'

const ExamScreen20 = ({route, navigation}) => {
  const {theme} = useTheme()
  const {mId} = route.params
  const {pdfTitle} = route.params

  var themecolor = 'white'
  if (themecolor == 'blue') {
    var bg1 = '#e5e5ff'
    var bg2 = '#ccccff'
    var bg3 = '#b2b2ff'
    var bg4 = '#0000ff'
  } else if (themecolor == 'red') {
    var bg1 = '#ffe5e5'
    var bg2 = '#ffcccc'
    var bg3 = '#ffb2b2'
    var bg4 = '#ff0000'
  } else if (themecolor == 'black') {
    var bg1 = '#e5e5e5'
    var bg2 = '#cccccc'
    var bg3 = '#b2b2b2'
    var bg4 = '#000000'
  } else if (themecolor == 'green') {
    var bg1 = '#e5f2e5'
    var bg2 = '#cce5cc'
    var bg3 = '#b2d8b2'
    var bg4 = '#008000'
  } else if (themecolor == 'white') {
    var bg1 = '#e8ecf9'
    var bg2 = '#ffffff'
    var bg3 = '#dfe3ee'
    var bg4 = '#008000'
  }

  if (mId == 'TF2ndge') {
    var title0 = '(General) Urdu'
    var stitle0 = '2022'
    var id0 = 'TFGr2nd22U'
    var title1 = '(General) English'
    var stitle1 = '2022'
    var id1 = 'TFGr2nd22E'
    var title2 = '(General) Science'
    var stitle2 = '2022'
    var id2 = 'TFGr2nd22Sc'
    var title3 = '(General) Hindi'
    var stitle3 = '2022'
    var id3 = 'TFGr2nd22H'
    var title4 = '(General) Social Science'
    var stitle4 = '2022'
    var id4 = 'TFGr2nd22SS'
    var title5 = '(General) Panjabi'
    var stitle5 = '2022'
    var id5 = 'TFGr2nd22P'
    var title6 = '(General) Mathematics'
    var stitle6 = '2022'
    var id6 = 'TFGr2nd22M'
    var title7 = '(General) Sanskrit'
    var stitle7 = '2022'
    var id7 = 'TFGr2nd22Sn'
    var title8 = '(General) GK 1'
    var stitle8 = '2022'
    var id8 = 'TFGr2nd22GK0'
    var title9 = '(General) GK 2'
    var stitle9 = '2022'
    var id9 = 'TFGr2nd22GK1'
    var title10 = '(General) GK 3'
    var stitle10 = '2022'
    var id10 = 'TFGr2nd22GK2'
    var title11 = '(General) GK 4'
    var stitle11 = '2022'
    var id11 = 'TFGr2nd22GK3'
    var title12 = '(Sanskrit) English'
    var stitle12 = '2022'
    var id12 = 'TFGr2nd22Esan'
    var title13 = '(Sanskrit) Science'
    var stitle13 = '2022'
    var id13 = 'TFGr2nd22Scsan'
    var title14 = '(Sanskrit) Hindi'
    var stitle14 = '2022'
    var id14 = 'TFGr2nd22Hsan'
    var title15 = '(Sanskrit) Social Science'
    var stitle15 = '2022'
    var id15 = 'TFGr2nd22SSsan'
    var title16 = '(Sanskrit) Mathematics'
    var stitle16 = '2022'
    var id16 = 'TFGr2nd22Msan'
    var title17 = '(Sanskrit) Sanskrit'
    var stitle17 = '2022'
    var id17 = 'TFGr2nd22Snsan'
    var title18 = '(Sanskrit) GK & Psychology 1'
    var stitle18 = '2022'
    var id18 = 'TFGr2nd22GK0san'
    var title19 = '(Sanskrit) GK & Psychology 2'
    var stitle19 = '2022'
    var id19 = 'TFGr2nd22GK1san'
  }

  let listViewRef
  const [dataSource, setDataSource] = useState([
    {
      id: id0,
      title: title0,
      subtitle: stitle0,
    },
    {
      id: id1,
      title: title1,
      subtitle: stitle1,
    },
    {
      id: id2,
      title: title2,
      subtitle: stitle2,
    },
    {
      id: id3,
      title: title3,
      subtitle: stitle3,
    },
    {
      id: id4,
      title: title4,
      subtitle: stitle4,
    },
    {
      id: id5,
      title: title5,
      subtitle: stitle5,
    },
    {
      id: id6,
      title: title6,
      subtitle: stitle6,
    },
    {
      id: id6,
      title: title6,
      subtitle: stitle6,
    },
    {
      id: id7,
      title: title7,
      subtitle: stitle7,
    },
    {
      id: id8,
      title: title8,
      subtitle: stitle8,
    },
    {
      id: id9,
      title: title9,
      subtitle: stitle9,
    },
    {
      id: id10,
      title: title10,
      subtitle: stitle10,
    },
    {
      id: id11,
      title: title11,
      subtitle: stitle11,
    },
    {
      id: id12,
      title: title12,
      subtitle: stitle12,
    },
    {
      id: id13,
      title: title13,
      subtitle: stitle13,
    },
    {
      id: id14,
      title: title14,
      subtitle: stitle14,
    },
    {
      id: id15,
      title: title15,
      subtitle: stitle15,
    },
    {
      id: id16,
      title: title16,
      subtitle: stitle16,
    },
    {
      id: id17,
      title: title17,
      subtitle: stitle17,
    },
    {
      id: id18,
      title: title18,
      subtitle: stitle18,
    },
    {
      id: id19,
      title: title19,
      subtitle: stitle19,
    },
  ])

  const getItem = item => {
    if (mId == 'TF2ndge') {
      if (item.id == 'TFGr2nd22U') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22U.pdf?alt=media&token=8a688195-cf05-406b-9cf1-6edb54b46adc'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22U',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22E') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22E.pdf?alt=media&token=6cb89cc7-0ea2-4f82-a9e0-354feeef5a58'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22E',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22Sc') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22Sc.pdf?alt=media&token=3efb35e8-182d-4466-81f7-0cc6ee4748bf'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22Sc',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22H') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22H.pdf?alt=media&token=a3231be7-7347-4d71-b7b4-895d126b883d'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22H',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22SS') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22SS.pdf?alt=media&token=df52cce5-ba12-49f0-a57a-d88dc87806e6'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22SS',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22P') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22P.pdf?alt=media&token=2df3ac21-fe91-40c7-953c-9a9e9d5538fc'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22P',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22M') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22M.pdf?alt=media&token=474b46f8-a3cc-4795-8bc0-47f5330e0f7a'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22M',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22Sn') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22Sn.pdf?alt=media&token=ef0a66ec-588a-4c9f-8428-523dff35a943'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22Sn',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22GK0') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22GK0.pdf?alt=media&token=26e4be46-50c6-4d28-9764-fb09eb9c9ccf'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22GK0',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22GK1') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22GK1.pdf?alt=media&token=eb669c11-6c00-4eff-b064-2be2c85fb350'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22GK1',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22GK2') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22GK2.pdf?alt=media&token=dbe10a2b-3c5f-421e-8829-ba1fafb8ae08'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22GK2',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22GK3') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22GK3.pdf?alt=media&token=a41b21b4-ce92-4925-8c98-a496074279b3'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22GK3',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22Esan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22Esan.pdf?alt=media&token=c6418304-5659-49e6-9845-997b385c972c'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22Esan',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22Scsan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22Scsan.pdf?alt=media&token=6b6b90e1-c8d4-452c-bc2e-c9129622da4d'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22Scsan',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22Hsan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22Hsan.pdf?alt=media&token=2af7553b-8af2-420a-be5c-aeb148bcc9a6'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22Hsan',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22SSsan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22SSsan.pdf?alt=media&token=e20afaf8-73bd-4761-8e84-86d415a7865a'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22SSsan',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22Msan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22Msan.pdf?alt=media&token=4e285a42-abbc-48b1-819d-3adee068b4fa'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22Msan',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22Snsan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22Snsan.pdf?alt=media&token=92858d21-3de3-4e74-9ff0-a5cac24d3d9a'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22Snsan',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22GK0san') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22GK0san.pdf?alt=media&token=bf9aba78-11d0-43bb-8601-551a79c8b458'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22GK0san',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22GK1san') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr2nd%2FTFGr2nd22GK1san.pdf?alt=media&token=ef89f568-de73-4f6f-91ba-a124aa178db9'
        navigation.navigate('PdfScreen', {
          mId: 'TF2ndge',
          Id: 'TFGr2nd22GK1san',
          pdfTitle: '2nd Grade Teacher Exam 2022',
          pdfHead: '2nd Grade Teacher Exam',
          link: linktext,
        })
      }
    }
  }

  // var themecolor = '#1a00ff';

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
  return (
    <View style={[styles.spr_container, {backgroundColor: theme.bg}]}>
      <View style={styles.container}>
        <NavbarScreen navigation={navigation} pdfTitle={pdfTitle} />

        <SafeAreaView style={styles.listContainer0}>
          <FlatList
            // numColumns={2}
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
          />
        </SafeAreaView>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 1,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: 'transparent',
        }}>

      </View>
    </View>
  )
}
export default ExamScreen20
