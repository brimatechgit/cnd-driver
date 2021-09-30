import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import PoliciesPage from './PoliciesPage/PoliciesPage';
import TermsPage from './TermsPage/TermsPage';
import ContactPage from './ContactUs/ContactPage';


const SupportPage = (props) => {
    return ( 
        <View>

        
        <View>
            <Text style={styles.textHeader}>Support</Text>
            <View>

                <Card style={{elevation: 10, paddingVertical: 10}}>

                    <Pressable onPress={() => props.navigation.navigate(PoliciesPage)} style={{flexDirection: 'row'}}>

                        <View style={styles.leadIcon}><MIcon name="privacy-tip" size={30}></MIcon></View>
                            <View style={styles.textContainer}>

                            <Text style={{fontSize: 22}}>Policies</Text>
                            </View>
                    </Pressable>
                </Card>
                <Pressable onPress={() => props.navigation.navigate(TermsPage)} style={styles.viewContainer}>
                    <View style={styles.leadIcon}><Icon name="md-document-attach" size={30}></Icon></View>
                    
                    <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
                    <Text style={styles.text}>Terms and Conditions</Text>
                    <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    </View>
                </Pressable>


                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><MIcon name="contact-phone" size={30}></MIcon></View>
                    
                    <Pressable onPress={() => props.navigation.navigate(ContactPage)} style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
                        <Text style={styles.text}>Contact Us</Text>
                        <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    </Pressable>
                </View>
                <Text style={styles.textHeader}>Other</Text>
                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><MIcon name="logout" size={30} color='red'></MIcon></View>
                    
                    <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
                        <Text style={styles.text}>Logout</Text>
                        <View style={styles.trailIcon} ><Icon name="chevron-forward" size={20}></Icon></View>
                    </View>
                </View>
            </View>
        </View>
    </View>
 
     );
}
 
export default SupportPage;