

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './StackNavigator';



function App() {
  return (
    <NavigationContainer>
     <StackNavigator />
    </NavigationContainer>
  );
}

export default App;





















// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import ComponentsScreen from "./src/screens/ComponentsScreen";
// import ExerciseFlatList from "./src/screens/ExerciseFlatList";
// import HomeScreen from "./src/screens/HomeScreen";
// import ListComponent from "./src/screens/ListComponent";

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Component: ComponentsScreen,
//     List: ListComponent,
//     ExList:ExerciseFlatList
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       title: "App",
//     },
//   }
// );

// export default createAppContainer(navigator);
