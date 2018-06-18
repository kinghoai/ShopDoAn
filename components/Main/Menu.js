import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Menu Componenttttt
        </Text>
        <TouchableOpacity>
          <Text>Close menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
