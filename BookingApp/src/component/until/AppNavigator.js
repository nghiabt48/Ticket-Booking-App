import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Login';
// quan li Login, Register => stack
const Stack = createNativeStackNavigator();
const User = ()=>{
  return(
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>

      </Stack.Navigator>
  )
};


const AppNavigator = () => {
  return (
    <View>
      <Text>AppNavigator</Text>
    </View>
  )
}

export default AppNavigator