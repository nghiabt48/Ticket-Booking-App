import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const MainApp = (props) => {
  const { navigation } = props;
  
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  )
}

export default MainApp

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})