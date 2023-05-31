import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const ItemMovi = (props) => {
  const { dulieu, navigation } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.itemAll}>
        <Image source={require('./image/avata.png')} style={styles.ImageMoves} />
        <Text style={styles.title}>{dulieu.title}</Text>
        <View style={styles.image}>
          <Image source={require('./image/sao.png')} />
          <Image source={require('./image/sao.png')} />
          <Image source={require('./image/sao.png')} />
          <Image source={require('./image/sao.png')} />
          <Image source={require('./image/sao1.png')} />
        </View>
        <Text style={styles.title2}>
          {dulieu.price}
        </Text>
      </View>



    </TouchableOpacity>
  )
}

export default ItemMovi

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding:10,
    
  },
  itemAll:{
    
    borderRadius: 10,
    backgroundColor: '#201934',
    borderWidth: 1,
    borderColor: '#DF0A64',
    
  },
  ImageMoves: {
    width: '100%',
    height: 200,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  image: {
    marginStart:10,
    flexDirection: 'row'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginStart:10,
  },
  title2: {
    fontSize: 15,
    color: '#fff',
    marginStart:10,
  },

})