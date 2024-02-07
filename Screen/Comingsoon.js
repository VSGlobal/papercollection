import React from "react";
import { View ,Text,Image, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from "./Components/ThemeContext";

const Comingsoon =({ style })=>{
  const { theme } = useTheme();
  const image = {uri: 'https://firebasestorage.googleapis.com/v0/b/old-papers-8288c.appspot.com/o/image%2Fsoon1.png?alt=media&token=2ec99e09-2383-4925-a9c9-269ce6fe445e'};
  return (
    <View style={style}>
      <Image style={{backgroundColor: 'transparent',
    width: 200,
    height:120,resizeMode:"contain"
    }} source={image} />
    <Text style={[styles.text,{ color: theme.t }]}>Still in development stage, please wait for next update for more content!</Text>
    </View>
  );
};
const styles= StyleSheet.create({
  text:{
    marginHorizontal:20,
    marginTop:0,
    textAlignVertical:'center',
    textAlign:'center',
    fontWeight:'bold'
  }
})
export default Comingsoon;