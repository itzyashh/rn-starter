import { View, Text } from 'react-native'
import React from 'react'
import ExerciseImageDetail from '../../components/ExerciseComponents/ExerciseImageDetail'

const ExerciseImageScreen = () => {
  const randomScore = `Image score - ${Math.floor(Math.random() * 90) + 1}`
  return (
    <View>
      <ExerciseImageDetail
        title="Forest"
        imageSource={require('../../../assets/images/forest.jpg')}
        score={randomScore}
      />
      <ExerciseImageDetail
        title="Beach"
        imageSource={require('../../../assets/images/beach.jpg')}
        score={randomScore}
      />
      <ExerciseImageDetail
        title="Mountain"
        imageSource={require('../../../assets/images/mountain.jpg')}
        score={randomScore}
      />
    </View>
  )
}

export default ExerciseImageScreen