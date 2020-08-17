import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { formatPrice, totalTipAndTax } from './math/priceHelpers.js';

const CheckTotal = ({ namesAndItems, taxRate }) => {
  let sum = 0;
  let totalTip = 0;
  let totalTax = 0;
  for (let name in namesAndItems) {
    let personalSum = 0;
    namesAndItems[name].items.map(item => {
      personalSum += item;
    });
    let { total, tip, tax } = totalTipAndTax(personalSum, namesAndItems[name].tipPercent, taxRate);
    sum += total;
    totalTip += tip;
    totalTax += tax;
  }

  let totalSum = formatPrice(sum + totalTip + totalTax);
  totalTax = formatPrice(totalTax);
  totalTip = formatPrice(totalTip);
  sum = formatPrice(sum);

  return (
    <Text style={{borderWidth: 1, borderColor: "blue"}}>
      {`Items: ${sum} - Tip: ${totalTip} - Tax: ${totalTax} - Total: ${totalSum.substring(0, totalSum.length - 3)}`}
    </Text>
  )
}

export default CheckTotal;
