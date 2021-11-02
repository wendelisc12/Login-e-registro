import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {} from '@react-navigation/native'

export default function cadastroDeUsuario({navigation}) {

  return (
    <View style={styles.container}>
      
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.inputText} placeholder="Insira seu email" keyboardType="email-address"></TextInput>

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.inputText} placeholder="Insira sua senha" keyboardType="visible-password"></TextInput>

        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.inputText} placeholder="Insira sua senha" keyboardType="visible-password"></TextInput>

      <View style={styles.botaoContainer}>
        <Button color="#288BE4" title="Salvar"></Button>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    marginHorizontal:10,
  },
  label:{
    color: '#1d1d1d',
    fontSize: 20,
    marginLeft: 10,
  },

  inputText:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
  },
  botaoContainer:{
    display:'flex',
    marginHorizontal: 50,
    marginTop: 20,
    textAlign: 'center',
  },


});
