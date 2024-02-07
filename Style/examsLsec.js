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
    //  height:Dimensions.get('window').height/1.1,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  card_view_s: {
    backgroundColor: 'transparent',
  },
  card_t: {
    marginTop: 30,
    fontSize: 16,
    color: 'black',
    margin: 10,
    opacity: 1,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Bold',
  },
  list_line: {},

  item: {
    flex: 1,
    margin: 15,
    width: Dimensions.get('window').width / 1.2,
    minHeight: 50,
    padding: 5,
    borderRadius: 15,
    alignSelf: 'center',
    textAlignVertical: 'center',
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
    width: Dimensions.get('window').width / 1.75,
    borderRadius: 35,
    backgroundColor: 'transparent',
  },
  logo_txt: {
    width: Dimensions.get('window').width / 1.75,
    minHeight: 50,
    fontSize: Dimensions.get('window').width * 0.04,
    textAlign: 'center',
    opacity: 1,
    borderRadius: 35,
    textAlignVertical: 'center',

    fontFamily: 'Ubuntu-Regular',
    backgroundColor: 'transparent',
  },
  logo_sub_txt: {
    fontSize: Dimensions.get('window').width * 0.03,
    maxWidth: Dimensions.get('window').width * 0.21,
    minWidth: Dimensions.get('window').width * 0.21,
    textAlign: 'center',
    opacity: 1,
    padding: 5,
    margin: 5,
    alignSelf: 'center',

    fontFamily: 'Ubuntu-Regular',
    borderRadius: 5,
  },
})
