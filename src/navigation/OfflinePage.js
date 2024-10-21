// ../screens/offline/OfflinePage.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OfflinePage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.offlineImage} source={require('../../assets/wifi.png')} />
      <Text style={styles.offlineText}>No internet connection</Text>
      <Text style={styles.retryText}>Try again to reconnect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edf8fc',
  },
  offlineImage: {
    width: 160,
    height: 160,
  },
  offlineText: {
    fontSize: 18,
    marginTop: 20,
  },
  retryText: {
    fontSize: 14,
    marginTop: 10,
    color: '#8C8C8C',
  },
});

export default OfflinePage;
