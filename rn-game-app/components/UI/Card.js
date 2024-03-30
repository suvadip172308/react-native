import { StyleSheet, View } from "react-native";
import Colors from "../../constants/color";

const Card = ({children}) => {
  return(
    <View style={styles.inputContainer}>
      {children}
    </View>
  )
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: Colors.primary600,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center'
  },
});