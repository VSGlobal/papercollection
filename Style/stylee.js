import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    top: 0,
    color: "white",
    backgroundColor: "red",
    // backgroundColor: "white",
    alignSelf: "center",
    alignSelf: "center",
  },

  title_container: {
    top: 10,
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: "transparent",
    zIndex: +1,
    height: 35,
    width: 300,
    position: "absolute",
  },
  btn1: {
    height: 35,
    width: 255,
    // margin: 7,
  // backgroundColor: "#fff8f8",
  backgroundColor: "transparent",
  borderRadius:30
  },
  btn2: {
    height: 35,
    width: 35,
    // margin: 7,
    backgroundColor: "transparent",
  borderRadius:30
  },
  iconstyle: {
    color: "black",
    alignSelf: "center",
  },
  title_name: {
    fontSize: 18,
    padding: 6,
    color: "black",
    textAlign: "center",
    alignSelf: "flex-start",
    fontFamily: "Ubuntu-Bold",
  },
  listContainer: {
    marginTop: 0,
    marginBottom: 0,
    width: 330,
    backgroundColor: "transparent",
  },
  list_line: {
    marginTop: 50,
    marginBottom: 0,
  },
  item: {
    flex: 1,
    backgroundColor: "#fff8f8",
    margin: 10,
    width: 300,
    height: 80,
    padding: 5,
    borderRadius: 18,
    resizeMode: "contain",
    // alignSelf: "center",
    textAlign: "center",
    fontFamily: "Ubuntu-Regular",
  },

  shadow_list_a: {
    elevation:2,
    shadowColor: "#4f4b4b",
  },
  shadow_list_i: {
    shadowColor: "#4f4b4b",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  logo_img: {
    color: "black",
    alignSelf: "flex-end",
    marginEnd:20
  },
  logo_txt: {
    fontSize: 18,
    margin: 10,
    alignSelf: "flex-start",
    color: 'black',
    // color: "#596161",
    fontFamily: "Ubuntu-Regular",
  },
   share_btn: {
   backgroundColor: "transparent",
    width: 25,
    height: 25,
    margin: 5,
    borderRadius:35,
  },
 
});
