import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, CheckBox } from 'react-native';
import {Card} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Button from '../../components/Button/Button';
import Verification from './Verification/Verification';

const LoginPage = props => {

    const [mobile, onChangeMobile] = React.useState();
    const [isSelected, setSelection] = useState(false);

    const [cardName, onChangeCardName] = React.useState("");
    const [cardNum, onChangeCardNum] = React.useState("");


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: '+27', value: '+27'},
        {label: '+36', value: '+36'},
        {label: '+28', value: '+28'}
      ]);

    return ( 
        <View style={{flex:1, padding: 20}}>
            <View>
                <Text style={styles.text}>Sign In</Text>
            </View>

            <View style={{height: 15}}></View>

            <View>
                <TextInput
                                    style={styles.inputBottom}
                                    onChangeText={onChangeCardName}
                                    value={cardName}
                                    placeholder='Email'
                                    keyboardType='default'
                                />

                <View style={{height: 50}}></View>
                <TextInput
                                    style={styles.inputBottom}
                                    onChangeText={onChangeCardName}
                                    value={cardName}
                                    placeholder='Password'
                                    keyboardType='default'
                                />
            </View>

            <Pressable onPress={() => props.navigation.navigate(Verification)} style={{padding:5}}>
                <Text style={{fontSize: 15, color: 'teal'}}>I forgot my password</Text>
            </Pressable>

           
            <View style={{height: '15%'}}></View>
            <View >
                <Text style={{fontSize: 15, color: 'teal'}}>Or sign in with Socials</Text>
                <View style={{flexDirection: 'row'}}>
                    {/* Add Social icons here */}
                    <IconIonic name='logo-google' color='tomato' size={25} style={{padding: 5}}></IconIonic>
                    <IconIonic name='logo-facebook' color='royalblue' size={25} style={{padding: 5}}></IconIonic>
                    
                </View>
            </View>
{/* 
            <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, width: 250,left: 30 }}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(Verification)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Continue</Text>
                        </Pressable>
                    </View> */}


            <Button text='Sign In' navPage='DocumentsPage' navigation={props.navigation}></Button>
        </View>
     );
}
 
export default LoginPage;