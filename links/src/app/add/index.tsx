import { MaterialIcons } from "@expo/vector-icons"
import { Alert, Text, TouchableOpacity, View } from "react-native"

import { colors } from "@/styles/colors"
import { router } from "expo-router"
import { styles } from "./styles"

import { Button } from "@/components/button"
import { Categories } from "@/components/categories"
import { Input } from "@/components/input"
import { useState } from "react"

import { LinkStorage } from "@/storage/link-storage"

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  async function handleAdd() {
    try {
      if (!category) {
        return Alert.alert("Categoria", "Selecione uma categoria");
      }

      if (!name.trim()) {
        return Alert.alert("Nome", "Infome um nome");
      }

      if (!url.trim()) {
        return Alert.alert("Url", "Informe a URL");
      }

      await LinkStorage.save(
        { id: new Date().getTime().toString(), name, url, category }
      )

      const data = await LinkStorage.get();
      console.log("🚀 ~ handleAdd ~ data:", data)

      Alert.alert("Sucesso", `Novo link '${name}' adicionado!`, [
        { text: "Ok", onPress: () => router.back() }
      ])
    } catch (error) {
      console.log("🚀 ~ handleAdd ~ error:", error)
      Alert.alert("Erro", "Não foi possível salvar o link!")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.3} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>

      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input
          placeholder="Nome"
          placeholderTextColor={colors.gray[400]}
          onChangeText={setName}
          autoCorrect={false}
        />

        <Input
          placeholder="Url"
          placeholderTextColor={colors.gray[400]}
          onChangeText={setUrl}
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  )
}