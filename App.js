import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <HomeScreen /> */}
      <SettingsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
