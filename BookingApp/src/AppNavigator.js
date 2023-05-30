import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppConText } from './AppConText';
import Login from './Login';
import Register from './Register';
import MainApp from './MainApp';
import BookingScreen from './BookingScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Users = () => {
    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
    
}
const Main = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Booking" component={BookingScreen}/>
            <Stack.Screen name="Main" component={MainApp}/>
        </Stack.Navigator>
    )
    
}
const AppNavigator = () => {
    const {isLogin} = useContext(AppConText);
  return (
    <>
    {
        isLogin == false ? <Users/> : <Main/>
    }
</>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})