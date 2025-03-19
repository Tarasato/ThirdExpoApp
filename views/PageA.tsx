import { StyleSheet, Text, View, Image, TextInput, } from 'react-native'
import { CheckBox, Button, } from '@rneui/themed';
import React, { useState } from 'react'

export default function PageA() {
  const [check1, setCheck1] = useState(false);
  let [money, setMoney] = useState('');
  let [person, setPerson] = useState('');
  let caculate = () => {
    alert(parseInt(money)/parseInt(person));
  }
  return (
    <View>
      <View style={styles.show}>
        <Image style={styles.img} source={require('../assets/TaigaIcon.png')} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>แชร์เงินกันเถอะ</Text>
      </View>
      <View style={{ marginTop: 50, marginLeft: 20, marginRight: 20 }}>
        <Text style={{ marginBottom: 5 }}>Input Money</Text>
        <TextInput style={styles.input} value={money} onChangeText={(text) => setMoney(text)}/>
        <Text style={{ marginBottom: 5 }}>Input Person </Text>
        <TextInput style={styles.input} onChangeText={(text) => setPerson(text)} />
        <CheckBox center checked={check1} title="ทิป" onPress={() => { setCheck1(!check1) }} />
        <View style={{ flexDirection: 'row', marginRight: 50, marginLeft: 50, justifyContent: 'space-between' }}>
          <Button title="คำนวณ" color={'green'} onPress={caculate} />
          <Button title="ยกเลิก" type="outline" titleStyle={{ color: 'red' }} buttonStyle={{ borderColor: 'red' }} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 165
  },
  show: {
    marginTop: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  }
})