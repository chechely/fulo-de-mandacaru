import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';  

const SymptomButton = () => {
  return(
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>aaaaaa</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    borderRadius: 40, 
    backgroundColor: '#C2BAF84D', 
    height: 65, 
    width:'45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#DD0346',
  },
  buttonText:{
    fontSize: 18,
    color: '#DD0346' 
  }
});
export default SymptomButton;