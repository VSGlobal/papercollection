import React, { useState } from 'react';
import { Text, View,Image, Button } from 'react-native';
const ThemeScreen = () => {

var themecolor = 'blue';
  if (themecolor == 'blue') {
    var bg1 = '#e5e5ff';
    var bg2 = '#ccccff';
    var bg3 = '#b2b2ff';
    var bg4 = '#0000ff';
  } else if (themecolor == 'red') {
    var bg1 = '#ffe5e5';
    var bg2 = '#ffcccc';
    var bg3 = '#ffb2b2';
    var bg4 = '#ff0000';
  } else if (themecolor == 'black') {
    var bg1 = '#e5e5e5';
    var bg2 = '#cccccc';
    var bg3 = '#b2b2b2';
    var bg4 = '#000000';
  } else if (themecolor == 'green') {
    var bg1 = '#e5f2e5';
    var bg2 = '#cce5cc';
    var bg3 = '#b2d8b2';
    var bg4 = '#008000';
  }
 
  return (
    <View>
      <Text>
        test
      </Text>
    </View>
  );
};

export default ThemeScreen;
