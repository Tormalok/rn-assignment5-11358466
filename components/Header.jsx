import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Image
        source={require('../assets/Images/profile.png')}
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.welcomeText, { color: theme.colors.text }]}>
          Welcome back,
        </Text>
        <Text style={[styles.nameText, { color: theme.colors.text }]}>
          Henry Amponsah
        </Text>
      </View>
      <View style={styles.searchIconBackground}>
        <Image
          source={require('../assets/Images/search.png')}
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
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
  },
  nameText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  searchIconBackground: {
    width: 60,
    height: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
});

export default Header;
