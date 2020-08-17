import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { formatPrice } from './math/priceHelpers.js'

const Item = ({ name, item, index, changeItem }) => {
  const [price, setPrice] = useState('');
  const [editing, setEditing] = useState(false);

  const priceValidator = (input) => {
    let lastChar = input[input.length - 1]
    if (!isNaN(lastChar) || lastChar === `.` || lastChar === `$`) {
      if (input.indexOf(`.`) === -1 || (input.length - input.indexOf(`.`)) < 4) {
        setPrice(input);
      }
    }
  }

  const onEndEdit = () => {
    if (price !== null && price.length > 0) {
      let formattedPrice = formatPrice(isNaN(price) ? price : price * 100)
      changeItem(price === `$` ? null : price, index, name);
      setPrice(formattedPrice);
    } else {
      changeItem(null, index, name);
    }
    setEditing(false);
  }

  return (
    <TextInput
      style={[styles.container, editing ? {backgroundColor: "lightgrey"} : {backgroundColor: "white"}]}
      keyboardType="number-pad"
      value={price === `$0.00` ? `` : price}
      onFocus={()=>setEditing(true)}
      onChange={(e) => priceValidator(e.nativeEvent.text)}
      onEndEditing={() => onEndEdit()}
    />
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
