import React, {useState, useEffect} from 'react';
import styles from './styles';
import { View, Text, Pressable, TouchableOpacity,Image } from 'react-native';
import MapView,  {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons';
import AccountPage from '../../screens/AccountPage/AccountPage';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-paper';
import Octicons from 'react-native-vector-icons/Octicons';


const MapComponent = props => {

  // () => {
  //   props.navigation.navigate('AccountPage')
  // }

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleSOS, setModalVisibleSOS] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible, );

  
  };
  const toggleModalSOS = () => {
    setModalVisibleSOS(!isModalVisibleSOS, );

  
  };
  const toggleNav = (nav) => {

    toggleModal;
    props.navigation.navigate(nav)
  };

  

  

  const onNavigate = () => {
    this.setState({isModalVisible: false}, () => this.props.navigation.navigate('Main'));
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
            <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../assets/image/MENU.png')} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={toggleModalSOS} style={styles.overlay2}>
            <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../assets/image/SOS.png')} />
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.overlay3} onPress={()=> props.navigation.openDrawer()}>
              <Icon name='person' size={35} color='white'></Icon>
            </TouchableOpacity> */}
        
        



            <Modal isVisible={isModalVisible}
              hasBackdrop={false}
              onModalClose={toggleModal}
            >
              <View style={{
                left: '2%',
                height: '45%',
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

                <TouchableOpacity onPress={ ()=> {
                  setModalVisible(!isModalVisible, ), 
                //  this.onModalClose,
                  console.log('toggled')
                  // props.onModalClose;
                  // props.navigation.pop();
                  // props.navigation.navigate('Home')
                  props.navigation.navigate(AccountPage)
                

                }
                  } style={{flexDirection: 'row',paddingTop: 10, right: "10%" }}>
                    {/* <View style={styles.leadIcon}><MIcon name="privacy-tip" size={30}></MIcon></View> */}
                    
                    
                    
                    <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../assets/image/GeneralSetting.png')} />
                    
                    
                    
                    <View style={styles.textStyle}><Text style={{fontSize: 20, textAlign: 'center'}}>General Settings</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {
                  setModalVisible(!isModalVisible, ), 
                  //  this.onModalClose,
                    console.log('toggled')
                    // props.onModalClose;
                    // props.navigation.pop();
                    // props.navigation.navigate('Home')
                    props.navigation.navigate(AccountPage)
                  
                  }} style={{flexDirection: 'row',paddingTop: 10, right: "10%" }}>
                 <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../assets/image/AccountSettings.png')} />
                    <View style={styles.textStyle}><Text style={{fontSize: 20}}>Account Settings</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {
                  setModalVisible(!isModalVisible, ), 
                  //  this.onModalClose,
                    console.log('toggled')
                    // props.onModalClose;
                    // props.navigation.pop();
                    // props.navigation.navigate('Home')
                    props.navigation.navigate('SupportPage')
                  }} style={{flexDirection: 'row',paddingTop: 10, right: "22%" }}>
                <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../assets/image/SupportSettings.png')} />
                    
                    
                    
                    <View style={styles.textStyle}><Text style={{fontSize: 20}}>Support</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {
                  setModalVisible(!isModalVisible, ), 
                  //  this.onModalClose,
                    console.log('toggled')
                    // props.onModalClose;
                    // props.navigation.pop();
                    // props.navigation.navigate('Home')
                    props.navigation.navigate('ChangePassword')
                  }} style={{flexDirection: 'row',paddingTop: 10, right:'8%' }}>
                    <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../assets/image/changePass.png')} />
                    <View style={styles.textStyle}><Text style={{fontSize: 20}}>Change Password</Text></View>
                </TouchableOpacity>


            </View>


</Modal>
            <Modal isVisible={isModalVisibleSOS}
              hasBackdrop={false}
              onModalClose={toggleModalSOS}
            >
              <View style={{
                left: '2%',
                height: '50%',
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

<View style={{flex:1, padding: 15, alignItems:'center'}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize: 22, fontWeight: '600'}}>Emergency Contacts</Text>
            </View>

            <View>
                <View style={{alignItems:'center', paddingTop: 25}}>
                    <Text style={{fontSize: 18}}>Contact the local authorities</Text>
                    <Text style={{fontSize: 12}}>Share your trip Information with the authority</Text>
                </View>


                <View>
                    <Text style={{fontSize: 12, paddingVertical: 15}}>Trip information:</Text>


                    <View style={{flexDirection:'row'}}>
                        <Card style={{borderRadius: 60, marginHorizontal: 10}}><Icon name='car' size={25} style={{padding:10}}></Icon></Card>
                        <View style={{flexDirection:'row', justifyContent:'space-between', width: '75%', alignItems:'center'}}>
                            <View>
                                <Text>453 Unicon Villy</Text>
                                <Text style={{fontWeight:'bold'}}>Cnd-Bike | SNH 55GP</Text>
                            </View>

                            <Icon name='chevron-forward-outline' size={25}></Icon>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',  marginVertical: 10}}>
                        <Card style={{borderRadius: 60, marginHorizontal: 10, width: 45, height: 45, alignItems: 'center', justifyContent: 'center',}}><Octicons name='primitive-dot' size={25} style={{top:10}} color='teal'></Octicons></Card>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View>
                                <Text>Current Location</Text>
                                <Text style={{fontWeight:'bold'}}>Jetline West</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            

            <View style={{justifyContent:'center', alignItems:'center'}}>


                

                <View style={{justifyContent: 'center',alignItems:'center', width: 300, paddingVertical: 10, elevation:5}}>
                    <Pressable style={styles.button} onPress={() => setModalVisibleSOS(false)}>
                        <Text style={{color: 'white', fontSize: 20}}>Dial 10111</Text>
                        <Icon name='chevron-forward-outline' size={18} color='white'></Icon>
                    </Pressable>
                </View>

                </View>

                </View>

            </View>


</Modal>

        </View>
     );
}
 
export default MapComponent;