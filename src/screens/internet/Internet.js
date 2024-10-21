// ../screens/offline/OfflinePage.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OfflinePage = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/foto_Perfil.png')} />
        <View style={styles.headerText}>
          <Text style={styles.name}>Musfirah</Text>
          <Text style={styles.post}>Administrator</Text>
        </View>
        <TouchableOpacity style={styles.bell}>
          <Image source={require('../../assets/bell.png')} />
        </TouchableOpacity>
      </View>

      {/* Offline Page Content */}
      <Image style={styles.offlineImage} source={require('../../assets/wifi.png')} />
      <Text style={styles.offlineText}>No internet connection</Text>
      <Text style={styles.retryText}>Try again to reconnect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // So header stays at the top
    alignItems: 'center',
    backgroundColor: '#edf8fc',
  },
  header: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    height: 50,
    marginLeft: 20,
  },
  headerText: {
    marginLeft: 10,
    width: 190,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  post: {
    fontSize: 12,
    fontWeight: 'lighter',
    color: '#8C8C8C',
  },
  bell: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offlineImage: {
    width: 160,
    height: 160,
    marginTop: 50, // Adjust margin for space between header and offline message
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
