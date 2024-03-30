import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

const GoalItem = ({
  text,
  id,
  onDelete
}) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644'}}
        onPress={onDelete.bind(this, id)}
        style={({ pressed }) => pressed && styles.goalItemPressed }
      >
        <Text style={styles.goalText}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#fff',
    padding: 8,
  },
  goalItemPressed: {
    opacity: 0.5,
  }
});