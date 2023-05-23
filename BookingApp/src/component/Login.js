import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


const Login = () => {
  return (
    <View style={styles.container}>
      <View>
      <LinearGradient
          // Background Linear Gradient
          colors={['#14032B', '#14032B']}
          style={styles.background}
        />
        <Image style={styles.img} source={require('../component/image/ImageLogin.png')} />
       
      </View>
      <View>
      
        <TextInput style={styles.input} > </TextInput>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14032B',
    height: '100%'
  },
  img: {
    height: 500,
    
  },
  input: {
    borderColor:'red',
    marginTop:-10,
    borderRadius: 15,
    alignSelf:'center',
    width: 320,
    padding:15,
    color: 'white',
    backgroundColor:'#C2185B',
    fontSize:20
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }
})