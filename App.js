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
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import CustomDrawerContent from './src/components/customDrawerCompo/CustomDrawer';
import ManageDocsPage from './src/screens/AccountPage/DrawerPages/ManageDocs/ManageDocs';
import BankDetailsPage from './src/screens/AccountPage/DrawerPages/BankDetails/BankDetails';
import ChangePassword from './src/screens/AccountPage/DrawerPages/ChangePassw/ChangePassword';
import SplashPage from './src/screens/LandingPage/splashScreen/splashPage';
import LandingPage from './src/screens/LandingPage/LandingPage';
import LoginPage from './src/screens/LoginPage/LoginPage';
import RegisterPage from './src/screens/RegisterPage/RegisterPage';
import Verification from './src/screens/LoginPage/Verification/Verification';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();




function UserDrawerPage() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen options={{headerShown: false}} name="HomePage" component={HomePage} />
      <Drawer.Screen options={{headerShown: false}} name="ManageDocsPage" component={ManageDocsPage} />
      <Drawer.Screen options={{headerShown: false}} name="BankDetailsPage" component={BankDetailsPage} />
      <Drawer.Screen options={{headerShown: false}} name="ChangePassword" component={ChangePassword} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="SplashPage"
       screenOptions={{
        header: CustomNavigationBar,
      }}
      >
        <Stack.Screen name="Home" component={UserDrawerPage} />
        <Stack.Screen name="SplashPage"  component={SplashPage} />
        <Stack.Screen name="LandingPage"  component={LandingPage} />
        <Stack.Screen name="LoginPage"  component={LoginPage} />
        <Stack.Screen name="RegisterPage"  component={RegisterPage} />
        <Stack.Screen name="Verification"  component={Verification} />
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


