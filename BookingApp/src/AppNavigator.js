import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppConText } from './AppConText';
import Login from './Login';
import Register from './Register';
import MainApp from './MainApp';
import ListMovi from './ListMovi';
import ItemMovi from './ItemMovi';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';


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
        <Tab.Navigator initialRouteName='ListMovi' screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Test1') {
                return <Image source={require('./image/movies.png')} />;
              } else if (route.name === 'Test2') {
                return <Image source={require('./image/tem.png')} />;
              }else if (route.name === 'ListMovi') {
                return <Image source={require('./image/TV.png')} />;
              }else if (route.name === 'Test3') {
                return <Image source={require('./image/hear.png')} />;
              }else if (route.name === 'Test4') {
                return <Image source={require('./image/pepole.png')} />;
              }
            },
            tabBarActiveTintColor: '#ffff',
            tabBarInactiveTintColor: '#ffff',
            tabBarActiveBackgroundColor:'#130B2B',
            tabBarInactiveBackgroundColor:'#130B2B',
            tabBarLabelStyle:{
                fontWeight: '700',
            }
            
          })}>
            <Stack.Screen name="Test1" component={Test1}/>
            <Stack.Screen name="Test2" component={Test2}/>
            <Tab.Screen name="ListMovi" component={ListMovi} options={{title:"trang",headerShown:false,}}/>
            <Stack.Screen name="Test3" component={Test3}/>
            <Stack.Screen name="Test4" component={Test4}/>
        </Tab.Navigator>
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

const styles = StyleSheet.create({

})