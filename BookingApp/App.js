import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import { AppConTextProvider } from './src/AppConText';
import AppNavigator from './src/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import ItemMovi from './src/ItemMovi';
import ListMovi from './src/ListMovi';



export default function App() {
  return (
    // <AppConTextProvider>
    //   <NavigationContainer>
    //     <AppNavigator />
    //   </NavigationContainer>
    // </AppConTextProvider>
   <ListMovi/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
