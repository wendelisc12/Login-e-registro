import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

export default function alterarExcluirContatos({navigation}) {
  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [cpf, setEmail] = useState();
  const [telefone, setTelefone] = useState();

  useEffect(() => {
    if (route.params) {
        const { nome } = route.params
        const { telefone } = route.params
        const { email } = route.params
        const { id } = route.params
        setNome(nome)
        setTelefone(telefone)
        setEmail(email)
        setId(id)
    }
}, [])


function excluirDados(){

  axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
    .then(function (response) {
      setNome('');
      setEmail('');
      setTelefone('');
    }).catch(function (error) {
    console.log(error);
    
    });
  
  } 

  function alterarDados(){

    axios.put('http://professornilson.com/testeservico/clientes/'+id,{
    nome: nome,
    telefone: telefone,
    cpf: cpf 
    }).then(function (response) {
    console.log(response);
    }).catch(function (error) {
    console.log(error);
    
    });
    
    }

  

  return (
    <View style={styles.container}>
      
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.inputText} placeholder="Insira seu nome" keyboardType="email-address" onChangeText={nome => setNome(nome)} value={getNome}></TextInput>

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.inputText} placeholder="Insira sue email" keyboardType="visible-password" onChangeText={email => setEmail(email)} value={getEmail}></TextInput>

        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.inputText} placeholder="Insira seu telefone" keyboardType="visible-password" onChangeText={telefone => setTelefone(telefone)} value={getTelefone}></TextInput>

      <View style={styles.botaoContainer}>
        <Button color="#288BE4" title="Alterar" onPress={() => alterarDados()}></Button>
      </View>

      <View style={styles.botaoContainer}>
        <Button color="#e52929" title="Excluir" onPress={() => excluirDados()}></Button>
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
