import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from 'react';

const GoalInput = ({
  visible,
  onAddGoal,
  onCancel,
}) => {
  const [ enteredText, setEneteredText ] = useState('');

  const enteredTextHandler = (inputText) => {
    setEneteredText(inputText);
  }

  const addGoalHandler = () => {
    onAddGoal(enteredText);
    setEneteredText('');
  };

  return (
    <Modal
     visible={visible}
     animationType={'slide'}
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          value={enteredText}
          onChangeText={enteredTextHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color='#f31282'
              onPress={onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color='#b180f0'
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 12,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  button: {
    width: '100'
  }
});