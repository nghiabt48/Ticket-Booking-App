import { Button, StyleSheet, Text, TextInput, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import AxiosIntance from './AxiosIntance';

const Register = (props) => {
    const { navigation } = props;
    const [emailUser, setemailUser] = useState("")
    const [Username, setUsername] = useState("")
    const [passwordUser, setPasswordUser] = useState("")
    const [passwordConfirm, setpasswordConfirm] = useState("")
    const RegisterApp = async () => {
        
        try {
            await AxiosIntance().post("users/register", { username: Username, email: emailUser, password: passwordUser, passwordConfirm: passwordConfirm });
            ToastAndroid.show("Dang ky thanh cong!", ToastAndroid.SHORT);

            navigation.navigate("Login")
        } catch (e) {
            ToastAndroid.show("Hay dien day du cac thong tin", ToastAndroid.SHORT);
        }

    }
    const Back = () => {
        navigation.navigate("Login")
    }
    return (
        <View style={styles.container}>
            <Text>Username</Text>
            <TextInput style={styles.TextInputUser} onChangeText={setUsername}></TextInput>
            <Text>email</Text>
            <TextInput style={styles.TextInputUser} onChangeText={setemailUser}></TextInput>
            <Text>Password</Text>
            <TextInput style={styles.TextInputPass} onChangeText={setPasswordUser}></TextInput>
            <Text>passwordConfirm</Text>
            <TextInput style={styles.TextInputPass} onChangeText={setpasswordConfirm}></TextInput>
            <Button title='Register' onPress={RegisterApp}></Button>
            <Button title='Back' onPress={Back}></Button>
        </View>
    )
}

export default Register

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