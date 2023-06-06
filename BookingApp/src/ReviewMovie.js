import { StyleSheet, Text, ScrollView, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { LinearTextGradient } from "react-native-text-gradient"
import { LinearGradient } from 'expo-linear-gradient'


const ReviewMovie = () => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView >
                <Image style={styles.image} source={require('./Images/av.jpg')}></Image>
                <Text style={styles.inforMovie1}>Avengers:          End Game</Text>
                <Text style={styles.inforMovie2}>Action,Adventure,Fantasy</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                        <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                        <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                        <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                        <Image style={styles.imageVote} source={require('./Images/star4.png')}></Image>
                    </View>
                    <Text style={{ color: 'white',marginLeft:15,marginTop:5}}>125 REVIEWS</Text>
                </View>
                <Text style={styles.inforMovie3}>Storyline</Text>
                <Text style={styles.inforMovie4}>After the devastating events of Avengers:Infinity
                    War,the universe is in ruins.With the help of remaining allies,the Avengers assemble once more in order to reverse Thanos’actions and restore balance to the universe.
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                    <Text style={{ color: 'white', fontWeight:'bold' }}>Cast</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#808080', fontWeight:'bold' }}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageSet}>
                    <View>
                        <Image style={styles.item} source={require('./Images/rb.jpg')}></Image>
                        <Text style={styles.infoName}>Robert Downey</Text>
                        <Text style={styles.infoName}>Jr</Text>
                    </View>
                    <View>
                        <Image style={styles.item} source={require('./Images/chris-evans.jpg')}></Image>
                        <Text style={styles.infoName}>Chris Evans</Text>
                        <Text style={styles.infoName}></Text>
                    </View>
                    <View>
                        <Image style={styles.item} source={require('./Images/Mark_Ruffalo.jpg')}></Image>
                        <Text style={styles.infoName}>Mark Ruffalo</Text>
                        <Text style={styles.infoName}></Text>
                    </View>
                    <View>
                        <Image style={styles.item} source={require('./Images/Ch.jpg')}></Image>
                        <Text style={styles.infoName}>Chris</Text>
                        <Text style={styles.infoName}>Hemsworth</Text>
                    </View>
                </View>

                <View style={styles.buttonClick}>
                    <TouchableOpacity>
                        <LinearGradient
                            style={{
                                padding: 15,
                                borderRadius: 50,
                                with: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor:'#DF0A64',
                                borderWidth: 1
                            }}
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 0.0 }}
                            locations={[0.0, 1.0]}
                            colors={['#252525', '#252525']}
                            useAngle={45}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}>
                                LEAVE A REVIEW
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <LinearGradient
                            style={{
                                padding: 15,
                                borderRadius: 50,
                                with: '100%',
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

            </ScrollView>
        </SafeAreaView>
    )
}

export default ReviewMovie

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(19,11,43)'

    },
    image: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageVote: {
        width: 25,
        height: 25,
        marginLeft: 5
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
    inforMovie3: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 5
    },
    inforMovie4: {
        color: 'white',
        fontSize: 15,
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 30
    },
    item: {
        width: 90,
        height: 120,
        margin: 5
    },
    imageSet: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white'
    },
    buttonClick: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
})