import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { flex, get } from 'styled-system';
import { style } from 'styled-system';
import axios from 'axios';

export default function listaContatos({ navigation }) {

  const [getDados, setDados] = useState([])

  useEffect(() => {
    function consultarDados() {
      axios.get('http://professornilson.com/testeservico/clientes')
        .then(function (response) {
          setDados(response.data)
          console.log(response)
        }).catch(function (error) {
          console.log('erro')
        })
    }

    consultarDados()

  }, [])

  return (



    <View style={styles.container}>
      {
        getDados.map((l, i) => (
          <TouchableOpacity style={styles.contato} onPress={()=>navigation.navigate('cadastroDeUsuario',{
            nome:l.nome,
            telefone:l.telefone,
            email:l.email,
            id:l.id,
        })}>
            <View>
              <Image
                style={styles.imagemPerfil}
                source={{
                  uri: 'https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-300x300.jpg',
                }}
              />
            </View>

            <View>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{l.nome}</Text>
              <Text style={{ fontSize: 16, color: 'white' }}>{l.telefone}</Text>
            </View>
          </TouchableOpacity>
        ))



      }

      <TouchableOpacity style={styles.adicionar} onPress={() => { navigation.navigate('cadastroDeUsuario') }}>
        <Image
          style={{ width: 35, height: 30, color: 'white' }}
          source={{
            uri: 'https://static.thenounproject.com/png/3850868-200.png',
          }}
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    marginHorizontal: 10,
  },

  contato: {
    backgroundColor: '#369DFF',
    marginTop: 10,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },

  imagemPerfil: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginRight: 10,
  },

  adicionar: {
    position: 'absolute',
    right: 20,
    bottom: 20,


    backgroundColor: '#fff',

    width: 70,
    height: 70,
    borderRadius: 100,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

});