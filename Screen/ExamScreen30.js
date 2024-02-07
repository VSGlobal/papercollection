import React, {useState} from 'react'
import {
  FlatList,
  SafeAreaView,
  Share,
  Pressable,
  Image,
  Dimensions,
  Text,
  Alert,
  View,
} from 'react-native'

import styles from '../Style/examsL'


import {NavigationContainer} from '@react-navigation/native'
import NavbarScreen from './Components/NavbarScreen'
import {useTheme} from '../Screen/Components/ThemeContext'

const ExamScreen30 = ({route, navigation}) => {
  const {theme} = useTheme()
  const {mId} = route.params
  const {pdfTitle} = route.params

  if (mId == 'TF1stge') {
    var title0 = '(General) GK 1'
    var stitle0 = '2022'
    var id0 = 'TFGr1st22GK1'
    var title1 = '(General) Agriculture'
    var stitle1 = '2022'
    var id1 = 'TFGr1st22AG'
    var title2 = '(General) Mathematics'
    var stitle2 = '2022'
    var id2 = 'TFGr1st22M'
    var title3 = '(General) Biology'
    var stitle3 = '2022'
    var id3 = 'TFGr1st22BIO'
    var title4 = '(General) Commerce'
    var stitle4 = '2022'
    var id4 = 'TFGr1st22COM'
    var title5 = '(General) Physics'
    var stitle5 = '2022'
    var id5 = 'TFGr1st22PHY'
    var title6 = '(General) Home Science'
    var stitle6 = '2022'
    var id6 = 'TFGr1st22HomeSc'
    var title7 = '(General) Sanskrit'
    var stitle7 = '2022'
    var id7 = 'TFGr2nd22Sn'
    var title8 = '(General) English'
    var stitle8 = '2022'
    var id8 = 'TFGr1st22Eng'
    var title9 = '(General) GK 2'
    var stitle9 = '2022'
    var id9 = 'TFGr1st22GK2'
    var title10 = '(General) Hindi'
    var stitle10 = '2022'
    var id10 = 'TFGr1st22Hin'
    var title11 = '(General) Geography'
    var stitle11 = '2022'
    var id11 = 'TFGr1st22Geo'
    var title12 = '(General) Economics'
    var stitle12 = '2022'
    var id12 = 'TFGr1st22Eco'
    var title13 = '(General) GK 3'
    var stitle13 = '2022'
    var id13 = 'TFGr1st22GK3'
    var title14 = '(General) Political Science'
    var stitle14 = '2022'
    var id14 = 'TFGr1st22Poli'
    var title15 = '(General) History'
    var stitle15 = '2022'
    var id15 = 'TFGr1st22His'
    var title16 = '(General) Chemistry'
    var stitle16 = '2022'
    var id16 = 'TFGr1st22Chem'
    var title17 = '(General) Sociology'
    var stitle17 = '2022'
    var id17 = 'TFGr1st22Soc'
    var title18 = '(General) Drawing'
    var stitle18 = '2022'
    var id18 = 'TFGr1st22Dra'
    var title19 = '(General) Public Administration'
    var stitle19 = '2022'
    var id19 = 'TFGr1st22PAdmin'
    var title20 = '(General) Panjabi'
    var stitle20 = '2022'
    var id20 = 'TFGr1st22Pan'
    var title21 = '(General) Urdu'
    var stitle21 = '2022'
    var id21 = 'TFGr1st22U'
    var title22 = '(Sanskrit)) G.A. & G.S.'
    var stitle22 = '2022'
    var id22 = 'TFGr1st22GAGSsan'
    var title23 = '(Sanskrit) Hindi'
    var stitle23 = '2022'
    var id23 = 'TFGr1st22Hinsan'
    var title24 = '(Sanskrit) English'
    var stitle24 = '2022'
    var id24 = 'TFGr1st22Engsan'
    var title25 = '(Sanskrit) Samanya Vyakaran'
    var stitle25 = '2022'
    var id25 = 'TFGr1st22SamVyasan'
    var title26 = '(Sanskrit) Sahitya'
    var stitle26 = '2022'
    var id26 = 'TFGr1st22Sahityasan'
    var title27 = '(Sanskrit) Vyakaran'
    var stitle27 = '2022'
    var id27 = 'TFGr1st22Vyasan'
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
    {
      id: id20,
      title: title20,
      subtitle: stitle20,
    },
    {
      id: id21,
      title: title21,
      subtitle: stitle21,
    },
    {
      id: id22,
      title: title22,
      subtitle: stitle22,
    },
    {
      id: id23,
      title: title23,
      subtitle: stitle23,
    },
    {
      id: id24,
      title: title24,
      subtitle: stitle24,
    },
    {
      id: id25,
      title: title25,
      subtitle: stitle25,
    },
    {
      id: id26,
      title: title26,
      subtitle: stitle26,
    },
    {
      id: id27,
      title: title27,
      subtitle: stitle27,
    },
  ])
  // var linktext = "https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22GK1.pdf?alt=media&token=75d1e24c-1d4f-4c98-95f5-6c0938407b7e";

  const getItem = item => {
    if (mId == 'TF1stge') {
      if (item.id == 'TFGr1st22GK1') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22GK1.pdf?alt=media&token=75d1e24c-1d4f-4c98-95f5-6c0938407b7e'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22GK1',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22AG') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22AG.pdf?alt=media&token=fa4167aa-384b-41f3-b2f2-3a5dc8d4ee01'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22AG',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22M') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22M.pdf?alt=media&token=6888aaf3-6eef-4489-8c76-2f210324874a'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22M',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22BIO') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22BIO.pdf?alt=media&token=a47c898f-0126-48a5-9fb2-e408f7bd7d96'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22BIO',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22COM') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22COM.pdf?alt=media&token=f3ec1aa5-5730-47db-9434-ca4a96fcc9fc'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22COM',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22PHY') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22PHY.pdf?alt=media&token=aad9dff5-d225-4849-99fe-5c3f48f3af8d'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22PHY',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr2nd22Sn') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Sn.pdf?alt=media&token=dc9aacdc-1aec-4287-97d5-2e1d25b74b08'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr2nd22Sn',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Eng') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Eng.pdf?alt=media&token=93bea95c-3f4b-4079-bedd-2b14e61c1ab2'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Eng',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22GK2') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22GK2.pdf?alt=media&token=9d6bca87-e627-4d9f-9e8b-edea06d52471'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22GK2',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Hin') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Hin.pdf?alt=media&token=8b26cef5-5780-4c4b-853a-90c476a5f16e'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Hin',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Geo') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Geo.pdf?alt=media&token=d7ac36b3-1f6c-40d4-acdb-14c3a01dd3ab'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Geo',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Eco') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Eco.pdf?alt=media&token=4874fafe-79a0-472c-ab93-2e053ef9cee0'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Eco',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22GK3') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22GK3.pdf?alt=media&token=817f4389-f407-46ee-aad2-11c130d24770'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22GK3',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Poli') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Poli.pdf?alt=media&token=196d7670-751e-4c53-94df-1c50642358c0'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Poli',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22His') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22His.pdf?alt=media&token=5da65ceb-9355-4964-be3a-9c80e33e12b2'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22His',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Chem') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Chem.pdf?alt=media&token=1167e99f-b688-423f-b54c-41faeccb96d6'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Chem',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Soc') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Soc.pdf?alt=media&token=5c005ae0-7e13-4619-8cf0-72c2925668f7'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Soc',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Dra') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Dra.pdf?alt=media&token=3d0ec7e9-89cb-465d-9116-535f051b0a62'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Dra',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22PAdmin') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22PAdmin.pdf?alt=media&token=dc005fab-7058-4e8a-a17d-530d5068c12f'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22PAdmin',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Pan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Pan.pdf?alt=media&token=ffcd3b4d-7bf2-4f3f-9466-c95f48dfd0d7'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Pan',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22U') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22U.pdf?alt=media&token=6ca51040-fcc7-40cd-acab-722700e65d4e'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22U',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22HomeSc') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22HomeSc.pdf?alt=media&token=b5b88b64-2d41-4f4c-aad3-430bad311a4c'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22HomeSc',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Hinsan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Hinsan.pdf?alt=media&token=7784160d-bcef-4274-8bf2-6223a14ae972'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Hinsan',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Engsan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Engsan.pdf?alt=media&token=b01b5b81-8458-4b9c-b2de-3ea82c50fa61'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Engsan',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22SamVyasan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22SamVyasan.pdf?alt=media&token=fa758601-303c-4915-b902-89dbd62efc81'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22SamVyasan',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Sahityasan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Sahityasan.pdf?alt=media&token=89c3a23e-9f8c-406c-874e-20a233a5f868'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Sahityasan',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22Vyasan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22Vyasan.pdf?alt=media&token=43feb3ee-c6e3-417a-af5d-2b259254d5eb'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22Vyasan',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      } else if (item.id == 'TFGr1st22GAGSsan') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Gr1st%2FTFGr1st22GAGSsan.pdf?alt=media&token=a63c26db-5c11-42c0-b546-5cbb42cca0c2'
        navigation.navigate('PdfScreen', {
          mId: 'TF1stge',
          Id: 'TFGr1st22GAGSsan',
          pdfTitle: '1st Grade Teacher Exam 2022',
          pdfHead: '1st Grade Teacher Exam',
          link: linktext,
        })
      }
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
export default ExamScreen30
