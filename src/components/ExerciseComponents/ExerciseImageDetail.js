import { View, Text, Image} from 'react-native'
import React from 'react'

const ExerciseImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>{props.score}</Text>
    </View>
  )
}

export default ExerciseImageDetail