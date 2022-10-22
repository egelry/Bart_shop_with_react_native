import { StyleSheet, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/screens/HomePage';
import MyBasket from './src/screens/MyBasket';

import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();
  
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="white"
        />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="HomePage" >

          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="MyBasket" component={MyBasket} />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  )
}

export default App
