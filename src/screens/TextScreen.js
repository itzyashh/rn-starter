import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const TextScreen = () => {
  return (
    <View>
      <TextInput 
      style={styles.input}
      placeholder=""
      />
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
  input:{
    margin:15,
    borderColor:'black',
    borderWidth:1
  }
})