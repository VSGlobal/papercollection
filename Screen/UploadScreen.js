import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
  Alert,
  ScrollView,
  PermissionsAndroid,
  Image
} from 'react-native'
import React, { useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios'

const UploadScreen = ({ navigation }) => {
  // const [imageSource, setImageSource] = useState(null)
  const [imageSource, setImageSource] = useState([]) // Possible values: '', 'Now Upload', 'Uploaded'

  const [uploadStatus, setUploadStatus] = useState('')
  const [showProcessingImage, setShowProcessingImage] = useState(false)

  const requestGalleryPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        {
          title: 'Paper Collection wants your Media Permission',
          message:
            'Paper Collection needs access to your Media ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openGallery()
        console.log('You can use the Media')
      } else {
        console.log('Media permission denied')
        showPermissionSettingsDialog1()
      }
    } catch (err) {
      console.warn(err)
    }
  }

  const showPermissionSettingsDialog1 = () => {
    // Prompt user to go to app settings
    Alert.alert(
      'Permission Denied',
      'To use the Photos, you need to grant photos permission. Do you want to go to app settings?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Settings', onPress: () => openSettings() }
      ],
      { cancelable: false }
    )
  }

  const openCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Paper Collection wants your Camera Permission',
          message:
            'Paper Collection needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openCamera()
        console.log('You can use the camera')
      } else {
        console.log('Camera permission denied')
        showPermissionSettingsDialog2()
      }
    } catch (err) {
      console.warn(err)
    }
  }
  const showPermissionSettingsDialog2 = () => {
    // Prompt user to go to app settings
    Alert.alert(
      'Permission Denied',
      'To use the camera, you need to grant camera permission. Do you want to go to app settings?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Settings', onPress: () => openSettings() }
      ],
      { cancelable: false }
    )
  }

  const openSettings = () => {
    Linking.openSettings()
  }

  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  }

  const openCamera = () => {
    launchCamera(options, response => {
      console.log('Response = ', response)
      // console.log('test1:', response.assets[0].uri)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.assets[0].uri) {
        // Update the state with the selected image URI
        setImageSource(prevImageSources => [
          ...prevImageSources,
          { uri: response.assets[0].uri }
        ])

        // Upload the image to ImgBB
      }
    })
  }

  const option = {
    title: 'Select Image',
    mediaType: 'photo',
    quality: 1,
    includeBase64: false,
    selectionLimit: 50,
    saveToPhotos: true
  }
  const openGallery = () => {
    launchImageLibrary(option, response => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.assets.length > 0) {
        // Update the state with the selected image URIs
        setImageSource(prevImageSources => [
          ...prevImageSources,
          ...response.assets.map(asset => ({ uri: asset.uri }))
        ])

        // Upload the images to ImgBB
        // response.assets.forEach(asset => uploadImage(asset.uri))
      }
    })
  }

  // const uploadImages = () => {
  //   // Check if there are selected images
  //   if (imageSource.length > 0) {
  //     // Upload all images in the state to ImgBB
  //     imageSource.forEach(image => uploadImage(image.uri))
  //     // Set the upload status to 'Uploaded'
  //     setUploadStatus('Uploaded')
  //   } else {
  //     // Set the upload status to an empty string
  //     setUploadStatus('Select Image')
  //   }
  // }
  const uploadImages = () => {
    // Check if there are selected images
    if (imageSource.length > 0) {
      imageSource.forEach(image => uploadImage(image.uri))

      setTimeout(() => {
        // After successful upload, set the status to 'Uploaded'
        setUploadStatus('Uploaded')
      }, 2000) // Simulating a delay, replace with actual upload time
    }
  }

  const clearImages = () => {
    // Clear the image source and reset upload status
    setImageSource([])
    setUploadStatus('')
  }

  const uploadImage = async imageUri => {
    try {
      setShowProcessingImage(true)

      // Simulating a delay, replace with actual upload logic
      await new Promise(resolve => setTimeout(resolve, 2000))

      const formData = new FormData()
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'uploaded_image.jpg'
      })

      const response = await axios.post(
        'https://api.imgbb.com/1/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          params: {
            key: '2318e1ffe9680062ebd52066fc46389f'
          }
        }
      )

      // Log the response from ImgBB (contains URL of the uploaded image)
      console.log('ImgBB Response:', response.data)
      setShowProcessingImage(false)
    } catch (error) {
      console.error('Error uploading image to ImgBB:', error.message)
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#e8ecf9' }}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Image
            source={require('../assets/close.png')}
            style={styles.backbtn}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={requestGalleryPermission}>
        <View style={styles.rectangle}>
          <Image
            source={require('../assets/Gallery.png')}
            style={styles.icons}
          />
          <Text style={styles.icontext}>From Gallery</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={openCameraPermission}>
        <View style={styles.rectangle}>
          <Image
            source={require('../assets/camera.png')}
            style={styles.icons}
          />
          <Text style={styles.icontext}>Take Photo !</Text>
        </View>
      </TouchableOpacity>
      {imageSource.length > 0 && uploadStatus !== 'Uploaded' && (
        <TouchableOpacity onPress={uploadImages}>
          <View style={styles.UploadViewg}>
            <Text style={[styles.UploadText, { color: 'green' }]}>Upload</Text>
            {showProcessingImage && (
              <Image
                source={require('../assets/upload.png')}
                style={{ width: 30, height: 30, marginLeft: 10 }}
              />
            )}
          </View>
        </TouchableOpacity>
      )}

      {imageSource.length > 0 && uploadStatus === 'Uploaded' && (
        <TouchableOpacity onPress={clearImages}>
          <View style={styles.UploadViewr}>
            <Text style={styles.UploadText}>Please Close me</Text>
          </View>
        </TouchableOpacity>
      )}

      {/* <TouchableOpacity
        onPress={uploadImages}
        disabled={imageSource.length === 0 || uploadStatus === 'Uploaded'}
      >
        {imageSource.length === 0 ? (
          <View style={styles.UploadViewr}>
            <Text style={styles.UploadText}>Select to upload</Text>
          </View>
        ) : (
          !uploadStatus && (
            <View style={styles.UploadViewg}>
              <Text style={styles.UploadText}>Now Upload</Text>
            </View>
          )
        )}
      </TouchableOpacity> */}

      <ScrollView>
        <View
          horizontal={false}
          style={{
            flexWrap: 'wrap',
            width: '95%',
            height: 350,
            margin: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            alignSelf: 'center'
          }}
        >
          {imageSource.length > 0 && uploadStatus !== 'Uploaded' ? (
            imageSource.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image.uri }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  margin: 5
                }}
              />
            ))
          ) : (
              <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                <Image
                  source={require('../assets/no-image.jpg')}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                />
              </View>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = ScaledSheet.create({
  categoryContainer: {
    height: '35@vs',
    marginTop: 20,
    justifyContent: 'center',
    width: Dimensions.get('screen').width
  },
  backbtn: {
    width: '60@s',
    height: '25@s',
    marginLeft: '5%',
    resizeMode: 'contain',
    borderRadius: 60,
    backgroundColor: 'white'
  },
  rectangle: {
    marginTop: (Dimensions.get('window').height / 700) * 20,
    width: (Dimensions.get('window').width / 350) * 320,
    height: (Dimensions.get('window').height / 700) * 125,
    alignSelf: 'center',
    borderRadius: 22,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  icons: {
    height: (Dimensions.get('window').height / 700) * 50,
    width: (Dimensions.get('window').width / 350) * 50,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  icontext: {
    alignSelf: 'center',
    fontWeight: '500',
    color: 'black',
    marginTop: (Dimensions.get('window').height / 700) * 9.18
  },
  UploadViewr: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: '40@vs',
    width: '200@s',
    backgroundColor: 'red',
    marginVertical: 15,
    borderRadius: 40
  },
  UploadViewg: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: '40@vs',
    width: '200@s',
    backgroundColor: 'white',
    marginVertical: 15,
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row'
  },
  UploadText: {
    alignSelf: 'center',
    fontWeight: '500',
    color: 'white'
  }
})
export default UploadScreen
