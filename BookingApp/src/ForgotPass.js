import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, StatusBar, Image, ImageBackground, KeyboardAvoidingView, secureTextEntry, Touchable, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { LinearTextGradient } from "react-native-text-gradient"
import { LinearGradient } from 'expo-linear-gradient'


const Login = (props) => {


    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ImageBackground source={require("./Images/BG.png")} style={styles.logoContainer}>
                <Text style={styles.title}>Cinema</Text>
                <Text style={styles.title2}>Plus+</Text>
            </ImageBackground>

            <View style={styles.infocontainer}>
                <Text style={styles.title3}>Forgot your password?</Text>
                <Text style={styles.title4}>Tell us your email address, and we'll get your to the back on track in no time</Text>

                <TextInput style={styles.input}
                    placeholder="Enter your email"
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
                            RESET PASSWORD
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttonText2}>Back to <Text style={styles.buttonText3}>Sign In</Text></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
    title3: {
        color: 'white',
        marginBottom: 20,
        fontSize: 25
    },
    title4: {
        color: 'white',
        marginBottom: 20

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