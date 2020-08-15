import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import formatPrice from './formatPrice.js';

const Total = ({ sum, tip }) => {
  let total = sum === 0 ? `$0.00` : formatPrice(Math.ceil(sum * (1 + tip)))
  total = total.substring(0, total.length - 3)
  return (
    <Text>
      {total}
    </Text>
  )
}

export default Total