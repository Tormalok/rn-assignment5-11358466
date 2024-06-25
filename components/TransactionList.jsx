import React from 'react';
import { FlatList } from 'react-native';
import TransactionItem from './TransactionItem';

const transactions = [
  {
    id: '1',
    icon: require('../assets/Images/sent.png'),
    title: 'Sent Money',
    category: 'Finance',
    amount: -200,
  },
  {
    id: '2',
    icon: require('../assets/Images/receive.png'),
    title: 'Received Money',
    category: 'Finance',
    amount: 500,
  },
  {
    id: '3',
    icon: require('../assets/Images/loan.png'),
    title: 'Loan Payment',
    category: 'Finance',
    amount: -300,
  },
  {
    id: '4',
    icon: require('../assets/Images/topUp.png'),
    title: 'Mobile Topup',
    category: 'Finance',
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
