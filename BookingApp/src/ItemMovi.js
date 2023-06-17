import { StyleSheet, Text, TouchableOpacity, View,Image, Dimensions } from 'react-native'
import React from 'react'
import Detail from './Detail';

const ItemMovi = (props) => {
  const { dulieu, navigation } = props;
  const ImageURL = `http://139.180.138.39:3000/img/movies/${dulieu.imageCover}`
  const goDetail = function() {
    navigation.navigate('Detail', {dulieu, ImageURL})
  }
  const shortenText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...';
    }
    return text;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={goDetail}>
      <View style={styles.itemAll}>
        <Image source={{uri: ImageURL}} style={styles.ImageMoves} />
        <Text style={styles.title}>{shortenText(dulieu.title, 14)}</Text>
        <View style={styles.image}>
          <Image source={require('./image/sao.png')} />
          <Image source={require('./image/sao.png')} />
          <Image source={require('./image/sao.png')} />
          <Image source={require('./image/sao1.png')} />
        </View>
        <Text style={styles.title2}>{dulieu.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemMovi

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 13,
    maxWidth: Dimensions.get('window').width / 2
  },
  itemAll: {

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
  image: {
    marginStart: 10,
    flexDirection: 'row'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginStart: 10,
  },
  title2: {
    fontSize: 15,
    color: '#fff',
    marginStart: 10,
  },
})