import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Cart Componenttttt
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B52AE',
  },
});