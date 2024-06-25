import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
  const { theme, toggleTheme, isDarkTheme } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.header, { color: theme.colors.text }]}>
        Settings
      </Text>

      <TouchableOpacity style={styles.option}>
        <Text style={[styles.optionText, { color: theme.colors.text }]}>
          Language
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={[styles.optionText, { color: theme.colors.text }]}>
          My Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={[styles.optionText, { color: theme.colors.text }]}>
          Contact Us
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={[styles.optionText, { color: theme.colors.text }]}>
          Change Password
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={[styles.optionText, { color: theme.colors.text }]}>
          Privacy Policy
        </Text>
      </TouchableOpacity>

      <View style={[styles.option, styles.disableBB]}>
        <Text
          style={[
            styles.optionText,
            styles.boldText,
            { color: theme.colors.text },
          ]}
        >
          Theme
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    alignSelf: 'center',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
  disableBB: {
    borderBottomWidth: 0,
  },
});

export default Settings;
