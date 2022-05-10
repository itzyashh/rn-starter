import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExerciseBoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.blockStyle1} />
            <View style={styles.blockStyle2} />
            <View style={styles.blockStyle3} />
        </View>
    )
}

export default ExerciseBoxScreen

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1
    },
    blockStyle1: {
        height: 100, width: 100,
        backgroundColor: 'red'
    },
    blockStyle2: {
        height: 100, width: 100,
        backgroundColor: 'red',
        alignSelf:'flex-end'
    },
    blockStyle3: {
        height: 100, width: 100,
        backgroundColor: 'red'
    }
})