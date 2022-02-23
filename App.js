import { StyleSheet } from "react-native";
import Home from "./components/products/Home";

import { NativeBaseProvider } from "native-base";

import AnimalList from "./components/products/AnimalList";

function App() {
  return (
    <NativeBaseProvider>
      <Home />
      {/* <AnimalList /> */}
    </NativeBaseProvider>
  );
}

export default App;
