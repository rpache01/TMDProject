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
      subtitleT: { //tutoral line font, color, and size change
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
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
      buttonsContainerT: { //Tutorial location
        position: "absolute",
        marginVertical: 330,
        width: "100%",
        alignItems: 'center',
      }


});

export default styles;




//Roberto Pacheco