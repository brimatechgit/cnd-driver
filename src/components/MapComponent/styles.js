import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#eee', 
        alignItems: 'center',
        
    }, 
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      overlay: {
        position: 'absolute',
        left: '82%',
        bottom: '28%',
        margin: 5,
      },
      overlay3: {
        position: 'absolute',
        left: 0,
        top: 0,
        borderRadius: 50,
        margin: 5,
        padding: 10,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
      },
      overlay2: {
          alignItems: 'center',
          justifyContent: 'center',
        position: 'absolute',
        left: '82%',
        bottom: '18%',
      },
      iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        elevation: 5, 
        paddingRight: 20
      },
      leadIcon: {
        flex: 0,
        elevation: 5, backgroundColor: 'white', borderRadius: 50, width: 45, height: 45, justifyContent: 'center', alignItems: 'center'
     },
     textStyle: {
      alignItems: 'center', justifyContent: 'center'
     },
  //    button: {
  //     elevation: 3,
  //     backgroundColor: 'white',
  //     borderRadius: 50,
  //     height: 45,
  //     width: '45%',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     borderColor: 'teal',
  //     borderWidth: 1,
  //     zIndex: 0.5,
  //     color: 'red'
  // },

  button: {
    backgroundColor: 'red',
    borderRadius: 50,
    height: 45,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    paddingVertical:10,
    
},

  container2: {
    position: 'absolute',
    top: '80%',
    backgroundColor: 'white',
    height: '30%',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10
},
})

export default styles;