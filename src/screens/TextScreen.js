import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const TextScreen = () => {
  const [name, setName] = useState('')
  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Enter Text"
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      {name.length < 5 ?<Text>Password must be longer than 5 characters</Text>:null}
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
})