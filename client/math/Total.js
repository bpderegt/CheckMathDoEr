import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { formatPrice } from './priceHelpers.js';

const Total = ({ sum }) => {
  sum = sum === 0 ? `$0.00` : formatPrice(sum)
  sum = sum.substring(0, sum.length - 3)
  return (
    <Text>
      {sum}
    </Text>
  )
}

export default Total