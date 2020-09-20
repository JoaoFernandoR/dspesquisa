import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


const Header = () => {

    const navigation =  useNavigation()

    return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <View style={styles.header}>
            <Image source={require('../../../assets/logo.png')}/>
            <Text style={styles.textLogo1}> Big Game</Text>
            <Text style={styles.textLogo2}> Survey </Text>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default Header


const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        height: 70,
        backgroundColor: '#37474F',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textLogo1: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: "Play_700Bold",
        color: '#ED7947',
        marginLeft: 10,
        marginRight: 5,
    },
    textLogo2: {
        fontWeight: 'bold',
        fontFamily: "Play_700Bold",
        fontSize: 18,
        color: '#FFF'
    },
    tinyLogo: {
        width: 25,
        height: 25,
    },    
})