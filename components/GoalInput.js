import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [goal, setGoal] = useState("");

  const handleChange = text => {
    setGoal(text);
  };

  const handleAddClick = () => {
    props.addGoalHandler(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={handleChange}
          value={goal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => props.handleCancelClick()}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={() => handleAddClick()} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 6
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "steelblue"
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  button: {
    width: 100
  }
});

export default GoalInput;
