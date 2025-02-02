


import { StyleSheet, Button, View,FlatList } from 'react-native'
import React, {useState} from 'react'

const ColorScreen = () => {

    const [colors, setColors] = useState([]) 


    const randomRgb = () => {
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)

        return `rgb(${red},${green},${blue})`
    }

    return (
        <View>
            <Button title="Add a Color" onPress={()=>{
                setColors([...colors, randomRgb()])
            }}/>
            
            <FlatList
                keyExtractor={(item)=>item}
                data={colors}
                renderItem={() => {
                    return (<View style={{ height: 100, width: 100, backgroundColor:randomRgb() }} />)
                }}
                / >
        </View>
    )
}

export default ColorScreen

const styles = StyleSheet.create({})