import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView,TextInput } from 'react-native';

const doenca = require('../Services/doencas.json');
const tratamento = require('../Services/tratamento.json');
const sintomas = require('../Services/sintomas.json');

const Sintomas = ({navigation}) =>{
  const [text, onChangeText] = React.useState();
   
// FILTRA TRATAMENTO -----------------

  // Filtra o array a partir do que colocar no TextInput

  let filtro = tratamento.filter(tratamento => tratamento.Tratamento === text);
     
  
  // Mostra na tela o titulo da Verdade (a mesma coisa que foi digitada)
    
    const trat =  Object.entries(filtro).map(([key, value]) => {
       return <Text style={styles.titleText} key={key}>{value.Tratamento}</Text>
     });
    
  // Mostra na tela a descrição da Verdade
  
     const trat_d =  Object.entries(filtro).map(([key, value]) => {
       return <Text style={styles.descriptionText} key={key}>{value.Descrição}</Text>
     });
  
      // No console, além do erro ao tentar mostrar, tambem aparece um erro que 
      //basicamente é que o input esta em tempo real, meio que ele fica imprimindo vazio até achar
      // Na tela esse erro não mostra, só apresenta no console
    
    // Erro : Warning: A component is changing an uncontrolled input of 
  
  // FILTRA DOENCAS ------------------------------------
  
      // Filtra o array a partir do que colocar no TextInput
      let filtro_d = doenca.filter(doenca => doenca.Doenças === text );
    
  // Mostra na tela o titulo do mito (a mesma coisa que foi digitada)
    
    const doe =  Object.entries(filtro_d).map(([key, value]) => {
       return <Text style={styles.descriptionText} key={key}>{value.Doenças}</Text>
     });
    
  // Mostra na tela a descrição do mito 
  
     const doe_d =  Object.entries(filtro_d).map(([key, value]) => {
       return <Text style={styles.descriptionText} key={key}>{value.Descrição}</Text>
     });
  
  // FILTRA SINTOMAS
  
      // Filtra o array a partir do que colocar no TextInput
      let filtro_s = sintomas.filter(sintomas => sintomas.EMOCIONAIS === text);
      let filtro_ss = sintomas.filter(sintomas => sintomas.FÍSICOS === text );
    
  // Mostra na tela o titulo do mito (a mesma coisa que foi digitada)
    
    const sint =  Object.entries(filtro_s).map(([key, value]) => {
       return <Text style={styles.descriptionText} key={key}>{value.EMOCIONAIS}</Text>
     });
  
     const sint_d =  Object.entries(filtro_ss).map(([key, value]) => {
      return <Text style={styles.descriptionText} key={key}>{value.FÍSICOS}</Text>
    });
    
  
  // Assim que o texto for digitado, se ele for exatemente igual a qualquer titulo
  // que esteja em mitos.json ou verdade.json aparecerá no mesmo momento
  // para exibir na tela é só colocar {mito_d} (mostra a descriçaõ do mito somente)
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: '#5A4BB7', paddingTop: 30}}>
     
      <Text style={styles.pageTitle}> Mais sobre você</Text>
      <View style={{backgroundColor: 'white', flex: 1,  padding: 30, height: '85%', borderTopEndRadius: 40, borderTopStartRadius: 40, alignItems: 'center', justifyContent: 'flex-start'}}>
      <View style={{marginBottom: 30, alignItems: 'center' }}>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Digite aqui...'
          placeholderTextColor= '#c4c4c4'
          selectionColor='#3EC3A4'
          /> 
        </View>          
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginVertical: 10}}>
          {trat}
          {sint}
          {sint_d}
          {doe_d}
          {doe}
        </View> 
        <View style={{marginVertical: 10}}>
          {trat_d}
          {doe_d}
          {doe}
        </View> 
        </ScrollView>
       </View>
     
    </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
 
  pageTitle:{

    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    height: '12%',
    textAlignVertical: 'bottom',
    marginBottom: 20
  },
  sectionTitle:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3EC3A4',
    marginBottom: 30
  },
  titleText:{
    color: '#FF598C',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    
    
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
  descriptionText:{
    color:'#353535',
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 23,
    fontWeight:'bold'
  }
});

export default Sintomas;