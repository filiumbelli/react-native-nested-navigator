import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";


const Stack = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
const Bottom2 = createBottomTabNavigator();

const TrackStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="TrackListScreen" component={TrackListScreen} />
    <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
  </Stack.Navigator>
);

const SignStackNavigator = () => (
  <Stack2.Navigator>
    <Stack2.Screen
      name="SignUpScreen"
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
    <Stack2.Screen
      name="SignInScreen"
      component={SignInScreen}
      options={{ headerShown: false }}
    />
  </Stack2.Navigator>
);

const TrackBottomNavigator = () => (
  <Bottom2.Navigator>
    <Bottom2.Screen name="TrackNavigationScreen" component={TrackStackNavigator} />
    <Bottom2.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
    <Bottom2.Screen name="AccountScreen" component={AccountScreen} />
  </Bottom2.Navigator>
);

const BottomNavigatorItems = () => (
  <Bottom.Navigator>
    <Bottom.Screen name="SignNavigationScreen" component={SignStackNavigator} />
    <Bottom.Screen name="TrackBottomNavigationScreen" component={TrackBottomNavigator} />
  </Bottom.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      {BottomNavigatorItems()}
    </NavigationContainer>
  );
}


export default App;