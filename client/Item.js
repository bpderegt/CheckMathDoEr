import React, { useState } from 'react';
import { StyleSheet, TextInput, Alert } from 'react-native';
import formatPrice from './math/formatPrice.js'

const Item = ({ name, item, index, changeItem }) => {
  const [price, setPrice] = useState('');

  const priceValidator = (input) => {
    let lastChar = input[input.length - 1]
    if (!isNaN(lastChar) || lastChar === `.` || lastChar === `$`) {
      if (input.indexOf(`.`) === -1 || (input.length - input.indexOf(`.`)) < 4) {
        setPrice(input);
      }
    }
  }

  const onEndEdit = () => {
    if (price.length > 0) {
      let formattedPrice = formatPrice(price)
      changeItem(price, index, name)
      setPrice(formattedPrice);
    }
  }

  return (
    <TextInput style={styles.container} value={price} onChange={(e) => priceValidator(e.nativeEvent.text)} onEndEditing={() => onEndEdit()}/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 25,
    borderWidth: 1,
    borderColor: 'green',
  },
})



export default Item;
