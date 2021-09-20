import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Modal, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles';
import DetailsClass from './ResAddress/DetailsClass';

const DetailsCard = props => {

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
                
                <Card style={{height: 330,padding:15, elevation: 5, marginTop: 15, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
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
                        <DetailsClass></DetailsClass>
                    </View>
                </Card>
                
            </View>
            {/* have an error wen fields are empty */}
            <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 15,}}>
                <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                    <Text style={{color: 'black', fontSize: 20}}>SUBMIT</Text>
                </Pressable>
            </View>

            <View style={styles.main}>
                <View style={styles.textCard}><Text style={{fontSize: 22, paddingLeft: 10}}>Personal Details</Text></View>
                <View style={styles.numCircle}><Text style={{fontSize: 25, color: 'white'}}>1</Text></View>
            </View>


        </View>
        
        
     );
}
 
export default DetailsCard;