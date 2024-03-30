import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoal] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const cancelModalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredText) => {
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      {
        text: enteredText,
        id: Math.random().toString(),
      }
    ]);
    cancelModalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoal((goals) => {
      return goals.filter(goal => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#5e0acc'
          onPress={startAddGoalHandler}
        />

        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={cancelModalHandler}
        />

        <View
          style={styles.listContainer}
        >
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  listContainer: {
    flex: 5,
  },
});
