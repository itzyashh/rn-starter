import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const ListComponent = () => {

  const friends = [
    { name: 'Friend #1' },
    { name: 'Friend #2' },
    { name: 'Friend #3' },
    { name: 'Friend #4' },
    { name: 'Friend #5' },
    { name: 'Friend #6' },
    { name: 'Friend #7' },
    { name: 'Friend #8' },
    { name: 'Friend #9' },
  ]


  return (
    <View style={{ alignItems: 'center', }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>
        }} />
    </View>
  )
}
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    fontWeight: 'bold'
  }
})

export default ListComponent