import { StyleSheet, Text, TouchableOpacity, View,Image, Dimensions } from 'react-native'
import React from 'react'

const ItemReview = (props) => {
  const { item, _id } = props;
  const ImageURL = `http://139.180.138.39:3000/img/users/${item.user.photo}`
  return (
    <View key={_id} style={styles.container}>
      <View style={styles.userInfo}>
        <Image style={styles.avatar} source={{ uri: ImageURL }} />
        <Text style={styles.email}>{item.user.username}</Text>
      </View>
      <Text style={styles.content}>{item.review}</Text>
      <Text style={styles.rating}>Rating: {item.rating}⭐</Text>
    </View>
  )
}

export default ItemReview

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    marginBottom: 8,
  },
  rating: {
    fontSize: 12,
    color: 'gray',
    fontWeight: 'bold',

  },
})