import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ItemMovi = (props) => {
    const { dulieu, navigation } = props;
  return (
    <TouchableOpacity>
      <View style={dulieu.container}>
        {/* <Image source={require('./img/Tau.png')} style={styles.image}/> */}
        {/* <Image style={styles.image} source={{ uri: dulieu.hinhSp }} /> */}
        <View style={styles.content}>
          <Text style={styles.textTitle}>{dulieu.tenSp}</Text>
          <Text >Gia: {dulieu.gia}</Text>
          <Text >So luong: {dulieu.soLuong}</Text>
        </View>
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

    container: {
        flexDirection: 'column',
        marginTop: 10,
        
      },
})