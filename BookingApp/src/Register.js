import { Button, StyleSheet, Text, TextInput, View, ToastAndroid, ImageBackground, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AxiosIntance from './AxiosIntance';
import { LinearGradient } from 'expo-linear-gradient';

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
            <StatusBar barStyle="light-content" />
            <ImageBackground source={require("./Images/BG.png")} style={styles.logoContainer}>
                <Text style={styles.title}>Cinema</Text>
                <Text style={styles.title2}>Plus+</Text>
            </ImageBackground>
            <View style={styles.infocontainer}>
            <TextInput style={styles.input} onChangeText={setPasswordUser}
                    placeholder="Enter username"
                    returnKeyType='go'
                    secureTextEntry={true}
                    autoCorrect={false} />
                <TextInput style={styles.input} onChangeText={setemailUser}
                    placeholder="Enter mail"
                    keyboardType='email-address'
                    returnKeyType='next'
                    autoCorrect={false} />
                <TextInput style={styles.input} onChangeText={setPasswordUser}
                    placeholder="Enter password"
                    returnKeyType='go'
                    secureTextEntry={true}
                    autoCorrect={false} />
                <TextInput style={styles.input} onChangeText={setPasswordUser}
                    placeholder="Enter password confirm"
                    returnKeyType='go'
                    secureTextEntry={true}
                    autoCorrect={false} />

                <TouchableOpacity style={styles.buttonContainer} title='Register' onPress={RegisterApp}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 0.0 }}
                        locations={[0.0, 1.0]}
                        colors={['#e5008e', '#fc2c11']}
                        style={styles.buttonG}
                    ><Text style={styles.buttonText}>REGISTER</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer1} title='Back' onPress={Back}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 0.0 }}
                        locations={[0.0, 1.0]}
                        colors={['#e5008e', '#fc2c11']}
                        style={styles.buttonG}
                    ><Text style={styles.buttonText}>BACK</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(19,11,43)',
        flexDirection: 'column'
    },
    logoContainer: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 60,
        marginTop: '30%',
        marginLeft: 15,
        opacity: 0.9,
        fontFamily: 'serif',
    },
    title2: {
        color: '#eb0b6d',
        fontSize: 60,
        marginTop: 5,
        marginLeft: 15,
        opacity: 0.9,
        fontFamily: 'serif',
    },
    infocontainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 260,
        padding: 30,
        marginBottom: '50%',
        // backgroundColor: 'red',
    },
    input: {
        height: 48,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    buttonText: {
        height: 48,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
    },
    buttonG: {
        borderRadius: 30
    },
    buttonContainer1:{
        marginTop:10,
    }
})