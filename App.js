import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, Linking } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './src/screens/login';
import register from './src/screens/register';
import listaContatos from './src/screens/listaContatos';
import cadastroDeUsuario from './src/screens/cadastroDeUsuario';
import alterarExcluirContatos from './src/screens/alterarExcluirContatos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={login} options={{title: "Login"}} />
        <Stack.Screen name="register" component={register} options={{title: "Registrar"}}/>
        <Stack.Screen name="listaContatos" component={listaContatos} options={{title: "Contato"}} />
        <Stack.Screen name="cadastroDeUsuario" component={cadastroDeUsuario} options={{title: "Cadastrar contato"}} />
        <Stack.Screen name="alterarExcluirContatos" component={alterarExcluirContatos} options={{title: "Contato"}}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

