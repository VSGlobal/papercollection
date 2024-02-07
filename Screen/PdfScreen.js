import React, {useState, useRef} from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Linking,
  View,
} from 'react-native'
import Pdf from 'react-native-pdf'
import styles from '../Style/pdfshow'
import {NavigationContainer} from '@react-navigation/native'

import NavbarScreen from './Components/NavbarScreen'
import {useTheme} from './Components/ThemeContext'

import RNFetchBlob from 'rn-fetch-blob'
import {DirPictures} from 'react-native-fs'

const PdfScreen = ({navigation, route, numberOfPages, page}) => {
  const {theme} = useTheme()
  // const { pId} = props.params;
  const {Id} = route.params
  const {pdfTitle} = route.params
  const {mId} = route.params
  const {pdfHead} = route.params
  // const { link } = route.params;
  const receivedLink = route.params?.link

  const [numberOfPagest, setNumberOfPagest] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const pdfRef = useRef(null)

  // Function to scroll the PDF page up
  const scrollPageUp = () => {
    if (pdfRef.current) {
      const nextPage = currentPage - 1
      if (nextPage >= 1) {
        pdfRef.current.setPage(nextPage)
        setCurrentPage(nextPage)
      }
    }
  }

  // Function to scroll the PDF page down
  const scrollPageDown = () => {
    if (pdfRef.current) {
      const nextPage = currentPage + 1
      if (nextPage <= numberOfPages) {
        pdfRef.current.setPage(nextPage)
        setCurrentPage(nextPage)
      }
    }
  }
  // const [zoom, setZoom] = useState(1);

  // const handleZoomChanged = (event) => {
  //   setZoom(event.zoom);
  // };
  // useKeepAwake();
  var x = {uri: receivedLink, cache: true}
  // console.log(x , receivedLink)
  const handleDownloadPDF = async fileUrl => {
    try {
      const {path} = await RNFetchBlob.config({
        fileCache: true,
        path: `${RNFetchBlob.fs.dirs.DownloadDir}/${pdfTitle}.pdf`,
      }).fetch('GET', fileUrl)

      ToastAndroid.show('Check Your Download Folder ;)', ToastAndroid.LONG)
      console.log('File downloaded to:', path())
    } catch (error) {
      console.error('Error downloading PDF:', error)
    }
  }

  return (
    <View style={[styles.spr_container, {backgroundColor: theme.bg}]}>
      <NavbarScreen navigation={navigation} pdfTitle={pdfHead} />

      <View style={[styles.container, {borderColor: theme.t}]}>
        <Pdf
          trustAllCerts={false}
          horizontal={false}
          enablePaging={true}
          source={x}
          onLoadComplete={(numberOfPages, filePath) => {
            setNumberOfPagest(numberOfPages)
          }}
          onPageChanged={(page, numberOfPages) => {
            setCurrentPage(page)
          }}
          onError={error => {
            console.log(error)
          }}
          onPressLink={
            uri => {
              // OpenURLButton();
              Linking.openURL(uri)
            }
            // console.log(`Link pressed: ${uri}`);
          }
          style={[styles.pdf, styles.shadowa, styles.shadowi]}
        />

        <Text
          style={[
            styles.txt_pdf1,
            {color: theme.t, backgroundColor: theme.bg},
          ]}>
          {pdfTitle}
        </Text>
        <Text style={[styles.txt_pdf2, {color: theme.t}]}>
          Check paper NAME , YEAR and SHIFT carefully, One PDF contains multiple
          PDFs
        </Text>
        <Image
          style={styles.back_btn3}
          source={{
            uri: 'https://user-images.githubusercontent.com/84082684/235897525-bac8ccaa-043c-4898-ba0f-4e9c22c5f357.png',
          }}
        />
        <View style={styles.cont_btn4_5}>
          <View style={[styles.back_btn5, {backgroundColor: theme.bgI}]}>
            <Text style={[styles.back_btn_txt, {color: theme.t}]}>
              {currentPage}/{numberOfPagest}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.downloadview}
          onPress={() => handleDownloadPDF(receivedLink)}>
          <Image
            style={styles.downloadimg}
            source={require('../assets/download.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.adstyle, {borderColor: theme.t}]}></View>
    </View>
  )
}

export default PdfScreen
