import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { } from '@react-navigation/native'
import axios from 'axios';

export default function cadastroDeUsuario({ navigation }) {
  function inserirDados() {

    axios.defaults.baseURL = 'http://localhost';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post('http://professornilson.com/testeservico/clientes')
      .then(resp => {
        console.log("Funcionou");
      })
      .catch(error => {
        console.log(error);
      })
  }

  // axios.post(`http://professornilson.com/testeservico/clientes`
  //   , {
  //     nome: nome,
  //     email: email,
  //     telefone: telefone,

  //   }).then(function (response) {
  //     console.log(response);
  //   }).catch(function (error) {
  //     console.log(error);
  //   });

const [nome, setNome] = useState("")
const [email, setEmail] = useState("")
const [telefone, setTelefone] = useState("")


return (
  <View style={styles.container}>

    <Text style={styles.label}>Nome</Text>
    <TextInput style={styles.inputText} placeholder="Insira seu nome" keyboardType="default" value={nome} onChangeText={nome => setNome(nome)}></TextInput>

    <Text style={styles.label}>Email</Text>
    <TextInput style={styles.inputText} placeholder="Insira seu Email" keyboardType="email-adress" value={email} onChangeText={email => setEmail(email)}></TextInput>

    <Text style={styles.label}>Telefone</Text>
    <TextInput style={styles.inputText} placeholder="Insira seu telefone" keyboardType="default" value={telefone} onChangeText={telefone => setTelefone(telefone)}></TextInput>

    <View style={styles.botaoContainer}>
      <Button color="#288BE4" title="Salvar" onPress={() => { inserirDados() }}></Button>
    </View>


  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  label: {
    color: '#1d1d1d',
    fontSize: 20,
    marginLeft: 10,
  },

  inputText: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  botaoContainer: {
    display: 'flex',
    marginHorizontal: 50,
    marginTop: 20,
    textAlign: 'center',
  },


});
