import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./image/image3.png')} style={styles.image} />
            <Text style={styles.title}>Fill your Profile</Text>
            <Image source={require('./image/avatar.png')} style={styles.image1} />
            <Text style={{ color: '#fff', marginStart: 30 }}>Username</Text>
            <View style={{ backgroundColor: '#3A3B3C', height: 50, width: 330, marginStart: 30, marginEnd: 30 }}>
                <Text style={{ color: '#FFF', marginTop: 10, marginStart: 10 }}>Wilsonfraci</Text>
            </View>
            <Text style={{ color: '#fff', marginStart: 30, marginTop: 20 }}>Full Name</Text>
            <View style={{ backgroundColor: '#3A3B3C', height: 50, width: 330, marginStart: 30, marginEnd: 30 }}>
                <Text style={{ color: '#FFF', marginTop: 10, marginStart: 10 }}>Wilsonfraci</Text>
            </View>
            <Text style={{ color: '#fff', marginStart: 30, marginTop: 20 }}>Email Address*</Text>
            <View style={{ backgroundColor: '#3A3B3C', height: 50, width: 330, marginStart: 30, marginEnd: 30 }}>
                <Text style={{ color: '#FFF', marginTop: 10, marginStart: 10 }}>Wilsonfraci</Text>
            </View>
            <Text style={{ color: '#fff', marginStart: 30, marginTop: 20 }}>Phone Number*</Text>
            <View style={{ backgroundColor: '#3A3B3C', height: 50, width: 330, marginStart: 30, marginEnd: 30 }}>
                <Text style={{ color: '#FFF', marginTop: 10, marginStart: 10 }}>Wilsonfraci</Text>
            </View>
            <Button 
                style={{color: 'white'}}
                styleDisabled={{color: 'red'}}
                title="Submit"
        />
        </View>

    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1520'
    },
    image: {
        marginTop: 50,
        marginStart: 20
    },
    image1: {
        width: 100,
        height: 100,
        marginStart: 140,
        borderRadius: 360,
        marginTop: 20
    },
    title: {
        color: '#FFF',
        marginStart: 130,
        fontSize: 20
    },
    v1: {
        height: 50,
        color: '#fff',
        width: 150,
    }
})