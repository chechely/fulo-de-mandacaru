import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Autocuidado = ({navigation}) => {
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: '#5A4BB7'}}>
      <ScrollView style={{flex: 1}} endFillColor='white'>
        <Text style={styles.pageTitle}>Autocuidado</Text>
        <View style={styles.container}>
        <View>
          <Text style={styles.textContent}>
              Para aliviar a cólica menstrual, tente usar bolsas de água quente
               e tomar um chá quentinho. Caso não adiante e os remédios que você costuma usar com
               prescrição médica também não façam mais efeito, procure um(a) médico(a). 
               Cólicas muito fortes, principalmente nos dois dias anteriores à menstruação,
               podem sinalizar alguns problemas de saúde.
          </Text>
          <Text style={styles.textContent}>
            Tentar dormir melhor. Adormecer em horário regular e ter oito horas de sono por 
              noite pode fazer a diferença na menstruação e na qualidade de vida.
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginVertical: 50}}>
            <TouchableOpacity style={styles.btnPeriodo} onPress={() => navigation.navigate('PreMenstrual')}>
              <Text style={[styles.btnText,{color: '#FF598C'}]}>Pré-menstrual</Text>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPeriodo} onPress={() => navigation.navigate('Menstrual')}>
              <Text style={[styles.btnText,{color: '#3EC3A4'}]}>Menstrual</Text>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPeriodo} onPress={() => navigation.navigate('MitoVerdade')}>
              <Text style={[styles.btnText,{color: '#5A4BB7'}]}>Mitos e Verdades</Text>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    );
}

export default Autocuidado;

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
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    marginBottom: 20,
    fontWeight:'bold'
  },
  textContent:{
    flexWrap: "wrap",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 30,
    marginBottom: 10,
    color: '#353535'
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
