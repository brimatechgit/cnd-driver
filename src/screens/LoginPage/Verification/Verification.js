import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import  {Card}  from 'react-native-paper';
import HomePage from '../../HomePage/HomePage';
import Button from '../../../components/Button/Button';
import styles from './styles';







const Verification = props => {

    const [OTP, onChangeOTP] = React.useState();
    const [OTP2, onChangeOTP2] = React.useState();
    const [OTP3, onChangeOTP3] = React.useState();
    const [OTP4, onChangeOTP4] = React.useState();

    return ( 
        <View style={{flex:1, padding: 20}}>
            <Text style={styles.text}>Enter Verification Code</Text>
            <Text style={{}}>Please enter the 4 digit code sent to you</Text>

            <Text style={{letterSpacing:0.9}}>Verification code</Text>

            <View style={{height: 15}}></View>
            <View style={{flexDirection: 'row', right: '3%'}}>
                <Card style={{elevation: 5, borderTopLeftRadius: 25, borderBottomLeftRadius: 25, margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                <TextInput
                                        style={{borderBottomColor: 'teal',
                                        borderWidth: 0,
                                        width: 40,
                                        paddingBottom: 5,
                                        margin: 10,
                                    }}
                                        onChange={onChangeOTP}
                                        value={OTP}
                                        maxLength={1}
                                        keyboardType='number-pad'
                                        fontSize={22} 
                                    />
                </View>
                </Card>

                <Card style={{elevation: 5, margin: 10}}>
                    <View style={{flexDirection: 'row'}}>
                    <TextInput
                                            style={styles.inputCard}
                                            onChange={onChangeOTP2}
                                            value={OTP2}
                                            maxLength={1}
                                            keyboardType='number-pad' 
                                            fontSize={22}
                                        />
                    </View>
                </Card>
                <Card style={{elevation: 5, margin: 10}}>
                    <View style={{flexDirection: 'row'}}>
                    <TextInput
                                            style={styles.inputCard}
                                            onChange={onChangeOTP3}
                                            value={OTP3}
                                            maxLength={1}
                                            keyboardType='number-pad' 
                                            fontSize={22}
                                        />
                    </View>
                </Card>

                <Card style={{elevation: 5, borderTopRightRadius: 25, borderBottomRightRadius: 25, margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                <TextInput
                                        style={{borderBottomColor: 'teal',
                                        borderWidth: 0,
                                        width: 40,
                                        paddingBottom: 5,
                                        margin: 10,
                                    }}
                                        onChange={onChangeOTP4}
                                        value={OTP4}
                                        maxLength={1}
                                        keyboardType='number-pad'
                                        fontSize={22}
                                        
                                    />
                </View>
                </Card>
            </View>
            
            <View style={{height: 15}}></View>
        


           
                    <Pressable style={styles.button} onPress={() => console.log('hi')}>
                        <Text style={{ fontSize: 22, bottom:2}}>Verify</Text>
                    </Pressable>
        
            
                      
                <Text style={{color: 'teal', fontSize: 15}}>Resemd Code: SMS</Text>
                    
        </View>
     );
}
 
export default Verification;