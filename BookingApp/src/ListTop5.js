import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosIntance from './AxiosIntance';
import ItemTopNam from './ItemTopNam';


const ListTop5 = (props) => {
    const { navigation } = props;
    const [data, setdata] = useState([])
    useEffect(() => {
        const getDs = async () => {

            const response = await AxiosIntance().get("/movies/top-5");
            if (response.status == "success") {
                setdata(response.data.data);
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
                <Text style={styles.title}>Top 5</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <ItemTopNam dulieu={item} navigation={navigation} />}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

export default ListTop5

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#130B2B',
        padding: 7,
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