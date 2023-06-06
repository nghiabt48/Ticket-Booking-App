import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const TicketInformation = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#1A1520', }}>
            <View style={{ flexDirection: 'row' }}>
            <Image source={require('./image/image3.png')} style={{ marginTop: 50, marginStart: 20 }} />
            <Text style={{color:'#fff',marginStart:110,marginTop:50,fontSize:24}}>My ticket</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{color:'#fff',fontSize:16,marginStart:30,marginTop:20}}>Movies to watch</Text>
                <Text style={{color:'#fff',fontSize:16,marginStart:90,marginTop:20}}>Movie watched</Text>
            </View>
            <Image source={require('./image/Line.png')} style={{marginStart:20}}/>
            <View style={{backgroundColor:'#252525',width:350,height:100,marginTop:20,marginStart:20,borderRadius:10}}>
                <Text style={{color:'#fff',marginStart:10,marginTop:5}}>Multikion:Atrium Targoswek</Text>
                <Text style={{color:'#fff',marginStart:14,marginTop:2,fontSize:10}}>CGV Sư Vạn Thạnh</Text>
                <Text style={{color:'#fff',marginStart:14,marginTop:2,fontSize:10}}>4/6/2023,20:45 pm</Text>
                <View style={{ flexDirection: 'row' }}>
                <Text style={{color:'#fff',marginStart:10,marginTop:10,fontSize:14}}>200 điểm thưởng</Text>
                <Text style={{color:'#fff',marginStart:140,marginTop:10,fontSize:14}}>200.000 Đ</Text>
                </View>
            </View>
            <View style={{backgroundColor:'#252525',width:350,height:100,marginTop:20,marginStart:20,borderRadius:10}}>
                <Text style={{color:'#fff',marginStart:10,marginTop:5}}>Multikion:Atrium Targoswek</Text>
                <Text style={{color:'#fff',marginStart:14,marginTop:2,fontSize:10}}>CGV Sư Vạn Thạnh</Text>
                <Text style={{color:'#fff',marginStart:14,marginTop:2,fontSize:10}}>4/6/2023,20:45 pm</Text>
                <View style={{ flexDirection: 'row' }}>
                <Text style={{color:'#fff',marginStart:10,marginTop:10,fontSize:14}}>200 điểm thưởng</Text>
                <Text style={{color:'#fff',marginStart:140,marginTop:10,fontSize:14}}>200.000 Đ</Text>
                </View>
            </View>
            <View style={{backgroundColor:'#252525',width:350,height:100,marginTop:20,marginStart:20,borderRadius:10}}>
                <Text style={{color:'#fff',marginStart:10,marginTop:5}}>Multikion:Atrium Targoswek</Text>
                <Text style={{color:'#fff',marginStart:14,marginTop:2,fontSize:10}}>CGV Sư Vạn Thạnh</Text>
                <Text style={{color:'#fff',marginStart:14,marginTop:2,fontSize:10}}>4/6/2023,20:45 pm</Text>
                <View style={{ flexDirection: 'row' }}>
                <Text style={{color:'#fff',marginStart:10,marginTop:10,fontSize:14}}>200 điểm thưởng</Text>
                <Text style={{color:'#fff',marginStart:140,marginTop:10,fontSize:14}}>200.000 Đ</Text>
                </View>
            </View>
            <View style={{backgroundColor:'#252525',width:350,height:100,marginTop:20,marginStart:20,borderRadius:10}}>
                <Text style={{color:'#fff',marginStart:10,marginTop:5}}>Multikion:Atrium Targoswek</Text>
                <Text style={{color:'#fff',marginStart:14,marginTop:2,fontSize:10}}>CGV Sư Vạn Thạnh</Text>
                <Text style={{color:'#fff',marginStart:14,marginTop:2,fontSize:10}}>4/6/2023,20:45 pm</Text>
                <View style={{ flexDirection: 'row' }}>
                <Text style={{color:'#fff',marginStart:10,marginTop:10,fontSize:14}}>200 điểm thưởng</Text>
                <Text style={{color:'#fff',marginStart:140,marginTop:10,fontSize:14}}>200.000 Đ</Text>
                </View>
            </View>
            <View style={{backgroundColor:'#252525',width:350,height:100,marginTop:20,marginStart:20,borderRadius:10}}>
                <Text style={{color:'#fff',marginStart:10,marginTop:5}}>Multikion:Atrium Targoswek</Text>
                <Text style={{color:'#fff',marginStart:14,marginTop:2,fontSize:10}}>CGV Sư Vạn Thạnh</Text>
                <Text style={{color:'#fff',marginStart:14,marginTop:2,fontSize:10}}>4/6/2023,20:45 pm</Text>
                <View style={{ flexDirection: 'row' }}>
                <Text style={{color:'#fff',marginStart:10,marginTop:10,fontSize:14}}>200 điểm thưởng</Text>
                <Text style={{color:'#fff',marginStart:140,marginTop:10,fontSize:14}}>200.000 Đ</Text>
                </View>
            </View>
        </View>
    )
}

export default TicketInformation

const styles = StyleSheet.create({})