import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Listchair = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', height: 50, justifyContent: 'flex-start', alignItems: 'center', marginTop: 50 }}>
        <Image source={require('./image/image3.png')} style={{ marginTop: 4, marginStart: 20 }} />
        <Text style={{ color: '#fff', marginStart: 100, fontSize: 21 }}>Select seatc</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ height: 50, backgroundColor: '#BF2294', width: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 20, marginStart: 40 }}>
          <Text style={{ color: '#fff', fontSize: 15, marginTop: 8, marginStart: 15 }}>27</Text>
          <Text style={{ color: '#fff', fontSize: 8, marginStart: 5 }}>SATURDAY</Text>
        </View>
        <View style={{ flexDirection: 'column', marginStart: 5 }}>
          <Text style={{ marginTop: 13, color: '#fff' }}>Avengers:End Game</Text>
          <Text style={{ flexDirection: 'row-reverse', color: '#fff', marginTop: 12 }}>Multikion:Atrium Targoswek</Text>
        </View>
      </View>
      <View style={{backgroundColor:'#838282'}}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ height: 50, backgroundColor: '#746B79', width: 50, borderBottomRightRadius: 10, borderBottomStartRadius: 10, marginTop: 0, marginStart: 40 }}>
          <Text style={{ color: '#fff', marginStart: 5, marginTop: 10 }}>19:00</Text>
        </View>
        <Image source={require('./image/image19.png')} style={{ marginStart: 20 }} />
        <Text style={{ fontSize: 8, color: '#fff', marginTop: 5, marginStart: 10 }}>BOOKED</Text>
        <Image source={require('./image/image17.png')} style={{ marginStart: 20 }} />
        <Text style={{ fontSize: 8, color: '#fff', marginTop: 5, marginStart: 10 }}>AVAILABLE</Text>
        <Image source={require('./image/image18.png')} style={{ marginStart: 20 }} />
        <Text style={{ fontSize: 8, color: '#fff', marginTop: 5, marginStart: 10 }}>SELECTED</Text>
      </View>
      <Image source={require('./image/Line1.png')} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 22 }}>A</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 15, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 15, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 15, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 15, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 15, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 15, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 15, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 15, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 10}}>B</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 10 }}>C</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 10 }}>D</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 38 }}>E</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 10 }}>F</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 10 }}>G</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 10 }}>H</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 38 }}>I</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 30, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 10 }}>J</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 10 }}>K</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 10 }}>L</Text>
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 30 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 60 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
        <Image source={require('./image/image19.png')} style={{ marginTop: 5, marginStart: 15 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#fff', marginStart: 13, fontSize: 7, marginTop: 38 }}>M</Text>
        <Image source={require('./image/image139.png')} style={{ marginTop: 10, marginStart:28 }} />
        <Image source={require('./image/image235.png')} style={{ marginTop: 10, marginStart: 15 }} />
        <Image source={require('./image/image139.png')} style={{ marginTop: 10, marginStart: 40 }} />
        <Image source={require('./image/image235.png')} style={{ marginTop: 10, marginStart: 15 }} />
      </View>
      <View style={{height:50,backgroundColor:'#851010',width:280,marginStart:60,borderRadius:50,marginTop:10}}>
        <View style={{ flexDirection: 'row' }}>
        <Text style={{color:'#fff',marginStart:30,marginTop:10}}>24,98 EURO2 </Text>
        <Text style={{color:'#fff',marginStart:20,marginTop:10}}>PROCEED TO CHECK</Text>
        </View>
        <Text style={{color:'#fff',fontSize:7,marginStart:30}}>TICKETS FOR $12.49EACH</Text>
      </View>
      </View>
    </View>
    
  )
}

export default Listchair

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1520',
  },

})