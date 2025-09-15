import { Image, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { style } from "./styles";
import { colors } from "@/styles/colors";

import { Category } from "@/components/category";

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image
          source={require("@/assets/logo.png")}
          style={style.logo}
        />

        <TouchableOpacity activeOpacity={0.3}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Category name="Projeto" icon="code" isSelected/>
      <Category name="Site" icon="language" isSelected={false} />
      <Category name="Video" icon="movie" isSelected={false} />
    </View>
  )
}
