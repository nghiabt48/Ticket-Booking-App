import { StyleSheet, Text, ScrollView, View, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const Movie = () => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image style={styles.imageSearch} source={require('./Images/settings.png')}></Image>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Cinemas</Text>
                    <Image style={styles.imageSearch} source={require('./Images/search.png')}></Image>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ color: 'white', margin: 10, fontWeight: 'bold' }}>Top Movies</Text>
                    <Text style={{ color: '#808080', margin: 10, fontWeight: 'bold' }}>Favorite Movies</Text>
                </View>


                <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <View style={styles.imageSet}>
                        <View>
                            <ImageBackground style={styles.item} source={require('./Images/av.jpg')}>
                                <View style={styles.infoName0}>
                                    <Text style={styles.infoName1}>Action, Adventure, Drama</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                        </View>
                                        <Text style={{ color: 'white', marginLeft: 15, marginTop: 1, fontSize: 10 }}>125 REVIEWS</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <View style={styles.setInfo}>
                                <Text style={styles.infoName2}>Avengers: End Game</Text>
                                <Text style={styles.infoName3}>137 MIN</Text>
                            </View>
                        </View>
                        <View>
                            <ImageBackground style={styles.item} source={require('./Images/2109_tent.jpg')}>
                                <View style={styles.infoName0}>
                                    <Text style={styles.infoName1}>Action, Sci-fi, Thriller</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                        </View>
                                        <Text style={{ color: 'white', marginLeft: 15, marginTop: 1, fontSize: 10 }}>98 REVIEWS</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <View style={styles.setInfo}>
                                <Text style={styles.infoName2}>Tenet</Text>
                                <Text style={styles.infoName3}>97 MIN</Text>
                            </View>
                        </View>
                    </View >

                    <View style={styles.imageSet}>
                        <View>
                            <ImageBackground style={styles.item} source={require('./Images/bw.jpg')}>
                                <View style={styles.infoName0}>
                                    <Text style={styles.infoName1}>Action, Adventure, Sci-fi</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                        </View>
                                        <Text style={{ color: 'white', marginLeft: 15, marginTop: 1, fontSize: 10 }}>125 REVIEWS</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <View style={styles.setInfo}>
                                <Text style={styles.infoName2}>Black Widow</Text>
                                <Text style={styles.infoName3}>102 MIN</Text>
                            </View>
                        </View>
                        <View>
                            <ImageBackground style={styles.item} source={require('./Images/ww.jpg')}>
                                <View style={styles.infoName0}>
                                    <Text style={styles.infoName1}>Action, Adventure, Fantasy</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                        </View>
                                        <Text style={{ color: 'white', marginLeft: 15, marginTop: 1, fontSize: 10 }}>125 REVIEWS</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <View style={styles.setInfo}>
                                <Text style={styles.infoName2}>Wonder Woman 1984</Text>
                                <Text style={styles.infoName3}>120 MIN</Text>
                            </View>
                        </View>
                    </View >
                </View>


                <View style={{ marginTop: 40 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Image style={styles.imageNavBar} source={require('./Images/movie.png')}></Image>
                        <Image style={styles.imageNavBar} source={require('./Images/ticket.png')}></Image>
                        <Image style={styles.imageNavBar} source={require('./Images/star4.png')}></Image>
                        <Image style={styles.imageNavBar} source={require('./Images/favorite.png')}></Image>
                        <Image style={styles.imageNavBar} source={require('./Images/user.png')}></Image>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={styles.textNav}>MOVIES</Text>
                    <Text style={styles.textNav}>TICKET</Text>
                    <Text style={styles.textNav}>CINEMAS</Text>
                    <Text style={styles.textNav}>FAVORITE</Text>
                    <Text style={styles.textNav}>PROFILE</Text>
                </View>
                    </View>
                   
            </ScrollView>
        </SafeAreaView>


    )
}

export default Movie

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(19,11,43)'

    },


    inforMovie1: {
        color: 'white',
        fontSize: 55,
        marginLeft: 5
    },
    inforMovie2: {
        color: '#DF0A64',
        fontSize: 25,
        marginLeft: 5,
    },
    item: {
        width: 180,
        height: 240,
        marginLeft: 15,

    },
    imageVote: {
        width: 15,
        height: 15,
    },
    imageNavBar: {
        width: 20,
        height: 20,
    },
    textNav: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 7,
        color: 'white',
        marginTop: 5
    },
    imageSearch: {
        width: 20,
        height: 20,
        marginTop: 12
    },
    imageSet: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5

    },
    infoName0: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 50,
        padding: 5,
    },
    infoName1: {
        fontSize: 14,
        color: '#DF0A64',

    },
    infoName2: {
        color: 'white',
        marginLeft: 5,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
    },
    infoName3: {
        color: 'white',
        marginLeft: 5,
        fontSize: 10,
        fontWeight: 'normal'
    },
    setInfo: {
        backgroundColor: '#201934',
        marginLeft: 15,
        height: 50,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15
    },

})