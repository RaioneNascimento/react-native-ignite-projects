import AsyncStorage from "@react-native-async-storage/async-storage";

const LINK_STORAGE_KEY = "links-storage";

export type LinkStorage = {
  id: string
  name: string
  url: string
  category: string
}

async function get(): Promise<LinkStorage[]> {
  const storage = await AsyncStorage.getItem(LINK_STORAGE_KEY);

  return storage ? JSON.parse(storage) : []
}

async function save(newLink: LinkStorage) {
  try {
    const storage = await get();
    const updated = JSON.stringify([...storage, newLink]);

    await AsyncStorage.setItem(LINK_STORAGE_KEY, updated);
  } catch (error) {
    throw error
  }
}

async function remove(linkId: string) {
  try {
    const storage = await get();
    const updated = storage.filter((link) => link.id !== linkId);

    await AsyncStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(updated))
  } catch (error) {

  }
}

export const LinkStorage = { get, save, remove };