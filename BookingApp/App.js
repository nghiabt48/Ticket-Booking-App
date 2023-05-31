import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import { AppConTextProvider } from './src/AppConText';
import AppNavigator from './src/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import BookingScreen from './src/BookingScreen';


const STRIPE_KEY = 'pk_test_51NBvkEFht8KJ0hQJRDYtBvGbE1gXSaIFRFiz3pBErwMQ9B45YKIGVv6CoDVut4nhX7UMipWPeHZDcDzdNdZhnGny00bPelUPPE'
export default function App() {
  return (
    <StripeProvider publishableKey={STRIPE_KEY}>
      <AppConTextProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AppConTextProvider>
    </StripeProvider>

    //<BookingScreen/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
