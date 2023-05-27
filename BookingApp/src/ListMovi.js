import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import ItemMovi from './ItemMovi';

const ListMovi = (props) => {
    const { navigation } = props;
    const [data, setdata] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.text2}>
                <Image source={require('./image/gmail.png')} style={{ width: 40, height: 40, marginStart: 20 }} />
                <Text style={styles.text1}>Warszaw,Poland</Text>
                <Image source={require('./image/tim.png')} style={{ width: 30, height: 30, marginStart: 130 }} />
            </View>
            <FlatList
                data={datan}
                numColumns = {2}
                key={2}
                renderItem={({ item }) => <ItemMovi dulieu={item} navigation={navigation} />}
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator={false}
            />
            {/*<View style={styles.text3}>
                <Text style={styles.text4}>Near Your</Text>
                <Text style={styles.text4}>Coming Soon</Text>
                <Text style={styles.text4}>Premieres</Text>
            </View>
            <Image source={require('./image/Line.png')} style={{padding:2,marginLeft:15,width:110}}/>*/}

            <View>
                <View style={{ flexDirection: 'row',}}>
                    <Image source={require('./image/movies.png')} style={{ marginStart: 40, marginTop: 60 }} />
                    <Image source={require('./image/tem.png')} style={{ marginStart: 40, marginTop: 60 }} />
                    <Image source={require('./image/TV.png')} style={{ marginStart: 50, marginTop: 60 }} />
                    <Image source={require('./image/hear.png')} style={{ marginStart: 50, marginTop: 60 }} />
                    <Image source={require('./image/pepole.png')} style={{ marginStart: 50, marginTop: 60 }} />
                </View>
                <View style={{ flexDirection: 'row', marginStart: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 20, fontSize: 12 }}>
                        MOVIES
                    </Text>
                    <Text style={{ color: '#fff', marginStart: 20, fontSize: 12 }}>
                        TICKETS
                    </Text>
                    <Text style={{ color: '#fff', marginStart: 20, fontSize: 12 }}>
                        CINEMAS
                    </Text>
                    <Text style={{ color: '#fff', marginStart: 20, fontSize: 12 }}>
                        FAVORITE
                    </Text>
                    <Text style={{ color: '#fff', marginStart: 20, fontSize: 12 }}>
                        PROFILE
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ListMovi

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1520',
    },
    text1: {
        color: '#fff',
        marginStart: 10,
        fontSize: 17
    },
    text2: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50
    },
    // text3:{
    //     flexDirection:'row',
    //     alignItems:'center'
    // },
    // text4:{
    //     color:'#fff',
    //     marginStart:40,
    //     marginTop:20
    // }/

})
const datan = [
    {
        "_id": "1",
        "image": "./image/avata.png",
        "title": "Action Adventture,Drama",
        "image1": "movies.png",
        "title1": "125 REVIEW",
        "title2": "Avengers:End Game",
        "title3": "137 MIN"
    },
    {
        "_id": "2",
        "image": "avata.png",
        "title": "Action Adventture,Trriler",
        "image2": "movies.png",
        "title1": "98 REVIEW",
        "title2": "Tenet",
        "title3": "97 MIN"
    },
    {
        "_id": "3",
        "image": "avata.png",
        "title": "Action Adventture,Sci-Fi",
        "image3": "movies.png",
        "title1": "38 REVIEW",
        "title2": "BlACK Window",
        "title3": "102 MIN"
    },
    {
        "_id": "4",
        "image": "avata.png",
        "title": "Action Adventture, Fantasy",
        "image4": "movies.png",
        "title1": "74 REVIEW",
        "title2": "Wonder Woman 1984",
        "title3": "120 MIN"
    }

]