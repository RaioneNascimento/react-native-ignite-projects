import { FlatList, Text } from "react-native";
import { Category } from "../category";
import { categories } from "@/utils/caterogies";
import { styles } from "./styles";

type Props = {
  selected: string
  onChange: (category: string) => void;
}

export function Categories({ selected, onChange }: Props) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) =>
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      }
      ListEmptyComponent={<Text>Nenhuma categoria no momento.</Text>}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  )
}