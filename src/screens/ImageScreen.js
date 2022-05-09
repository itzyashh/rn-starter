import { View, Text } from 'react-native'
import React from 'react'
import ImageDetails from '../components/ImageDetails'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title='Forest' imageSource={require('../../assets/images/forest.jpg')}/>
      <ImageDetails title='Beach' imageSource={require('../../assets/images/beach.jpg')}/>
      <ImageDetails title='Mountain' imageSource={require('../../assets/images/mountain.jpg')}/>
    </View>
  )
}

export default ImageScreen