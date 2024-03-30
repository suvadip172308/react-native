import { Image, StyleSheet, View, Text } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/color";
import PrimaryButton from "../components/UI/PrimaryButton";

const GameIsOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return(
    <View style={styles.rootContainer}>
      <Title>GAME IS OVER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")}/>
      </View>
      <Text style={styles.summaryText}>
        Youer phone needed <Text style={styles.highlightText}>{roundsNumber}</Text>
        rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start A New Game</PrimaryButton>
    </View>
  );
}

export default GameIsOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
});
