import { Button, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppConText } from './AppConText';
import AxiosIntance from './AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
    const { navigation } = props;
    const { setisLogin } = useContext(AppConText);
    const [emailUser, setemailUser] = useState("")

    const [passwordUser, setPasswordUser] = useState("")

    const LoginApp = async () => {
        try {
            const response = await AxiosIntance().post("users/login", { email: emailUser, password: passwordUser });

            await AsyncStorage.setItem('token', response.token);
            ToastAndroid.show("Dang nhap thanh cong!", ToastAndroid.SHORT);
            setisLogin(true)
        } catch (e) {
            console.log(e.response.data.message)
            ToastAndroid.show(e.response.data.message, ToastAndroid.SHORT);
        }


    }
    const DangKy = async () => {
        navigation.navigate('Register');
    }
    return (
        <View style={styles.container}>
            <Text>Email</Text>
            <TextInput style={styles.TextInputUser} onChangeText={setemailUser}></TextInput>
            <Text>Password</Text>
            <TextInput style={styles.TextInputPass} onChangeText={setPasswordUser}></TextInput>
            <Button title='Login' onPress={LoginApp}></Button>
            <Button title='Register' onPress={DangKy}></Button>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    TextInputUser: {
        borderWidth: 2
    },
    TextInputPass: {
        borderWidth: 2
    },

})