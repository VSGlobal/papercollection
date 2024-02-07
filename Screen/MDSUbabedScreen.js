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
const MDSUbabedScreen = ({navigation, route}) => {
  const {theme} = useTheme()
  const {Id} = route.params
  const {pdfTitle} = route.params
  // const { value } = route.params;
  const CM1 = [
    {
      headtitle: 'B.A B.Ed part 1(1st Year)',
      data: [
        {
          id: 'CM1GH',
          title: 'General Hindi',
          subtitle: '2017,19,21',
        },
        {
          id: 'CM1GEn',
          title: 'General English',
          subtitle: '2018,19,21',
        },
        {
          id: 'CM1LH',
          title: 'Hindi Literature',
          subtitle: '2017,18,21',
        },
        {
          id: 'CM1LEn',
          title: 'English Literature',
          subtitle: '2017,18,20,21',
        },
        {
          id: 'CM1PS',
          title: 'Political Science',
          subtitle: '2017,21',
        },
        {
          id: 'CM1G',
          title: 'Geography',
          subtitle: '2017,18,19,21',
        },
        {
          id: 'CM1H',
          title: 'History',
          subtitle: '2017,18,19,21',
        },
        {
          id: 'CM1E',
          title: 'Economics',
          subtitle: '2017,20,21',
        },
        {
          id: 'CM1VEI',
          title: 'Vision Of Education In India',
          subtitle: '2017,18,19,21',
        },
        {
          id: 'CM1EESD',
          title: 'Environmental Education And Sustainable Development',
          subtitle: '2017,18,19,21',
        },
      ],
    },
  ]
  const CM2 = [
    {
      headtitle: 'B.A B.Ed part 2(2nd Year)',
      data: [
        {
          id: 'CM2LH',
          title: 'Hindi Literature',
          subtitle: '2017,18,19,21',
        },
        {
          id: 'CM2LEn',
          title: 'English Literature',
          subtitle: '2017,18,19,21',
        },
        {
          id: 'CM2PS',
          title: 'Political Science',
          subtitle: '2017,18',
        },
        {
          id: 'CM2G',
          title: 'Geography',
          subtitle: '2017,18,19,21',
        },
        {
          id: 'CM2H',
          title: 'History',
          subtitle: '2017,18,19,21',
        },
        {
          id: 'CM2E',
          title: 'Economics',
          subtitle: '2017,18,21',
        },
        {
          id: 'CM2LLC',
          title: 'Learning, Learner and Cognition',
          subtitle: '2018,19,21',
        },
        {
          id: 'CM2ASNIS',
          title: 'Addressing Special Needs in Inclusive School',
          subtitle: '2018,19,21',
        },
      ],
    },
  ]
  const CM3 = [
    {
      headtitle: 'B.A B.Ed part 3(3rd Year)',
      data: [
        {
          id: 'CM3PH',
          title: 'Pedagogy Hindi',
          subtitle: '2018,19,21',
        },
        {
          id: 'CM3PEn',
          title: 'Pedagogy English',
          subtitle: '2018,19,21',
        },
        {
          id: 'CM3PPS',
          title: 'Pedagogy Political Science',
          subtitle: '2018,19,21',
        },
        {
          id: 'CM3LH',
          title: 'Hindi Literature',
          subtitle: '2018,19,21',
        },
        {
          id: 'CM3LEn',
          title: 'English Literature',
          subtitle: '2018,19,21',
        },
        {
          id: 'CM3PS',
          title: 'Political Science',
          subtitle: '2018,19',
        },
        {
          id: 'CM3G',
          title: 'Geography',
          subtitle: '2018,19,21',
        },
        {
          id: 'CM3H',
          title: 'History',
          subtitle: '2018,19,21',
        },
        {
          id: 'CM3E',
          title: 'Economics',
          subtitle: '2018,19',
        },
        {
          id: 'CM3SSGC',
          title: 'Schooling, Socialization and Gender Concerns',
          subtitle: '2019,21',
        },
        {
          id: 'CM3ISS',
          title: 'Instructional Strategies and Skills',
          subtitle: '2018',
        },
      ],
    },
  ]
  const CM4 = [
    {
      headtitle: 'B.A B.Ed part 4(4th Year)',
      data: [
        {
          id: 'CM4LH',
          title: 'Hindi Literature',
          subtitle: '2020,21',
        },
        {
          id: 'CM4LEn',
          title: 'English Literature',
          subtitle: '2020,21',
        },
        {
          id: 'CM4PS',
          title: 'Political Science',
          subtitle: '2020,21',
        },
        {
          id: 'CM4G',
          title: 'Geography',
          subtitle: '2020,21',
        },
        {
          id: 'CM4H',
          title: 'History',
          subtitle: '2020,21',
        },
        {
          id: 'CM4E',
          title: 'Economics',
          subtitle: '2020',
        },
        {
          id: 'CM4CS',
          title: 'Curriculum and School',
          subtitle: '2020,21',
        },
        {
          id: 'CM4AL',
          title: 'Assessment for Learning',
          subtitle: '2020,21',
        },
      ],
    },
  ]
  const getItem = item => {
    if (item.id == 'CM1GH') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed1%2FGH.pdf?alt=media&token=efa96880-5077-4f91-81f1-15a701730cab'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1GH',
        pdfTitle: 'General Hindi',
        pdfHead: 'MDSU B.A B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1GEn') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed1%2FGEn.pdf?alt=media&token=87416066-7657-4e1f-b166-e22b83cf26e6'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1GEn',
        pdfTitle: 'General English',
        pdfHead: 'MDSU B.A B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1LH') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed1%2FLH.pdf?alt=media&token=b8305dc0-180a-41fc-8367-559497b6e518'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1LH',
        pdfTitle: 'Hindi Literature',
        pdfHead: 'MDSU B.A B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1LEn') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed1%2FLEn.pdf?alt=media&token=8e6ce799-791e-46e1-a536-b0a2458c964a'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1LEn',
        pdfTitle: 'English Literature',
        pdfHead: 'MDSU B.A B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1PS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed1%2FPS.pdf?alt=media&token=8e808e8c-c914-43a6-b648-82c01a906a20'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1PS',
        pdfTitle: 'Political Science',
        pdfHead: 'MDSU B.A B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1G') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed1%2FG.pdf?alt=media&token=954fbb72-d605-4fec-80dc-7e4ff21bfe5f'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1G',
        pdfTitle: 'Geography',
        pdfHead: 'MDSU B.A B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1H') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed1%2FH.pdf?alt=media&token=cc2c0acc-0d50-469c-90d4-de5590243562'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1H',
        pdfTitle: 'History',
        pdfHead: 'MDSU B.A B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1E') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed1%2FE.pdf?alt=media&token=f6120fac-3c11-412c-b961-50c1c4029fac'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1E',
        pdfTitle: 'Economics',
        pdfHead: 'MDSU B.A B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1VEI') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed1%2FVEI.pdf?alt=media&token=f2c0da6f-3c43-4372-9f0e-8c344db7ba8a'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1VEI',
        pdfTitle: 'Vision Of Education In India',
        pdfHead: 'MDSU B.A B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1EESD') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed1%2FEES.pdf?alt=media&token=ccc593d0-92fd-458a-b52c-7c8a6ba65d66'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1EESD',
        pdfTitle: 'Environmental Education And Sustainable Development',
        pdfHead: 'MDSU B.A B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM2LH') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed2%2FLH.pdf?alt=media&token=bba0863b-e865-4022-b6a4-7060f540c5ba'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2LH',
        pdfTitle: 'Hindi Literature',
        pdfHead: 'MDSU B.A B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2LEn') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed2%2FLEn.pdf?alt=media&token=14119bd5-a415-46a1-b251-4b8e83ada7cf'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2LEn',
        pdfTitle: 'English Literature',
        pdfHead: 'MDSU B.A B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2PS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed2%2FPS.pdf?alt=media&token=09290283-cc1e-4233-a90e-0a4001c10eae'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2PS',
        pdfTitle: 'Political Science',
        pdfHead: 'MDSU B.A B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2G') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed2%2FG.pdf?alt=media&token=e2c3348b-9ac9-4689-83cf-654be52090b1'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2G',
        pdfTitle: 'Geography',
        pdfHead: 'MDSU B.A B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2H') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed2%2FH.pdf?alt=media&token=4184e81a-d24f-4cf1-be15-9abac7101fe9'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2H',
        pdfTitle: 'History',
        pdfHead: 'MDSU B.A B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2E') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed2%2FE.pdf?alt=media&token=93398a86-e5f4-44df-a745-b4c3a98caf98'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2E',
        pdfTitle: 'Economics',
        pdfHead: 'MDSU B.A B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2LLC') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed2%2FLLC.pdf?alt=media&token=3be9ee4c-2e39-4ed5-a4ce-0a93ddcf8c32'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2LLC',
        pdfTitle: 'Learning, Learner and Cognition',
        pdfHead: 'MDSU B.A B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2ASNIS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed2%2FASN.pdf?alt=media&token=08b22393-cc65-4dd8-a868-c55362631d22'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2ASNIS',
        pdfTitle: 'Addressing Special Needs in Inclusive School',
        pdfHead: 'MDSU B.A B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM3PH') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed3%2FPH.pdf?alt=media&token=c5255003-7db9-471d-84f9-228508e61322'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3PH',
        pdfTitle: 'Pedagogy Hindi',
        pdfHead: 'MDSU B.A B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3PEn') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed3%2FPEn.pdf?alt=media&token=b9a37e90-e46c-4035-9a9c-d180a47c5141'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3PEn',
        pdfTitle: 'Pedagogy English',
        pdfHead: 'MDSU B.A B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3PPS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed3%2FPPS.pdf?alt=media&token=53254175-f23d-4ae2-988a-569379c77d75'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3PPS',
        pdfTitle: 'Pedagogy Political Science',
        pdfHead: 'MDSU B.A B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3LH') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed3%2FLH.pdf?alt=media&token=802748a1-9ed4-4935-baf9-09294ab82622'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3LH',
        pdfTitle: 'Hindi Literature',
        pdfHead: 'MDSU B.A B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3LEn') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed3%2FLEn.pdf?alt=media&token=8e0fc109-4149-4614-9e07-52ccf5150a50'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3LEn',
        pdfTitle: 'English Literature',
        pdfHead: 'MDSU B.A B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3PS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed3%2FPS.pdf?alt=media&token=fa604ebe-a5ce-4d45-8a10-bb3b214d5922'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3PS',
        pdfTitle: 'Political Science',
        pdfHead: 'MDSU B.A B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3G') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed3%2FG.pdf?alt=media&token=38c29608-0600-4e8a-a36b-ad9a461cf00d'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3G',
        pdfTitle: 'Geography',
        pdfHead: 'MDSU B.A B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3H') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed3%2FH.pdf?alt=media&token=d2a59735-e8ad-42ac-bbe1-e44380e96425'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3H',
        pdfTitle: 'History',
        pdfHead: 'MDSU B.A B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3E') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed3%2FE.pdf?alt=media&token=f2b2685f-f342-4a26-9115-68ab94c8b493'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3E',
        pdfTitle: 'Economics',
        pdfHead: 'MDSU B.A B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3SSGC') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed3%2FSS.pdf?alt=media&token=7248b312-294c-43cc-b5a6-5cdb30ca856d'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3SSGC',
        pdfTitle: 'Schooling, Socialization and Gender Concerns',
        pdfHead: 'MDSU B.A B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3ISS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed3%2FInstructional%20Strategies%20and%20Skills.pdf?alt=media&token=e3080fcc-a5a2-46b0-9d58-d269e40e0458'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3ISS',
        pdfTitle: 'Instructional Strategies and Skills',
        pdfHead: 'MDSU B.A B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM4LH') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed4%2FLH.pdf?alt=media&token=5d01fe52-8cc4-4ae4-9526-e068ff201e1d'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4LH',
        pdfTitle: 'Hindi Literature',
        pdfHead: 'MDSU B.A B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4LEn') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed4%2FLEn.pdf?alt=media&token=5cb08cc4-95c8-4fa7-add6-5fad8ce413e3'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4LEn',
        pdfTitle: 'English Literature',
        pdfHead: 'MDSU B.A B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4PS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed4%2FPS.pdf?alt=media&token=e0b0f827-0843-412f-940e-dde0a90868cf'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4PS',
        pdfTitle: 'Political Science',
        pdfHead: 'MDSU B.A B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4G') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed4%2FG.pdf?alt=media&token=8043a037-722b-4b4a-ace0-725d49a6bcd4'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4G',
        pdfTitle: 'Geography',
        pdfHead: 'MDSU B.A B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4H') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed4%2FH.pdf?alt=media&token=bec7c8e4-0121-4450-9633-5dc4ed806fbe'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4H',
        pdfTitle: 'History',
        pdfHead: 'MDSU B.A B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4E') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed4%2FE.pdf?alt=media&token=d0e27042-8d4a-47fd-8f8b-238855193685'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4E',
        pdfTitle: 'Economics',
        pdfHead: 'MDSU B.A B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4CS') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed4%2FCS.pdf?alt=media&token=a1b4474e-1c70-4f53-9e3b-dd71d1a19156'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4CS',
        pdfTitle: 'Curriculum and School',
        pdfHead: 'MDSU B.A B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4AL') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubabed4%2FAL.pdf?alt=media&token=9548cdc8-6cf1-40db-a9a1-4d50e826bac8'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4AL',
        pdfTitle: 'Assessment for Learning',
        pdfHead: 'MDSU B.A B.Ed part 4',
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
            sections={[...CM1, ...CM2, ...CM3, ...CM4]}
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
                <Text style={[styles.card_t,{color: theme.t}]}>{section.headtitle}</Text>
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
export default MDSUbabedScreen
