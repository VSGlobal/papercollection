import React, {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
  Pressable,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import Swiper from 'react-native-swiper';
import {ScaledSheet} from 'react-native-size-matters';
import styles from '../Style/Swipe';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'uuid';
import SelectDropdown from 'react-native-select-dropdown';

const WelcomeScreen = ({navigation}) => {
  const swiperRef = useRef(null);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [generatedToken, setGeneratedToken] = useState('');

  const goToNext = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.state.index;
      if (currentIndex < 1) {
        // generateUserToken();
        swiperRef.current.scrollBy(1, true);
      } else {
        navigation.navigate('Home');
      }
    }
  };
    const handleNameChange = text => {
    // Update the name state with the entered text
    setName(text);
  };
  // const data = [
  //   {key: '1', value: 'Male'},
  //   {key: '2', value: 'Female'},
  //   {key: '3', value: 'Other'},
  // ]
  const data = ['Male', 'Female', 'other'];
  // const generateUserToken = () => {
  //   if (name && gender) {
  //     // Concatenate name and gender and use uuid for uniqueness
  //     const token = `${name}_${gender}_${uuid.v4()}`;
  //     setGeneratedToken(token);
  //     saveTokenToStorage(token);
  //   } else {
  //     // Handle error if name or gender is not provided
  //     console.error('Name and gender are required');
  //   }
  // };

  // const saveTokenToStorage = async token => {
  //   try {
  //     await AsyncStorage.setItem('userToken', token);
  //     console.log('Token saved successfully');
  //   } catch (error) {
  //     console.error('Error saving token:', error);
  //   }
  // };

  // const openLink = url => {
  //   Linking.openURL(url);
  // };

  const Screenone = ({navigation}) => {
    return (
      <ScrollView style={{flexGrow: 1, backgroundColor: '#e8ecf9'}}>
        <View style={styles.containermini}>
          <Image
            style={styles.image1}
            source={require('../assets/icons/inlogo.png')}
          />
          <View
            style={{
              backgroundColor: 'white',
              marginTop: '10%',
              width: '80%',
              height: '40%',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.Name}>NAME</Text>
            <TextInput
              style={{
                width: '65%',
                height: '17%',
                textAlign: 'center',
                backgroundColor: '#efefef',
                borderRadius: 30,
              }}
              onChangeText={handleNameChange}
              value={name}
            />
            <Text style={{margin: 10, fontSize: 15, fontWeight: '500'}}>
              GENDER
            </Text>
        
            <SelectDropdown
              data={data}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              dropdownStyle={{borderRadius: 20}}
              buttonStyle={{borderRadius: 30}}
            />
            <TouchableOpacity
              style={{backgroundColor: 'red', margin: '5%', borderRadius: 10}}
              // onPress={generateUserToken}
              >
              <Text style={{margin: 10, fontSize: 15, fontWeight: '500'}}>
                Next
              </Text>
            </TouchableOpacity>
            {/* {generatedToken && (
              <View>
                <Text style={{margin: 10, fontSize: 15, fontWeight: '500'}}>
                  Generated Token:
                </Text>
                <Text style={{margin: 10, fontSize: 15, fontWeight: '500'}}>
                  {generatedToken}
                </Text>
              </View>
            )} */}
          </View>
        </View>
      </ScrollView>
    );
  };

  const Screentwo = ({navigation}) => {
    return (
      <ScrollView style={{flexGrow: 1, backgroundColor: '#e8ecf9'}}>
        <View style={styles.containermini}>
          <Text style={styles.text1}>
            Huge
            <Text style={{color: 'red', fontWeight: '400'}}> Collection </Text>
            of {'\n'}All type of Papers & Quiz
          </Text>
          <Text style={styles.text2}>Now We Are Open Source</Text>
          <Text style={styles.text2}>Always Welcome Contributor ;)</Text>
        </View>
        <Text
          style={[
            styles.text2,
            {position: 'absolute', bottom: 0, alignSelf: 'center'},
          ]}>
          By clicking 'Next' you agree to our
          <Text
            onPress={() => {
              openLink(
                'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/Privacypolicynew.html?alt=media&token=597175fd-6c29-45d9-8f78-2d927110d601',
              );
            }}
            style={[styles.text2, {color: '#e84733'}]}>
            Privacy Policy
          </Text>
        </Text>
      </ScrollView>
    );
  };

  return (
    <View style={styles.wrapperp}>
      <Swiper
        ref={swiperRef}
        loop={false}
        index={0}
        showsPagination={true}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        showsButtons={false}>
        <Screenone />
        <Screentwo />
      </Swiper>
      <TouchableOpacity style={styles.btn} onPress={() => goToNext()}>
        <Image
          style={styles.nextimg}
          source={require('../assets/icons/back.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;


// import React, {useState} from 'react';
// import {View, TextInput, Button, Text} from 'react-native';

// const NameInput = () => {
//   const [name, setName] = useState('');

//   const [savedName, setSavedName] = useState('');

//   const handleNameChange = text => {
//     // Update the name state with the entered text
//     setName(text);
//   };

//   const saveName = () => {
//     // Save the current name to the savedName state when the button is pressed
//     setSavedName(name);
//   };

//   return (
//     <View>
//       <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10}}
//         placeholder="Enter your name"
//         onChangeText={handleNameChange}
//         value={name} // Bind the value of the TextInput to the name state
//       />
//       <Button
//         title="Save Name"
//         onPress={saveName} // Call saveName function when the button is pressed
//       />
//       <Text style={{marginTop: 10}}>Saved Name: {savedName}</Text>
//     </View>
//   );
// };
