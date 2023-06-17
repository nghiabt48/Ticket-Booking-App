import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemTicket = (props) => {
  const { data, navigation } = props
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>{data.movie.title}</Text>
        <Text style={styles.title2}>Thời gian chiếu: {data.showtime.start_time}</Text>
        <Text style={styles.title2}>Số ghế: {data.seat_number}</Text>
        <Text style={styles.title2}>Giá: {data.price}</Text>
      </View>
    </View>
  )
}

export default ItemTicket

const styles = StyleSheet.create({
  container:{
    padding:13,
  },
  container2: {
    borderRadius: 10,
    backgroundColor: '#201934',
    borderWidth: 1,
    borderColor: '#DF0A64',
    padding: 5,
  },
  title: {
    color: '#ffff',
  },
  title2: {
    color: '#ffff',


  }
})