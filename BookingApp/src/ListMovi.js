import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemMovi from './ItemMovi';
import AxiosIntance from './AxiosIntance';

const ListMovi = (props) => {
    const { navigation } = props;
    const [data, setdata] = useState("");
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
            {/* <View style={styles.text2}>
                <Image source={require('./image/gmail.png')} style={{ width: 40, height: 40, marginStart: 20 }} />
                <Text style={styles.text1}>Warszaw,Poland</Text>
                <Image source={require('./image/tim.png')} style={{ width: 30, height: 30, marginStart: 130 }} />
            </View> */}
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
        padding:10,
    },
    
})
// const datan = [
//     {
//         "_id": "1",
//         "image": "./image/avata.png",
//         "title": "Action Adventture,Drama",
//         "image1": "movies.png",
//         "title1": "125 REVIEW",
//         "title2": "Avengers:End Game",
//         "title3": "137 MIN"
//     },
//     {
//         "_id": "2",
//         "image": "avata.png",
//         "title": "Action Adventture,Trriler",
//         "image2": "movies.png",
//         "title1": "98 REVIEW",
//         "title2": "Tenet",
//         "title3": "97 MIN"
//     },
//     {
//         "_id": "3",
//         "image": "avata.png",
//         "title": "Action Adventture,Sci-Fi",
//         "image3": "movies.png",
//         "title1": "38 REVIEW",
//         "title2": "BlACK Window",
//         "title3": "102 MIN"
//     },
//     {
//         "_id": "4",
//         "image": "avata.png",
//         "title": "Action Adventture, Fantasy",
//         "image4": "movies.png",
//         "title1": "74 REVIEW",
//         "title2": "Wonder Woman 1984",
//         "title3": "120 MIN"
//     }

// ]