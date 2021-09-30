import React, {useState} from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import ModalTester from '../../../components/DetailsCard/ResAddress/DetailsClass';


const PersonalPage = () => {

    const [text, onChangeText] = React.useState("");
    const [resAdr, onChangeResAdr] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [sname, onChangeSname] = React.useState("");
    const [moNumber, onChangeNumber] = React.useState('');
    const [IdNumber, onChangeId] = React.useState('');
    const [modalState, onChangeModalState] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("Complex");

    


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: 'Complex / Estate', value: 'Complex'},
        {label: 'Apartment', value: 'Apartment'},
        {label: 'Hotel', value: 'Hotel'}
      ]);

    const [modalVisible, setModalVisible] = useState(false);


    return ( 
        <View style={styles.container}>
            <View style={{alignItems:'center', flexDirection: 'row', left: '10%'}}>
                <Ionicons name='person' size={22} style={{paddingHorizontal: 10, }}></Ionicons>
                <Text style={{fontSize: 22, fontWeight: '600'}}>Personal Details</Text>
            </View>
            <View>
                        
                    <View style={{position: 'relative', top: 0, left:0}}>
                            <Card style={{height: 250,padding:5, elevation: 10, marginTop: 35, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
                            <View style={{justifyContent: 'center', top: 30}}>
                            
                            
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeText}
                                    value={Text}
                                    placeholder='Name'  
                                />
                                <TextInput
                                    style={styles.input}
                                    onChange={onChangeSname}
                                    value={sname}
                                    placeholder='Surname'  
                                />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                value={email}
                                placeholder='Email'  
                            />
                                <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={moNumber}
                                placeholder='Mobile number'  
                            />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeId}
                                value={IdNumber}
                                placeholder='ID/Passport'  
                            />
                            </View></View>
                            </Card>
                        </View>                     
                    </View> 
            
            <View>
                
                <Card style={{height: 330,padding:15, elevation: 5, marginTop: 10, borderRadius: 25,  justifyContent: 'center'}}>
                    <View><Text style={{fontSize: 23, justifyContent: 'center',
        padding: 5}}>Residential Details</Text></View>

                    <View style={styles.form}>
                        <View>
                            <Text style={{fontSize: 15, padding: 10}}>Building Type</Text>
                            

                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                />

                        </View>
                        <ModalTester></ModalTester>
                    </View>
                </Card>
                
            </View>
            {/* have an error wen fields are empty */}
            {/* <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 5,}}>
                <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                    <Text style={{color: 'black', fontSize: 20}}>SUBMIT</Text>
                </Pressable>
            </View> */}


        </View>
     );
}
 
export default PersonalPage;