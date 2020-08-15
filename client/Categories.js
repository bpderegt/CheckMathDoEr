import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name</Text>
      <Text style={styles.text}>Total w/ Tax</Text>
      <Text style={styles.text}>Choose</Text>
      <Text style={styles.text}>Tip</Text>
      <Text style={styles.text}>Total w/ Tip</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 20,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "pink"
  },
  text: {
    flex: 1,
  },
})

export default Categories;
