import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BankDetailsPage from './DrawerPages/BankDetails/BankDetails';
import ManageDocsPage from './DrawerPages/ManageDocs/ManageDocs';
// import { FAB } from 'react-native-paper';
import styles from './styles';
import EmergencyPage from './SupportPage/EmergencyContacts/EmergancyPage';
import ManageVehiclesPage from './SupportPage/ManageVehicles/ManageVehiclePage';
import PersonalPage from './PersonalDetails/PersonalDetPage';

const AccountPage = props => {
    return ( 
        <View style={{flex:1}}>

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
                    <Pressable onPress={() => props.navigation.navigate(ManageVehiclesPage)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="stats-chart" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text>Manage Vehicles</Text>
                        <Icon name="chevron-forward" size={20}></Icon>
                        </View>
                    </Pressable>
                    
                    <Pressable onPress={() => props.navigation.navigate(EmergencyPage)} style={{padding: 10, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><MaterialCommunityIcons name="alarm-light" size={30}></MaterialCommunityIcons></View>
                        <View style={styles.textContainer}>
                            <Text>Emergency Contact</Text>
                            <Icon name="chevron-forward" size={20}></Icon>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View>
                <Text style={{fontSize: 22, padding: 20, fontWeight:'bold'}}>Account Settings</Text>
                <View>

                    <Card style={{elevation: 10, paddingVertical: 10}}>

                        <Pressable onPress={() => props.navigation.navigate(PersonalPage)}  style={{flexDirection: 'row'}}>

                    <View style={styles.leadIcon}><Icon name="car" size={30}></Icon></View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Personal Details</Text>
                            <Icon name="chevron-forward" size={20}></Icon>
                        </View>
                        </Pressable>
                    </Card>
                    <Pressable onPress={() => props.navigation.navigate(ManageDocsPage)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <View style={styles.leadIcon}><Icon name="stats-chart" size={30}></Icon></View>
                        <View style={styles.textContainer}>

                        <Text>Manage Documents</Text>
                        <Icon name="chevron-forward" size={20}></Icon>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View>
        <Text style={styles.textHeader}>Payment</Text>
            <Pressable onPress={() => props.navigation.navigate(BankDetailsPage)}>

                

                    <View style={{flexDirection: 'row'}}>

                <View style={styles.leadIcon}><MIcon name="privacy-tip" size={30}></MIcon></View>
                        <View style={styles.textContainer}>
                            <Text style={{fontSize: 22}}>Bank Details</Text>
                            <Icon name="chevron-forward" size={20}></Icon>
                        </View>
                </View>
        
            </Pressable >
        </View>
        </View>
     
     
     
     );
}
 
export default AccountPage;