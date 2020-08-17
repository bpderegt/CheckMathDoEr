import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const categories = ['Name', 'Total w/ Tax', 'Choose', 'Tip', 'Total w/ Tip'];

const Categories = () => {
  return (
    <View style={styles.container}>
      {categories.map(category => (
        <Text style={styles.text}>{category}</Text>
      ))}
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
