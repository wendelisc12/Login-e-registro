import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {} from '@react-navigation/native'

export default function login({navigation}) {

  

  function loginFirebase(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log('conectado')
        const user = userCredential.user;
        navigation.navigate('listaContatos')
      })
      .catch((error) => {
        console.log("não conectado")
        const errorCode = error.code;
        const errorMessage = error.message;
      });

      
  }

  const [email,setEmail] = useState("")
  const [senha,setSenha] = useState("")

  return (
    <View style={styles.container}>
      
      <View style={styles.imagemPerfilContainer}>
        <Image
          style={styles.imagemPerfil}
          source={{
            uri: 'https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-300x300.jpg',
          }}
        />
      </View>

      <Text style={styles.label}>Login:</Text>
      <TextInput style={styles.inputText} placeholder="Insira seu email" keyboardType="email-address" value={email} onChangeText={email => setEmail(email)}></TextInput>

      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.inputText} placeholder="Insira sua senha" keyboardType="visible-password" value={senha} onChangeText={senha => setSenha(senha)}></TextInput>

      <View style={styles.botaoContainer}>
        <Button color="#288BE4" title="Login" onPress={()=>{ loginFirebase() }}></Button>

        <Text style={styles.link} onPress={() => { navigation.navigate('register') } }> Registrar </Text> 
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

  imagemPerfil:{
    width:150,
    height:150,
    borderRadius:100,
    backgroundColor: '#fff',
  },

  imagemPerfilContainer:{
    justifyContent:'center',
    alignItems: 'center',
    marginBottom:40,
  },

  link:{
    color: '#0000FF',
    marginTop: 20,
    textAlign: 'center'
  }
});
