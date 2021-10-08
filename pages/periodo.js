import React from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, useColorScheme, Image,ScrollView } from 'react-native';
import logo from '../assets/ss.png';

const doenca = require('../Services/doencas.json');

const Periodo = ({navigation}) => {
  const doe =  Object.entries(doenca).map(([key, value]) => {
    return <Text style={styles.textContent} key={key}>{value.Descrição}</Text> 
  });
  return(
    <ScrollView>
  <View style={styles.container}>
    <Text style={styles.pageTitle}>Período</Text>
    <View style={styles.contentContainer}>
      {doe}
    </View>
  </View>
  </ScrollView>
  );
  
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
    color: '#353535',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 23
  }
  

});
export default Periodo;