import { Button, StyleSheet, Text, ToastAndroid, View, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosIntance from './AxiosIntance'
import { useStripe } from '@stripe/stripe-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const BookingScreen = () => {
  const {initPaymentSheet, presentPaymentSheet} = useStripe()

  const showtime = "646f38d8643587bc74af1bda"
  const seat_number = ["C4"] // Sau mỗi lần test nhớ thay ghế khác
  const hardMovieId = "646b06bbdf50891e2ceacbbe"

  const [moviePrice, setMoviePrice] = useState(null);

  useEffect(() => {
    async function fetchMoviePrice() {
      try {
        const response = await AxiosIntance().get(`movies/${hardMovieId}`);
        setMoviePrice(response.data.document.price);
      } catch (error) {
        console.log("Err at UseEffect: "+error.message);
      }
    }
    fetchMoviePrice();
  }, [hardMovieId]);
   const checkOut = async() => {
    try{
      // 1. Get checkout session
      const response = await AxiosIntance().get(`tickets/checkout/${showtime}/${seat_number.length}`)
      // 2. Create checkout form + charge credit card
  //Số thẻ để test: 4242 4242 4242 4242
      const initResponse = await initPaymentSheet({
        merchantDisplayName: 'John Doe',
        paymentIntentClientSecret: response.paymentIntent,
      })
      if(initResponse.error){
        console.log(initResponse.error)
        Alert.alert("Something went wrong at initialize payment sheet")
        return
      }
      // 3.Present the payment sheet to the user
      
      const paymentResponse = await presentPaymentSheet()
      if(paymentResponse.error){
        Alert.alert(`Error: ${paymentResponse.error.code}`, paymentResponse.error.message)
        return
      } 
      Alert.alert(`Success`, 'The payment was confirmed successfully')
      // 4. After paying, create the ticket
      await AxiosIntance().post(`tickets/checkout/${showtime}/create-ticket`, {price: moviePrice * seat_number.length, seat_number})
    }catch(err) {
      console.log("Err at book function: "+err.response.data.message)
    }
    
  }
  const book=async()=>{
    
  }
  return (
    <View style={styles.container}>
      <Text>Ghế đã chọn: C3, C4</Text>
      {moviePrice && (
        <Text>Tạm Tính: {seat_number.length * moviePrice}</Text>
      )}
      <Button title='Đặt Vé' onPress={book}></Button>
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})