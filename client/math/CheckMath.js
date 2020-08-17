import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Total from './Total.js';
import TipSelector from './TipSelector.js';

import { formatPrice, totalTipAndTax } from './priceHelpers.js';

const CheckMath = ({ name, info, taxRate, tipAdjust }) => {
  const { tipPercent, items, tipIndex } = info;
  let itemSum = 0;
  items.map(item => itemSum += item);

  let { total, tip, tax, sum } = totalTipAndTax(itemSum, tipPercent, taxRate);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name.substring(name.indexOf(`-`) + 1)}
      </Text>
      <Text style={styles.text}>
        {formatPrice(total + tax)}
      </Text>
      <View style={styles.text}>
        <TipSelector name={name} tipIndex={tipIndex} tipAdjust={tipAdjust}/>
      </View>
      <Text style={styles.text}>
        {formatPrice(tip)}
      </Text>
      <Text style={styles.text}>
        <Total sum={sum}/>
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
