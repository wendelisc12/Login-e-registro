import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function registrar({navigation}) {

  function registroFirebase(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      console.log("conta criada")
      const user = userCredential.user;
      navigation.navigate('listaContato')
    })
    .catch((error) => {
      console.log("erro ao criar conta")
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

    const [nome,setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [senha,setSenha] = useState("")

  return (
    <View style={styles.container}>

        <View>
            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.inputText} placeholder="Insira seu nome" keyboardType="default" value={nome} onChangeText={nome => setNome(nome)}></TextInput>

            <Text style={styles.label}>CPF:</Text>
            <TextInput style={styles.inputText} placeholder="Insira seu CPF" keyboardType="default" value={cpf} onChangeText={cpf => setCpf(cpf)}></TextInput>

            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.inputText} placeholder="Insira seu Email" keyboardType="email-address" value={email} onChangeText={email => setEmail(email)}></TextInput>
            
            <Text style={styles.label}>Senha:</Text>
            <TextInput style={styles.inputText} placeholder="Insira sua Senha" keyboardType="default" value={senha} onChangeText={senha => setSenha(senha)}></TextInput>
        </View>

        <View style={styles.salvar}>        
            <Button color="#288BE4" title="Salvar" onPress={()=> { registroFirebase() }}></Button>
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
