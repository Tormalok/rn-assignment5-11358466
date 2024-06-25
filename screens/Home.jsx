import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import Features from '../components/Features';
import TransactionList from '../components/TransactionList';

const Home = () => {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Header />
      <Image
        source={require('../assets/Images/Card.png')}
        style={styles.cardSample}
      />
      <Features />
      <View style={styles.sectionHead}>
        <Text style={[styles.mainTitle, { color: theme.colors.text }]}>
          Transaction
        </Text>
        <Text style={[styles.optTitle, { color: 'blue' }]}>See all</Text>
      </View>
      <View>
        <TransactionList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  cardSample: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 20,
    width: 380,
    height: 226,
  },
  sectionHead: {
    marginTop: 10,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  optTitle: {
    fontSize: 18,
    color: 'blue',
  },
});

export default Home;
