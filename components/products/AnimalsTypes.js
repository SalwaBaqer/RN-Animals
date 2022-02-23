import animalStore from "../../stores/animalStore";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const AnimalsTypes = ({ setType }) => {
  return (
    <View style={styles.row}>
      {animalStore.animalsTypes.map((value) => (
        <TouchableOpacity
          key={value}
          style={styles.button}
          onPress={() => setType(value)}
        >
          <Text style={styles.buttonLabel}>{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AnimalsTypes;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
});
