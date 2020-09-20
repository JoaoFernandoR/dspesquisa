import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import  Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native'

const Home = () => {

  const navigation = useNavigation()

    return (
    <React.Fragment>
      <Header />
      <View style={styles.container}>
        <Image source={require('../../../assets/gamer.png')} style={styles.gamerImage}/>
        <Text style={styles.title}> Vote Agora !</Text>
        <Text style={styles.subTitle}> Nos diga qual o seu jogo favorito </Text>
        <View style={styles.footer}>
            <RectButton style={styles.button} onPress={() => navigation.navigate('CreateRecord')}>
                <Text style={styles.buttonText}>
                    Coletar Dados
                </Text>
                <View style={styles.buttonIcon}>
                    <Image source={require('../../../assets/Seta.png')}/>
                </View>
            </RectButton>
        </View>
    </View>
    </React.Fragment>
    );
  }

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0B1F34',
      alignItems: 'center',
    },
    gamerImage: {
      marginTop: '5%',
    },
    title: {
      color: '#00D4FF',
      fontSize: 32,
      fontWeight: 'bold',
      marginTop: 25,
      fontFamily: "Play_700Bold",
    },
    subTitle: {
      color: '#ED7947',
      fontSize: 18,
      marginTop: 15,
      fontFamily: "Play_400Regular",
    },
    footer: {
      marginTop: '10%',
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#00D4FF',
      flexDirection: 'row',
      borderRadius: 10
    },
    buttonIcon: {
      backgroundColor: '#ED7947',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontFamily: "Play_700Bold",
      fontWeight: 'bold',
      fontSize: 18,
      color: '#0B1F34',
    }
});

export default Home
