import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Detail = () => {
    return (
        <View style={styles.container}>
            <View >
                <Image source={require('./image/a.png')} style={styles.boxImage1} />
                <Text style={{ color: '#fff', marginStart: 50, marginTop: 40 }}>Back</Text>
                <Image source={require('./image/image16.png')} style={{ marginStart: 320 }} />
                <Image source={require('./image/image5.png')} style={styles.boxImage2} />
                <Image source={require('./image/image3.png')} style={styles.boxImage3} />
                <Image source={require('./image/image6.png')} style={{ marginStart: 20, marginTop: 60 }} />
            </View>
            <View>
                <Text style={{ color: '#fff', marginTop: 40, fontSize: 30, marginStart: 10 }}>Avengers:                              End Game</Text>
                <Text style={{ color: '#B72F2F', marginStart: 10, marginTop: 5 }}>Action,Adventure,Fantasy</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('./image/sao.png')} style={{ marginStart: 10, marginTop: 5 }} />
                <Image source={require('./image/sao.png')} style={{ marginStart: 6, marginTop: 5 }} />
                <Image source={require('./image/sao.png')} style={{ marginStart: 6, marginTop: 5 }} />
                <Image source={require('./image/sao.png')} style={{ marginStart: 6, marginTop: 5 }} />
                <Image source={require('./image/sao1.png')} style={{ marginStart: 6, marginTop: 5 }} />
                <Text style={{ color: '#fff', marginStart: 10, fontSize: 12, marginTop: 4 }}>125 REVIEWS</Text>
            </View>
            <Text style={{ color: '#fff', marginStart: 10, marginTop: 10, fontSize: 16 }}>Storyline</Text>
            <Text style={{ color: '#fff', marginStart: 10, marginTop: 10 }}>After the devastating events of Avengers:InfinityWar,the universe is in ruins.With the help of remaining allies,the Avengers assemble once more in order to reverse Thanos’actions and restore balance to the universe.</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ color: '#fff', marginStart: 10, fontSize: 15, marginTop: 15 }}>Cast</Text>
                <Text style={{ color: '#fff', marginStart: 280, marginTop: 15 }}>See All</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('./image/image12.png')} style={{ marginStart: 10 }} />
                <Image source={require('./image/image13.png')} style={{ marginStart: 13 }} />
                <Image source={require('./image/image14.png')} style={{ marginStart: 13 }} />
                <Image source={require('./image/image15.png')} style={{ marginStart: 13 }} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#fff', fontSize: 12, marginStart: 10 }}>Robert Downey Jr</Text>
                <Text style={{ color: '#fff', fontSize: 12, marginStart: 16 }}>Chris Evans</Text>
                <Text style={{ color: '#fff', fontSize: 12, marginStart: 22 }}>Mark Ruffalo</Text>
                <Text style={{ color: '#fff', fontSize: 12, marginStart: 25 }}>Chris Hemsworth</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#252525', width: 150, height: 40, marginTop: 20, marginStart: 30, borderRadius: 50 }}>
                    <Text style={{ color: '#fff', fontSize: 13, marginTop: 9, marginStart: 25 }}>LEAVE A REVIEW</Text>
                </View>
                <View style={{ backgroundColor: '#653B3B', width: 150, height: 40, marginTop: 20, marginStart: 40, borderRadius: 50 }}>
                    <Text style={{ color: '#fff', fontSize: 13, marginTop: 9, marginStart: 22 }}>BOOK YOUR TICKET</Text>
                </View>
            </View>
        </View>
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
        marginTop: 40,
        marginStart: 20
    },

})