import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
   accHeader: {

   },
   fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
   },
   card: {
      flexDirection: 'row',
      padding: 10,
   },
   leadIcon: {
      elevation: 5,
       backgroundColor: 'white', borderRadius: 50, width: 45, height: 45, justifyContent: 'center', alignItems: 'center'
   },
   leadIconHeader: {
      left: '20%', backgroundColor: 'white', borderRadius: 50, width: 60, height: 60, justifyContent: 'center', alignItems: 'center'
   },
   textContainer: {
      paddingHorizontal: 10,
      width: '85%',
      justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'
   },

   text: {
      fontSize: 18
   },
   textHeader: {
      fontSize: 22, padding: 20, fontWeight:'800'
     }

});

export default styles;