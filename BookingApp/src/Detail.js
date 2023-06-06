import { StyleSheet, Text, View, Image, ScrollView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemReview from './ItemReview'
import AxiosIntance from './AxiosIntance'
import { useNavigation } from '@react-navigation/native'

const Detail = (props) => {
    const { route } = props
    const { params } = route
    const navigation = useNavigation()
    const displayGenres = params.dulieu.genre.join(', ');
    const displayCast = params.dulieu.cast.join(', ');
    const [reviews, setreviews] = useState([])
    const [loading, setloading] = useState(false)

    const goBack = () => {
        navigation.goBack()
    }
    const goSelectTimeAndCinema = () => {
        navigation.navigate('PickTime', {id: params.dulieu._id, price: params.dulieu.price, title: params.dulieu.title})
    }
    useEffect(() => {
        async function fetchReviews() {
            try {
                setloading(true)
                const response = await AxiosIntance().get(`movies/${params.dulieu._id}/reviews`);
                setreviews(response.data.data);
                setloading(false)
            } catch (error) {
                console.log("Err at when loading Reviews: " + error.message);
                setloading(false)
            }
        }
        fetchReviews();
    }, []);
    return (
        <ScrollView>

            <View style={styles.container}>
                <View >
                    <Image source={{ uri: params.ImageURL }} style={styles.boxImage1} />
                    <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={goBack}>
                            <Text style={{ color: '#fff', marginStart: 50 }}>Back</Text>
                            {/* button back */}
                            <Image source={require('./image/image3.png')} style={styles.boxImage3} />
                        </TouchableOpacity>

                        {/* favorite */}
                        <Image source={require('./image/image16.png')} style={{marginRight: 20}} />

                    </View>


                </View>
                <View>
                    <Text style={{ color: '#fff', marginTop: 40, fontSize: 30, marginStart: 10 }}>{params.dulieu.title}</Text>
                    <Text style={{ color: '#B72F2F', marginStart: 10, marginTop: 5, fontSize: 20 }}>{displayGenres}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Text style={{ color: '#fff', marginStart: 10, fontSize: 20, marginTop: 4 }}>{params.dulieu.ratingsQuantity} REVIEWS ({params.dulieu.ratingsAverage}⭐)</Text>
                </View>
                <Text style={{ color: '#fff', marginStart: 10, marginTop: 10, fontSize: 16 }}>Storyline</Text>
                <Text style={{ color: '#fff', marginStart: 10, marginTop: 10 }}>{params.dulieu.description}</Text>

                <Text style={{ color: '#fff', marginStart: 10, fontSize: 15, marginTop: 15 }}>Cast: {displayCast}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ backgroundColor: '#252525', width: 150, height: 40, marginTop: 20, marginStart: 30, borderRadius: 50 }}>
                        <Text style={{ color: '#fff', fontSize: 13, marginTop: 9, marginStart: 25 }}>LEAVE A REVIEW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goSelectTimeAndCinema} style={{ backgroundColor: '#653B3B', width: 150, height: 40, marginTop: 20, marginStart: 40, borderRadius: 50 }}>
                        <Text style={{ color: '#fff', fontSize: 13, marginTop: 9, marginStart: 22 }}>BOOK YOUR TICKET</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: '#fff', fontSize: 30, alignSelf: "center" }}>REVIEWS</Text>
                <View>
                    {
                        loading == true ? (
                            <ActivityIndicator size="large" />
                        ) : (
                            reviews.map((item, _id) => <ItemReview item={item} key={_id} />)
                        )
                    }
                </View>
            </View>
        </ScrollView>

    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1520',

    },
    boxImage1: {
        position: 'absolute',
        width: 400,
        height: 300,
        opacity: 0.3
    },
    boxImage2: {
        width: 50,
        height: 50,
        marginTop: 60,
        marginStart: 170
    },
    boxImage3: {
        position: 'absolute',
        width: 22,
        height: 22,
        marginStart: 20
    },

})