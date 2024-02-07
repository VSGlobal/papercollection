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
import styles from '../Style/exams'

import {NavigationContainer} from '@react-navigation/native'
import NavbarScreen from './Components/NavbarScreen'
import {useTheme} from '../Screen/Components/ThemeContext'

const ExamScreen = ({route, navigation}) => {
  const {theme} = useTheme()
  const {mId} = route.params
  const {pdfTitle} = route.params

  if (mId == 'TFbstc') {
    var title0 = 'Pre D.El.Ed (BSTC)'
    var stitle0 = '2022'
    var id0 = 'TFbstc22'
    var title1 = 'Pre D.El.Ed (BSTC)'
    var stitle1 = '2021'
    var id1 = 'TFbstc21'
    var title2 = 'Pre D.El.Ed (BSTC)'
    var stitle2 = '2020'
    var id2 = 'TFbstc20'
    var title3 = 'Pre D.El.Ed (BSTC)'
    var stitle3 = '2019'
    var id3 = 'TFbstc19'
    var title4 = 'Pre D.El.Ed (BSTC) Set A,B,C,D'
    var stitle4 = '2018'
    var id4 = 'TFbstc18'
  } else if (mId == 'TFptet') {
    var title0 = 'Pre-Teacher Education Test'
    var stitle0 = '2021'
    var id0 = 'TFptet21'
    var title1 = 'Pre-Teacher Education Test'
    var stitle1 = '2020'
    var id1 = 'TFptet20'
    var title2 = 'Pre-Teacher Education Test'
    var stitle2 = '2019'
    var id2 = 'TFptet19'
    var title3 = 'Pre-Teacher Education Test'
    var stitle3 = '2018'
    var id3 = 'TFptet18'
    var title4 = 'Pre-Teacher Education Test'
    var stitle4 = '2017'
    var id4 = 'TFptet17'
  } else if (mId == 'TFreet1') {
    var title0 = 'REET 3rd Grade / Level 1'
    var stitle0 = '2021'
    var id0 = 'TFreet121'
    var title1 = 'REET 3rd Grade / Level 1'
    var stitle1 = '2017'
    var id1 = 'TFreet117'
    var title2 = 'REET 3rd Grade / Level 1'
    var stitle2 = '2015'
    var id2 = 'TFreet115'
    var title3 = 'REET 3rd Grade / Level 1'
    var stitle3 = '2012'
    var id3 = 'TFreet112'
    var title4 = 'REET 3rd Grade / Level 1'
    var stitle4 = '2011'
    var id4 = 'TFreet111'
  } else if (mId == 'TFreet2') {
    var title0 = 'REET 3rd Grade / Level 2'
    var stitle0 = '2021'
    var id0 = 'TFreet221'
    var title1 = 'REET 3rd Grade / Level 2'
    var stitle1 = '2017'
    var id1 = 'TFreet217'
    var title2 = 'REET 3rd Grade / Level 2'
    var stitle2 = '2015'
    var id2 = 'TFreet215'
    var title3 = 'REET 3rd Grade / Level 2'
    var stitle3 = '2012'
    var id3 = 'TFreet212'
    var title4 = 'REET 3rd Grade / Level 2'
    var stitle4 = '2011'
    var id4 = 'TFreet211'
  } else if (mId == 'AFN') {
    var title0 = 'NEET'
    var stitle0 = '2023'
    var id0 = 'AFN23'
    var title1 = 'NEET'
    var stitle1 = '2022'
    var id1 = 'AFN22'
    var title2 = 'NEET'
    var stitle2 = '2021'
    var id2 = 'AFN21'
    var title3 = 'NEET'
    var stitle3 = '2020'
    var id3 = 'AFN20'
    var title4 = 'NEET'
    var stitle4 = '2019'
    var id4 = 'AFN19'
  } else if (mId == 'AFSC') {
    var title0 = 'SSC CGL Tier I (Prelims)'
    var stitle0 = '2022'
    var id0 = 'AFSC22T1'
    var title1 = 'SSC CGL Tier 2 (Main)'
    var stitle1 = '2022'
    var id1 = 'AFSC22T2'
    var title2 = 'SSC CGL Tier I (Prelims)'
    var stitle2 = '2021'
    var id2 = 'AFSC21T1'
    var title3 = 'SSC CGL Tier 2 (Main)'
    var stitle3 = '2021'
    var id3 = 'AFSC21T2'
    var title4 = 'SSC CGL Tier I (Prelims) & Tier 2 (Main)'
    var stitle4 = '2020'
    var id4 = 'AFSC20T1T2'
  } else if (mId == 'Optw') {
    var title0 = 'Patwari - Shift 1 (23 Oct)'
    var stitle0 = '2021'
    var id0 = '21A'
    var title1 = 'Patwari - Shift 2 (23 Oct)'
    var stitle1 = '2021'
    var id1 = '21B'
    var title2 = 'Patwari - Shift 1 (24 Oct)'
    var stitle2 = '2021'
    var id2 = '21C'
    var title3 = 'Patwari - Shift 2 (24 Oct)'
    var stitle3 = '2021'
    var id3 = '21D'
    var title4 = 'Patwari - Pre & Main -2015'
    var stitle4 = '2015'
    var id4 = '15PM'
  } else if (mId == 'AFCT') {
    var title0 = 'CTET - Shift 1 & 2 (January)'
    var stitle0 = '2021'
    var id0 = '21C01'
    var title1 = 'CTET - Shift 1 & 2 (July)'
    var stitle1 = '2019'
    var id1 = '19C07'
    var title2 = 'CTET - Shift 1 & 2 (December)'
    var stitle2 = '2019'
    var id2 = '19C12'
    var title3 = 'CTET - Shift 1 & 2'
    var stitle3 = '2018'
    var id3 = '18C'
    var title4 = 'Some papers will be available soon'
    var stitle4 = 'Null'
    var id4 = 'null'
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
  ])

  const getItem = item => {
    if (mId == 'TFbstc') {
      if (item.id == 'TFbstc22') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/bstc%2FBSTC22new.pdf?alt=media&token=d43b67ea-ecc7-4a36-a097-39650199ebd2'
        navigation.navigate('PdfScreen', {
          mId: 'TFbstc',
          Id: 'TFbstc22',
          pdfTitle: 'Pre D.El.Ed (BSTC) 2022',
          pdfHead: 'Pre D.El.Ed (BSTC)',
          link: linktext,
        })
      } else if (item.id == 'TFbstc21') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/bstc%2FBSTC21new.pdf?alt=media&token=10b2b96d-5a91-4def-a80b-679a2d6477b6'
        navigation.navigate('PdfScreen', {
          mId: 'TFbstc',
          Id: 'TFbstc21',
          pdfTitle: 'Pre D.El.Ed (BSTC) 2021',
          pdfHead: 'Pre D.El.Ed (BSTC)',
          link: linktext,
        })
      } else if (item.id == 'TFbstc20') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/bstc%2FTFbstc20.pdf?alt=media&token=5ca78d0f-0286-42e3-a76c-df6c17f45876'
        navigation.navigate('PdfScreen', {
          mId: 'TFbstc',
          Id: 'TFbstc20',
          pdfTitle: 'Pre D.El.Ed (BSTC) 2020',
          pdfHead: 'Pre D.El.Ed (BSTC)',
          link: linktext,
        })
      } else if (item.id == 'TFbstc19') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/bstc%2FBSTC19new.pdf?alt=media&token=2a210386-b114-4a59-88ac-39bb20d09fea'
        navigation.navigate('PdfScreen', {
          mId: 'TFbstc',
          Id: 'TFbstc19',
          pdfTitle: 'Pre D.El.Ed (BSTC) 2018',
          pdfHead: 'Pre D.El.Ed (BSTC)',
          link: linktext,
        })
      } else if (item.id == 'TFbstc18') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/bstc%2FBSTC18newC.pdf?alt=media&token=63b83118-4133-403a-b085-69d9114aa329'
        navigation.navigate('PdfScreen', {
          mId: 'TFbstc',
          Id: 'TFbstc18',
          pdfTitle: 'Pre D.El.Ed (BSTC) 2017',
          pdfHead: 'Pre D.El.Ed (BSTC)',
          link: linktext,
        })
      }
    } else if (mId == 'TFptet') {
      if (item.id == 'TFptet21') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/ptet%2FTFptet21.pdf?alt=media&token=e0d7cea0-c195-414e-a4cc-766d541c867b'
        navigation.navigate('PdfScreen', {
          mId: 'TFptet',
          Id: 'TFptet21',
          pdfTitle: 'General PTET Exams 2021',
          pdfHead: 'General PTET',
          link: linktext,
        })
      } else if (item.id == 'TFptet20') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/ptet%2FTFptet20.pdf?alt=media&token=3dace603-3779-431b-9f66-f0e01a2cb386'
        navigation.navigate('PdfScreen', {
          mId: 'TFptet',
          Id: 'TFptet20',
          pdfTitle: 'General PTET Exams 2020',
          pdfHead: 'General PTET',
          link: linktext,
        })
      } else if (item.id == 'TFptet19') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/ptet%2FTFptet19.pdf?alt=media&token=abd25dd2-6b71-4b5a-9d76-e3d526118cda'
        navigation.navigate('PdfScreen', {
          mId: 'TFptet',
          Id: 'TFptet19',
          pdfTitle: 'General PTET Exams 2019',
          pdfHead: 'General PTET',
          link: linktext,
        })
      } else if (item.id == 'TFptet18') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/ptet%2FTFptet18.pdf?alt=media&token=d354593a-1ed5-4a46-a11e-1ba3a54ffec6'
        navigation.navigate('PdfScreen', {
          mId: 'TFptet',
          Id: 'TFptet18',
          pdfTitle: 'General PTET Exams 2018',
          pdfHead: 'General PTET',
          link: linktext,
        })
      } else if (item.id == 'TFptet17') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/ptet%2FTFptet17.pdf?alt=media&token=822b51fb-40c5-41a2-9dae-cd3f4e54702f'
        navigation.navigate('PdfScreen', {
          mId: 'TFptet',
          Id: 'TFptet17',
          pdfTitle: 'General PTET Exams 2017',
          pdfHead: 'General PTET',
          link: linktext,
        })
      }
    } else if (mId == 'TFreet1') {
      if (item.id == 'TFreet121') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/reet%2FTFreet121.pdf?alt=media&token=5f56745e-5cdd-473d-be2e-9c846a28d46c'
        navigation.navigate('PdfScreen', {
          mId: 'TFreet1',
          Id: 'TFreet121',
          pdfTitle: 'REET 3rd Grade / Level 1 (2021)',
          pdfHead: 'REET 3rd Grade / Level 1',
          link: linktext,
        })
      } else if (item.id == 'TFreet117') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/reet%2FTFreet117.pdf?alt=media&token=730972f2-a0c2-427c-a9ec-b098e9f34d7d'
        navigation.navigate('PdfScreen', {
          mId: 'TFreet1',
          Id: 'TFreet117',
          pdfTitle: 'REET 3rd Grade / Level 1 (2017)',
          pdfHead: 'REET 3rd Grade / Level 1',
          link: linktext,
        })
      } else if (item.id == 'TFreet115') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/reet%2FTFreet115.pdf?alt=media&token=a08212e1-d5d6-40a0-9096-ba9124b299fc'
        navigation.navigate('PdfScreen', {
          mId: 'TFreet1',
          Id: 'TFreet115',
          pdfTitle: 'REET 3rd Grade / Level 1 (2015)',
          pdfHead: 'REET 3rd Grade / Level 1',
          link: linktext,
        })
      } else if (item.id == 'TFreet112') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/reet%2FTFreet112.pdf?alt=media&token=d4fb5884-b29b-49c8-98ce-e5058df92d5b'
        navigation.navigate('PdfScreen', {
          mId: 'TFreet1',
          Id: 'TFreet112',
          pdfTitle: 'REET 3rd Grade / Level 1 (2012)',
          pdfHead: 'REET 3rd Grade / Level 1',
          link: linktext,
        })
      } else if (item.id == 'TFreet111') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/reet%2FTFreet111.pdf?alt=media&token=0fd0a976-44bb-4bbb-9828-dcc6579768c3'
        navigation.navigate('PdfScreen', {
          mId: 'TFreet1',
          Id: 'TFreet111',
          pdfTitle: 'REET 3rd Grade / Level 1 (2011)',
          pdfHead: 'REET 3rd Grade / Level 1',
          link: linktext,
        })
      }
    } else if (mId == 'TFreet2') {
      if (item.id == 'TFreet221') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/reet%2FTFreet221.pdf?alt=media&token=cb87a3a5-5fbf-49ed-b750-bda3a7c524e1'
        navigation.navigate('PdfScreen', {
          mId: 'TFreet2',
          Id: 'TFreet221',
          pdfTitle: 'REET 3rd Grade / Level 2 (2021)',
          pdfHead: 'REET 3rd Grade / Level 2',
          link: linktext,
        })
      } else if (item.id == 'TFreet217') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/reet%2FTFreet217.pdf?alt=media&token=f72e6945-0cd3-4ca9-b675-7baece0fb355'
        navigation.navigate('PdfScreen', {
          mId: 'TFreet2',
          Id: 'TFreet217',
          pdfTitle: 'REET 3rd Grade / Level 2 (2017)',
          pdfHead: 'REET 3rd Grade / Level 2',
          link: linktext,
        })
      } else if (item.id == 'TFreet215') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/reet%2FTFreet215.pdf?alt=media&token=e24df400-04a5-4f3f-82d9-29506edb2d82'
        navigation.navigate('PdfScreen', {
          mId: 'TFreet2',
          Id: 'TFreet215',
          pdfTitle: 'REET 3rd Grade / Level 2 (2015)',
          pdfHead: 'REET 3rd Grade / Level 2',
          link: linktext,
        })
      } else if (item.id == 'TFreet212') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/reet%2FTFreet212.pdf?alt=media&token=43b2508b-c8a4-4772-9724-c120afe3a1e4'
        navigation.navigate('PdfScreen', {
          mId: 'TFreet2',
          Id: 'TFreet212',
          pdfTitle: 'REET 3rd Grade / Level 2 (2012)',
          pdfHead: 'REET 3rd Grade / Level 2',
          link: linktext,
        })
      } else if (item.id == 'TFreet211') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/reet%2FTFreet211.pdf?alt=media&token=7a992369-c4f7-4e3b-ae21-ebfa905deb13'
        navigation.navigate('PdfScreen', {
          mId: 'TFreet2',
          Id: 'TFreet211',
          pdfTitle: 'REET 3rd Grade / Level 2 (2011)',
          pdfHead: 'REET 3rd Grade / Level 2',
          link: linktext,
        })
      }
    } else if (mId == 'AFN') {
      if (item.id == 'AFN23') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/NEET%2FAFN23.pdf?alt=media&token=41d4328d-b4e4-4365-8c9d-eb3168aa0127'
        navigation.navigate('PdfScreen', {
          mId: 'AFN',
          Id: 'AFN23',
          pdfTitle: 'NEET 2023',
          pdfHead: 'NEET',
          link: linktext,
        })
      } else if (item.id == 'AFN22') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/NEET%2FAFN22.pdf?alt=media&token=47b90c84-3fb2-42ba-a34d-e2c55f80a516'
        navigation.navigate('PdfScreen', {
          mId: 'AFN',
          Id: 'AFN22',
          pdfTitle: 'NEET 2022',
          pdfHead: 'NEET',
          link: linktext,
        })
      } else if (item.id == 'AFN21') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/NEET%2FAFN21.pdf?alt=media&token=a0995b1b-2940-410c-b543-04415883a77c'
        navigation.navigate('PdfScreen', {
          mId: 'AFN',
          Id: 'AFN21',
          pdfTitle: 'NEET 2021',
          pdfHead: 'NEET',
          link: linktext,
        })
      } else if (item.id == 'AFN20') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/NEET%2FAFN20.pdf?alt=media&token=c90936eb-742e-415a-a77a-27f366502652'
        navigation.navigate('PdfScreen', {
          mId: 'AFN',
          Id: 'AFN20',
          pdfTitle: 'NEET 2020',
          pdfHead: 'NEET',
          link: linktext,
        })
      } else if (item.id == 'AFN19') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/NEET%2FAFN19.pdf?alt=media&token=fc85228e-1755-48f2-a024-879a0d07a533'
        navigation.navigate('PdfScreen', {
          mId: 'AFN',
          Id: 'AFN19',
          pdfTitle: 'NEET 2019',
          pdfHead: 'NEET',
          link: linktext,
        })
      }
    } else if (mId == 'AFSC') {
      if (item.id == 'AFSC22T1') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/SSC%20CGL%2FSSC22.pdf?alt=media&token=9688e254-1f3b-4c7a-9399-0f5976d795ae'
        navigation.navigate('PdfScreen', {
          mId: 'AFSC',
          Id: 'AFSC22T1',
          pdfTitle: 'SSC CGL Tier I (Prelims)',
          pdfHead: 'SSC CGL',
          link: linktext,
        })
      } else if (item.id == 'AFSC22T2') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/SSC%20CGL%2FSSC22T2.pdf?alt=media&token=fd239775-8e5a-4387-b08b-b97d84dcae4d'
        navigation.navigate('PdfScreen', {
          mId: 'AFSC',
          Id: 'AFSC22T2',
          pdfTitle: 'SSC CGL Tier 2 (Main)',
          pdfHead: 'SSC CGL',
          link: linktext,
        })
      } else if (item.id == 'AFSC21T1') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/SSC%20CGL%2FSSC21T1.pdf?alt=media&token=f8eeb644-73d0-42e5-bb5c-a628ba41c833'
        navigation.navigate('PdfScreen', {
          mId: 'AFSC',
          Id: 'AFSC21T1',
          pdfTitle: 'SSC CGL Tier I (Prelims)',
          pdfHead: 'SSC CGL',
          link: linktext,
        })
      } else if (item.id == 'AFSC21T2') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/SSC%20CGL%2FSSC21T2.pdf?alt=media&token=16c1bfcf-e0bd-479c-9c1b-30d383c52b76'
        navigation.navigate('PdfScreen', {
          mId: 'AFSC',
          Id: 'AFSC21T2',
          pdfTitle: 'SSC CGL Tier 2 (Main)',
          pdfHead: 'SSC CGL',
          link: linktext,
        })
      } else if (item.id == 'AFSC20T1T2') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/SSC%20CGL%2FSSC20T1T2.pdf?alt=media&token=0a1bbb57-97c4-49fb-ab2e-b2c31d7d63ad'
        navigation.navigate('PdfScreen', {
          mId: 'AFSC',
          Id: 'AFSC20T1T2',
          pdfTitle: 'SSC CGL Tier I (Prelims) & Tier 2 (Main)',
          pdfHead: 'SSC CGL',
          link: linktext,
        })
      }
    } else if (mId == 'Optw') {
      if (item.id == '21A') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Raj%20Patwari%2F21A.pdf?alt=media&token=82300244-2fb3-43c5-949b-26cf46a09708'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'Patwari - Shift 1 (23 Oct)',
          pdfHead: 'Rajasthan Patwari',
          link: linktext,
        })
      } else if (item.id == '21B') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Raj%20Patwari%2F21B.pdf?alt=media&token=c41d9a13-b17b-4069-9dd5-d708b50c4284'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'Patwari - Shift 2 (23 Oct)',
          pdfHead: 'Rajasthan Patwari',
          link: linktext,
        })
      } else if (item.id == '21C') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Raj%20Patwari%2F21C.pdf?alt=media&token=cd7ed7d4-5930-4ea9-834f-21a6f2472b50'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'Patwari - Shift 1 (24 Oct)',
          pdfHead: 'Rajasthan Patwari',
          link: linktext,
        })
      } else if (item.id == '21D') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Raj%20Patwari%2F21D.pdf?alt=media&token=8834df3d-33ef-49ff-ab4f-a6d78fc98489'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'Patwari - Shift 2 (24 Oct)',
          pdfHead: 'Rajasthan Patwari',
          link: linktext,
        })
      } else if (item.id == '15PM') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Raj%20Patwari%2F15PM.pdf?alt=media&token=16e64665-ceac-4af4-9218-07096d1b93a8'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'Patwari - Pre & Main',
          pdfHead: 'Rajasthan Patwari',
          link: linktext,
        })
      }
    } else if (mId == 'AFCT') {
      if (item.id == '21C01') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/ctet%2F21C01.pdf?alt=media&token=44c2bc87-dcb5-4ba8-9cb1-515f6873b693'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'CTET - Shift 1 & 2 (January)',
          pdfHead: 'CTET',
          link: linktext,
        })
      } else if (item.id == '19C07') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/ctet%2F19C07.pdf?alt=media&token=69b99304-fbfa-4010-beb8-bd063e1bd01f'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'CTET - Shift 1 & 2 (July)',
          pdfHead: 'CTET',
          link: linktext,
        })
      } else if (item.id == '19C12') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/ctet%2F19C12.pdf?alt=media&token=8d245aca-0f97-444b-aee0-7900856c2c5d'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'CTET - Shift 1 & 2 (December)',
          pdfHead: 'CTET',
          link: linktext,
        })
      } else if (item.id == '18C') {
        let linktext =
          'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/ctet%2F18C.pdf?alt=media&token=3c0faf10-de41-4a85-b77d-f901c70122ea'
        navigation.navigate('PdfScreen', {
          pdfTitle: 'CTET - Shift 1 & 2',
          pdfHead: 'CTET',
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
export default ExamScreen
