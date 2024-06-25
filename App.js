import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import MyCards from './screens/MyCards';
import Statistics from './screens/Statistics';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require('./assets/Images/home.png');
          } else if (route.name === 'MyCards') {
            iconName = require('./assets/Images/myCards.png');
          } else if (route.name === 'Statistics') {
            iconName = require('./assets/Images/statistics.png');
          } else if (route.name === 'Settings') {
            iconName = require('./assets/Images/settings.png');
          }

          return (
            <Image
              source={iconName}
              style={{ width: size, height: size, tintColor: color }}
            />
          );
        },
        tabBarActiveTintColor: '#003262',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 16, paddingBottom: 5 },
        tabBarItemStyle: { paddingVertical: 10 },
        tabBarStyle: { height: 90 },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyCards" component={MyCards} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
