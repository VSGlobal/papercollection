import {StyleSheet, Dimensions, Platform, deviceHeight} from 'react-native';
export default StyleSheet.create({
  spr_container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    marginTop: 0,
  },
  spr_container_1: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    marginTop: 0,
  },
  
  container: {
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height / 1 - 62,
    alignItems: 'center',
  },
  listContainer0: {
    marginTop: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width / 1.05,
    height: Dimensions.get('window').height - 175,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },

  questionText: {
    width: Dimensions.get('window').width / 1.07,
    maxHeight:126,
    fontSize: Dimensions.get('window').width * 0.05,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#7a7fff',
     color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  optionButton: {
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width / 1.2,
    minHeight: 50,
    padding: 15,
    // margin: 30,
    borderRadius: 15,
    alignSelf: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Regular',
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: '#a5d6a7',
  },
  optionText: {
    fontSize: Dimensions.get('window').width * 0.045,
  },
  next_btn: {
    width: 90,
    height: 90,
  },
  submitButton: {
    width: 90,
    height: 90,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 15,
  },

  finalScoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: '#f44336',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
  },
  restartButtonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  correctOption: {
    backgroundColor: 'green', // Style for the correct option (green background)
  },
  wrongOption: {
    backgroundColor: 'red', // Style for the wrong option (red background)
  },
  progressBarContainer: {
    width: Dimensions.get('window').width / 1.07,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:0
  },
  progressBar: {
    flexDirection: 'row',
    height: 30,
    borderRadius: 40,
    overflow: 'hidden',
  },
  greenProgress: {
    height: '100%',
    backgroundColor: '#35b835',
  },
  redProgress: {
    height: '100%',
    backgroundColor: '#ff4242',
  },
  progressTextContainer: {
    position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: [{ translateX: -30 }, { translateY: -8 }],
    // width: 60,
    backgroundColor: 'transparent',
  },
  timerText: {
    fontSize: Dimensions.get('window').width * 0.04,
    color: 'white',
    fontWeight: 'bold',
    // marginBottom: 30,
    alignSelf: 'center',
  },
  gkText: {
    fontSize: Dimensions.get('window').width * 0.025,
    // alignSelf:'flex-start',
    color: '#948c8b',
    opacity: 1,
    fontWeight: 'bold',
  },
  WAbtn: {
    width: Dimensions.get('window').width * 0.23,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.5,
    opacity: 1,
    fontWeight: 'bold',
    flexDirection:'row',
    justifyContent:'center',
  },
  WAI_btn: {
    alignSelf:'center',
    width: 10,
    height: 10,
    marginRight:5,
  },
  WAText: {
    fontSize: Dimensions.get('window').width * 0.025,
    alignSelf: 'center',
    color: '#948c8b',
    opacity: 1,
    fontWeight: 'bold',
  },
  // Other styles for quiz elements...
  wrongAnswerButton: {
    width: Dimensions.get('window').width * 0.33,
    height:Dimensions.get('window').height * 0.02,
    backgroundColor: '#f76157',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
   top:Dimensions.get('window').height / 1 - 85,
  },
  buttonText: {
    fontSize: Dimensions.get('window').width * 0.025,
    fontWeight: 'bold',
    letterSpacing:1.5 
   },
  // progressText: {
  //   textAlign: 'center',
  //   fontSize: 16,
  // },
});
