import React,{useState}from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import{Colors,Metrics} from '../values'
import {Ionicons} from '@expo/vector-icons'

export default props => {
  
  const[escondido,setEscondido]=useState(true)

  const{style,...rest} = props
  return(
    <View style={[Estilo.container,style]}> 
    <TextInput style={Estilo.input}
    {...rest}
    secureTextEntry={escondido}
    
    />
    <TouchableOpacity onPress={()=> setEscondido(!escondido) }>

      <Ionicons name={escondido? 'eye-off-sharp': "eye-sharp"} size={24} color={Colors.dark}/>

    </TouchableOpacity>


     
    </View>
  )
}

const Estilo = StyleSheet.create(
  {
    container:{
      flexDirection:'row',
      height:48, backgroundColor:Colors.white,   borderRadius:Metrics.radius.base,
      borderWidth:1,     paddingVertical:Metrics.padding.small,     paddingHorizontal:Metrics.padding.base,
      alignItems:'center'
    },
    input:{
      flexGrow:1,
      marginRight:Metrics.margin.small,
      paddingVertical:Metrics.padding.small,
      

    }
  }
)