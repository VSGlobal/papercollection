import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Linking,
  Alert,Image
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'
import {useRoute} from '@react-navigation/native' // Import the useRoute hook
import {NavigationContainer} from '@react-navigation/native'
import NavbarScreen from '../Components/NavbarScreen'
import {useTheme} from '../Components/ThemeContext'
const ContactScreen = ({navigation}) => {
  const {theme} = useTheme()
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  // Use the useRoute hook to access the route and its parameters
  const route = useRoute()
  const currentQuestionAndAnswer = route.params?.currentQuestionAndAnswer

  const handleContact = () => {
    if (!name.trim()) {
      Alert.alert(
        'Name Required',
        'Please enter your name before sending the email.',
      )
      return
    }

    const email = 'help.veesunetwork@gmail.com'
    const subject = 'Inquiry from the Contact Form'

    const body = `Name: ${name}\n\nMessage: ${message}\nWrongAnswer: ${currentQuestionAndAnswer}`
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    Linking.openURL(mailtoUrl)
  }
  const openLink = url => {
    Linking.openURL(url)
  }
  return (
    <View style={[styles.container, {backgroundColor: theme.bg}]}>
      <NavbarScreen navigation={navigation} pdfTitle='Contact Us' />
      {/* <Text style={styles.title}>Contact Us</Text> */}
      <View style={[styles.contain_txt, {backgroundColor: theme.bgI}]}>
        <Text
          style={[
            styles.sub_title,
            {backgroundColor: theme.bgI, color: theme.t},
          ]}>
          Give us your feedback which paper you want and which feature is not
          working :
        </Text>
        <View style={styles.formContainer}>
          <Text style={[styles.label, {color: theme.t}]}>Name :</Text>
          <TextInput
            style={[styles.input, {borderColor: theme.ts, color: theme.t}]}
            placeholder='Enter your name'
            value={name}
            onChangeText={text => setName(text)}
          />
          {/* Auto-paste the current question and answer */}
          <Text style={[styles.label, {color: theme.t}]}>Message :</Text>
          <View style={[styles.msg_input_view, {backgroundColor: theme.bgI}]}>
            <TextInput
              style={[
                styles.messageInput,
                {borderColor: theme.t, color: theme.t},
              ]}
              placeholder='Enter your message'
              value={
                currentQuestionAndAnswer
                  ? `${currentQuestionAndAnswer}\n${message}`
                  : message
              }
              onChangeText={text => setMessage(text)}
              multiline
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleContact}>
          <Text style={[styles.buttonText, {color: theme.bgI}]}>
            Send by email
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contact}>
      <TouchableOpacity
              onPress={() =>
                openLink('https://www.instagram.com/vs.global')
              }>
              <Image
                style={[styles.contact_img2]}
                source={require('../../assets/icons/instagram.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => openLink('https://www.facebook.com/profile.php?id=100095097586771&mibextid=ZbWKwL')}>
              <Image
                style={[styles.contact_img2]}
                source={require('../../assets/icons/facebook.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://t.me/veesunetwork')}>
              <Image
                style={[styles.contact_img2]}
                source={require('../../assets/icons/telegram.png')}
              />
            </TouchableOpacity>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // paddingHorizontal: 0,
  },
  contain_txt: {
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 15,
    margin: Dimensions.get('window').height * 0.1,
    marginTop: Dimensions.get('window').height * 0.15,
    padding: RFPercentage(2),
    justifyContent: 'center',
  },
  sub_title: {
    width: Dimensions.get('window').width * 0.9,
    fontSize: Dimensions.get('window').width * 0.04,
    borderRadius: 15,
    padding: RFPercentage(2),
    fontWeight: 'bold',
    textAlign: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    width: Dimensions.get('window').width * 0.5,
    textAlign: 'center',
    fontSize: RFPercentage(4),
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    backgroundColor: 'transparent',
  },
  formContainer: {
    marginVertical: 20,
  },
  label: {
    fontSize: Dimensions.get('window').width * 0.04,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    margin: 15,
    // alignSelf:'center'
  },
  msg_input_view: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.9,
  },
  messageInput: {
    borderWidth: 0.5,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    minHeight: 50,
    maxHeight: 250,
    margin: 15,
    marginHorizontal: 30,
  },
  button: {
    width: 200,
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 40,
    marginTop: 10,
    alignSelf: 'center',
    position: 'relative',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
  contact: {
    width: 200,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // contact_img: {
  //   backgroundColor: 'green',
  //   width: 40,
  //   resizeMode: 'contain',
  //   height: 40,
  //   marginHorizontal:5
  // },
  contact_img2: {
    backgroundColor: 'transparent',
    width: 30,
    resizeMode: 'contain',
    height: 30,
    borderRadius: 7,
    marginHorizontal:20
  },
})

export default ContactScreen
