import { Appbar } from 'react-native-paper';
import React from 'react';
import { ImageBackground, Image } from 'react-native';
// import IMAGENAME from './assets/image'

function CustomNavigationBar() {
  return (
    <Appbar.Header style={{backgroundColor: 'black'}}>
      {/* <ImageBackground
        source={IMAGENAME}
      ></ImageBackground> */}

<Image 
style={{flex: 1, }}
  resizeMode = 'contain'
source={require('./src/assets/image/rightLogo.png')} />
      {/* <Appbar.Content title="Click n Deliver" style={{alignItems: 'center', justifyContent: 'center', }}/> */}
    </Appbar.Header>
  );
}

export default CustomNavigationBar;