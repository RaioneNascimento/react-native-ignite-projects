import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Image, TouchableOpacity, View, Modal, Text, Alert, Linking } from "react-native";

import { Categories } from "@/components/categories";
import { Option } from "@/components/option";
import { colors } from "@/styles/colors";
import { Link } from "@/components/link";
import { styles } from "./styles";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { categories } from "@/utils/caterogies";
import { LinkStorage } from "@/storage/link-storage";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState(categories[0].name);
  const [link, setLink] = useState<LinkStorage>({} as LinkStorage);
  const [links, setLinks] = useState<LinkStorage[]>([]);

  async function handleGetLinks() {
    try {
      const response = await LinkStorage.get();
      const filtred = response.filter(item => item.category === category);

      setLinks(filtred);
    } catch (error) {
      console.log("🚀 ~ handleAdd ~ error:", error)
      Alert.alert("Erro", "Não foi possível listar os links!")
    }
  }

  function handleDetails(selected: LinkStorage) {
    setShowModal(true)
    setLink(selected);
  }

  async function handleRemove() {
    try {
      await LinkStorage.remove(link.id);
      handleGetLinks();

      setShowModal(false);
    } catch (error) {
      console.log("🚀 ~ handleRemove ~ error:", error)
      Alert.alert("Erro", "Não foi possível remover o link!")
    }
  }

  async function handleOpen() {
    try {
      await Linking.openURL(link.url);
      setShowModal(false);
    } catch (error) {
      console.log("🚀 ~ handleOpen ~ error:", error)
      Alert.alert("Link", "Não foi possível abri o link!")
    }
  }

  useFocusEffect(
    useCallback(() => {
      handleGetLinks()
    }, [category])
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/logo.png")}
          style={styles.logo}
        />

        <TouchableOpacity activeOpacity={0.3} onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories onChange={setCategory} selected={category} />

      <FlatList
        data={links}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => handleDetails(item)}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{link.category}</Text>

              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>{link.name}</Text>

            <Text style={styles.modalUrl}>{link.url}</Text>

            <View style={styles.modalFooter}>
              <Option
                name="Excluir"
                icon="delete"
                variant="secondary"
                onPress={() => (
                  Alert.alert("Excluir", "Deseja realmente excluir?", [
                    { style: "cancel", text: "Não" },
                    { text: "Sim", onPress: handleRemove }
                  ])
                )}
              />

              <Option
                name="Abrir"
                icon="language"
                onPress={handleOpen}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
