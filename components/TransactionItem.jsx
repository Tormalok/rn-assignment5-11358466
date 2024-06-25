import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const TransactionItem = ({ item }) => {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.itemContainer, { borderBottomColor: theme.colors.border }]}
    >
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.details}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {item.title}
        </Text>
        <Text style={[styles.category, { color: theme.colors.text }]}>
          {item.category}
        </Text>
      </View>
      <Text
        style={[
          styles.amount,
          { color: item.amount > 0 ? 'blue' : theme.colors.text },
        ]}
      >
        {item.amount > 0 ? `$${item.amount}` : `- $${Math.abs(item.amount)}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: 'gray',
  },
  amount: {
    fontSize: 16,
  },
});

export default TransactionItem;
