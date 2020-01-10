import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList, Button } from "react-native";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [visible, setVisible] = useState(false);

  const addGoalHandler = goal => {
    setGoalList(currentGoalList => [
      ...currentGoalList,
      { key: Math.random().toString(), value: goal }
    ]);
    setVisible(false)
  };

  const handleDelete = goalId => {
    setGoalList(currentGoalList => {
      return currentGoalList.filter(goal => goal.key !== goalId);
    });
  };

  const handleCancelClick = () => {
    setVisible(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal"
        onPress={() => setVisible(true)}
      />
      <GoalInput 
        addGoalHandler={addGoalHandler} 
        visible={visible}
        handleCancelClick={handleCancelClick}
      />
      <FlatList
        data={goalList}
        renderItem={goal => (
          <GoalItem
            value={goal.item.value}
            handleDelete={handleDelete}
            id={goal.item.key}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "teal",
    height: "100%"
  }
});
