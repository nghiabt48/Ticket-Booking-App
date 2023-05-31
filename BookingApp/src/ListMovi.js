import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemMovi from './ItemMovi';
import AxiosIntance from './AxiosIntance';

const ListMovi = (props) => {
    const { navigation } = props;
    const [data, setdata] = useState([])
    useEffect(() => {
        const getDs = async () => {
            const response = await AxiosIntance().get("/movies");
            if (response.status =="success") {
              setdata(response.data.data);
            //   console.log(response.data.data)
            } else {
              ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
              
            }
        }
        getDs();
      return () => {
       
      }
    }, [])
    
    return (
        <View style={styles.container}>
            <View style={styles.Tim}>
                <TextInput style={styles.TextInputTim}></TextInput>
                <Image source={require('./image/tim.png')} style={styles.ImageTim} />
            </View>
            <FlatList
                data={data}
                numColumns = {2}
                 
                renderItem={({ item }) => <ItemMovi dulieu={item} navigation={navigation} />}
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ListMovi

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#130B2B',
        padding:15,
    },
    TextInputTim:{
        width:'85%',
        borderWidth:1,
        borderColor:'#DF0A64',
        padding: 8,
        borderRadius: 20,
        marginTop: 10,
        color: '#ffff',
        marginStart:10,
    },
    Tim:{
        flexDirection: 'row',
        alignItems:'center',
    },
    ImageTim:{
        width:35,
        height:35,
        marginLeft:10,
        
    }
    
})