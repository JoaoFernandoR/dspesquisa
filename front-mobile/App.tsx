import React from 'react';
import { View, StyleSheet } from 'react-native'
import { AppLoading } from 'expo'
import { useFonts, Play_400Regular, Play_700Bold } from '@expo-google-fonts/play';  
import { PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p'
// Components
import Header from './src/components/Header'
import Routes from './src/routes'

export default () => {
  const [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold,
    PressStart2P_400Regular
  });

  if (!fontsLoaded) return <AppLoading />;

    return (
    <View style={styles.container}>
      <Routes />
    </View>
    );
  }

  const styles = StyleSheet.create({
    container : {
      flex: 1,
    }
  })
