import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyCards = (title) => {
  return (
    <View style={styles.container}>
      <Text style={styles.formatText}>The MyCards Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  formatText: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default MyCards;
