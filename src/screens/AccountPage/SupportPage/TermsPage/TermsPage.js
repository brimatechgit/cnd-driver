import React from 'react';
import { View,Text,TextInput, Pressable} from 'react-native';
import styles from './styles';


const TermsPage = () => {

    const terms = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod porttitor tellus, pulvinar faucibus mauris tempor vitae. Nam id mollis massa. Maecenas eu congue risus. Phasellus eleifend urna sem, sit amet commodo ligula varius in. Aliquam erat volutpat. Ut sagittis malesuada lorem, non convallis mauris ullamcorper in. In vel odio turpis. Nulla ut pharetra sem. Donec nec leo ligula. Proin laoreet lorem sit amet felis gravida consectetur. Nam molestie risus sit amet sapien suscipit, a tristique orci pulvinar. Nulla facilisi. In hac habitasse platea dictumst. Quisque nisl risus, varius a ex laoreet, molestie efficitur orci. Vestibulum ut euismod enim.'

    return ( 
        <View style={{flex:1, padding: 15}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize: 22, fontWeight: '600'}}>Terms & Conditions</Text>
            </View>

            <View>
                <Text>{terms}</Text>
            </View>

            <View style={{justifyContent: 'center',  paddingTop: 15,}}>
                <Pressable style={styles.button} >
                    <Text style={{color: 'black', fontSize: 20}}>Download</Text>
                </Pressable>
            </View>

        </View>
     );
}
 
export default TermsPage;