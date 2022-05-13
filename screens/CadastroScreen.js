import React,{useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import{Colors,Metrics,Fonts} from '../values';
import {MyButton, MyTextInput, MyPasswordInput} from '../components'

import{Ionicons} from '@expo/vector-icons'
import{Picker} from '@react-native-picker/picker'

import AsyncStorage from '@react-native-async-storage/async-storage'

export default props => {

  const[nome,setNome]=useState('')
  const[senha,setSenha]=useState('')
  const[email,setEmail]=useState('')
  const[continente,setContinente]=useState('')
  const[sobrenome,setSobrenome]=useState('')
  const listaContinentes=[
    'América do Norte',
    'América Central',
    'América do Sul',
    'Europa',
    'Ásia',
    'África',
    'Oceania',
    'Antártida'
  ]

 async function cadastrar(){
    if(nome == '' || sobrenome == '' || email == '' ||
      continente == '' || senha == '' ){
        alert('Preencha todos os campos')
        return
    } 
    const usuario={
      nome:nome,
      sobrenome:sobrenome,
      email:email.toLocaleLowerCase(),
      senha:senha,
      continente:continente
    }
    try{
      const dados= await JSON.stringify(usuario)
      await AsyncStorage.setItem(email,dados)
      props.navigation.reset({
        index:0,
        routes:[{name:'PerfilScreen', params:{email:email}}]
      })

    }catch(err){
      console.log(err)
    }
  }



  return(
    <ScrollView style={Estilo.container}>
    <View style={Estilo.containerIcon}> 
      <Ionicons name="person-add" size={100} color={Colors.white} />
    </View>

    <MyTextInput placeholder='Nome' 
     style={Estilo.formItem}
     value={nome}
     onChangeText={text => setNome(text)}
    />
    <MyTextInput placeholder='Sobrenome' 
     style={Estilo.formItem}
    value={sobrenome}
     onChangeText={text => setSobrenome(text)}

    />
    <MyTextInput placeholder='Email' 
     style={Estilo.formItem}
     value={email}
     onChangeText={text => setEmail(text)}
    />

    <View style={Estilo.containerPicker}>
    <Picker style={Estilo.picker}
      selectedValue={continente}
      onValueChange={(value,index) => setContinente(value)}
    >

    <Picker.Item value='' label='Continente'/>
    {
      listaContinentes.map((value,index) => (
        <Picker.Item value ={value} label={value}/>
      ))
    }
    </Picker>
    </View>

    <MyPasswordInput placeholder='Senha'
    style={Estilo.formItem}
    keyboardType='numeric'
    value={senha}
     onChangeText={text => setSenha(text)}
    />

    <MyButton title='cadastrar'
    onPress={cadastrar}
    /> 

    </ScrollView>
  )
}

const Estilo = StyleSheet.create(
  {
    container:{
      flexGrow:1,
      backgroundColor:Colors.background,
      padding:Metrics.padding.base,
    },
    containerIcon:{
      alignItems:'center',
    },
    formItem:{
      marginBottom:Metrics.padding.base
    },
    containerPicker:{
      borderWidth:1,
      justifyContent:'center',
      marginBottom:Metrics.margin.base,
      backgroundColor:Colors.white  
    },
    picker:{
      paddingVertical:Metrics.padding.small,
      paddingHorizontal: Metrics.padding.base,
      borderWidth:0,
      backgroundColor:Colors.white,
    }
  }
)