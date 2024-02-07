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

const MDSUbedScreen = ({navigation, route}) => {
  const {theme} = useTheme()
  const {Id} = route.params
  const {pdfTitle} = route.params
  // const { value } = route.params;

  const CM1 = [
    {
      headtitle: 'B.Ed part 1(1st Year)',
      data: [
        {
          id: 'CM1Ph',
          title: 'Pedagogy of Hindi',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM1Pen',
          title: 'Pedagogy of English',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM1Pps',
          title: 'Pedagogy of Physical Science',
          subtitle: '2015,17,18,19,21',
        },
        {
          id: 'CM1Ps',
          title: 'Pedagogy of Science',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM1Pss',
          title: 'Pedagogy of Social Science',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM1Pu',
          title: 'Pedagogy of Urdu',
          subtitle: '2015,16,17,21',
        },
        {
          id: 'CM1Pm',
          title: 'Pedagogy of Mathematics',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM1Cr',
          title: 'Curriculum and School',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM1EP',
          title: 'Education for Peace',
          subtitle: '2016,18,19,21',
        },
        {
          id: 'CM1EE',
          title: 'Environmental Education',
          subtitle: '2015,16,18,19,21',
        },
        {
          id: 'CM1LLC',
          title: 'Learner,Learning Cognition',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM1Pbs',
          title: 'Pedagogy of Biological Science',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM1AL',
          title: 'Assesment for Learning',
          subtitle: '2016,18,19,21',
        },
        {
          id: 'CM1BE',
          title: 'Basics in Education',
          subtitle: '2017,18,19,21',
        },
      ],
    },
  ]
  const CM2 = [
    {
      headtitle: 'B.Ed part 2(2nd Year)',
      data: [
        {
          id: 'CM2Ph',
          title: 'Pedagogy of Hindi',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM2Pen',
          title: 'Pedagogy of English',
          subtitle: '2016,17,18,19,20,21',
        },
        {
          id: 'CM2Pps',
          title: 'Pedagogy of Physical Science',
          subtitle: '2017,18,19,20,21',
        },
        {
          id: 'CM2Ps',
          title: 'Pedagogy of Science',
          subtitle: '2016,17,18,19,20,21',
        },
        {
          id: 'CM2Pss',
          title: 'Pedagogy of Social Science',
          subtitle: '2015,16,17,18,19,20,21',
        },
        {
          id: 'CM2Pu',
          title: 'Pedagogy of Urdu',
          subtitle: '2017,18,20,21',
        },
        {
          id: 'CM2Pm',
          title: 'Pedagogy of Mathematics',
          subtitle: '2015,16,17,18,19,20,21',
        },
        {
          id: 'CM2VEI',
          title: 'Vision of Education in India',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM2SSI',
          title: 'Schooling, Socialization and Identity',
          subtitle: '2016,18,19,21',
        },
        {
          id: 'CM2GIE',
          title: 'Gender Issues in Education',
          subtitle: '2015,16,18,19,21',
        },
        {
          id: 'CM2ASNI',
          title: 'Addressing Special Needs in Inclusive school',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM2PBS',
          title: 'Pedagogy of Biological Science',
          subtitle: '2017,18,19,20,21',
        },
      ],
    },
  ]
  const getItem = item => {
    if (item.id == 'CM1Ph') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fph.pdf?alt=media&token=0a68c702-9807-4647-9963-f27cb34b13fc'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1Ph',
        pdfTitle: 'Pedagogy of Hindi',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1Pen') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fpe.pdf?alt=media&token=5094fb8a-1117-46e4-ba13-f052bef3551f'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1Pen',
        pdfTitle: 'Pedagogy of English',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1Pps') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fpps.pdf?alt=media&token=2266980d-f0ee-4155-9a30-c44922d18403'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1Pps',
        pdfTitle: 'Pedagogy of Physical Science',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1Ps') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fps.pdf?alt=media&token=61f59142-b644-41ea-bf5d-6a6eefc2b2b1'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1Ps',
        pdfTitle: 'Pedagogy of Science',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1Pss') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fpss.pdf?alt=media&token=8641670b-35d1-4ef8-9093-d4f487eb6ecc'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1Pss',
        pdfTitle: 'Pedagogy of Social Science',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1Pu') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fpu.pdf?alt=media&token=9d92c959-82ec-4688-b391-861b66a7fa6b'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1Pu',
        pdfTitle: 'Pedagogy of Urdu',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1Pm') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fpm.pdf?alt=media&token=b9d8038f-35c7-4363-9173-6b6cec2317e1'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1Pm',
        pdfTitle: 'Pedagogy of Mathematics',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1Cr') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fcr.pdf?alt=media&token=4661d836-2b2b-4443-8c39-c450e102bd32'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1Cr',
        pdfTitle: 'Curriculum and School',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1EP') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fep.pdf?alt=media&token=a24eef7b-8580-4958-a18d-913865fa3803'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1EP',
        pdfTitle: 'Education for Peace',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1EE') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fee.pdf?alt=media&token=513dd424-3cde-4e0e-a124-a740ed91ab6a'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1EE',
        pdfTitle: 'Environmental Education',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1LLC') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fllc.pdf?alt=media&token=2e738fcf-7528-4003-bd2c-ee827a0ba2a1'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1LLC',
        pdfTitle: 'Learner,Learning Cognition',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1Pbs') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fpbs.pdf?alt=media&token=3b19308a-cdae-426d-b5d0-57a5bfda9c89'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1Pbs',
        pdfTitle: 'Pedagogy of Biological Science',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1AL') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fas.pdf?alt=media&token=efcd1c33-f788-49b2-a50e-0b08f55cb5b8'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1AL',
        pdfTitle: 'Assesment for Learning',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1BE') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed1%2Fbe.pdf?alt=media&token=b9500df0-bfa5-467b-b867-1bcdd753be0e'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1BE',
        pdfTitle: 'Basics in Education',
        pdfHead: 'B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM2Ph') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fph.pdf?alt=media&token=3f290b9c-72d6-4e37-af4f-b7f3ae644d5c'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2Ph',
        pdfTitle: 'Pedagogy of Hindi',
        pdfHead: 'B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2Pen') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fpe.pdf?alt=media&token=6edde39f-cdc0-4857-8136-5079a663d076'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2Pen',
        pdfTitle: 'Pedagogy of English',
        pdfHead: 'B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2Pps') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fpps.pdf?alt=media&token=5bcb7a0a-42f1-47f1-963f-164b7de2b7e9'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2Pps',
        pdfTitle: 'Pedagogy of Physical Science',
        pdfHead: 'B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2Ps') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fps.pdf?alt=media&token=5d2c6902-e39c-4c8d-9404-42dfbe027ba8'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2Ps',
        pdfTitle: 'Pedagogy of Science',
        pdfHead: 'B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2Pss') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fpss.pdf?alt=media&token=aabda466-8a27-4d51-a4e7-3300cba846b0'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2Pss',
        pdfTitle: 'Pedagogy of Social Science',
        pdfHead: 'B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2Pu') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fpu.pdf?alt=media&token=8f6965d5-71da-4a52-81f0-8b5bccc86d05'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2Pu',
        pdfTitle: 'Pedagogy of Urdu',
        pdfHead: 'B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2Pm') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fpm.pdf?alt=media&token=e069f458-4086-4c34-b183-4c7d9907fc10'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2Pm',
        pdfTitle: 'Pedagogy of Mathematics',
        pdfHead: 'B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2VEI') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fvei.pdf?alt=media&token=ebe30e60-76a6-4bee-a53e-742a103bf4db'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2VEI',
        pdfTitle: 'Vision of Education in India',
        pdfHead: 'B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2SSI') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fssi.pdf?alt=media&token=ee3421b6-556a-479f-a406-bc7c5465e268'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2SSI',
        pdfTitle: 'Schooling, Socialization and Identity',
        pdfHead: 'B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2GIE') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fgie.pdf?alt=media&token=a3b06c42-57a5-4d2d-9382-9d35ab351ce5'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2GIE',
        pdfTitle: 'Gender Issues in Education',
        pdfHead: 'B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2ASNI') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fasni.pdf?alt=media&token=a3b688de-0a64-4115-82ce-8a5d04f679d6'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2ASNI',
        pdfTitle: 'Addressing Special Needs in Inclusive school',
        pdfHead: 'B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2PBS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubed2%2Fpbs.pdf?alt=media&token=604d6710-544c-4a0f-bc0c-ae359216aa04'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2PBS',
        pdfTitle: 'Pedagogy of Biological Science',
        pdfHead: 'B.Ed part 2',
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
export default MDSUbedScreen
