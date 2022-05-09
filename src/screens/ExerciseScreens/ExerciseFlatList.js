import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const ExerciseFlatList = () => {

    const friends = [
        {
            name: 'Friend #1',
            age: 28
        },
        { name: 'Friend #2',age: Math.floor(Math.random() * 10) + 1 },
        { name: 'Friend #3',age: Math.floor(Math.random() * 10) + 1 },
        { name: 'Friend #4',age: Math.floor(Math.random() * 10) + 1 },
        { name: 'Friend #5',age: Math.floor(Math.random() * 10) + 1 },
        { name: 'Friend #6',age: Math.floor(Math.random() * 10) + 1 },
        { name: 'Friend #7',age: Math.floor(Math.random() * 10) + 1 },
        { name: 'Friend #8',age: Math.floor(Math.random() * 10) + 1 },
        { name: 'Friend #9',age: Math.floor(Math.random() * 10) + 1 },
    ]

    return (
        <View>
            <FlatList
                data={friends}
                keyExtractor={friend=>friend.name}
                renderItem={({ item }) => {
                    return <Text>{item.name} - Age {item.age}</Text>
                }}
            />
        </View>
    )
}

export default ExerciseFlatList