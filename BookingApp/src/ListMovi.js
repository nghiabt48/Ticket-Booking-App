import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemMovi from './ItemMovi';
import AxiosIntance from './AxiosIntance';

const ListMovi = (props) => {
    const { navigation } = props;
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true);
    
    useEffect(() => {
        const getDs = async () => {
            const response = await AxiosIntance().get("/movies");
            if (response.status == "success") {
                setdata(response.data.data);
                setisLoading(false)
                //   console.log(response.data.data)
            } else {
                ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);

            }
        }
        getDs();
        return () => {

        }
    }, [])
    let timeOut = null;
    const down = (searchText) => {
        if (timeOut) {
            clearTimeout(timeOut);
        }
        timeOut = setTimeout(() => {
            search(searchText);
        }, 1000);
    }
    const search = async (searchText) => {
        setisLoading(true);
        const respone = await AxiosIntance().get("/movies/search?title=" + searchText);
        if (respone.status == "success") {
            setdata(respone.movie);
            setisLoading(false);
        } else {
            ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.Tim}>
                <TextInput placeholder='Search...' onChangeText={(text) => down(text)} style={styles.TextInputTim}></TextInput>
                
            </View>
            {
                isLoading == true ? (
                    <View>
                        <Text>Loading...</Text>
                    </View>
                ) : (
                    <FlatList
                        data={data}
                        numColumns={2}
                        renderItem={({ item }) => <ItemMovi dulieu={item} navigation={navigation} />}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                    />
                )
            }
        </View>
    )
}

export default ListMovi

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#130B2B',
        padding: 15,
    },
    TextInputTim: {
        width:'100%',
        borderWidth: 1,
        borderColor: '#DF0A64',
        padding: 8,
        borderRadius: 20,
        color: '#ffff',
        
        
    },
    Tim: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
    },
    ImageTim: {
        width: 35,
        height: 35,
        marginLeft: 10,

    }

})