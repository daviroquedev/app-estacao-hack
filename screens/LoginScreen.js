import React,{useState} from 'react'
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'

import{Colors,Metrics,Fonts} from '../values'

import{MyButton, MyPasswordInput,MyTextInput} from '../components'

import AsyncStorage from '@react-native-async-storage/async-storage'

export default props => {

  const[email,setEmail]=useState('')
  const[senha,setSenha]=useState('')

  async function fazerLogin(){
    if(email == ''){
      alert('Preencha o campo email')
      return
    }else if(senha == ''){
      alert('Preencha o campo senha')
      return
    }

    try{
      const cadastro= await AsyncStorage.getItem(email)
      const usuario= JSON.parse(cadastro)

      if(usuario!= null){

          if(email == usuario.email && senha == usuario.senha){
                props.navigation.reset({
                index:0,
                routes:[{name:'PerfilScreen', 
                          params:{email:email}}]
                   })

          }else{
              alert('Usuário ou senha incorretos')
          }
      }else{
          alert('usuário não encontrado')
      }
    }catch(err){
        alert(err)
    }
    
  }

  return(
    <View style={Estilo.container} >
       <View style={Estilo.containerLogin}>

          <View style={Estilo.containerLogoCellep}>
              <Image source={require('../assets/logo_cellep.png')}/>

          </View>

          <MyTextInput placeholder = 'Email'
            style={Estilo.formItem}
            keyboardType='email-adress'
            value={email}
            onChangeText={text => setEmail(text)}
          
          />

          <MyPasswordInput placeholder='senha'
            style={Estilo.formItem}
            keyboardType='numeric'

            value={senha}
            onChangeText={text => setSenha(text)}
           />

           <MyButton title='entrar'
              style={Estilo.formItem}
              onPress={fazerLogin}
            />

            <View style={Estilo.containerCadastro}>
              <Text style={Estilo.cadastroText}>
                    Não tem cadastro?
              </Text> 

              <TouchableOpacity
                onPress={() => props.navigation.navigate('CadastroScreen')}
              >
              <Text style={Estilo.cadastroTextTouch}>
                Clique aqui
              </Text>

              </TouchableOpacity>
            
            </View>
         

       </View>

       <View style={Estilo.containerLogoHack}>

          <Image source={require('../assets/logo_estacao_hack.png')}
            style={Estilo.logoEH}
           />

       </View>
     
    </View>
  )
}

const Estilo = StyleSheet.create(
  {
    container:{
      flexGrow:1,
      backgroundColor: Colors.background,
      padding: Metrics.padding.base
    },
    containerLogin:{
      flexGrow:1,
      justifyContent:'center'
    },
    containerLogoCellep:{
      alignItems:'center',
      marginBottom:Metrics.margin.base
    },
    formItem:{
      marginBottom:Metrics.margin.base
    },
    containerCadastro:{
      flexDirection:'row',
      justifyContent:'flex-end'
    },
    cadastroText:{
      color:Colors.white
    },
    cadastroTextTouch:{
      color:Colors.primary,
      fontWeight:'bold',
      paddingLeft:Metrics.padding.small
    },
    logoEH:{
      width:100,
      height:100,
      resizeMode:'contain'
    },
    containerLogoHack:{
      alignItems:'flex-end'
    }
  }
)