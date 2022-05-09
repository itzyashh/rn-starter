import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
    const urName = 'Rock'
    return <>
        <Text style={styles.primaryText}>Getting Started with React Native!</Text>
        <Text style={styles.secondaryText}>My name is {urName}</Text>
    </>
}

const styles = StyleSheet.create({
    primaryText: { fontSize: 45 },
    secondaryText: {
        fontSize: 20
    }
})

export default ComponentsScreen