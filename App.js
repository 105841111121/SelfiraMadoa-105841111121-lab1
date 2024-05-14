import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>saya selfira madoa</Text>
      <Text style={{
        fontSize: 20,
        textDecorationLine: 'underline',
        textShadowColor: 'black',
        fontStyle: 'italic',
        color: 'gray',
      }}>Text Ukuran 20!</Text>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'purple'
      }}>text Ukuran 40!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
