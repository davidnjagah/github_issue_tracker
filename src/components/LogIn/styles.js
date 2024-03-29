import { StyleSheet, Dimensions, ProgressViewIOSComponent } from "react-native";

const styles = StyleSheet.create({

page: {
  height: Dimensions.get("window").height,
  width: "100%",
  backgroundColor: "cyan",
},
logo: {
  width: "50%",
  height: 70,
  alignSelf: "center",
  alignItems: "center",
  marginTop: "30%",
  //backgroundColor: "grey"
},
image: {
  height: 50,
  width: 50,
},
title: {
  textAlign: "center",
  fontWeight: "700",
  marginTop: 30,
  marginBottom: 10,
  fontSize: 18,
},
lowertitle: {
  textAlign: "center",
  fontWeight: "700",  
  fontSize: 18,
},
inputcontainer: {
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: 100,
  paddingTop: 10,
  marginTop: 10,
},
subtitle:{
  fontSize: 16,
  alignItems: 'center',
  textTransform: 'uppercase',
  //fontWeight: '500',
},
infomodal:{
  marginRight: 40,
  marginTop: 10,
},
modalClose: {
  alignItems: "flex-end",
  marginTop: 5,
  marginRight: 15,
},
infocirclecontainer:{
  width: "100%",
  alignItems: "flex-end",
},
instructionsBoxModal: {
  margin: 0,
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
instructionsBox: {
  width: "80%",
  alignSelf: "center",
  backgroundColor: 'white',
  paddingHorizontal: 10,
  //paddingVertical: 5,
  paddingBottom: 40,
  marginVertical: 10,
},
instructionsTitle: {
  fontSize: 16,
  marginBottom: 10,
  textAlign: "center",
  fontWeight: "700",
  color: "black",
},
dot:{
  marginTop: 3,
},
instructions: {
  fontSize: 14,
  textAlign: "left",
  color: "black",
},
button:{
  height: 40,
  justifyContent: 'center',
  borderRadius: 20,
  alignItems: 'center',
},
container:{
  width: '100%',
  paddingHorizontal: 20,
  marginTop: 20,
},
});

export default styles;