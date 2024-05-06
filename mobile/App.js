import React, { useState } from "react"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Dados from "./Context/DadosContext"

import TelaBloqueio from "./Screens/TelaBloqueio"
import TelaInicial from "./Screens/TelaInicial"

// cria uma navegação
const Stack = createStackNavigator();

export default function App() {

  return (
      //prover dados para todo o aplicativo
      <Dados.Provider>

        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouter="TelaBloqueio">
            <Stack.Screen name="TelaInicial" component={TelaInicial} />
            <Stack.Screen name="TelaBloqueio" component={TelaBloqueio} />
          </Stack.Navigator>

        </NavigationContainer>

      </Dados.Provider>
  )
}