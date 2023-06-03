import { Button, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useContext, useState } from 'react'
import AxiosIntance from './AxiosIntance';
import { AppConText } from './AppConText';

const Test1 = () => {
  const [Password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [newPasswordConfirn, setnewPasswordConfirn] = useState("");
  const { setisLogin} = useContext(AppConText);
  const ChangePassword = async () => {
    const respone = await AxiosIntance().patch("/users/change-password", { password: Password, newpassword: newPassword,passwordconfirm: newPasswordConfirn});
    console.log(respone);
    if (respone.status =="success") {
        ToastAndroid.show("Đổi mật khẩu thành công", ToastAndroid.SHORT);
        setisLogin(false)
    } else {
        ToastAndroid.show("Doi mat khau that bai", ToastAndroid.SHORT);
    }
}
  return (
    <View style={styles.container}>
      <Text >Mat khau cu</Text>
      <TextInput style={styles.edt} onChangeText={setPassword}></TextInput>
      <Text>Mat khau moi</Text>
      <TextInput style={styles.edt} onChangeText={setnewPassword}></TextInput>
      <Text>nhap lai mat khau mới</Text>
      <TextInput style={styles.edt} onChangeText={setnewPasswordConfirn}></TextInput>
      <Button title='doi mk' onPress={ChangePassword}></Button>
    </View>
  )
}

export default Test1

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:20,
  },
  edt:{
    borderWidth:1,
    height:48,
  }
})