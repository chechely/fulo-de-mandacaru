import React from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, useColorScheme, Image } from 'react-native';
import logo from '../assets/ss.png';
const Periodo = ({navigation}) => {
  return(
  <View style={styles.container}>
    <Text style={styles.pageTitle}>Período</Text>
    <View style={styles.contentContainer}>
      <Image source={logo}/>
      <Text style={styles.textContent}>Em breve...aguarde!</Text>
    </View>
  </View>);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A4BB7'
  },
  pageTitle:{
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    height: '15%',
    textAlignVertical: 'bottom',
    marginBottom: 20,
    height: '15%'
  },
  contentContainer:{
    backgroundColor: 'white',
    flex: 1,
    height: '85%',
    width: '100%',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    alignItems: 'center',
    padding: 30
  },
  textContent:{
    color: '#FF598C',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 20,
  }
  

});
export default Periodo;