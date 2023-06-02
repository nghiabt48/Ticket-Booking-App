import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Detail = () => {
    return (
        <View style={styles.container}>
            <View style={{}}>
                <Image source={require('./image/a.png')} />
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1520',
    }
})