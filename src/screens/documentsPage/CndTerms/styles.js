import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingBottom: 5,
        padding: 15,
    },

    main: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 25,
        top: 10
       
    },
    subMain: {

    },
    form: {
        
    },
    textCard: {
        elevation: 25,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
        width: 310,
        paddingLeft: 5,
        height: 65,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    numCircle: {
        elevation: 25,
        position: 'absolute',
        left: -15,
        height: 40,
        width: 40,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    iconCircle: {
        position: 'absolute',
        right: 12,
        top: 10,
        height: 25,
        width: 25,
        borderRadius: 50,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        elevation: 2
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: 150,
        padding: 10,
        margin: 5,
        justifyContent: 'flex-start'
    },

    inputDetails: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: 150,
        padding: 5
    },
    text: {
        fontSize: 20, justifyContent: 'center',
        padding: 5
    },
    inputView: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    button: {
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 50,
        height: 35,
        width: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'teal',
        borderWidth: 1,
        
    },
    checkbox: {
        alignSelf: "center",
        borderColor: 'red'
      },

})

export default styles