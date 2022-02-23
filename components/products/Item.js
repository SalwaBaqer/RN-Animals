import { StyleSheet, Text, Image } from "react-native";

import { HStack } from "native-base";

export default function ProductItem({ animal }) {
  return (
    <HStack style={styles.container} space="3">
      <Image source={{ uri: animal.image_link }} />

      <Text>{animal.name}</Text>
      <Text>{animal.animal_type}</Text>
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    color: "red",
  },
});
