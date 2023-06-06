import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Pay = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1A1520', }}>
       <View style={{ flexDirection: 'row' }}>
            <Image source={require('./image/image3.png')} style={{ marginTop: 50, marginStart: 20 }} />
            <Text style={{color:'#fff',marginStart:140,marginTop:50,fontSize:24}}>Pay</Text>
            </View>
            <Text style={{color:'#fff',marginStart:20,marginTop:20,fontSize:15}}>Multikion:Atrium Targoswek</Text>
            <Text style={{color:'#fff',marginStart:20,fontSize:13,marginTop:10}}>SATURDAY,11 JULY,2023</Text>
            <Text style={{color:'#fff',marginStart:20,fontSize:13,marginTop:10}}>17:50 ~ 18:53</Text>
            <Text style={{color:'#fff',marginStart:20,fontSize:13,marginTop:10}}>Rạp CGV</Text>
            <Text style={{color:'#fff',marginStart:20,fontSize:13,marginTop:4}}>CGC Hùng vương plaza</Text>
            <View style={{ flexDirection: 'row' }}>
            <Text style={{color:'#fff',marginStart:20,fontSize:13,marginTop:10}}>GHẾ</Text>
            <View style={{ flexDirection: 'column' }}>
            <Text style={{color:'#fff',marginStart:200,fontSize:13,marginTop:10}}>Phòng Chiếu</Text>
            <Text style={{color:'#fff',marginStart:200,fontSize:13,marginTop:5}}>Cinema2</Text>
            </View>
            </View>
            <Text style={{color:'#fff',marginStart:20,fontSize:13,marginTop:5}}>BẮP,COCA</Text>
            <Text style={{color:'#fff',marginStart:20,fontSize:13,marginTop:4}}>K5,K6</Text>
    </View>
  )
}

export default Pay

const styles = StyleSheet.create({})