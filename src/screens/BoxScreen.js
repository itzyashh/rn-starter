import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
    viewStyle: {
      height:200,
        borderWidth:3,
        borderColor:'black',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textStyle: {
        borderWidth:3,
        borderColor:'red',
    }
})