import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home.';
import Canide from "./screens/Canide";
import Canario from "./screens/Canario";
import Pardal from "./screens/Pardal";

const Stack = createStackNavigator();


export default function App() {

  return (

<NavigationContainer>

  <Stack.Navigator>
 
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="Canide" component={Canide}/>
    <Stack.Screen name="Canario" component={Canario}/>
    <Stack.Screen name="Pardal" component={Pardal}/>

  </Stack.Navigator>
  
</NavigationContainer>
  );
}
