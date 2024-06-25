import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={require('../assets/Images/Card.png')}
        style={styles.cardSample}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
  },

  cardSample: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    width: 380,
    height: 226,
  },
});

export default HomeScreen;
