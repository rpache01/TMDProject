import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({

    container: {

        width: "100%",
        padding: 10,
     

    },
    button: {
        backgroundColor: 'white',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center', //vertically align
        alignItems: 'center', //horizontally align

    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'black',

    }

});

export default styles;
