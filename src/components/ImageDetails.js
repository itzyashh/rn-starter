import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageDetails = (props) => {
  return (
    <View>
    <Image source={props.imageSource}/>
      <Text>{props.title}</Text>
    </View>
  )
}

export default ImageDetails