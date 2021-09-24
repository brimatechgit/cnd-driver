import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomNavigationBar from './CustomNavBar';
import DocumentsPage from './src/screens/documentsPage/DocumentsPage';
import PersonalDetailsPage from './src/screens/documentsPage/PersonalDetailsPage/PersonalDetails';
import FicaDocsPage from './src/screens/documentsPage/FicaDocsPage/FicaDocsPage';
import VehicleDetailsPage from './src/screens/documentsPage/VehicleDetailsPage/VehicleDetailsPage';
import BankingPage from './src/screens/documentsPage/BankingPage/BankingPage';
import ModalTester from './src/components/DetailsCard/ResAddress/DetailsClass';
import HomePage from './src/screens/HomePage/HomePage';
import ApprovalPage from './src/screens/documentsPage/ApprovalPage/ApprovalPage';
import AccountPage from './src/screens/AccountPage/AccountPage';
import AccountSettings from './src/screens/AccountPage/AccountSettings/AccountSettings';
import SupportPage from './src/screens/AccountPage/SupportPage/SupportPage';
import CndTerms from './src/screens/documentsPage/CndTerms/CndTerms';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList, DrawerItem,} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
  const width = useWindowDimensions().width * 0.3;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>

        <View style={{height:'55%', alignItems: 'center'}}>
          <View style={{borderRadius: 50, backgroundColor: 'black', padding: 10}}><Icon name='person' size={65} color='white'></Icon></View>

          <View style={{padding: 14, alignItems: 'center'}}>
            <Text>Name and Surname</Text>
            <Text style={{fontSize: 10}}>gmail Account | Mobile</Text>
          </View>

            <View style={{flexDirection:'row'}}>
              <Icon name='directions-car' size={45}></Icon>
              <View style={{paddingLeft: 10}}>
                <Text style={{fontSize: 10}}>Number of Trips</Text>
                <Text >13 Trips</Text>
              </View>
            </View>
        </View>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#fff2df', width: width, height: width },
          ]}>
          <>
            <View>
              
              <DrawerItem
                label="Screen1"
                labelStyle={{ color: '#fbae41', fontSize: 10 }}
                onPress={() => {
                  props.navigation.navigate('Screen1', { body: 'hi' });
                }}
              />
            </View>
          </>
          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Article"
            labelStyle={{ color: '#609806' }}
            onPress={() => {
              props.navigation.navigate('Article', { body: 'article' });
            }}
          />
        </View>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#EFFFD5', width: width, height: width },
          ]}>
          <View
            style={[styles.circleContainer, { backgroundColor: '#b5ff39' }]}>
            <Feather Medical name="briefcase" size={25} color="#609806" />
          </View>

          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Feed"
            labelStyle={{ color: '#609806' }}
            onPress={() => {
              props.navigation.navigate('Feed', { body: 'hello' });
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

function UserDrawerPage() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen options={{headerShown: false}} name="HomePage" component={HomePage} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
       screenOptions={{
        header: CustomNavigationBar,
      }}
      >
        <Stack.Screen name="Home" component={UserDrawerPage} />
        <Stack.Screen  name="DocumentsPage" component={DocumentsPage} />
        <Stack.Screen  name="PersonalDetailsPage" component={PersonalDetailsPage} />
        <Stack.Screen  name="VehicleDetailsPage" component={VehicleDetailsPage} />
        <Stack.Screen  name="FicaDocsPage" component={FicaDocsPage} />
        <Stack.Screen  name="BankingPage" component={BankingPage} />
        <Stack.Screen  name="ApprovalPage" component={ApprovalPage} />
        <Stack.Screen  name="SupportPage" component={SupportPage} />
        <Stack.Screen  name="AccountSettings" component={AccountSettings} />
        <Stack.Screen  name="CndTerms" component={CndTerms} />
        <Stack.Screen options={{headerShown: false}}  name="AccountPage" component={AccountPage} />
        {/* <Stack.Screen options={{headerShown: false}}  name="AccountPage" component={UserDrawerPage} /> */}
        <Stack.Screen  name="ModalTester" component={ModalTester} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
});
