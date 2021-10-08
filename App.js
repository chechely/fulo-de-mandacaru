import 'react-native-gesture-handler';

import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import LoginScreen from './pages/LoginScreen';
import Cadastro from './pages/cadastro';
import RedefinirSenha from './pages/redefinirSenha';

import Home from './pages/home';
import Periodo from './pages/periodo';
import Sintomas from './pages/sintomas';
import Autocuidado from './pages/autocuidado';

import Menstrual from './pages/menstrual';
import PreMenstrual from './pages/preMenstrual';
import MitoVerdade from './pages/mitoVerdade';
import Mito1 from './pages/mito1';
import Mito2 from './pages/mito2';
import Mito3 from './pages/mito3';
import Mito4 from './pages/mito4';
import Mito5 from './pages/mito5';
import Verdade1 from './pages/verdade1';
import Verdade2 from './pages/verdade2';
import Verdade3 from './pages/verdade3';
import Verdade4 from './pages/verdade4';
import Verdade5 from './pages/verdade5';

import Routes from './pages/routes';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
      
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{headerShown: false }}
      />
      <Stack.Screen
        name="RedefinirSenha"
        component={RedefinirSenha}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Routes"
        component={Routes}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PreMenstrual"
        component={PreMenstrual}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menstrual"
        component={Menstrual}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MitoVerdade"
        component={MitoVerdade}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mito1"
        component={Mito1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mito2"
        component={Mito2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mito3"
        component={Mito3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mito4"
        component={Mito4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mito5"
        component={Mito5}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verdade1"
        component={Verdade1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verdade2"
        component={Verdade2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verdade3"
        component={Verdade3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verdade4"
        component={Verdade4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verdade5"
        component={Verdade5}
        options={{headerShown: false}}
      />      
    </Stack.Navigator>
      
    </NavigationContainer>
  );
};



export default App;