import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tip from './Tip.js';
import Total from './Total.js';
import TipSelector from './TipSelector.js';

import formatPrice from './formatPrice.js';

const fakeTip = 0.15;

const CheckMath = ({ name, items, tax }) => {
  let sum = 0;
  items.map(item => sum += (item * (1 + tax)));
  let formattedSum = formatPrice(sum);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name}
      </Text>
      <Text style={styles.text}>
        {formattedSum}
      </Text>
      <View style={styles.text}>
        <TipSelector />
      </View>
      <Text style={styles.text}>
        <Tip sum={sum} tip={fakeTip}/>
      </Text>
      <Text style={styles.text}>
        <Total sum={sum} tip={fakeTip}/>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "pink"
  },
  text: {
    flex: 1,
  },
})

export default CheckMath
