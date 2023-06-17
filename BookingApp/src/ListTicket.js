import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosIntance from './AxiosIntance'
import ItemTicket from './ItemTicket'

const ListTicket = (props) => {
    const { navigation } = props;
    const [data, setdata] = useState([])
    useEffect(() => {
        const getDs = async () => {
            
            const response = await AxiosIntance().get("/tickets/user");
            if (response.status == "success") {
                setdata(response.data.ticket);
            } else {
                ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
                setdata(null)
            }
        }
        getDs();
        return () => {

        }
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.title}>Tickets</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <ItemTicket data={item} navigation={navigation} />}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ListTicket

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#130B2B',
        padding:7,
    },
    title: {
        color: '#ffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    center: {
        alignItems: 'center'
    }
})