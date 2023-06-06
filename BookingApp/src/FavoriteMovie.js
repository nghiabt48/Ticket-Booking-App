import { StyleSheet, Text, ScrollView, View, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const FavoriteMovie = () => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <Image style={styles.imageSearch} source={require('./Images/back.png')}></Image>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Favorite Movies</Text>
                    <Image style={styles.imageSearch} source={require('./Images/search.png')}></Image>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 15, borderColor:'#DF0A64', borderWidth: 1}}>
                    <View style={styles.imageSet}>
                        <View >
                            <ImageBackground style={styles.item} source={require('./Images/2109_tent.jpg')}>
                                <View style={styles.infoName0}>
                                    <Text style={styles.infoName1}>Action, Scfi-fi, Thriller</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                        </View>
                                        <Text style={{ color: 'white', marginLeft: 45, marginTop: 1, fontSize: 10 }}>98 REVIEWS</Text>
                                    </View>

                                </View>
                            </ImageBackground>
                        </View>
                    </View >
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', }}>
                        <Text style={styles.textInfo1}>Tenet</Text>
                        <Text style={styles.textInfo2}>102 MIN</Text>
                        <Text style={styles.textInfo3}>When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.</Text>
                        <TouchableOpacity>
                            <LinearGradient
                                style={{
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    borderRadius: 50,
                                    with: '100%',
                                    marginLeft: 11,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                start={{ x: 0.0, y: 0.0 }}
                                end={{ x: 1.0, y: 0.0 }}
                                locations={[0.0, 1.0]}
                                colors={['#e5008e', '#fc2c11']}
                                useAngle={45}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}>
                                    BOOK YOUR TICKET
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 15, borderColor:'#DF0A64', borderWidth: 1}}>
                    <View style={styles.imageSet}>
                        <View >
                            <ImageBackground style={styles.item} source={require('./Images/GoG3.jpg')}>
                                <View style={styles.infoName0}>
                                    <Text style={styles.infoName1}>Action, Scfi-fi, Comedy</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                        </View>
                                        <Text style={{ color: 'white', marginLeft: 45, marginTop: 1, fontSize: 10 }}>108 REVIEWS</Text>
                                    </View>

                                </View>
                            </ImageBackground>
                        </View>
                    </View >
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', }}>
                        <Text style={styles.textInfo1}>Guardians of the Galaxy Vol 3</Text>
                        <Text style={styles.textInfo2}>149 MIN</Text>
                        <Text style={styles.textInfo4}>When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.</Text>
                        <TouchableOpacity>
                            <LinearGradient
                                style={{
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    borderRadius: 50,
                                    with: '100%',
                                    marginLeft: 11,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                start={{ x: 0.0, y: 0.0 }}
                                end={{ x: 1.0, y: 0.0 }}
                                locations={[0.0, 1.0]}
                                colors={['#e5008e', '#fc2c11']}
                                useAngle={45}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}>
                                    BOOK YOUR TICKET
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 15, borderColor:'#DF0A64', borderWidth: 1}}>
                    <View style={styles.imageSet}>
                        <View >
                            <ImageBackground style={styles.item} source={require('./Images/TheOldG.jpg')}>
                                <View style={styles.infoName0}>
                                    <Text style={styles.infoName1}>Action, Scfi-fi, Adventure</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                            <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                                        </View>
                                        <Text style={{ color: 'white', marginLeft: 45, marginTop: 1, fontSize: 10 }}>123 REVIEWS</Text>
                                    </View>

                                </View>
                            </ImageBackground>
                        </View>
                    </View >
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', }}>
                        <Text style={styles.textInfo1}>The Old Guard</Text>
                        <Text style={styles.textInfo2}>84 MIN</Text>
                        <Text style={styles.textInfo3}>A group of mercenaries, all centuries-old immortals with the ablity to heal themselves, discover someone is onto their secret, and they must fight to protect their freedom.</Text>
                        <TouchableOpacity>
                            <LinearGradient
                                style={{
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    borderRadius: 50,
                                    with: '100%',
                                    marginLeft: 11,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                start={{ x: 0.0, y: 0.0 }}
                                end={{ x: 1.0, y: 0.0 }}
                                locations={[0.0, 1.0]}
                                colors={['#e5008e', '#fc2c11']}
                                useAngle={45}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}>
                                    BOOK YOUR TICKET
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

                


                
            </ScrollView>



        </SafeAreaView>

    )
}

export default FavoriteMovie

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(19,11,43)'

    },
    imageSearch: {
        width: 20,
        height: 20,
        marginTop: 12,
    },

    textInfo1: {
        marginTop: 15,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 10
    },
    textInfo2: {
        color: '#808080',
        fontSize: 15,
        fontWeight: 'normal',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    textInfo3: {
        color: '#808080',
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 135,
    },
    textInfo4: {
        color: '#808080',
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 100
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
        width: 200,
        height: 300,
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
        flexDirection: 'column',
        justifyContent: 'center',


    },
    infoName0: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 50,
        padding: 10,
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