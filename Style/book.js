import {StyleSheet, Dimensions, Platform, deviceHeight} from 'react-native'
export default StyleSheet.create({
  spr_container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    marginTop: 0,
  },

  container: {
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height / 1 - 62,
  },
  listContainer0: {
    marginTop: 65,
    width: Dimensions.get('window').width,

    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  card_view_s: {
    backgroundColor: 'transparent',
  },
  card_t: {
    marginTop: 30,
    fontSize: 18,
    color: 'black',
    margin: 10,
    opacity: 1,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Bold',
  },
  list_line: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  item: {
    flex: 1,
    margin: 15,
    width: Dimensions.get('window').width / 1.25,
    height: Dimensions.get('window').height * 0.12,
    padding: 0,
    borderRadius: 20,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Regular',
    flexDirection: 'row',
  },

  shadowa: {
    elevation: 30,
    shadowColor: '#1a00ff',
  },
  shadowi: {
    shadowColor: '#1a00ff',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 20,
    shadowRadius: 3,
  },
  logo_img: {
    width: 80,
    height: 79,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginHorizontal: 5,
    padding: 5,
    borderColor: '#c2c2c4',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  // logo_txt_container: {
  //   width: Dimensions.get('window').width / 2.0,
  //   height: Dimensions.get('window').height * 0.12,
  //   marginLeft: 5,
  //   flexDirection: 'column',
  //   borderRadius: 15,
  //   backgroundColor: 'transparent',
  //   padding: 5,
  // },
  // logo_txt: {
  //   width: Dimensions.get('window').width / 2.0,
  //   maxHeight: 45,
  //   fontSize: Dimensions.get('window').width * 0.04,
  //   textAlignVertical: 'center',
  //   textAlign: 'center',
  //   opacity: 1,
  //   borderRadius: 0,
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   color: 'black',
  //   borderBottomWidth: 0.5,
  //   borderColor: '#c2c2c4',
  //   fontFamily: 'Ubuntu-Bold',
  //   backgroundColor: 'gray',
  // },
  // logo_sub_txt: {
  //   width: Dimensions.get('window').width / 2.0,
  //   maxHeight: 45,
  //   fontSize: Dimensions.get('window').width * 0.035,
  //   padding: 0,
  //   borderEndWidth: 0.5,
  //   margin: 1,
  //   textAlignVertical: 'center',
  //   textAlign: 'center',
  //   opacity: 1,
  //   borderRadius: 10,
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   color: 'black',
  //   fontFamily: 'Ubuntu-Regular',
  //   backgroundColor: 'transparent',
  // },
  logo_txt_container: {
    width: Dimensions.get('window').width / 2.0,
    height: Dimensions.get('window').height * 0.1,
    marginLeft: 5,
    flexDirection: 'column',
    borderRadius: 15,
    backgroundColor: 'transparent',
    padding: 5,
  },
  logo_txt: {
    width: Dimensions.get('window').width / 2.0,
    height: Dimensions.get('window').height * 0.1,
    fontSize: Dimensions.get('window').width * 0.04,
    padding: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
    opacity: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'black',
    fontFamily: 'Ubuntu-Bold',
    backgroundColor: 'transparent',
  },
  for_book: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 150,
  },
})