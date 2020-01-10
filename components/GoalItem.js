import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={() => props.handleDelete(props.id)}>
      <View style={styles.goalItem}>
        <Text> {props.value} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    backgroundColor: "skyblue",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 5
  }
});

export default GoalItem;
