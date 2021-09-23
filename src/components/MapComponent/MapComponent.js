import React, {useState} from 'react';
import styles from './styles';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import MapView,  {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons';
import AccountPage from '../../screens/AccountPage/AccountPage';
import MIcon from 'react-native-vector-icons/MaterialIcons';


const MapComponent = props => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    return ( 
            <View style={styles.container}>
            <MapView style={styles.map} 
            
            style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{ 
        latitude: -26.16299249170051,
        longitude: 28.225375324978117,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
            >

<Marker
          coordinate={{
            latitude: -26.16299249170051,
            longitude: 28.225375324978117,}}
        ></Marker>

        
        
            </MapView>
            <TouchableOpacity style={styles.overlay} onPress={toggleModal}>
              <Icon name='menu' size={55} color='#3e7fc1'></Icon>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.overlay2}>
              <Text style={{fontSize: 22, color: 'red'}}>SOS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.overlay3} onPress={()=> props.navigation.openDrawer()}>
              <Icon name='person' size={35} color='white'></Icon>
            </TouchableOpacity>
        
        



            <Modal isVisible={isModalVisible}
        hasBackdrop={false}
      >
        <View style={{
          left: '2%',
          height: '35%',
          width: '95%',
          alignItems: 'center',
          borderColor: '#ccc',
          borderWidth: 1,
          borderStyle: 'solid',
          backgroundColor: 'white',
          elevation: 20,
          padding: 2,
          borderRadius: 25,
    }}> 

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 22, padding: 5, paddingBottom: 30}}>General Information</Text>
        <TouchableOpacity onPress={toggleModal} style={{top: '2%', left: '20%'}}><Icon name='close' size={32}></Icon></TouchableOpacity>
      </View>

      <TouchableOpacity onPress={()=> {
        setModalVisible(false);
        props.navigation.goBack(null);
        props.navigation.navigate('Home')
        props.navigation.navigate('AccountPage')
       

      }
        } style={{flexDirection: 'row',paddingTop: 10, right: "10%" }}>
          {/* <View style={styles.leadIcon}><MIcon name="privacy-tip" size={30}></MIcon></View> */}
          <View style={styles.leadIcon}><Icon name='settings' size={32}></Icon></View>
          <View style={styles.textStyle}><Text style={{fontSize: 20, textAlign: 'center'}}>General Settings</Text></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> {
         props.navigation.goBack(null);
         props.navigation.navigate('Home')
        props.navigation.navigate('AccountPage')}} style={{flexDirection: 'row',paddingTop: 10, right: "10%" }}>
          <View style={styles.leadIcon}><Icon name='person' size={32}></Icon></View>
          <View style={styles.textStyle}><Text style={{fontSize: 20}}>Account Settings</Text></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> {
         props.navigation.goBack(null);
         props.navigation.navigate('Home')
        props.navigation.navigate(SupportPage)}} style={{flexDirection: 'row',paddingTop: 10, right: "25%" }}>
          <View style={styles.leadIcon}><MIcon name='support-agent' size={32}></MIcon></View>
          <View style={styles.textStyle}><Text style={{fontSize: 20}}>Support</Text></View>
      </TouchableOpacity>


      </View>


</Modal>

        </View>
     );
}
 
export default MapComponent;