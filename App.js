import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="DocumentsPage"
       screenOptions={{
        header: CustomNavigationBar,
      }}
      >
        <Stack.Screen name="Home" component={HomePage} />
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
        <Stack.Screen  name="ModalTester" component={ModalTester} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
