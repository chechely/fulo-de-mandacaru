import React, { useState } from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet,TextInput} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// chama os dados json

const mito = require('../Services/mitos.json');
const verdade = require('../Services/verdade.json');

const MitoVerdade = ({navigation}) =>{
    const [text, onChangeText] = React.useState();
   
  // Filtra o array a partir do que colocar no TextInput

    let filtro = verdade.filter(verdade => verdade.Verdade === text);
     console.log(filtro)
  
// Mostra na tela o titulo da Verdade (a mesma coisa que foi digitada)
  
  const batata =  Object.entries(filtro).map(([key, value]) => {
     return <Text style={styles.buttonText} key={key}>{value.Verdade}</Text>
     //<Text key={key}>{value.Verdade}</Text>
   });
  
// Mostra na tela a descrição da Verdade

   const banana =  Object.entries(filtro).map(([key, value]) => {
     return <Text style={styles.buttonText} key={key}>{value.Descrição}</Text>
   });

    // No console, além do erro ao tentar mostrar, tambem aparece um erro que 
    //basicamente é que o input esta em tempo real, meio que ele fica imprimindo vazio até achar
    // Na tela esse erro não mostra, só apresenta no console
  
  // Erro : Warning: A component is changing an uncontrolled input of 

    // Filtra o array a partir do que colocar no TextInput
    let filtro_m = mito.filter(mito => mito.Mito === text);
     console.log(filtro)
  
// Mostra na tela o titulo do mito (a mesma coisa que foi digitada)
  
  const mito_m =  Object.entries(filtro_m).map(([key, value]) => {
     return <Text style={styles.buttonText} key={key}>{value.Mito}</Text>
   });
  
// Mostra na tela a descrição do mito 

   const mito_d =  Object.entries(filtro_m).map(([key, value]) => {
     return <Text style={styles.buttonText} key={key}>{value.Descrição}</Text>
   });

// Assim que o texto for digitado, se ele for exatemente igual a qualquer titulo
// que esteja em mitos.json ou verdade.json aparecerá no mesmo momento
// para exibir na tela é só colocar {mito_d} (mostra a descriçaõ do mito somente)

  return(
    <SafeAreaView style={{flex: 1, backgroundColor: '#5A4BB7'}}>
        <Text style={styles.pageTitle}> Mitos e Verdades</Text>
        <View style={styles.container}>
        <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
           <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Digite aqui...'
        placeholderTextColor= '#c4c4c4'
      />
          </View>          
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
          {mito_m}
          {batata}
          </View> 
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
          {mito_d}
          {banana}
          </View>          
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Mito1')}
          style={styles.button}>
            <Entypo name="thumbs-up" size={24} color="black" />
            <Text style={styles.btnText}>Mito1</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Verdade1')}
          style={styles.button}>
            <Entypo name="thumbs-up" size={24} color="black" />
            <Text style={styles.btnText}>Verdade</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>

          <TouchableOpacity 
          onPress={() => navigation.navigate('Mito2')}
          style={styles.button}>
            <Entypo name="thumbs-down" size={24} color="black" />
            <Text style={styles.btnText}>Mito</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Mito3')}
          style={styles.button}>
            <Entypo name="thumbs-up" size={24} color="black" />
            <Text style={styles.btnText}>Mito</Text>
          </TouchableOpacity>
        </View>
        </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Mito1')}
          style={styles.button}>
            <Entypo name="thumbs-down" size={24} color="black" />
            <Text style={styles.btnText}>Mito</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate('Verdade2')} 
          style={styles.button}>
            <Entypo name="thumbs-up" size={24} color="black" />
            <Text style={styles.btnText}>Verdade</Text>
          </TouchableOpacity>
        </View>
          <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Mito4')}
          style={styles.button}>
            <Entypo name="thumbs-down" size={24} color="black" />
            <Text style={styles.btnText}>Mito</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Verdade3')}
          style={styles.button}>
            <Entypo name="thumbs-up" size={24} color="black" />
            <Text style={styles.btnText}>Verdade</Text>
          </TouchableOpacity>
        </View> 
        <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Mito5')} 
          style={styles.button}>
            <Entypo name="thumbs-down" size={24} color="black" />
            <Text style={styles.btnText}>Mito</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Verdade4')}
          style={styles.button}>
            <Entypo name="thumbs-up" size={24} color="black" />
            <Text style={styles.btnText}>Verdade</Text>
          </TouchableOpacity>
        </View> 
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
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: '90%',
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    elevation: 10,
    padding: 30
  },
  button:{
    height: 60,
    width: '40%',
    backgroundColor: '#3EC3A4',
    borderRadius: 15,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 20,
    marginHorizontal: 20,
    textAlign: 'left'
  },
  btnText:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  input :{
    minWidth: '100%',
    height: 50,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    color: '#3ec3a4',
    elevation: 1,
    marginTop: 30
  },
})

export default MitoVerdade;