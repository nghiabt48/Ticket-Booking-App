import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const ItemMovi = (props) => {
  const { dulieu, navigation } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.V1}>
        <Image source={require('./image/avata.png')} style={{ width: 150, height:130}}/>
        <Text style={styles.title}>{dulieu.title}</Text>
        <View style={styles.image}>
          <Image source={require('./image/sao.png')} />
          <Image source={require('./image/sao.png')} />
          <Image source={require('./image/sao.png')} />
          <Image source={require('./image/sao.png')} />
          <Image source={require('./image/sao1.png')} />
          <Text style={{ fontSize: 8 }}>{dulieu.title1}</Text>
        </View>
        <Text style={styles.title2}>
          {dulieu.title2}
        </Text>
        <Text style={styles.title3}>
          {dulieu.title3}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemMovi

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1A1520',
  },
  image: {
    marginStart: 8,
    marginTop: 7,
    flexDirection: 'row'
  },
  V1: {
    height: 200,
    width: 150,
    backgroundColor: '#FFFFFF',
    marginTop: 40,
    marginEnd: 9,
    marginStart: 30,
  },
  title: {
    marginStart: 10,
    fontSize: 10,
  },
  title2: {
    marginStart: 10,
    fontSize: 13,
  },
  title3: {
    fontSize: 9,
    marginStart: 10
  }
})