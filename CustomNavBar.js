import { Appbar } from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground, Image,Pressable } from 'react-native';
// import IMAGENAME from './assets/image'

function CustomNavigationBar(props) {
  return (
    <Appbar.Header style={{backgroundColor: 'black'}}>
      {/* <ImageBackground
        source={IMAGENAME}
      ></ImageBackground> */}

      <Pressable style={{paddingLeft:10}} onPress={()=>props.navigation.pop()}><Icon name='arrow-back' color='white' size={35}/></Pressable>

<Image 
style={{flex: 1, }}
  resizeMode = 'contain'
source={require('./src/assets/image/rightLogo.png')} />
      {/* <Appbar.Content title="Click n Deliver" style={{alignItems: 'center', justifyContent: 'center', }}/> */}
    </Appbar.Header>
  );
}

export default CustomNavigationBar;