import React, {useEffect} from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import LandingPage from '../LandingPage';
import styles from './styles';

const SplashPage = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(LandingPage)
        }, 4000);
      }, []);


    return ( 
        <View style={{flex: 1, alignItems:'center', padding:20}}>
            <View style={{height: '90%', alignItems: 'center', justifyContent: 'center'}}>
            <Image 
style={{flex: 1, }}
  resizeMode = 'contain'
source={require('../../../assets/image/landingLogo.png')} />
            </View>

            <Text style={{color:'teal', fontWeight:'bold'}}>Powered by</Text>
            <Text style={{fontSize: 25}}>brima<Text style={{color:'steelblue', fontSize: 25}}>tech</Text></Text>
        </View>
     );
}
 
export default SplashPage;