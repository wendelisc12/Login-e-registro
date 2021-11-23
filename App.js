import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './src/screens/login';
import register from './src/screens/register';
import listaContatos from './src/screens/listaContatos';
import cadastroDeUsuario from './src/screens/cadastroDeUsuario';
import alterarExcluirContatos from './src/screens/alterarExcluirContatos';
import { initializeApp } from "firebase/app";

const Stack = createNativeStackNavigator();

export default function App() {




  const firebaseConfig = {
    apiKey: "AIzaSyBOmaPnRLL6oa4aoIJsb7h-5K7IhSsdtJI",
    authDomain: "logincadastro-wendel.firebaseapp.com",
    projectId: "logincadastro-wendel",
    storageBucket: "logincadastro-wendel.appspot.com",
    messagingSenderId: "221760676233",
    appId: "1:221760676233:web:1256cddf5ac9172b170158",
    measurementId: "G-2CN9Q607Z9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="listaContatos">
        <Stack.Screen name="login" component={login} options={{title: "Login"}} />
        <Stack.Screen name="register" component={register} options={{title: "Registrar"}}/>
        <Stack.Screen name="listaContatos" component={listaContatos} options={{title: "Contato"}} />
        <Stack.Screen name="cadastroDeUsuario" component={cadastroDeUsuario} options={{title: "Cadastrar contato"}} />
        <Stack.Screen name="alterarExcluirContatos" component={alterarExcluirContatos} options={{title: "Contato"}}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

