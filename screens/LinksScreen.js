import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        transform: [
          { scaleY: 2 }
        ]
      }}>
        <Image
          style={{
            height: 200,
            width: '100%',
          }}
          source={{ uri: 'https://source.unsplash.com/random' }} />
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={{ height: 1000, width: '100%', backgroundColor: 'red' }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  contentContainer: {
    // 
  },
});
