import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from '../constants/color';
import Title from '../components/UI/Title';
import Card from '../components/UI/Card';
import InstructionText from '../components/UI/InstructionText';

const StartGameScreen = ({
  onPickNumber
}) => {
  const [ enteredNumber,  setEnteredNumber ] = useState('');

  numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const inputResetHandler = () => {
    setEnteredNumber('');
  };

  const inputConfirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Input!',
        'Number has to be numeric and between 1 to 99',
        [{ text: 'Okay', style: 'destructive', onPress: inputResetHandler },]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };
  
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput 
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={inputResetHandler}
            >
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={inputConfirmHandler}
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
  }
});

export default StartGameScreen;