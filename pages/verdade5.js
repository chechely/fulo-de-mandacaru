import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const verdade = require('../Services/verdade.json');

const Verdade5 = ({navigation}) => {

    let filtro = verdade.filter(verdade => verdade.Verdade === "Acne aumenta durante o período");
     console.log(filtro)
  
// Mostra na tela o titulo da Verdade (a mesma coisa que foi digitada)
  
  const titulo =  Object.entries(filtro).map(([key, value]) => {
     return <Text style={styles.titulo} key={key}>{value.Verdade}</Text>
   });
  
// Mostra na tela a descrição da Verdade

   const desc =  Object.entries(filtro).map(([key, value]) => {
     return <Text style={styles.textContent} key={key}>{value.Descrição}</Text>
   });

  return(
    <SafeAreaView style={{flex: 1, backgroundColor: '#5A4BB7'}}>
      <ScrollView style={{flex: 1}} endFillColor='white'>
        <Text style={styles.pageTitle}>Verdade</Text>
        <View style={styles.container}>
        <View>
          {titulo}
          {desc}
        </View>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginVertical: 50}}>
            
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    );
}

export default Verdade5;

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    flex: 1,
    elevation: 10,
    padding:30,
  },
  pageTitle: {
    height: '12%',
    marginBottom: 30,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', 
    textAlignVertical: 'bottom'
  },
  textContent:{
    flexWrap: "wrap",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 30,
    marginBottom: 5
  },
  titulo:{
    flexWrap: "wrap",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  btnPeriodo:{
    height: 70,
    width: '80%',
    flexDirection: 'row',
    backgroundColor: '#F3F1FE',
    marginVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderWidth: 0.5,
    borderColor: '#5A4BB7',
    elevation: 3
   
  },
  btnText:{
    fontSize: 18,
    fontWeight: 'bold'
  }

})