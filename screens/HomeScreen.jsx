import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});

export default HomeScreen;
