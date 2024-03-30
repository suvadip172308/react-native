import { View, StyleSheet, Alert, FlatList} from "react-native"
import Title from '../components/UI/Title';
import { useEffect, useState } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import InstructionText from "../components/UI/InstructionText";
import Card from "../components/UI/Card";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/Game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

const generateRandomBetween = (max, min, exclude) => {
  const randNumber = Math.floor(Math.random() * (max - min)) + min;

  if(randNumber ===  exclude) {
    return generateRandomBetween(max, min, exclude);
  } else {
    return randNumber;
  }
}

const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
  const [ guessRounds, setGuessRounds ] = useState([initialGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    let newRandomNumber = 1;

    if((direction === 'lesser' && userNumber > currentGuess) ||
      (direction === 'greater' && userNumber < currentGuess)
    ) {
      Alert.alert(
        'Dont lie!',
        'You know that this is wrong...',
        [{ text: 'Sorry!', style: 'Cancel' }],
      );

      return;
    }

    if(direction === 'greater') {
      minBoundary = currentGuess + 1;
    } else {
      maxBoundary = currentGuess;
    }

    newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevGuess) => [newRandomNumber, ...prevGuess]);
  }

  const guessRoundsListLength = guessRounds.length;

  return(
    <View styles={styles.screen}>
      <View style={styles.addSpaceToTop}>{/** resolve it later, now adding extra margin top */}
        <Title>Opponent Guess !</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <Card>
        <InstructionText style={styles.instructionText}>Higher Or Lower ?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lesser')}>
              <Ionicons name="md-remove" size={24} color="white"/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data = {guessRounds}
          renderItem={
            ({item, index}) => {
              return (
                <GuessLogItem
                  roundsNumber={ guessRoundsListLength - index }
                  guess={item}
                />
              );
            }
          }
          keyExtractor={item => item}
        />
      </View>
    </View>
  )
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  addSpaceToTop: {
    marginTop: 60,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 15,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
});