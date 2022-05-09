import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ColorCounter = (props) => {
  return (
    <View>
      <Text>{props.color}</Text>
      <Button title={`Increase ${props.color}`} onPress={()=> props.onIncrease()}/>
      <Button title={`Decrease ${props.color}`} onPress={()=> props.onDecrease()}/>
    </View>
  )
}

export default ColorCounter

const styles = StyleSheet.create({})