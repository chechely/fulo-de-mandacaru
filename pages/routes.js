import React from 'react';
import { } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './home';
import Periodo from './periodo';
import Sintomas from './sintomas';
import Autocuidado from './autocuidado';
import PreMenstrual from './preMenstrual';
import MitoVerdade from './mitoVerdade';
import Mito1 from './mito1';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


const Routes = () => {
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Periodo') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Autocuidado') {
              iconName = focused ? 'heart' : 'heart-outline';
            }
            else if (route.name === 'Sintomas') {
              iconName = focused ? 'add' : 'add';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#5a4bb7',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Autocuidado" component={Autocuidado}  />
        <Tab.Screen name="Periodo" component={Periodo} />
        <Tab.Screen name="Sintomas" component={Sintomas} />
      </Tab.Navigator>
  )
}

export default Routes;
