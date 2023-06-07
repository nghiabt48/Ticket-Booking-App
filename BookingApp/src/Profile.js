import { StyleSheet, Text, View, Image, Button, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosIntance from './AxiosIntance';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = (props) => {
    const { navigation } = props;
    const [data, setdata] = useState([])
    useEffect(() => {
        const CaNhan = async () => {
            const respone = await AxiosIntance().get("/users/me");
            if (respone.status == "success") {
                setdata(respone.data.document)

            } else {
                ToastAndroid.show("lay du lieu that bai", ToastAndroid.SHORT);
            }
        }
        CaNhan();
        return () => {

        }
    }, [])
    const Change = async () => {
        navigation.navigate('ChangePassword');
    }
    
    return (
        <View style={styles.container}>

            <View style={styles.fixToText}>
                <Pressable>
                    <Image source={require('./image/image3.png')} />
                </Pressable>
                <Text style={styles.title}>Profile</Text>
            </View>
            <View style={styles.TextAlign}>
                <Image source={require('./image/avatar.png')} style={styles.image} />
            </View>

            <Text style={styles.InPut}>Username: {data.username}</Text>
            <Text style={styles.InPut}>Email: {data.email}</Text>
            <TouchableOpacity style={styles.buttonContainer}  onPress={Change}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                    locations={[0.0, 1.0]}
                    colors={['#e5008e', '#fc2c11']}
                    style={styles.buttonG}
                ><Text style={styles.buttonText}>CHANGE PASSWORD</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}  >
                <LinearGradient
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                    locations={[0.0, 1.0]}
                    colors={['#e5008e', '#fc2c11']}
                    style={styles.buttonG}
                ><Text style={styles.buttonText}>LOG OUT</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>

    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#130B2B',
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 360,
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: '500',

    },
    v1: {
        height: 50,
        color: '#fff',
        width: 150,
    },
    fixToText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextAlign: {
        alignItems: 'center',
        margin: 30,
    },
    title1: {
        color: '#fff',
        fontSize: 16
    },
    InPut: {
        backgroundColor: '#201934',
        borderWidth: 1,
        borderColor: '#DF0A64',
        color: '#fff',
        fontSize: 16,
        padding: 10,
        marginTop: 10,
    },
    buttonContainer: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    buttonG: {
        borderRadius: 15,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
})