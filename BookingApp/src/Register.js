import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Register = (props) => {
    const { navigation } = props;
    const RegisterApp = async () => {
        navigation.navigate("Login")
    }
    const Back = () => {
        navigation.navigate("Login")
    }
    return (
        <View style={styles.container}>
            <Text>Username</Text>
            <TextInput style={styles.TextInputUser}></TextInput>
            <Text>Password</Text>
            <TextInput style={styles.TextInputPass}></TextInput>
            <Text>Password</Text>
            <TextInput style={styles.TextInputPass}></TextInput>
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