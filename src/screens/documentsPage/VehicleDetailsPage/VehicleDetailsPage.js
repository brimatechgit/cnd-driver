import React from 'react';
import styles from './styles';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import DropDownPicker from "react-native-custom-dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';
// import styles from './styles';


const VehicleDetailsPage = () => {

    const [text, onChangeText] = React.useState("");
    const [resAdr, onChangeResAdr] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [sname, onChangeSname] = React.useState("");
    const [moNumber, onChangeNumber] = React.useState(null);
    const [IdNumber, onChangeId] = React.useState(null);

    this.state = {
        country: 'uk'
    }

    return ( 
        <View style={{
            overflow: 'hidden', paddingBottom: 5,
            elevation: 5,
        }}>
            <View style={styles.container}>
                <View>
                        
                        <View style={{position: 'relative', top: 0, left:0}}>
                                <Card style={{height: 250,padding:5, elevation: 10, marginTop: 35, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
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

                                <DropDownPicker
    items={[
        {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
        {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
    ]}
    defaultValue={this.state.country}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>
                                </Card>
                            </View>                     
                        </View>     
                <View style={styles.detailsTextCard}>
                        <Text style={{fontSize: 22, paddingRight: 10}}>Add Another Vehicle</Text>
                        <View style={styles.iconCircle}><Pressable onPress={console.log('here')}><Text><Icon name="plus" size={20} color="black" /></Text></Pressable></View>
                    </View>

                <View style={{bottom: 25}}>
                    
                        
                        <View style={{position: 'relative', top: 0, left:0, }}>
                            
                                <Card style={{height: 250,padding:5, elevation: 10, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
                                <View style={{justifyContent: 'center', top: 30}}>
                                
                                
                   

                    <View style={styles.form}>
               
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
                                </Card>
                            </View>                     
                        </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 5}}>
                <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                    <Text style={{color: 'black', fontSize: 20}}>SUBMIT</Text>
                </Pressable>
            </View>

            <View style={styles.main}>
                <View style={styles.textCard}><Text style={{fontSize: 22, paddingLeft: 10}}>Vehicle Details</Text></View>
                <View style={styles.numCircle}><Text style={{fontSize: 25, color: 'white'}}>3</Text></View>
            </View>
        </View>
     );
}
 
export default VehicleDetailsPage;