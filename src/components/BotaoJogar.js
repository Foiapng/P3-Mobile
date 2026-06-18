import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/styles";

export default function GuessButton({
  title,
  onPress,
  secondary = false,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        secondary && styles.secondaryButton,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}