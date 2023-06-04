import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const TimeSlot = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#1A1520', }}>
            <Image source={require('./image/image3.png')} style={{ marginStart: 10, marginTop: 30, width: 22, height: 22 }} />
            <Text style={{ color: '#fff', fontSize: 23, marginStart: 110, }}>Choose Session </Text>
            <Text style={{ color: '#fff', marginStart: 20, marginTop: 20, fontSize: 18 }}>Choose Cinema</Text>
            <View style={{ backgroundColor: '#252525', width: 350, height: 100, marginStart: 20, marginTop: 10, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('./image/image146.png')} style={{ marginTop: 15, marginStart: 10 }} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: '#fff', marginStart: 10, marginTop: 20 }}>Cinema 3</Text>
                        <Text style={{ color: '#fff', marginStart: 10, marginTop: 7, fontSize: 12 }}>Đường số 3, Tp HCM, Vietnam </Text>
                    </View>
                    <Image source={require('./image/icons8.png')} style={{ width: 22, height: 22, marginStart: 40, marginTop: 35 }} />
                </View>
            </View>
            <Text style={{ color: '#fff', marginStart: 20, marginTop: 30, fontSize: 18 }}>Choose Data</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#252525', width: 70, height: 90, marginStart: 20, marginTop: 20, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 20 }}>26</Text>
                    <Text style={{ color: '#fff', marginStart: 15, fontSize: 12 }}>FRIDAY</Text>
                </View>
                <View style={{ backgroundColor: '#252525', width: 70, height: 90, marginStart: 20, marginTop: 20, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 20 }}>27</Text>
                    <Text style={{ color: '#fff', marginStart: 8, fontSize: 12 }}>SATURDAY</Text>
                </View>
                <View style={{ backgroundColor: '#252525', width: 70, height: 90, marginStart: 20, marginTop: 20, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 20 }}>28</Text>
                    <Text style={{ color: '#fff', marginStart: 15, fontSize: 12 }}>SUNDAY</Text>
                </View>
                <View style={{ backgroundColor: '#252525', width: 70, height: 90, marginStart: 20, marginTop: 20, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 20 }}>29</Text>
                    <Text style={{ color: '#fff', marginStart: 15, fontSize: 12 }}>MONDAY</Text>
                </View>
                <View style={{ backgroundColor: '#252525', width: 70, height: 90, marginStart: 20, marginTop: 20, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 20 }}>30</Text>
                    <Text style={{ color: '#fff', marginStart: 15, fontSize: 12 }}>TUESDAY</Text>
                </View>
            </View>
            <Text style={{ color: '#fff', marginStart: 20, marginTop: 50, fontSize: 18 }}>Choose Time</Text>
            <Text style={{ color: '#fff', marginStart: 20, marginTop: 10, fontSize: 10 }}>CLASSIC SESSION</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#252525', width: 90, height: 40, marginStart: 20, marginTop: 30, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 8 }}>17:15</Text>
                </View>
                <View style={{ backgroundColor: '#252525', width: 90, height: 40, marginStart: 10, marginTop: 30, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 8 }}>19:00</Text>
                </View>
                <View style={{ backgroundColor: '#252525', width: 90, height: 40, marginStart: 10, marginTop: 30, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 8 }}>20:45</Text>
                </View>
                <View style={{ backgroundColor: '#252525', width: 90, height: 40, marginStart: 10, marginTop: 30, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 8 }}>21:50</Text>
                </View>
            </View>
            <Text style={{ color: '#fff', marginStart: 20, marginTop: 20, fontSize: 10 }}>3D SESSION</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#252525', width: 90, height: 40, marginStart: 20, marginTop: 30, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 8 }}>19:00</Text>
                </View>
                <View style={{ backgroundColor: '#252525', width: 90, height: 40, marginStart: 10, marginTop: 30, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 8 }}>19:00</Text>
                </View>
                <View style={{ backgroundColor: '#252525', width: 90, height: 40, marginStart: 10, marginTop: 30, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', marginStart: 25, marginTop: 8 }}>19:00</Text>
                </View>
            </View>
            <View style={{backgroundColor:'#851010',width:310,height:50,marginStart:40,marginTop:30,borderRadius:90}}>
                <Text style={{color:'#fff',marginTop:10,marginStart:100,fontSize:16}}>Choose Session</Text>
            </View>
        </View>
    )
}

export default TimeSlot

const styles = StyleSheet.create({})