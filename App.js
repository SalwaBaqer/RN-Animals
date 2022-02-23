import { StyleSheet } from "react-native";
import Home from "./components/products/Home";
import "react-native-gesture-handler";

import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimalList from "./components/products/AnimalList";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Animals"
            component={AnimalList}
            options={{ headerBackVisible: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8ff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
