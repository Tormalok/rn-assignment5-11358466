import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Statistics = (title) => {
  return (
    <View style={styles.container}>
      <Text style={styles.formatText}>Statistics Page</Text>
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

export default Statistics;
