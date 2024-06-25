import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const FeatureItem = ({ icon, label }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View
        style={[styles.iconContainer, { backgroundColor: theme.colors.card }]}
      >
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={[styles.label, { color: theme.colors.text }]}>{label}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 30,
    height: 30,
  },
  label: {
    fontSize: 14,
  },
});

export default FeatureItem;
