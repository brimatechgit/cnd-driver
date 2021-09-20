import React, {useState} from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

import { IconButton } from 'react-native-paper';
import { Switch } from 'react-native-switch';
import {LogBox} from 'react-native';

const BottomNav = () => {

    
LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`']);

    const [switchValue, setSwitchValue] = useState(false);
    const [colorValue, setColorValue] = useState('black');
    const [statusValue, setStatusValue] = useState("You're Offline!");

    const toggleSwitch = (value) => {
      //To handle switch toggle
      setSwitchValue(value);
    
    if(value){
        setStatusValue('Your Online!')
        setColorValue('#3e7fc1')

    } else {
        setStatusValue("You're Offline!")
        setColorValue('black')
    }
      //State changes according to switch
    };

    return ( 
        <View style={styles.container}>
           

            <Text style={{fontSize: 25,
        left: 25,
        top: 5,
        color: colorValue
        }}>{statusValue}</Text>

           <View style={{top: 10, right: 10}}>

           <Switch
            
            
value={switchValue}
onValueChange={toggleSwitch}
backgroundActive={'#3770b7'}
backgroundInactive={'gray'}
circleActiveColor={'#3e7fc1'}
circleInActiveColor={'#000000'}/>

           </View>
            
            
        </View>
     );
}
 
export default BottomNav;