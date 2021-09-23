import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
// import { FAB } from 'react-native-paper';
import styles from './styles';

const AccountPage = props => {
    return ( 
        <View>

            <View style={{height: "25%", backgroundColor: 'black', }}>
                <View style={{top: "12%", left: '5%', flexDirection:'row'}}>
                    <View style={{borderRadius: 50, backgroundColor: 'white', width: 90, height: 90}}></View>
                    <View style={{justifyContent: 'center', padding: 20}}>
                        <Text style={{color: 'white', fontSize: 22}}>Name and Surname</Text>
                        <Text style={{color: 'white', fontSize: 15}}>name@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View styles={styles.accHeader}></View>
            <View>
                <Text style={{fontSize: 22, padding: 20, fontWeight:'bold'}}>General Settings</Text>
                <View>

                    <Card style={{elevation: 10, paddingVertical: 10}}>

                        <View style={{flexDirection: 'row'}}>

                    <View style={styles.leadIcon}><Icon name="car" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>My Bookings</Text>
                        </View>
                        </View>
                    </Card>
                    <View style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="stats-chart" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text>Manage Vehicles</Text>
                        <View style={{left: 170}}><Icon name="chevron-forward" size={20}></Icon></View>
                        </View>
                    </View>
                    
                    <View style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="help" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text>Emergency Contact</Text>
                        <View style={{left: 105}}><Icon name="chevron-forward" size={20}></Icon></View>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{fontSize: 22, padding: 20, fontWeight:'bold'}}>Account Settings</Text>
                <View>

                    <Card style={{elevation: 10, paddingVertical: 10}}>

                        <View style={{flexDirection: 'row'}}>

                    <View style={styles.leadIcon}><Icon name="car" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Personal Details</Text>
                        </View>
                        </View>
                    </Card>
                    <View style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="stats-chart" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text>Manage Documents</Text>
                        <View style={{left: 170}}><Icon name="chevron-forward" size={20}></Icon></View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
     
     
     
     );
}
 
export default AccountPage;