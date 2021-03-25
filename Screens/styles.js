import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create ({
    Natcontainer: {
        width: "100%",
        height: Dimensions.get('window').height,
      },
      titles: { //location of the titles
        marginTop: "30%",
        width: "100%",
        alignItems: 'center',
      },
      title: { //how the Texas national guard looks
        fontSize: 30, //size of the title
        color: 'white',
        fontWeight: 'bold',
      
      },
      subtitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
      },
    
      image: {
        width: "100%",
        height: "100%",
        resizeMode:"cover",
        position: "absolute",
      },

      buttonsContainer: {
        position: "absolute",
        bottom: 50,
        width: "100%",
        alignItems: 'center',
      },
      containerHeader: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        //paddingHorizontal: 20, will add a space between the edge of screen
    }, 
    logoHeader: {
      paddingHorizontal: 35,
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    menuHeader: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    }


});

export default styles;
