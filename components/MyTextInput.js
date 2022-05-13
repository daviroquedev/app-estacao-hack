import React from 'react'
import { TextInput, Text, StyleSheet } from 'react-native'
import{Colors, Metrics} from '../values'


export default props => {
  const{style, ...rest}=props

  return(
    <TextInput style={[Estilo.input,style]}
    {...rest}
    /> 
     
    
  )
}

const Estilo = StyleSheet.create(
  {
    input:{
      height:48,
      backgroundColor:Colors.white,
      borderWidth:1,
      borderRadius:Metrics.radius.base,
      paddingVertical:Metrics.padding.small,
      paddingHorizontal:Metrics.padding.base,
    }
  }
)