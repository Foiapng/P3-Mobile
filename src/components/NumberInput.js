import { TextInput } from "react-native";
import styles from "../styles/styles";

export default function NumberInput({
  value,
  onChangeText,
  editable = true,
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder="0 a 9"
      placeholderTextColor="#888"
      keyboardType="numeric"
      maxLength={1}
      value={value}
      onChangeText={onChangeText}
      editable={editable}
    />
  );
}