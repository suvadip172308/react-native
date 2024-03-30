import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameIsOverScreen from './screens/GameOverScreen';
import Colors from './constants/color';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundNumber] = useState(0);

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setRoundNumber(numberOfRounds);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setRoundNumber(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameIsOverScreen
                userNumber={userNumber}
                roundsNumber={roundsNumber}
                onStartNewGame={startNewGameHandler}
              />;
  }

  return (
    <LinearGradient colors={[ Colors.primary800, Colors.accent500 ]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flexGrow: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
