
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListComponent from './src/screens/ListComponent';
import ExerciseFlatList from './src/screens/ExerciseScreens/ExerciseFlatList';
import ImageScreen from './src/screens/ImageScreen';
import ExerciseImageScreen from './src/screens/ExerciseScreens/ExerciseImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';


const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{}} />
            <Stack.Screen name="Component" component={ComponentsScreen} />
            <Stack.Screen name="List" component={ListComponent} />
            <Stack.Screen name="ExList" component={ExerciseFlatList} />
            <Stack.Screen name="ImageScreen" component={ImageScreen} />
            <Stack.Screen name="ImageScreenExercise" component={ExerciseImageScreen} />
            <Stack.Screen name="CounterApp" component={CounterScreen} />
            <Stack.Screen name="ColorApp" component={ColorScreen} />
            <Stack.Screen name="SquareScreen" component={SquareScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator