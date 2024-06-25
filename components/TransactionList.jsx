import React from 'react';
import { FlatList } from 'react-native';
import TransactionItem from './TransactionItem';

const transactions = [
  {
    id: '1',
    icon: require('../assets/Images/apple.png'),
    title: 'Apple Store',
    category: 'Entertainment',
    amount: -5.99,
  },
  {
    id: '2',
    icon: require('../assets/Images/spotify.png'),
    title: 'Spotify',
    category: 'Music',
    amount: -12.99,
  },
  {
    id: '3',
    icon: require('../assets/Images/moneyTransfer.png'),
    title: 'Money Transfer',
    category: 'Transaction',
    amount: -300,
  },
  {
    id: '4',
    icon: require('../assets/Images/grocery.png'),
    title: 'Grocery',
    category: 'Shopping',
    amount: -50,
  },
];

const TransactionList = () => {
  return (
    <FlatList
      data={transactions}
      renderItem={({ item }) => <TransactionItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TransactionList;
