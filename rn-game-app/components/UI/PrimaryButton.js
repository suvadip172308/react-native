import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/color";

const PrimaryButton = ({
  children,
  onPress,
}) => {
  const pressHandler = () => {
    onPress();
  }

  return(
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => pressed ? [ styles.buttonInnerContainer, styles.pressed ] : styles.buttonInnerContainer }
        onPress={pressHandler}
        android_ripple={{ color: Colors.primary500}}
      >
        <Text
          style={styles.buttonText}
        >
          { children }
        </Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    backgroundColor: Colors.primary700,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  }
});
