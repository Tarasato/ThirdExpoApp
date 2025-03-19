import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Hello() {
  return (
    <View>
      <Text style={styles.myHello}>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    myHello:{
        color: 'red',
    }
})