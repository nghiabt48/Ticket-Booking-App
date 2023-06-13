import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppConText } from './AppConText';
import Login from './Login';
import Register from './Register';
import ListMovi from './ListMovi';
import Detail from './Detail';
import TimeSlot from './TimeSlot';
import SeatSelectionScreen from './SeatSelectionScreen';
import ChangePassword from './ChangePassword';
import Profile from './Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Users = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )

}
const DetailProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListMovi" component={ListMovi} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="PickTime" component={TimeSlot} />
      <Stack.Screen name="PickSeats" component={SeatSelectionScreen} />

    </Stack.Navigator>
  )

}
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
    </Stack.Navigator>
  )

}
const Main = () => {
  return (
    <Tab.Navigator initialRouteName='Movie' screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Profile') {
          return <Image source={require('./image/tem.png')} />;
        } else if (route.name === 'Movie') {
          return <Image source={require('./image/movies.png')} />;
        } else if (route.name === 'ProfileScreen') {
          return <Image source={require('./image/pepole.png')} />;
        }
      },
      tabBarActiveTintColor: '#ffff',
      tabBarInactiveTintColor: '#ffff',
      tabBarActiveBackgroundColor: '#130B2B',
      tabBarInactiveBackgroundColor: '#130B2B',
      tabBarLabelStyle: {
        fontWeight: '700',
      }

    })}>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, title: 'Tickets' }} />
      <Tab.Screen name="Movie" component={DetailProductStack} options={{ headerShown: false }} />
      <Tab.Screen name="ProfileScreen" component={ProfileStack} options={{ headerShown: false, title: 'Profile' }} />

    </Tab.Navigator>

  )

}
const AppNavigator = () => {
  const { isLogin } = useContext(AppConText);
  return (
    <>
      {
        isLogin == false ? <Users /> : <Main />
      }
    </>
  )
}

export default AppNavigator

const styles = StyleSheet.create({

})