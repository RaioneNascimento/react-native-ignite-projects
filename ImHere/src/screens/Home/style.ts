import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  text: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32
  },
  input: {
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    padding: 16,
    color: '#fdfcfe',
    fontSize: 16,
    flex: 1
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#31cf67',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16
  },
  buttonDisabled: {
    backgroundColor: '#62626a',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  emptyListText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  }
});