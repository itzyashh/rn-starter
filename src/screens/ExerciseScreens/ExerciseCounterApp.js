

import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useReducer } from 'react'

const reducer = (state, action) => {
    // state === {count: number}
    // action === {type: 'increment' || 'decrement', payload: number}
    
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload}
            case 'decrement':
            return {...state, count: state.count - action.payload}
        default:
            return state
    }

}


const ExerciseCounterScreen = () => {

    const [state,dispatch] = useReducer(reducer, {count:0})

    return (
    <View>
      <Button title="Increase" onPress={()=>{
          dispatch({type: 'increment', payload: 1})
      }}/>
      <Button title="Decrease" onPress={()=>{
          dispatch({type: 'decrement', payload: 1})
      }}/>
      <View style={{ alignItems: 'center', margin: 10 }}>
        <Text>Current Count - {state.count}</Text>
      </View>
    </View>
  )
}

export default ExerciseCounterScreen

const styles = StyleSheet.create({})