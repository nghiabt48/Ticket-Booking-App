import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AxiosIntance from './AxiosIntance';

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
    <FlatList
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
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [availableSeat, setAvailableSeat] = useState([]);
  const [data, setData] = useState([]);
  const movieId = params.movieID;
  const start_time = params.start_time;
  const date = new Date(params.start_time)
  const day = date.getDate()
  const month = date.getMonth()+1
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const price = params.price;
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
  useEffect(() => {
    const fetchShowtimes = async () => {
      try {
        const response = await AxiosIntance().get(`showtimes?movie=${movieId}&start_time=${start_time}`);
        setData(response.data.data);
        setAvailableSeat(response.data.data[0].available_seats);
      } catch (error) {
        console.log("Err at when loading Seats: " + error.message);
      }
    };

    fetchShowtimes();
  }, []);

  const bookedSeats = seats.filter((seat) => !availableSeat.includes(seat));
  const handleSeatPress = (seat) => {
    if (bookedSeats.includes(seat)) {
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ height: 50, backgroundColor: '#BF2294', width: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 20, marginStart: 40 }}>
          
          <Text style={{ color: '#fff', fontSize: 15, marginTop: 8, marginStart: 15 }}>{day}</Text>
          <Text style={{ color: '#fff', fontSize: 18, marginStart: 5 }}>TH.{month}</Text>
        </View>
        
          <Text numberOfLines={1} style={{width: 300 ,marginTop: 30, color: '#fff'}}>{params.title}</Text>
          
       
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
      <Image source={require('./image/Line1.png')} />
      <View>
        <Text style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>Total: {price * selectedSeats.length}VND</Text>
      </View>
      <View style={styles.listContainer}>
        <SeatList seats={seats} bookedSeats={bookedSeats} selectedSeats={selectedSeats} handleSeatPress={handleSeatPress} />
      </View>
      
    </ScrollView>
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
  }
})
export default SeatSelectionScreen;