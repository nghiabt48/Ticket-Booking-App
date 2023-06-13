import { Button, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View ,Image} from 'react-native'
import React, { useContext, useState } from 'react'
import AxiosIntance from './AxiosIntance';
import { AppConText } from './AppConText';
import { LinearGradient } from 'expo-linear-gradient';

const ChangePassword = (props) => {
  const { navigation } = props;
  const [Password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [newPasswordConfirn, setnewPasswordConfirn] = useState("");
  const { setisLogin } = useContext(AppConText);
  const ChangePasswordUser = async () => {
    const respone = await AxiosIntance().patch("/users/change-password", { password: Password, newpassword: newPassword, passwordconfirm: newPasswordConfirn });
    console.log(respone);
    if (respone.status == "success") {
      ToastAndroid.show("Đổi mật khẩu thành công", ToastAndroid.SHORT);
      setisLogin(false)
    } else {
      ToastAndroid.show("Doi mat khau that bai", ToastAndroid.SHORT);
    }
  }
  const Back = async () => {
    navigation.navigate('Profile');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Back}>
                <View style={styles.fixToText}>
                    <Image source={require('./image/image3.png')} />
                    <Text style={styles.title}>Profile</Text>
                </View>
            </TouchableOpacity>
      <View style={styles.container1}>

        <Text style={styles.title}>Enter old password</Text>
        <TextInput style={styles.InPut} onChangeText={setPassword}></TextInput>
        <Text style={styles.title}>Enter new password</Text>
        <TextInput style={styles.InPut} onChangeText={setnewPassword}></TextInput>
        <Text style={styles.title}>Enter password confirm</Text>
        <TextInput style={styles.InPut} onChangeText={setnewPasswordConfirn}></TextInput>
        <TouchableOpacity style={styles.buttonContainer} onPress={ChangePasswordUser}>
          <LinearGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 0.0 }}
            locations={[0.0, 1.0]}
            colors={['#e5008e', '#fc2c11']}
            style={styles.buttonG}
          ><Text style={styles.buttonText}>CHANGE PASSWORD</Text>
          </LinearGradient>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#130B2B',
  },
  container1: {
    marginTop:"40%"
  },
  InPut: {
    backgroundColor: '#201934',
    borderWidth: 1,
    borderColor: '#DF0A64',
    color: '#fff',
    fontSize: 16,
    padding: 10,
    marginTop: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  buttonContainer: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  buttonG: {
    borderRadius: 15,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    alignItems: 'center',
},
})

