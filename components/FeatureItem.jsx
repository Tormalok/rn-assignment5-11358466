import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const FeatureItem = ({ icon, label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 25,
    height: 25,
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
});

export default FeatureItem;
