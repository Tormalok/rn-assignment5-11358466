import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Images/profile.png')}
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.nameText}>Henry Amponsah</Text>
      </View>
      <Image
        source={require('../assets/Images/search.png')}
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  welcomeText: {
    fontSize: 22,
    color: '#6e6e6e',
  },
  nameText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  searchIcon: {
    padding: '40',
    width: 60,
    height: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
  },
});

export default Header;
