import React from 'react';
import styles from './styles';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { Card, RadioButton } from 'react-native-paper';
import DropDownPicker from "react-native-custom-dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
// import styles from './styles';


const ManageVehiclesPage = () => {

    const [text, onChangeText] = React.useState("");
    const [resAdr, onChangeResAdr] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [sname, onChangeSname] = React.useState("");
    const [moNumber, onChangeNumber] = React.useState(null);
    const [IdNumber, onChangeId] = React.useState(null);
    const [checked, setChecked] = React.useState('No');

    

    return ( 
        <View style={{
            overflow: 'hidden', paddingBottom: 5,
            elevation: 5,
            alignItems:'center'
        }}>
            <View style={styles.container}>

            <View style={{alignItems:'center'}}>
                <Text style={{fontSize: 22, fontWeight: '600'}}>Manage Vehicle</Text>
            </View>
                <View>
                        
                        <View style={{position: 'relative', top: 0, left:0}}>
                                
                                <View style={{justifyContent: 'center', top: 30}}>
                                
                                <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder='Make'
                            
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeSname}
                            value={sname}
                            placeholder='Model'
                            
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder='Year'
                            
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={moNumber}
                            placeholder='License Plate'
                            keyboardType="numeric"
                            
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeResAdr}
                            value={resAdr}
                            placeholder='Colour'
                            
                            
                        />
                    </View>



                                </View>


                       

  
                                
                            </View>                     
                        </View>     
                

                <View style={{paddingTop: 25}}>
                    
                        
                        <View style={{position: 'relative', top: 0, left:0, }}>
                            
                                <View style={{justifyContent: 'center', top: 30}}>
                                
                                
                   

                                    <View style={styles.list}>
                                        <Text style={{fontSize:13}}>Added Vehicles:</Text>
                            
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin:10}}>
                                            <MIcon name='bike-scooter' size={30}></MIcon>
                                            <View style={{flexDirection:'row', right: '10%', justifyContent: 'center'}}>
                                                <Text style={{justifyContent:'center', top:'5%'}}>Vehicle 1</Text>
                                                <Card style={{elevation: 5, borderRadius: 50, justifyContent:'center', padding:5, left:'20%'}}>
                                                    <Text>FGL FF GP</Text>
                                                </Card>

                                            </View>
                                                <MIcon name='edit' size={25}></MIcon>
                                            
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin:10}}>
                                            <MIcon name='bike-scooter' size={30}></MIcon>
                                            <View style={{flexDirection:'row', right: '10%', justifyContent: 'center'}}>
                                                <Text style={{justifyContent:'center', top:'5%'}}>Vehicle 2</Text>
                                                <Card style={{elevation: 5, borderRadius: 50, justifyContent:'center', padding:5, left:'20%'}}>
                                                    <Text>FGL FF GP</Text>
                                                </Card>

                                            </View>
                                                <MIcon name='edit' size={25}></MIcon>
                                            
                                        </View>
                                    
                                    
                                    </View>
                                </View>
                                
                            </View>                     
                        </View>
            <View style={{justifyContent: 'center',alignItems:'center', paddingVertical: 35}}>
                <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                    <Text style={{color: 'black', fontSize: 20}}>Update</Text>
                </Pressable>
            </View>
            </View>
        </View>
     );
}
 
export default ManageVehiclesPage;