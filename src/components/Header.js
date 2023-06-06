import react, {useState} from 'react'
import { StyleSheet, Text, View,TextInput,Alert,Button,ScrollView } from 'react-native';

const Header = () => {

    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Todo App</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#f2f2f2',
        padding: 15,
    },
    headerTitle:{
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20
    }
 });

 export default Header;