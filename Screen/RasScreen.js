
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

import { NavigationContainer } from '@react-navigation/native';
import NavbarScreen from './Components/NavbarScreen';
import {useTheme} from './Components/ThemeContext'
const RasScreen = ({navigation, route}) => {
  const {theme} = useTheme()
  const {Id} = route.params
  const {pdfTitle} = route.params
  // const { value } = route.params;

  const Y21 = [
    {
      headtitle: 'Year 2021',
      data: [
        {
          id: '21P',
          title: 'RPSC RAS Prelims Paper',
          subtitle: '2021',
        },
        {
            id: '21P1',
            title: 'RAS Main Paper 1',
            subtitle: '2021',
          },{
            id: '21P2',
            title: 'RAS Main Paper 2',
            subtitle: '2021',
          },{
            id: '21P3',
            title: 'RAS Main Paper 3',
            subtitle: '2021',
          },{
            id: '21P4',
            title: 'RAS Main Paper 4',
            subtitle: '2021',
          },
      ],
    },
  ]
  const Y18 = [
    {
      headtitle: 'Year 2018',
      data: [
        {
          id: '18P',
          title: 'RPSC RAS Prelims Paper',
          subtitle: '2018',
        },
        {
            id: '18P1',
            title: 'RAS Main Paper 1',
            subtitle: '2018',
          },{
            id: '18P2',
            title: 'RAS Main Paper 2',
            subtitle: '2018',
          },{
            id: '18P3',
            title: 'RAS Main Paper 3',
            subtitle: '2018',
          },{
            id: '18P4',
            title: 'RAS Main Paper 4',
            subtitle: '2018',
          },
      ],
    },
  ]
  const Y16 = [
    {
      headtitle: 'Year 2016',
      data: [
        {
          id: '16P',
          title: 'RPSC RAS Prelims Paper',
          subtitle: '2016',
        },
        {
            id: '16P1',
            title: 'RAS Main Paper 1',
            subtitle: '2016',
          },{
            id: '16P2',
            title: 'RAS Main Paper 2',
            subtitle: '2016',
          },{
            id: '16P3',
            title: 'RAS Main Paper 3',
            subtitle: '2016',
          },{
            id: '16P4',
            title: 'RAS Main Paper 4',
            subtitle: '2016',
          },
      ],
    },
  ]
  const Y13 = [
    {
      headtitle: 'Year 2013',
      data: [
        {
          id: '13P',
          title: 'RPSC RAS Prelims Paper',
          subtitle: '2013',
        },
        {
            id: '13P1',
            title: 'RAS Main Paper 1',
            subtitle: '2013',
          },{
            id: '13P2',
            title: 'RAS Main Paper 2',
            subtitle: '2013',
          },{
            id: '13P3',
            title: 'RAS Main Paper 3',
            subtitle: '2013',
          },{
            id: '13P4',
            title: 'RAS Main Paper 4',
            subtitle: '2013',
          },
      ],
    },
  ]
  const getItem = item => {
    if (item.id == '21P') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F21P.pdf?alt=media&token=278752d8-643f-4dc0-8da3-44b86301dd18'
      navigation.navigate('PdfScreen', {
        pdfTitle: 'RPSC RAS Prelims Paper 21',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == '21P1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F21P1.pdf?alt=media&token=73f1f891-d1c2-4dc1-bb8e-b59963e7836f'
      navigation.navigate('PdfScreen', {
        pdfTitle: 'RAS Main Paper 1',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == '21P2') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F21P2.pdf?alt=media&token=ba18209d-63b2-49fb-9595-a32bdc10ae4a'
      navigation.navigate('PdfScreen', {
        pdfTitle: 'RAS Main Paper 2',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == '21P3') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F21P3.pdf?alt=media&token=f0d788bf-7f49-47fa-97f4-21dd6a3e5c75'
      navigation.navigate('PdfScreen', {
        pdfTitle: 'RAS Main Paper 3',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == '21P4') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F21P4.pdf?alt=media&token=0fc409ba-34aa-4426-bf2f-297729ef6c6b'
      navigation.navigate('PdfScreen', {
        pdfTitle: 'RAS Main Paper 4',
        pdfHead: 'Civil Services Exam',
        link: linktext,
      })
    } else if (item.id == '18P') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F18P.pdf?alt=media&token=70b858d9-0410-42df-8148-1372a913fd47'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RPSC RAS Prelims Paper',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '18P1') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F18P1.pdf?alt=media&token=c59ea7b4-e15f-48a8-b705-ae71d4deb65c'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 1',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '18P2') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F18P2.pdf?alt=media&token=65fc0ea2-5a04-4f60-b1b4-b176a5c7120a'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 2',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '18P3') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F18P3.pdf?alt=media&token=de04050b-fb90-405f-8447-2bdd688eace4'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 3',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '18P4') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F18P4.pdf?alt=media&token=4cc4ecde-3a79-4748-b0f6-a584e807f7e0'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 4',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '16P') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F16P4.pdf?alt=media&token=a40ae302-910f-476f-bdf0-96b076704daa'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RPSC RAS Prelims Paper',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '16P1') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F16P1.pdf?alt=media&token=f174c1cf-3c44-4cfd-a4aa-d32fa24531d8'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 1',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '16P2') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F16P2.pdf?alt=media&token=325971b6-9011-40d5-922a-81be73ea776c'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 2',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '16P3') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F16P3.pdf?alt=media&token=6ed46e0b-fc8e-4b71-b455-3c12990ed586'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 3',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '16P4') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F16P4.pdf?alt=media&token=a40ae302-910f-476f-bdf0-96b076704daa'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 4',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '13P') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F13P.pdf?alt=media&token=f0c2e080-fd23-4c24-b7ee-41dd04fc36ef'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RPSC RAS Prelims Paper',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '13P1') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F13P1.pdf?alt=media&token=83ad0b98-53ea-4807-ba29-b06250ee71a1'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 1',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '13P2') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F13P2.pdf?alt=media&token=3d599e71-83a0-4127-907d-6023a8303ee0'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 2',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '13P3') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F13P3.pdf?alt=media&token=1bc82362-51b2-45fa-a540-d38a2645efb0'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 3',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } else if (item.id == '13P4') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/RAS%2F13P4.pdf?alt=media&token=3f09cbce-6600-495f-89ad-1ba31a0bb13f'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'RAS Main Paper 4',
          pdfHead: 'Civil Services Exam',
          link: linktext,
        })
      } 
  }

  return (
    <View style={[styles.spr_container, {backgroundColor: theme.bg}]}>
      <View style={styles.container}>
      <NavbarScreen 
      navigation={navigation}
      pdfTitle={pdfTitle}
      />
        
        <SafeAreaView style={styles.listContainer0}>
          <SectionList
            // numColumns={2}
            showsVerticalScrollIndicator={false}
            style={[styles.list_line]}
            keyExtractor={(item, index) => index.toString()}
            sections={[...Y21, ...Y18, ...Y16, ...Y13,]}
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
                  <Text style={[styles.logo_txt, {color: theme.t}]}>{item.title}</Text>
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
                <Text style={[styles.card_t, {color: theme.t}]}>{section.headtitle}</Text>
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
export default RasScreen;
