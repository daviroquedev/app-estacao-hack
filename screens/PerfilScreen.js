import React,{useState, useEffect} from 'react'
import { View, Text,Alert,StyleSheet } from 'react-native'

import{Colors,Metrics,Fonts} from '../values';
import {MyButton} from '../components'
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default props => {
   const[nomeCompleto,setNomeCompleto]=useState('')
  const[email,setEmail]=useState('')
  const[continente,setContinente]=useState('')

  useEffect(() =>{
    carregarInformacoes()
  })

  async function carregarInformacoes(){
    try{
      const cadastro= await AsyncStorage.getItem(props.route.params.email)
      const usuario = JSON.parse(cadastro)
      setNomeCompleto(`${usuario.nome} ${usuario.sobrenome} `)
      setEmail(usuario.email)
      setContinente(usuario.continente)
    }catch(err){
      console.log(err)
    }
  }

  function confirmExit(){
    Alert.alert('Sair','Deseja realmente sair?',[{
      text:'SIM',
      onPress(){
        props.navigation.reset({
          index:0,
          routes:[{name:'LoginScreen'}]
        })
      }
      },
      {
        text:'NÃO'
      
    }])
  }

  return(
    <View style={Estilo.container}>
    <Text style={Estilo.textTitle}>
    Seja Bem Vindo(a)
    </Text> 

    <View style={Estilo.containerIconText}>
    <MaterialIcons name="perm-identity" size={24} color={Colors.white} />

    <Text style={Estilo.text}>
    {nomeCompleto}
    </Text>
    </View>
        <View style={Estilo.containerIconText}>
    <MaterialIcons name="mail-outline" size={24} color={Colors.white} />
    
    <Text style={Estilo.text}>
    {email}
    </Text>
    </View>
     
         <View style={Estilo.containerIconText}>
    <MaterialIcons name="language" size={24} color={Colors.white} />
    
    <Text style={Estilo.text}>
    {continente}
    </Text>

    </View>

    <MyButton 
      style={Estilo.button}
      title='Site Cel.lep'
      onPress={() => props.navigation.navigate('WebScreen')}
    />
        <MyButton 
      style={Estilo.button}
      title='Sair'
      onPress={confirmExit}
    />


    </View>
  )
}

const Estilo = StyleSheet.create(
  {
    container:{
      flexGrow:1,
      backgroundColor:Colors.background,
      padding:Metrics.padding.base,
      justifyContent:'center',
    },
    textTitle:{
      fontSize:Fonts.title,
      color:Colors.white,
      marginBottom:Metrics.margin.base,
    },
    containerIconText:{
      flexDirection:'row',
      marginBottom:Metrics.margin.base,
      alignItems:'center'
    },
    text:{
      color:Colors.white,
      fontSize:Fonts.base,
      marginLeft:Metrics.margin.small
    },
    button:{
      marginBottom:Metrics.margin.base,

    }
  }
)