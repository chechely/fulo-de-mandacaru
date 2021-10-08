import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Menstrual = ({navigator}) =>{
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: '#5A4BB7'}}>
        <Text style={styles.pageTitle}> Período Menstrual</Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
          <MaterialIcons name="fitness-center" size={48} color="black" />
          <Text style={styles.btnText}>Exercírcios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="food-apple" size={48} color="black" />
          <Text style={styles.btnText}>Alimentação</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pageTitle:{
    height: '12%',
    marginBottom: 30,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', 
    textAlignVertical: 'bottom'
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '90%',
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    elevation: 10,
  },
  button:{
    height: 90,
    width: '80%',
    backgroundColor: '#3EC3A4',
    borderRadius: 15,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 30,
    marginVertical: 20,
  },
  btnText:{
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Menstrual;