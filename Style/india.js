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
    marginTop: Dimensions.get('window').height * 0.07,
    width: Dimensions.get('window').width / 1.1,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  card_view_s: {
    backgroundColor: 'transparent',
  },
  card_t: {
    marginTop: Dimensions.get('window').height * 0.02,
    fontSize: Dimensions.get('window').width * 0.05,
    // color: 'black',
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
    margin: 15,
    width: Dimensions.get('window').width / 1.25,
    height: Dimensions.get('window').height * 0.145,
    padding: 10,
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
    alignSelf: 'center',
    margin: 5,
    padding: 10,
    borderRadius: 20,
  },
  logo_txt_container: {
    width: Dimensions.get('window').width / 1.65,
    height: Dimensions.get('window').height * 0.083,
    borderRadius: 35,
    backgroundColor: 'transparent',
  },
  logo_txt: {
    width: Dimensions.get('window').width / 1.7,
    fontSize: Dimensions.get('window').width * 0.039,
    padding: 5,
    margin: 5,
    textAlign: 'center',
    opacity: 1,
    borderRadius: 35,
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Ubuntu-Bold',
    backgroundColor: 'transparent',
  },
  logo_sub_txt: {
    fontSize: Dimensions.get('window').width * 0.03,
    width: Dimensions.get('window').width / 1.8,
    height: Dimensions.get('window').height * 0.04,
    textAlignVertical: 'center',
    textAlign: 'center',
    // opacity: 0.4,
    alignSelf: 'center',

    fontFamily: 'Ubuntu-Bold',
    backgroundColor: 'transparent',
    fontFamily: 'Ubuntu-Bold',
  },
})
