import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { flex } from 'styled-system';
import { style } from 'styled-system';

export default function listaContatos({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contato}  onPress={()=>{ navigation.navigate('alterarExcluirContatos')}}>
        <View>
          <Image
            style={styles.imagemPerfil}
            source={{
              uri: 'https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-300x300.jpg',
            }}
          />
        </View>
      
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Matheus vitorio</Text>
          <Text style={{fontSize: 16, color: 'white'}}>81 84246875</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contato}  onPress={()=>{ navigation.navigate('alterarExcluirContatos')}}>
        <View>
          <Image
            style={styles.imagemPerfil}
            source={{
              uri: 'https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-300x300.jpg',
            }}
          />
        </View>
      
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Wendel Isaac</Text>
          <Text style={{fontSize: 16, color: 'white'}}>81 84246875</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contato}  onPress={()=>{ navigation.navigate('alterarExcluirContatos')}}>
        <View>
          <Image
            style={styles.imagemPerfil}
            source={{
              uri: 'https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-300x300.jpg',
            }}
          />
        </View>
      
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Gabriel Jonas</Text>
          <Text style={{fontSize: 16, color: 'white'}}>81 84246875</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.adicionar} onPress={()=>{ navigation.navigate('cadastroDeUsuario')}}>
          <Image
            style={{width:35, height:30, color: 'white'}}
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
    marginHorizontal:10,
  },

  contato:{
    backgroundColor: '#0183ff',
    marginTop: 10,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },

  imagemPerfil:{
    width:60,
    height:60,
    borderRadius:100,
    backgroundColor: '#fff',
    marginRight: 10,
  },

  adicionar:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 20,
    marginRight: 10,
    backgroundColor: '#0183ff',
    width: 70,
    height: 70,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

});
