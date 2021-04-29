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
        marginVertical: 20,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
      },
      space: {
        width:20,
        height: 20,
      },
      subtitleLeButton: {
        marginVertical: 20,
        height: 30,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 20,
        width: "100%"
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
      buttonsContainerLE: {
        position: "absolute",
        marginVertical: 330,
        //justifyContent: 'center',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
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
    },
    containerPdf: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }


});

export default styles;
