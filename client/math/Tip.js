import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import formatPrice from './formatPrice.js';

const Tip = ({ sum, tip }) => {
  let formattedTip = sum === 0 ? `$0.00` : formatPrice(sum * (tip))
  return (
    <Text>
      {formattedTip}
    </Text>
  )
}

export default Tip