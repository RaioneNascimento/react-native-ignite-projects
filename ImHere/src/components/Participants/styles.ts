import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
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
    backgroundColor: '#e23c44',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
})