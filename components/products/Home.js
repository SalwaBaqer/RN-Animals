import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import { VStack } from "native-base";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/Ndutuo__Tabora__Tanzania_0_1200x768.jpeg?o4k08TSTDZ_l_LJ8YHKYweZcPHKZQe.R&size=770:433",
      }}
      style={styles.container}
    >
      <VStack style={styles.cover}>
        <Text style={styles.title}>Kuwait Safari</Text>
        <Text style={styles.subTitle}>Wild life matters</Text>
        <Text
          style={styles.button}
          onPress={() =>
            navigation.navigate("Animals", {
              animal: { name: "Shark", animal_type: "fish" },
            })
          }
        >
          Press Me
        </Text>
      </VStack>
    </ImageBackground>
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
