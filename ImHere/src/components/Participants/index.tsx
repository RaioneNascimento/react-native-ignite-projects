import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantsProps {
  name: string;
  onRemove: () => void;
}

export const Participants = ({ name, onRemove }: ParticipantsProps) => {
  return (
    <View style={styles.form}>
      <Text style={styles.input}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};