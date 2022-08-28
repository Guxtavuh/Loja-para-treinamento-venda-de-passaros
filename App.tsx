import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home.';
import Canide from "./screens/Canide";

const Stack = createStackNavigator();


export default function App() {

  return (

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Canide" component={Canide}/>
  </Stack.Navigator>

</NavigationContainer>
  );
}
