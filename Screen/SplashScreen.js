import React from 'react';
import { StatusBar , View , Text , ActivityIndicator } from 'react-native';
export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : '#34495e'}}>
                <StatusBar backgroundColor="#2c3e50" barStyle="light-content"/> //NICE STYLE FOR YOUR STATUSBAR
                <Text style={{ color : 'white',fontSize : 18 }}>Hello Splash</Text>
                <ActivityIndicator color={'white'}/> //YOUR SPINNER WAITING
            </View>
        )
    }
}