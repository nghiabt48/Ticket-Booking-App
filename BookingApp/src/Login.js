import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { AppConText } from './AppConText';

const Login = (props) => {
    const { navigation } = props;
    const { setisLogin, setinfoUser } = useContext(AppConText);
    const LoginApp = async () => {
        
        setisLogin(true)
    }
    const DangKy = async()=>{
        navigation.navigate('Register');
      }
  return (
    <View style={styles.container}>
        <Text>Username</Text>
        <TextInput style={styles.TextInputUser}></TextInput>
        <Text>Password</Text>
        <TextInput style={styles.TextInputPass}></TextInput>
        <Button title='Login' onPress={LoginApp}></Button>
        <Button title='Register' onPress={DangKy}></Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:20
    },
    TextInputUser:{
        borderWidth:2
    },
    TextInputPass:{
        borderWidth:2
    },
    
})