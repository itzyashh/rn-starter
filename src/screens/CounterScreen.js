

import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'


const CounterScreen = () => {

  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount(count+1)
  }
  const onDecrease = () => {
    setCount(count-1);
  }

  return (
    <View>
      <Button title="Increase" onPress={onIncrease}/>
      <Button title="Decrease" onPress={onDecrease}/>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <Text>Current Count - {count}</Text>
      </View>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})