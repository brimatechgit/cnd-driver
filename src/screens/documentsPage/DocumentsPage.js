import React from 'react';
import { View, Text, Pressable } from 'react-native';
import AppBar from '../../components/AppBar/AppBar';
import DocumentCard from '../../components/documentCard/documentCard';
import styles from './ApprovalPage/styles';

const DocumentsPage = ({navigation}) => {

    const verifyText = 'We need to verify your documents to activate your account';

    const TermsandCo = 'Agree to Clickndeliver Terms & Conditions and Policies';

    const agreeText = 'By clicking Submit registerration you agree to the Cnd Terms & Conditions and Contractual Agreement';

    return ( 
        <View  style={{padding: 30, justifyContent:'center', flexDirection: 'column', flex:1}}>
        
        
           <View style={{paddingBottom: 55}}>
                <DocumentCard
                    id = '1'
                    title = 'Personal Details'
                    subText = 'sub text'
                    navPage = 'PersonalDetailsPage'
                    navigation={navigation}
                    >
                </DocumentCard>
                
            </View>
           <View style={{paddingBottom: 55}}>
                <DocumentCard
                    id = '2'
                    title = 'Banking Details'
                    subText = 'sub text'
                    navPage = 'BankingPage'
                    navigation={navigation}
                    >
                </DocumentCard>
                
            </View>

           <View style={{paddingBottom: 25}}><DocumentCard
            id = '3'
            title = 'Vehicle Details'
            subText = 'sub text'
            navPage = 'VehicleDetailsPage'
            navigation={navigation}
            >
            </DocumentCard>
            
            </View>
            <Text style={{paddingBottom: 20, fontSize: 11, justifyContent: 'center', textAlign: 'center'}}>{verifyText}</Text>
           
           <View style={{paddingBottom: 25}}>
                <DocumentCard
                id = '4'
                title = 'Upload Documents'
                subText = 'sub text'
                navPage = 'FicaDocsPage'
                navigation={navigation}
                >
                </DocumentCard>
            </View>
            <Text style={{paddingBottom: 30, fontSize: 11,justifyContent: 'center', textAlign: 'center'}}>{verifyText}</Text>
           
           <View style={{paddingBottom: 25}}>
                <DocumentCard
                id = '5'
                title = 'Terms & Conditions'
                subText = 'sub text'
                navPage = 'CndTerms'
                navigation={navigation}
                >
                </DocumentCard>
            </View>
            <Text style={{paddingBottom: 30, fontSize: 11,justifyContent: 'center', textAlign: 'center'}}>{TermsandCo}</Text>



            <View style={{justifyContent: 'center', alignItems: 'center',elevation: 5}}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('ApprovalPage')}>
                    <Text style={{color: 'black', fontSize: 20}}>Submit Registration</Text>
                </Pressable>
            </View>
            <View style={{height: 20}}></View>
            <Text style={{ fontSize: 11, justifyContent: 'center', textAlign: 'center'}}>{agreeText}</Text>

    </View>
        
     );
}
 
export default DocumentsPage;