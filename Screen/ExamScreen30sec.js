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

const ExamScreen30sec = ({navigation, route}) => {
  const {theme} = useTheme()
  const {Id} = route.params
  const {pdfTitle} = route.params
  // const { value } = route.params;

  const C1 = [
    {
      headtitle: 'Civil Services (Preliminary) Examination, 2023',
      data: [
        {
          id: 'C1G1',
          title: 'General Studies Paper I',
          subtitle: '2023',
        },
        {
          id: 'C1G2',
          title: 'General Studies Paper II',
          subtitle: '2023',
        },
      ],
    },
  ]
  const C2 = [
    {
      headtitle: 'Civil Services (Preliminary) Examination, 2022',
      data: [
        {
          id: 'C2G1',
          title: 'General Studies Paper I',
          subtitle: '2022',
        },
        {
          id: 'C2G2',
          title: 'General Studies Paper II',
          subtitle: '2022',
        },
      ],
    },
  ]
  const C3 = [
    {
      headtitle: 'Civil Services (Main) Examination, 2022',
      data: [
        {
          id: 'C3GE',
          title: 'General : Essay',
          subtitle: '2022',
        },
        {
          id: 'C3GG1',
          title: 'General Studies : General Studies - I',
          subtitle: '2022',
        },
        {
          id: 'C3GG2',
          title: 'General Studies : General Studies - II',
          subtitle: '2022',
        },
        {
          id: 'C3GG3',
          title: 'General Studies : General Studies - III',
          subtitle: '2022',
        },
        {
          id: 'C3GG4',
          title: 'General Studies : General Studies - IV',
          subtitle: '2022',
        },
        {
          id: 'C3CE1',
          title: 'Compulsory Subjects : English (Compulsory)',
          subtitle: '2022',
        },
        {
          id: 'C3CH1',
          title: 'Compulsory Subjects : Hindi (Compulsory)',
          subtitle: '2022',
        },
        {
          id: 'C3LE1',
          title: 'Literature Subjects : English Literature Paper - I',
          subtitle: '2022',
        },
        {
          id: 'C3LE2',
          title: 'Literature Subjects : English Literature Paper - II',
          subtitle: '2022',
        },
        {
          id: 'C3LH1',
          title: 'Literature Subjects : Hindi Literature Paper - I',
          subtitle: '2022',
        },
        {
          id: 'C3LH2',
          title: 'Literature Subjects : Hindi Literature Paper - II',
          subtitle: '2022',
        },
        {
          id: 'C3O',
          title: 'NOTE : Optional Subjects comes with next update',
          subtitle: ':(',
        },
      ],
    },
  ]
  const C4 = [
    {
      headtitle: 'Civil Services (Preliminary) Examination, 2021',
      data: [
        {
          id: 'C4G1',
          title: 'General Studies Paper I',
          subtitle: '2021',
        },
        {
          id: 'C4G2',
          title: 'General Studies Paper II',
          subtitle: '2021',
        },
      ],
    },
  ]
  const C5 = [
    {
      headtitle: 'Civil Services (Main) Examination, 2021',
      data: [
        {
          id: 'C5GE',
          title: 'General : Essay',
          subtitle: '2021',
        },
        {
          id: 'C5GG1',
          title: 'General Studies : General Studies - I',
          subtitle: '2021',
        },
        {
          id: 'C5GG2',
          title: 'General Studies : General Studies - II',
          subtitle: '2021',
        },
        {
          id: 'C5GG3',
          title: 'General Studies : General Studies - III',
          subtitle: '2021',
        },
        {
          id: 'C5GG4',
          title: 'General Studies : General Studies - IV',
          subtitle: '2021',
        },
        {
          id: 'C5CE1',
          title: 'Compulsory Subjects : English (Compulsory)',
          subtitle: '2021',
        },
        {
          id: 'C5CH1',
          title: 'Compulsory Subjects : Hindi (Compulsory)',
          subtitle: '2021',
        },
        {
          id: 'C5LE1',
          title: 'Literature Subjects : English Literature Paper - I',
          subtitle: '2021',
        },
        {
          id: 'C5LE2',
          title: 'Literature Subjects : English Literature Paper - II',
          subtitle: '2021',
        },
        {
          id: 'C5LH1',
          title: 'Literature Subjects : Hindi Literature Paper - I',
          subtitle: '2021',
        },
        {
          id: 'C5LH2',
          title: 'Literature Subjects : Hindi Literature Paper - II',
          subtitle: '2021',
        },
        {
          id: 'C5O',
          title: 'NOTE : Optional Subjects comes with next update',
          subtitle: ':(',
        },
      ],
    },
  ]
  const getItem = item => {
    if (item.id == 'C1G1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC1G1.pdf?alt=media&token=471a7804-4707-4836-9109-f131d1989112'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C1G1',
        pdfTitle: 'General Studies Paper I',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C1G2') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC1G2.pdf?alt=media&token=9932736e-6dae-4bfb-81ec-24eae4679448'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C1G1',
        pdfTitle: 'General Studies Paper II',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C2G1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC2G1.pdf?alt=media&token=21b79124-3b0c-433b-8bd7-7496730ffce0'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C2G1',
        pdfTitle: 'General Studies Paper I',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C2G2') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC2G2.pdf?alt=media&token=13335457-8f3d-465a-8607-05aee4d12c0b'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C2G2',
        pdfTitle: 'General Studies Paper II',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C3GE') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC3GE.pdf?alt=media&token=adb5e0ab-94ad-486e-a8e3-9abf309f025e'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C3GE',
        pdfTitle: 'General : Essay',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C3GG1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC3GG1.pdf?alt=media&token=7a06895a-3da5-475e-9de6-36cf7e658acb'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C3GG1',
        pdfTitle: 'General Studies Paper I',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C3GG2') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC3GG2.pdf?alt=media&token=e7df77f4-c572-4160-ae19-4dd059342500'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C3GG2',
        pdfTitle: 'General Studies Paper II',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C3GG3') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC3GG3.pdf?alt=media&token=c20548a1-8604-410d-891b-b7b102659c4a'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C3GG3',
        pdfTitle: 'General Studies Paper III',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C3GG4') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC3GG4.pdf?alt=media&token=ae0264d8-e0f8-4525-9150-9455928f5f39'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C3GG4',
        pdfTitle: 'General Studies Paper IV',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C3CE1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC3CE1.pdf?alt=media&token=9f592cab-b9eb-43f4-9f60-de979cf2aa05'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C3CE1',
        pdfTitle: 'Compulsory Subjects : English',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C3CH1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC3CH1.pdf?alt=media&token=e6d763b6-6a58-4572-8ecf-7220eaedd317'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C3CH1',
        pdfTitle: 'Compulsory Subjects : Hindi',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C3LE1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC3LE1.pdf?alt=media&token=d72119d1-d510-4f01-9d81-a8b44b2ec070'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C3LE1',
        pdfTitle: 'English Literature Paper - I',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C3LE2') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC3LE2.pdf?alt=media&token=d524db56-40b5-41bd-af44-2bab16efdda7'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C3LE2',
        pdfTitle: 'English Literature Paper - II',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C3LH1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC3LH1.pdf?alt=media&token=6c7c1e75-ac4e-4b78-925b-e068b9d0ee07'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C3LH1',
        pdfTitle: 'Hindi Literature Paper - I',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C3LH2') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC3LH2.pdf?alt=media&token=a6c72f65-e082-4d2b-aedb-cf09d7d20c70'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C3LH2',
        pdfTitle: 'Hindi Literature Paper - II',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C4G1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC2G1.pdf?alt=media&token=21b79124-3b0c-433b-8bd7-7496730ffce0'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C4G1',
        pdfTitle: 'General Studies Paper I',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C4G2') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC2G2.pdf?alt=media&token=13335457-8f3d-465a-8607-05aee4d12c0b'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C4G2',
        pdfTitle: 'General Studies Paper II',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C5GE') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC5GE.pdf?alt=media&token=913b59ef-c171-474c-8e66-b1494cbe0813'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C5GE',
        pdfTitle: 'General : Essay',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C5GG1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC5GG1.pdf?alt=media&token=fea41f86-743f-4a84-adb0-b937166422f2'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C5GG1',
        pdfTitle: 'General Studies Paper I',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C5GG2') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC5GG2.pdf?alt=media&token=6bc74146-81fc-497e-aef9-1556f97144dc'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C5GG2',
        pdfTitle: 'General Studies Paper II',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C5GG3') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC5GG3.pdf?alt=media&token=841c60cd-e831-4574-92fb-7dffbb823980'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C5GG3',
        pdfTitle: 'General Studies Paper III',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C5GG4') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC5GG4.pdf?alt=media&token=da12ef99-20ff-4b81-86ef-d0480c136b47'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C5GG4',
        pdfTitle: 'General Studies Paper IV',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C5CE1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC5CE1.pdf?alt=media&token=dd98d475-4b1e-43e3-9880-197a38ae10d4'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C5CE1',
        pdfTitle: 'Compulsory Subjects : English',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C5CH1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC5CH1.pdf?alt=media&token=1587b7f7-26c0-4bed-bd38-1782d5b5cece'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C5CH1',
        pdfTitle: 'Compulsory Subjects : Hindi',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C5LE1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC5LE1.pdf?alt=media&token=42372fd4-0372-4b25-b224-bbd7db501c90'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C5LE1',
        pdfTitle: 'English Literature Paper - I',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C5LE2') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC5LE2.pdf?alt=media&token=987fbca1-357e-4f28-9487-841f617a1b30'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C5LE2',
        pdfTitle: 'English Literature Paper - II',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C5LH1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC5LH1.pdf?alt=media&token=4ed8e31e-3b21-4abe-9423-9158524c3e90'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C5LH1',
        pdfTitle: 'Hindi Literature Paper - I',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == 'C5LH2') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/UpscC%2FC5LH2.pdf?alt=media&token=e2b59879-dcf1-4d09-87e1-e22e62584f6b'
      navigation.navigate('PdfScreen', {
        mId: 'AFC',
        Id: 'C5LH2',
        pdfTitle: 'Hindi Literature Paper - II',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
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
          <SectionList
            // numColumns={2}
            showsVerticalScrollIndicator={false}
            style={[styles.list_line]}
            keyExtractor={(item, index) => index.toString()}
            sections={[...C1, ...C2, ...C3, ...C4, ...C5]}
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
export default ExamScreen30sec
