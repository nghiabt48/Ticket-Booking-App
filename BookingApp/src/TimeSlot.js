import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosIntance from './AxiosIntance'
import DropDownPicker from 'react-native-dropdown-picker'
import { useNavigation } from '@react-navigation/native'


const TimeSlot = (props) => {
    const { route } = props
    const { params } = route
    const [data, setdata] = useState([])
    const navigation = useNavigation()
    const movieID = params.id
    const price = params.price
    const [time, settime] = useState({})
    const [isopen, setisopen] = useState(false)
    const [currentValue, setcurrentValue] = useState()
    const [selectedDate, setselectedDate] = useState('')
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await AxiosIntance().get(`showtimes?movie=${movieID}`);
                setdata(response.data.data)
            } catch (error) {
                console.log("Err at when loading Seats: " + error.message);
            }
        };
        fetchMovie()
    }, []);
    data.forEach(item => {
        const key = item.start_time.slice(0, 16);
        time[key] = item.start_time;
    });
    //console.log(Object.keys(time).length === 0);
    const items = Object.entries(time).map(([key, value]) => ({
        label: key,
        value: value
    }))
    const goToChooseSeats = async() => {
        if(!currentValue){
            return ToastAndroid.show("Please select a date", ToastAndroid.SHORT)
        }try {
            const response = await AxiosIntance().get(`showtimes?movie=${movieID}&start_time=${currentValue}`);
            // _id, movieId, cinema name, start_time, available_seats
            navigation.navigate('PickSeats', {showtimeData: response.data.data[0], price, title: params.title})
        } catch (error) {
            console.log("Err at when loading Seats (timeslot): " + error.message);
        }
        
    }
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
            <Text style={{ color: '#fff', marginStart: 20, marginTop: 30, fontSize: 18 }}>Choose Date</Text>
            <View style={{ padding: 30 }}>
                <DropDownPicker
                    items={items}
                    open={isopen}
                    value={currentValue}
                    setValue={val => setcurrentValue(val)}
                    setOpen={() => setisopen(!isopen)}
                />
            </View>
            
            <TouchableOpacity onPress={goToChooseSeats} style={{ backgroundColor: '#851010', width: 310, height: 50, marginStart: 40, marginTop: 200, borderRadius: 90 }}>
                <Text style={{ color: '#fff', marginTop: 10,alignSelf: 'center', fontSize: 16 }}>Buy Ticket</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TimeSlot

const styles = StyleSheet.create({})