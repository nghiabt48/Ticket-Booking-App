import { StyleSheet, Text, View, Image, ScrollView, FlatList, ActivityIndicator, TouchableOpacity, TextInput, ToastAndroid, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemReview from './ItemReview'
import AxiosIntance from './AxiosIntance'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';

const Detail = (props) => {
    const { route } = props
    const { params } = route
    const navigation = useNavigation()
    const displayGenres = params.dulieu.genre.join(', ');
    const displayCast = params.dulieu.cast.join(', ');
    const [reviews, setreviews] = useState([])
    const [loading, setloading] = useState(false)
    const [review, setreview] = useState("");
    const [rating, setrating] = useState("");

    const goBack = async () => {
        navigation.navigate('ListMovi');
    }
    const goSelectTimeAndCinema = () => {
        navigation.navigate('PickTime', { id: params.dulieu._id, price: params.dulieu.price, title: params.dulieu.title })
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
    const Post = async () => {
        const response = await AxiosIntance().post(`movies/${params.dulieu._id}/reviews`, { review: review, rating: rating });
        if (response.error == true) {
            ToastAndroid.show("Đăng review thất bại", ToastAndroid.SHORT);
        } else {

            ToastAndroid.show("Đăng review thành công", ToastAndroid.SHORT);

        }
    }
    const AddFavoriteMovi = () => {

    }
    return (
        <ScrollView >

            <View style={styles.container}>
                <View >
                    <Image source={{ uri: params.ImageURL }} style={styles.boxImage1} />
                    <TouchableOpacity onPress={goBack} style={{ position: 'absolute', marginTop: 15, }}>
                        <View style={styles.fixToText}>
                            <Image source={require('./image/image3.png')} />
                            <Text style={styles.title}>Back</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={{ color: '#fff', fontSize: 30, marginStart: 10, display: 'flex' }}>{params.dulieu.title}</Text>
                    <Text style={{ color: '#B72F2F', marginStart: 10, marginTop: 5, fontSize: 20 }}>{displayGenres}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Text style={{ color: '#fff', marginStart: 10, fontSize: 20, marginTop: 4 }}>{params.dulieu.ratingsQuantity} REVIEWS ({params.dulieu.ratingsAverage}⭐)</Text>
                </View>
                <Text style={{ color: '#fff', marginStart: 10, marginTop: 10, fontSize: 16 }}>Storyline</Text>
                <Text style={{ color: '#fff', marginStart: 10, marginTop: 10 }}>{params.dulieu.description}</Text>

                <Text style={{ color: '#fff', marginStart: 10, fontSize: 15, marginTop: 15 }}>Cast: {displayCast}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: '#252525', width: 150, height: 40, borderRadius: 50 }} onPress={goBack}>
                        <Text style={{ color: '#fff', fontSize: 13, marginTop: 9, marginStart: 25 }} >LEAVE A REVIEW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goSelectTimeAndCinema} style={{ backgroundColor: '#653B3B', width: 150, height: 40, borderRadius: 50 }}>
                        <Text style={{ color: '#fff', fontSize: 13, marginTop: 9, marginStart: 22 }}>BOOK YOUR TICKET</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ color: '#fff', fontSize: 20, margin: 10 }}>Your Review:</Text>
                <View style={{ padding: 10 }}>
                    <View style={{ backgroundColor: '#fff', borderRadius: 10, }}>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 5, height: 60, }}>
                            <TextInput style={{ fontSize: 20, width: '70%' }} placeholder='Create your Review' onChangeText={setreview} ></TextInput>
                            <TouchableOpacity onPress={Post} style={{ justifyContent: 'center', marginEnd: '10%' }}>
                                <Image style={{ position: 'absolute', width: 40, height: 40, }} source={require('../src/image/post.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <SafeAreaView style={{ flex: 1 }}>
                            <View style={styles.container1}>
                                <Text style={styles.heading}>{rating ? `${rating} ⭐` : 'Tap to rate'}</Text>
                                <View style={styles.stars}>
                                    <TouchableOpacity onPress={() => setrating(1)}>
                                        <MaterialIcons
                                            name={rating >= 1 ? 'star' : 'star-border'}
                                            size={32}
                                            style={rating >= 1 ? styles.starSelected : styles.starUnselected}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setrating(2)}>
                                        <MaterialIcons
                                            name={rating >= 2 ? 'star' : 'star-border'}
                                            size={32}
                                            style={rating >= 2 ? styles.starSelected : styles.starUnselected}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setrating(3)}>
                                        <MaterialIcons
                                            name={rating >= 3 ? 'star' : 'star-border'}
                                            size={32}
                                            style={rating >= 3 ? styles.starSelected : styles.starUnselected}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setrating(4)}>
                                        <MaterialIcons
                                            name={rating >= 4 ? 'star' : 'star-border'}
                                            size={32}
                                            style={rating >= 4 ? styles.starSelected : styles.starUnselected}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setrating(5)}>
                                        <MaterialIcons
                                            name={rating >= 5 ? 'star' : 'star-border'}
                                            size={32}
                                            style={rating >= 5 ? styles.starSelected : styles.starUnselected}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </SafeAreaView>
                    </View>
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
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    boxImage1: {

        width: '100%',
        height: 250,

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
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    stars: {
        display: 'flex',
        flexDirection: 'row',
    },
    starUnselected: {
        color: '#aaa',
    },
    starSelected: {
        color: '#ffb300',
    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '400',

    },
    fixToText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: 20,
    },
})