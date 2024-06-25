import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TransactionItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <Text
        style={[styles.amount, { color: item.amount > 0 ? 'blue' : 'black' }]}
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
    borderBottomColor: '#eee',
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
    color: '#666',
  },
  amount: {
    fontSize: 16,
  },
});

export default TransactionItem;
