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

const MDSUbscbedScreen = ({navigation, route}) => {
  const {theme} = useTheme()
  const {Id} = route.params
  const {pdfTitle} = route.params
  // const { value } = route.params;

  const CM1 = [
    {
      headtitle: 'B.Sc B.Ed part 1(1st Year)',
      data: [
        {
          id: 'CM1H1',
          title: 'General Hindi',
          subtitle: '2016,18,19,21',
        },
        {
          id: 'CM1En1',
          title: 'General English',
          subtitle: '2015,16,18,19,21',
        },
        {
          id: 'CM1P1',
          title: 'Physics I & II',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM1C1',
          title: 'Chemistry I & II',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM1M1',
          title: 'Mathematics I & II',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM1B1',
          title: 'Botany I & II',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM1Z1',
          title: 'Zoology I & II',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM1V1',
          title: 'Vision Of Education In India: Concerns And Issue',
          subtitle: '2017,18,19,21',
        },
        {
          id: 'CM1E1',
          title: 'Environmental Education And Sustainable Development',
          subtitle: '2015,17,18,19,21',
        },
      ],
    },
  ]
  const CM2 = [
    {
      headtitle: 'B.Sc B.Ed part 2(2nd Year)',
      data: [
        {
          id: 'CM2P1',
          title: 'Physics I & II & III',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM2C1',
          title: 'Chemistry I & II & III',
          subtitle: '2015,16,18,19,21',
        },
        {
          id: 'CM2M1',
          title: 'Mathematics I & II & III',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM2B1',
          title: 'Botany I & II & III',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM2Z1',
          title: 'Zoology I & II & III',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM2L1',
          title: 'Learning,Learner and Congnition',
          subtitle: '2015,17,18,19,21',
        },
        {
          id: 'CM2A1',
          title: 'Addressing Special Needs in Inclusive school',
          subtitle: '2018,19,21',
        },
      ],
    },
  ]
  const CM3 = [
    {
      headtitle: 'B.Sc B.Ed part 3(3rd Year)',
      data: [
        {
          id: 'CM3P1',
          title: 'Physics I & II',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM3C1',
          title: 'Chemistry I & II',
          subtitle: '2015,16,18,19,21',
        },
        {
          id: 'CM3M1',
          title: 'Mathematics I & II',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM3B1',
          title: 'Botany I & II',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM3Z1',
          title: 'Zoology I & II',
          subtitle: '2015,16,17,18,19,21',
        },
        {
          id: 'CM3S1',
          title: 'School,Socialization and Gender Concern',
          subtitle: '2019,21',
        },
        {
          id: 'CM3Pbs1',
          title: 'Pedagogy of Biological Science',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM3Pm1',
          title: 'Pedagogy of Mathematics',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM3Pps1',
          title: 'Pedagogy of Physical Science',
          subtitle: '2016,17,18,19,21',
        },
        {
          id: 'CM3Ps1',
          title: 'Pedagogy of Science',
          subtitle: '2019,21',
        },
        {
          id: 'CM3ss1',
          title: 'Instructional Strategies and Skills',
          subtitle: '2018',
        },
      ],
    },
  ]
  const CM4 = [
    {
      headtitle: 'B.Sc B.Ed part 4(4th Year)',
      data: [
        {
          id: 'CM4P1',
          title: 'Physics I & II ',
          subtitle: '2017,18,20,21',
        },
        {
          id: 'CM4C1',
          title: 'Chemistry I & II',
          subtitle: '2018,20,21',
        },
        {
          id: 'CM4M1',
          title: 'Mathematics I & II',
          subtitle: '2017,18,20,21',
        },
        {
          id: 'CM4B1',
          title: 'Botany I & II',
          subtitle: '2017,18,20,21',
        },
        {
          id: 'CM4Z1',
          title: 'Zoology I & II',
          subtitle: '2017,18,20,21',
        },
        {
          id: 'CM4A1',
          title: 'Assessment for Learning',
          subtitle: '2020,21',
        },
        {
          id: 'CM4Cr1',
          title: 'Curriculum and School',
          subtitle: '2020,21',
        },
      ],
    },
  ]
  const getItem = item => {
    if (item.id == 'CM1H1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed1%2FGeneral%20Hindi_merged.pdf?alt=media&token=6ba9fe18-6b32-4343-b224-98124fce4669'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1H1',
        pdfTitle: 'General Hindi',
        pdfHead: 'MDSU B.Sc B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1P1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed1%2FPhysics%20-%20I_merged.pdf?alt=media&token=2a95c403-bca1-4d11-bd9b-21edfa015534'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1P1',
        pdfTitle: 'Physics I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1B1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed1%2FBotany%20-I_merged.pdf?alt=media&token=3e69b3ee-73a8-49d7-b72e-9664aaac8dbb'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1B1',
        pdfTitle: 'Botany I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1C1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed1%2FChemistry%20-I_merged.pdf?alt=media&token=251ffe20-9b92-466a-83db-20541188ec24'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1C1',
        pdfTitle: 'Chemistry I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1Z1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed1%2FZoology%20-I_merged.pdf?alt=media&token=3e1930cf-a111-44e8-882c-2152c5191718'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1Z1',
        pdfTitle: 'Zoology I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1M1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed1%2FMathematics%20-I_merged.pdf?alt=media&token=2fea8494-740e-45ee-878c-eb834f71ae12'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1M1',
        pdfTitle: 'Mathematics I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1V1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed1%2Fvision_merged.pdf?alt=media&token=653a10e7-2280-4d52-800c-e06dbd7ae2de'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1V1',
        pdfTitle: 'Vision Of Education In India: Concerns And Issue',
        pdfHead: 'MDSU B.Sc B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1E1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed1%2Fenvire_merged.pdf?alt=media&token=1d3f6372-b600-4eb3-b62c-84b1a92c284e'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1E1',
        pdfTitle: 'Environmental Education And Sustainable Development',
        pdfHead: 'MDSU B.Sc B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM1En1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed1%2FGeneral%20English_merged.pdf?alt=media&token=5f7c5a47-0e0b-4059-afcf-e5772d4b6419'
      navigation.navigate('PdfScreen', {
        mId: 'CM1',
        Id: 'CM1En1',
        pdfTitle: 'General English',
        pdfHead: 'MDSU B.Sc B.Ed part 1',
        link: linktext,
      })
    } else if (item.id == 'CM2P1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed2%2Fphyilovepdf_merged.pdf?alt=media&token=c993b397-ee24-47e4-8fee-1b5a07481466'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2P1',
        pdfTitle: 'Physics I & II & III',
        pdfHead: 'MDSU B.Sc B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2B1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed2%2FBotanyilovepdf_merged.pdf?alt=media&token=08d5b69d-e4c5-4d33-9887-86455aaa7ff4'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2B1',
        pdfTitle: 'Botany I & II & III',
        pdfHead: 'MDSU B.Sc B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2C1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed2%2Fchemilovepdf_merged.pdf?alt=media&token=ed7e5fcd-092e-4e02-844e-51c468277282'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2C1',
        pdfTitle: 'Chemistry I & II & III',
        pdfHead: 'MDSU B.Sc B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2Z1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed2%2FZoologymerged.pdf?alt=media&token=1ab8eeca-d858-4091-ae0c-b7c7cd89fe7f'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2Z1',
        pdfTitle: 'Zoology I & II & III',
        pdfHead: 'MDSU B.Sc B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2M1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed2%2Fmathilovepdf_merged.pdf?alt=media&token=9903ca4e-a345-4392-9429-f50f20cd7542'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2M1',
        pdfTitle: 'Mathematics I & II & III',
        pdfHead: 'MDSU B.Sc B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2L1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed2%2FLearnilovepdf_merged.pdf?alt=media&token=1bf148ed-d158-45e3-b7ae-6ff086a96982'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2L1',
        pdfTitle: 'Learning,Learner and Congnition',
        pdfHead: 'MDSU B.Sc B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM2A1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed2%2FAddressilovepdf_merged.pdf?alt=media&token=f8f93d30-5e78-42f5-9a74-e0364f7011a5'
      navigation.navigate('PdfScreen', {
        mId: 'CM2',
        Id: 'CM2A1',
        pdfTitle: 'Addressing Special Needs in Inclusive school',
        pdfHead: 'MDSU B.Sc B.Ed part 2',
        link: linktext,
      })
    } else if (item.id == 'CM3P1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed3%2Fphyilovepdf_merged.pdf?alt=media&token=cc2aad03-93fd-4c24-a58c-25234649365c'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3P1',
        pdfTitle: 'Physics I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3C1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed3%2Fchem.pdf?alt=media&token=abf3c66a-32bc-4f4a-88e7-5b074f5a1b2d'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3C1',
        pdfTitle: 'Chemistry I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3M1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed3%2Fmathilovepdf_merged.pdf?alt=media&token=9b0f8ada-18ed-40cc-871e-ce6e5d1ecc86'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3M1',
        pdfTitle: 'Mathematics I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3B1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed3%2Fbotanyilovepdf_merged.pdf?alt=media&token=74b082db-38da-424e-aa1f-252d149416b6'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3B1',
        pdfTitle: 'Botany I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3Z1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed3%2Fzzzilovepdf_merged.pdf?alt=media&token=712bc707-55e2-48bf-8521-e7460d126b08'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3Z1',
        pdfTitle: 'Zoology I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3S1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed3%2FSchoolilovepdf_merged.pdf?alt=media&token=4c064d31-d185-476f-8a03-7660c82f4324'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3S1',
        pdfTitle: 'School,Socialization and Gender Concern',
        pdfHead: 'MDSU B.Sc B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3Pbs1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed3%2Fbioilovepdf_merged.pdf?alt=media&token=852130cf-ffc1-4949-8803-c4e36380e605'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3Pbs1',
        pdfTitle: 'Pedagogy of Biological Science',
        pdfHead: 'MDSU B.Sc B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3Pm1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed3%2Fp_mathilovepdf_merged.pdf?alt=media&token=9d99eda1-8753-47ec-808e-3d0652b5428d'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3Pm1',
        pdfTitle: 'Pedagogy of Mathematics',
        pdfHead: 'MDSU B.Sc B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3Pps1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed3%2Fp_phyilovepdf_merged.pdf?alt=media&token=c642f51d-e1f4-4987-9e2c-7b63f8692003'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3Pps1',
        pdfTitle: 'Pedagogy of Physical Science',
        pdfHead: 'MDSU B.Sc B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3Ps1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed3%2Fp_scinceilovepdf_merged.pdf?alt=media&token=6ad62126-b565-488e-90ff-1b80b352ae9f'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3Ps1',
        pdfTitle: 'Pedagogy of Science',
        pdfHead: 'MDSU B.Sc B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM3ss1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed3%2FInstructional%20Strategies%20and%20Skills.pdf?alt=media&token=90926f52-a028-4bc3-b04a-e364460f676c'
      navigation.navigate('PdfScreen', {
        mId: 'CM3',
        Id: 'CM3ss1',
        pdfTitle: 'Instructional Strategies and Skills',
        pdfHead: 'MDSU B.Sc B.Ed part 3',
        link: linktext,
      })
    } else if (item.id == 'CM4P1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed4%2Fphyyyilovepdf_merged.pdf?alt=media&token=43d5a90c-f9bf-4816-bfb9-972c82ccd71e'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4P1',
        pdfTitle: 'Physics I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4C1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed4%2Fchemmilovepdf_merged.pdf?alt=media&token=73531235-968d-4417-8d62-534f0d1720d0'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4C1',
        pdfTitle: 'Chemistry I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4M1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed4%2Fmathilovepdf_merged.pdf?alt=media&token=1ecc6710-0013-49c4-9f3c-9aad8deee061'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4M1',
        pdfTitle: 'Mathematics I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4B1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed4%2FBotany-%20Paper%20I_merged.pdf?alt=media&token=ce98668a-8d90-4bc4-8208-d9e8a6c659a5'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4B1',
        pdfTitle: 'Botany I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4Z1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed4%2FZooilovepdf_merged.pdf?alt=media&token=eb29e603-224e-47b7-b80e-e071862c9f61'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4Z1',
        pdfTitle: 'Zoology I & II',
        pdfHead: 'MDSU B.Sc B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4A1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed4%2FAssilovepdf_merged.pdf?alt=media&token=ab34b5f2-425f-436c-a47b-59f46b37471e'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4A1',
        pdfTitle: 'Assessment for Learning',
        pdfHead: 'MDSU B.Sc B.Ed part 4',
        link: linktext,
      })
    } else if (item.id == 'CM4Cr1') {
      let linktext =
        'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/mdsubscbed4%2Fcurrilovepdf_merged.pdf?alt=media&token=cb1a9388-71c1-422a-8afa-ba57d3e94060'
      navigation.navigate('PdfScreen', {
        mId: 'CM4',
        Id: 'CM4Cr1',
        pdfTitle: 'Curriculum and School',
        pdfHead: 'MDSU B.Sc B.Ed part 4',
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
export default MDSUbscbedScreen
