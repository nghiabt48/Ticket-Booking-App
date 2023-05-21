import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ItemMovi = () => {
    const { data, navigation } = props;
  return (
    <TouchableOpacity>
      <View style={data.container}>
        {/* <Image source={require('./img/Tau.png')} style={styles.image}/> */}
        {/* <Image style={styles.image} source={{ uri: dulieu.hinhSp }} /> */}
        <View style={styles.content}>
          <Text style={styles.textTitle}>{dulieu.tenSp}</Text>
          <Text >Gia: {data.gia}</Text>
          <Text >So luong: {data.soLuong}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemMovi

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 10,
        
      },
})