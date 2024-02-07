import {Dimensions, Platform, deviceHeight} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'

export default ScaledSheet.create({
  wrapperp: {
    flex: 1,
  },
  containermini: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.92,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Name :{
fontSize:18,
marginBottom:5
  },
text1: {
    color: 'black',
    fontSize: '30@s',
    textAlign: 'left',
    fontWeight: '400',
    lineHeight: '70@vs',
    margin:'30@s'
  },
  image1: {
    width: '150@s',
    height: '150@s',
    marginBottom: '10@s',
    borderRadius: 20,
    resizeMode: 'contain',
  },
  imgcontainer: {
    backgroundColor: 'transparent',
    width: '90%',
    height: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    padding: 10,
  },

  text2: {
    color: 'black',
    fontSize: '12@s',
    fontWeight: '500',
    textAlign: 'center',
    marginHorizontal: 20,
    backgroundColor: 'transparent',
  },
  text3: {
    width: '80%',
    color: 'black',
    fontSize: '16@s',
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: '20@s',
    backgroundColor: 'transparent',
    fontWeight: '400',
    margin: 10,
  },
  btn: {
    backgroundColor: 'white',
    width: '50@s',
    height: '50@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '70@s',
    margin: '20@s',
    position: 'absolute',
    right: 0,
    bottom: 30,
  },
  nextimg: {
    width: '30@s',
    height: '30@s',
    transform: [{rotate: '180deg'}],
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: '7@s',
    height: '4@s',
    borderRadius: '5@s',
  },

  activeDot: {
    backgroundColor: 'black',
    width: '20@s',
    height: '4@s',
    borderRadius: '5@s',
  },

  //   circleBackgroundIcon: {
  //     width: 300,
  //     height: 371,
  //     opacity: 1,
  //     position: 'absolute',
  //     backgroundColor: 'transparent',
  //   },
})
