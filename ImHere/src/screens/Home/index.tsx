import React, { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { Participants } from '../../components/Participants';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd(newParticipant: string) {
    const tratedParticipant = newParticipant.trim();

    if (participants.includes(tratedParticipant)) {
      Alert.alert('Atenção', 'Já existe um participante na lista com esse nome.');
      return setParticipantName('');
    }

    setParticipants(prevState => [...prevState, tratedParticipant]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Domingo, 6 de Abril de 2025</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity
          style={[
            styles.button,
            !participantName.length && styles.buttonDisabled,
          ]}
          onPress={() => handleParticipantAdd(participantName)}
          disabled={!participantName.length}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item => item)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participants
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View >
  );
}