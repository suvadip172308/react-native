import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";


const GuessLogItem = ({ roundsNumber, guess }) => {
  return(
    <View style={styles.listItem}>
      <Text style={styles.inputText}>#{roundsNumber}</Text>
      <Text style={styles.inputText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4, //for android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  inputText: {
    fontFamily: 'open-sans',
  }
});