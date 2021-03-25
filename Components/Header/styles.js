import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        //paddingHorizontal: 20, will add a space between the edge of screen
    }, 
    logo: {
        width: 100,
        height: 60,
        resizeMode: 'contain',
    },
    menu: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    }

});

export default styles;