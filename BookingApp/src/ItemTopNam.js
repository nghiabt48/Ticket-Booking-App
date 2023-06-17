import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const ItemTopNam = (props) => {
  const { dulieu, navigation } = props
  const ImageURL = `http://139.180.138.39:3000/img/movies/${dulieu.imageCover}`
  const goDetail = function () {
    navigation.navigate('Detail', { dulieu, ImageURL })
  }
  return (
    <TouchableOpacity onPress={goDetail} style={styles.container}>
      <View style={styles.ItemAll}>
        <Image source={{ uri: ImageURL }} style={styles.ImageMoves} />
        <Text style={styles.title}>{dulieu.title}</Text>

      </View>
    </TouchableOpacity>
  )
}

export default ItemTopNam

const styles = StyleSheet.create({
  container: {
    padding: 13,
  },
  ItemAll: {
    borderRadius: 10,
    backgroundColor: '#201934',
    borderWidth: 1,
    borderColor: '#DF0A64',
  },
  ImageMoves: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '500',
    marginStart: 10,
    marginTop: 5,
    marginBottom: 5,
  }
})