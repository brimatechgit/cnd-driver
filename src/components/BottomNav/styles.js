import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    // container: {
    //     backgroundColor: 'white',
    //     height: '10%',
    //     borderTopEndRadius: 15,
    //     borderTopStartRadius: 15,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     padding: 10
    // },

    container: {
        position: 'absolute',
        top: '85%',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
    },

    status: {
        fontSize: 25,
        left: 25,
        top: 5,
        
    },

    goContainer: {
        height: 45,
        width: 45,
        right: 15,
        top: 5,
        textAlign: 'center',
        borderRadius: 50,
        backgroundColor: 'blue',
        opacity: 0.8
    }
})
 
export default styles;