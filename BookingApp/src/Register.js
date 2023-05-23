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
            if (e.response.data.error.name == "ValidationError" 
                && e.response.data.error.message.includes("Passwords are not the same")) {
                ToastAndroid.show("Mật khẩu không trùng khớp.", ToastAndroid.LONG);
            }
            else if (e.response.data.error.name == "ValidationError") {
                ToastAndroid.show("Hãy nhập đầy đủ các thông tin.", ToastAndroid.LONG);
            }
            if (e.response.data.message.includes("email") && e.response.data.error.code === 11000) {
                ToastAndroid.show("Đã có người sử dụng email này.", ToastAndroid.LONG);
            }
            if (e.response.data.message.includes("username") && e.response.data.error.code === 11000) {
                ToastAndroid.show("Đã có người sử dụng username này.", ToastAndroid.LONG);
            }
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