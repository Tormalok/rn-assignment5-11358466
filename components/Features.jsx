import React from 'react';
import { StyleSheet, View } from 'react-native';
import FeatureItem from './FeatureItem';

const Features = () => {
  return (
    <View style={styles.container}>
      <FeatureItem icon={require('../assets/Images/sent.png')} label="Sent" />
      <FeatureItem
        icon={require('../assets/Images/receive.png')}
        label="Receive"
      />
      <FeatureItem icon={require('../assets/Images/loan.png')} label="Loan" />
      <FeatureItem icon={require('../assets/Images/topUp.png')} label="Topup" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default Features;
