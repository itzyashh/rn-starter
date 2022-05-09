import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hi there!</Text>
    {/* <Button title='Go to Components Demo' onPress={() => navigation.navigate('List')} /> */}
    <View style={{margin:15,alignItems:'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Component')}><Text>Go to Compent</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('List')}><Text>Go to List Demo</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ExList')}><Text>Go to Exercise List Demo</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ImageScreen')}><Text>Go to Image Demo</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ImageScreenExercise')}><Text>Go to Image Demo Exercise</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('CounterApp')}><Text>Go to Counter App Demo</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ColorApp')}><Text>Go to Color App Demo</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('SquareScreen')}><Text>Go to SquareScreen Demo</Text></TouchableOpacity>
    </View>
  </View>
};

const styles = StyleSheet.create({
  text: {

    fontSize: 30,
  },
});

export default HomeScreen;
