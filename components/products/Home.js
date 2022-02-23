import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import { VStack } from "native-base";

const Home = () => {
  return (
    <VStack>
      <Text>Kuwait Safari</Text>
      <Text>Wild life matters</Text>
      <Text>Press Me</Text>
    </VStack>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    opacity: 0.5,
  },
  cover: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontFamily: "AppleSDGothicNeo-SemiBold",
    fontSize: 40,
    color: "white",
  },
  subTitle: {
    flex: 3,
    marginTop: 10,
    fontFamily: "Bradley Hand",
    fontSize: 30,
    color: "yellow",
  },
  button: {
    flex: 1,
    fontFamily: "Bradley Hand",
    fontSize: 30,
    color: "white",
  },
});
