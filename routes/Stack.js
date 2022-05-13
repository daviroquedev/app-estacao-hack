import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import PerfilScreen from '../screens/PerfilScreen';
import WebScreen from '../screens/WebScreen';

import {Colors} from '../values';

const Stack = createNativeStackNavigator()

export default props => {

  return (
    <Stack.Navigator
      initialRouteName ='LoginScreen'
      screenOptions={
        {
          headerStyle:{
            backgroundColor:Colors.background,
          borderBottomWidth:0
          },
          headerTintColor:Colors.white
        }
      }
    >
      <Stack.Screen name ='LoginScreen'
        component={LoginScreen} 
        options={{headerShown:false}} 

      />
            <Stack.Screen name ='CadastroScreen'
        component={CadastroScreen}
        options = {{title:'CADASTRO'}}

      />
                  <Stack.Screen name ='PerfilScreen'
        component={PerfilScreen}
        options = {{headerShown:false}}

      />

      <Stack.Screen name ='WebScreen'
        component={WebScreen}
        options = {{title:'Cel.Lep'}}

      />

    </Stack.Navigator>
  )
}