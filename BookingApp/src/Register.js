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
        // <View style={styles.container}>
        //     <Text>Username</Text>
        //     <TextInput style={styles.TextInputUser} onChangeText={setUsername}></TextInput>
        //     <Text>email</Text>
        //     <TextInput style={styles.TextInputUser} onChangeText={setemailUser}></TextInput>
        //     <Text>Password</Text>
        //     <TextInput style={styles.TextInputPass} onChangeText={setPasswordUser}></TextInput>
        //     <Text>passwordConfirm</Text>
        //     <TextInput style={styles.TextInputPass} onChangeText={setpasswordConfirm}></TextInput>
        //     <Button title='Register' onPress={RegisterApp}></Button>
        //     <Button title='Back' onPress={Back}></Button>
        // </View>


        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />

            <ImageBackground source={require("./Images/BG.png")} style={styles.logoContainer}>
                <Text style={styles.title}>Cinema</Text>
                <Text style={styles.title2}>Plus+</Text>
            </ImageBackground>

            <View style={styles.infocontainer}>
                <TextInput style={styles.input}
                    placeholder="Enter username/mail"
                    keyboardType='email-address'
                    returnKeyType='next'
                    autoCorrect={false} />
                <TextInput style={styles.input}
                    placeholder="Enter your password"
                    returnKeyType='go'
                    secureTextEntry={true}
                    autoCorrect={false} />
                <TextInput style={styles.input}
                    placeholder="Confirm your password"
                    returnKeyType='go'
                    secureTextEntry={true}
                    autoCorrect={false} />

                <TouchableOpacity>
                    <LinearGradient
                        style={{
                            padding: 15,
                            borderRadius: 50,
                            with: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 0.0 }}
                        locations={[0.0, 1.0]}
                        colors={['#e5008e', '#fc2c11']}
                        useAngle={45}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                            CREATE ACCOUNT
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttonText2}>Already have Account? <Text style={styles.buttonText3}>Sign In</Text></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgb(19,11,43)',
        flexDirection: 'column'
    },
    TextInputUser: {
        borderWidth: 2
    },
    TextInputPass: {
        borderWidth: 2
    },
    logoContainer: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 60,
        marginTop: '50%',
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
        height: 330,
        padding: 40,
        // backgroundColor: 'red',
    },
    input: {
        height: 40,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    buttonText2: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 20,
        color: 'white',
    },
    buttonText3: {
        color: '#e5008e',
    },
    buttonG: {
        borderRadius: 30
    },
})