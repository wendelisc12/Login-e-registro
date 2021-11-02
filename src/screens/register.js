import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

export default function registrar({navigation}) {
  return (
    <View style={styles.container}>

        <View>
            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.inputText} placeholder="Insira seu nome" keyboardType="default"></TextInput>

            <Text style={styles.label}>CPF:</Text>
            <TextInput style={styles.inputText} placeholder="Insira seu CPF" keyboardType="default"></TextInput>

            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.inputText} placeholder="Insira seu Email" keyboardType="email-address"></TextInput>
            
            <Text style={styles.label}>Senha:</Text>
            <TextInput style={styles.inputText} placeholder="Insira sua Senha" keyboardType="default"></TextInput>
        </View>

        <View style={styles.salvar}>        
            <Button color="#288BE4" title="Salvar" onPress={()=> {navigation.navigate('login')}}></Button>
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

  imagemPerfil:{
    width:150,
    height:150,
    borderRadius:100,
    backgroundColor: '#ff0000',
  },

  imagemPerfilContainer:{
    justifyContent:'center',
    alignItems: 'center',
    marginBottom:40,
  },

  inputText:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:5,
  },

  label:{
    color: '#1d1d1d',
    fontSize: 20,
    marginLeft: 10,
  },

  salvar:{
      marginHorizontal: 10,
      marginTop:20
  }


});
