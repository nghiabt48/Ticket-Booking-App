import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import { AppConTextProvider } from './src/AppConText';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';
export default function App() {
  return (
    <AppConTextProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </AppConTextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
