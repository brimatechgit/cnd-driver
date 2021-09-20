import React from 'react';
import { View, Text, Button, Pressable, } from 'react-native';
import styles from './styles';

const DocumentCard = (props) => {

    

    return ( 
        <View style={styles.container}>
            <Pressable onPress={() => props.navigation.navigate(props.navPage)}>
            <View style={styles.textCard}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            </Pressable>
            <View style={styles.numCircle}><Text style={{fontSize: 25}}>{props.id}</Text></View>
        </View>
     );
}
 
export default DocumentCard;