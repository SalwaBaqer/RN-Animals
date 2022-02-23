import { StyleSheet, Text, Image } from "react-native";

import { HStack, VStack } from "native-base";

export default function ProductItem({ animal }) {
  return (
    <HStack style={styles.container} space="3">
      <Image style={styles.image} source={{ uri: animal.image_link }} />
      <VStack>
        <Text style={styles.name}>{animal.name}</Text>
        <Text style={styles.name}>{animal.animal_type}</Text>
      </VStack>
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 5,
    borderBottomColor: "#ddff",
    borderBottomWidth: 2,
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    width: 200,
    left: 10,
  },
});
