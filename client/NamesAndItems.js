import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Item from './Item.js'

const NamesAndItems = ({ name, items, changeItem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name.substring(name.indexOf('-') + 1)}
      </Text>
      <View style={styles.items}>
        {items.map((item, index) => (
          <Item key={index} name={name} index={index} item={item} changeItem={changeItem}/>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'black',
  },
  name: {
    flex: 1,
    fontSize: 25,
    borderWidth: 1,
    borderColor: 'red',
  },
  items: {
    flex: 4,
    flexDirection: 'row',
  },
});

export default NamesAndItems