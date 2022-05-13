import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Stack from './routes/Stack'
import {NavigationContainer} from '@react-navigation/native'

export default () => (
  <NavigationContainer>
    <Stack/>
  </NavigationContainer>
)

