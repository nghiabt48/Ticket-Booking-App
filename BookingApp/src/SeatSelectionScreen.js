import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet, Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native'
import AxiosIntance from './AxiosIntance';
import { useNavigation } from '@react-navigation/native';

const SeatItem = ({ item, isBooked, isSelected, onPress }) => {
  const [imageSource, setImageSource] = useState(null);

  useEffect(() => {
    setImageSource(isBooked ? require('./image/image19.png') : (isSelected ? require('./image/image17.png') : require('./image/image18.png')));
  }, [isSelected]);

  const itemStyle = {
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

  };

  return (
    <TouchableOpacity style={itemStyle} onPress={onPress} disabled={isBooked}>
      <Image source={imageSource} />
    </TouchableOpacity>
  );
};

const SeatList = ({ seats, bookedSeats, selectedSeats, handleSeatPress }) => {
  const renderSeatItem = ({ item }) => {
    const isBooked = bookedSeats.includes(item);
    const isSelected = selectedSeats.includes(item);

    return (
      <SeatItem
        item={item}
        isBooked={isBooked}
        isSelected={isSelected}
        onPress={() => handleSeatPress(item)}
      />
    );
  };

  return (
    <FlatList style={styles.listContainer}
      data={seats}
      numColumns={8}
      keyExtractor={(item) => item}
      renderItem={renderSeatItem}
    />
  );
};

const SeatSelectionScreen = (props) => {
  const { route } = props;
  const { params } = route
  const navigation = useNavigation()
  const { initPaymentSheet, presentPaymentSheet } = useStripe()

  const [selectedSeats, setSelectedSeats] = useState([]);
  const availableSeat = params.showtimeData.available_seats;
  const date = new Date(params.showtimeData.start_time);
  const day = date.getDate()
  const month = date.getMonth() + 1
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const cinema_name = params.showtimeData.cinema.name
  const totalPrice = params.price * selectedSeats.length;
  const seats = [
    'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8',
    'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8',
    'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8',
    'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8',
    'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8',
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8',
    'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8',
    'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8',
    'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8',
    'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8',
    'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8',
    'L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8',
  ];
  const bookedSeats = seats.filter((seat) => !availableSeat.includes(seat));

  const handleSeatPress = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };
  const checkOut = async () => {
    try {
      // 1. Get checkout session
      const response = await AxiosIntance().get(`tickets/checkout/${params.showtimeData._id}/${selectedSeats.length}`)
      // 2. Create checkout form + charge credit card
      //Số thẻ để test: 4242 4242 4242 4242
      const initResponse = await initPaymentSheet({
        merchantDisplayName: 'John Doe',
        paymentIntentClientSecret: response.paymentIntent,
      })
      if (initResponse.error) {
        console.log(initResponse.error)
        Alert.alert("Something went wrong at initialize payment sheet")
        return
      }
      // 3.Present the payment sheet to the user

      const paymentResponse = await presentPaymentSheet()
      if (paymentResponse.error) {
        Alert.alert(`Error: ${paymentResponse.error.code}`, paymentResponse.error.message)
        return
      }
      Alert.alert(`Success`, 'The payment was confirmed successfully')
      navigation.reset({
        index: 0,
        routes: [{ name: 'ListMovi' }]
      })
      // 4. After paying, create the ticket
      await AxiosIntance().post(`tickets/checkout/${params.showtimeData._id}/create-ticket`, { price: totalPrice, seat_number: selectedSeats })
    } catch (err) {
      console.log("Err at book function: " + err.response.data.message)
    }

  }
  const goBack = async () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <View style={styles.fixToText1}>
          <Image source={require('./image/image3.png')} />
          <Text style={{ color: '#fff', fontSize: 23, }}>Back </Text>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ height: 50, backgroundColor: '#BF2294', width: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 20, marginStart: 40 }}>

          <Text style={{ color: '#fff', fontSize: 15, marginTop: 8, marginStart: 15 }}>{day}</Text>
          <Text style={{ color: '#fff', fontSize: 18, marginStart: 5 }}>TH.{month}</Text>
        </View>

        <Text numberOfLines={1} style={{ width: 300, marginTop: 30, color: '#fff' }}>{params.title}</Text>


      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ height: 50, backgroundColor: '#746B79', width: 50, borderBottomRightRadius: 10, borderBottomStartRadius: 10, marginTop: 0, marginStart: 40 }}>
          <Text style={{ color: '#fff', marginStart: 5, marginTop: 10 }}>{hours}:{minutes}</Text>
        </View>
        <Image source={require('./image/image19.png')} style={{ marginStart: 20 }} />
        <Text style={{ fontSize: 8, color: '#fff', marginTop: 5, marginStart: 10 }}>BOOKED</Text>
        <Image source={require('./image/image17.png')} style={{ marginStart: 20 }} />
        <Text style={{ fontSize: 8, color: '#fff', marginTop: 5, marginStart: 10 }}>AVAILABLE</Text>
        <Image source={require('./image/image18.png')} style={{ marginStart: 20 }} />
        <Text style={{ fontSize: 8, color: '#fff', marginTop: 5, marginStart: 10 }}>SELECTED</Text>
      </View>
      <Text style={{ alignSelf: 'center', color: '#fff', fontWeight: 'bold' }}>{cinema_name}</Text>
      <Image source={require('./image/Line1.png')} />
      <SeatList seats={seats} bookedSeats={bookedSeats} selectedSeats={selectedSeats} handleSeatPress={handleSeatPress} />
      {totalPrice > 0 && (<View style={{ height: 50, backgroundColor: '#851010', borderRadius: 50, marginTop: 10, justifyContent: 'center', marginBottom: 10, marginStart: 20, marginEnd: 20, }}>
        <TouchableOpacity onPress={checkOut}  >
          <View style={styles.fixToText}>
            <Text
              style={{ color: '#fff' }}>
              {totalPrice}₫</Text>
            <Text
              style={{ color: '#fff', }}>
              PROCEED TO CHECK</Text>
          </View>

        </TouchableOpacity>

      </View>)}

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1520',
  },
  listContainer: {
    borderWidth: 1, // Đường viền xung quanh FlatList
    borderColor: 'pink', // Màu đường viền
    margin: 10,
  },
  fixToText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  fixToText1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 20,
    margin: 10,
  },
})
export default SeatSelectionScreen;