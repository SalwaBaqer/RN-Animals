import animalStore from "../../stores/animalStore";
import { observer } from "mobx-react";
import Item from "./Item";
import AnimalsTypes from "./AnimalsTypes";
import { ScrollView } from "native-base";
import { StyleSheet, View } from "react-native";

const AnimalList = () => {
  const animalsList = animalStore.animals.map((animal) => (
    <Item key={animal.id} animal={animal} />
  ));

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <AnimalsTypes />
      <ScrollView style={styles.container}>{animalsList}</ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },

  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});
export default observer(AnimalList);
