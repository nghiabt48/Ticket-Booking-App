import { Button, StyleSheet, Text, TextInput, ToastAndroid, View, SafeAreaView, ImageBackground, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppConText } from './AppConText';
import AxiosIntance from './AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

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
        // <View style={styles.container}>
        //     <Text>Email</Text>
        //    <TextInput style={styles.TextInputUser} onChangeText={setemailUser}></TextInput>
        //     <Text>Password</Text>
        //    <TextInput style={styles.TextInputPass} onChangeText={setPasswordUser}></TextInput>
        //     <Button title='Login' onPress={LoginApp}></Button>
        //     <Button title='Register' onPress={DangKy}></Button>
        // </View>
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <ImageBackground source={require("./Images/BG.png")} style={styles.logoContainer}>
                <Text style={styles.title}>Cinema</Text>
                <Text style={styles.title2}>Plus+</Text>
                <View style={styles.infocontainer}>
                    <TextInput style={styles.input} onChangeText={setemailUser}
                        placeholder="Enter email"
                        placeholderTextColor={'#aba9a7'}
                        keyboardType='email-address'
                        returnKeyType='next'
                        autoCorrect={false} />
                    <TextInput style={styles.input} onChangeText={setPasswordUser}
                        placeholder="Enter password"
                        placeholderTextColor={'#aba9a7'}
                        returnKeyType='go'
                        secureTextEntry={true}
                        autoCorrect={false} />

                    <TouchableOpacity style={styles.buttonContainer} title='Login' onPress={LoginApp}>


                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 0.0 }}
                            locations={[0.0, 1.0]}
                            colors={['#e5008e', '#fc2c11']}
                            style={styles.buttonG}
                        ><Text style={styles.buttonText}>SIGN IN</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity title='Register' onPress={DangKy}>
                        <Text style={styles.buttonText2}>New at CinemaPlus? <Text style={styles.buttonText3}>Create Account</Text></Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>


        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(19,11,43)',
        flexDirection: 'column'
    },
    logoContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'stretch',
    },
    title: {
        color: 'white',
        fontSize: 60,
        marginTop: '40%',
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
        padding: 40,
        // backgroundColor: 'red',
    },
    buttonContainer: {
        width: 300,
        alignSelf: 'center',
    },
    input: {
        height: 40,
        borderRadius: 10,
        backgroundColor: '#252525',
        color: '#FFFFFF',
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    buttonText2: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 30,
        color: 'white',
    },
    buttonText3: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 30,
        color: '#e5008e',
    },
    buttonG: {
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },



})