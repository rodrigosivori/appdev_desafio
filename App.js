import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={styles.inputConteiner}>
        <TextInput
          placeholder="elemento de la lista"
          style={styles.input}
        />
        <Button
          title="Add"
          onPress={() => console.log("Presionaste el boton")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  inputConteiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 200,
  }
});
