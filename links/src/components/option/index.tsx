import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type Props = TouchableOpacityProps & {
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: "primary" | "secondary"
}

export function Option({ name, icon, variant = "primary", ...rest }: Props) {
  function variantColor(v: "primary" | "secondary") {
    if (v === 'secondary') {
      return {
        color: colors.gray[300],
        text: styles.secondaryTitle
      }
    }

    return {
      color: colors.green[300],
      text: styles.primaryTitle
    }
  }

  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <MaterialIcons
        name={icon}
        size={20}
        color={variantColor(variant).color}
      />

      <Text
        style={variantColor(variant).text}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}