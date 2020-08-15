import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Button, StatusBar } from 'react-native';
import AddName from './client/AddName.js';
import Categories from './client/Categories.js';
import CheckMath from './client/math/CheckMath.js';
import NamesAndItems from './client/NamesAndItems.js';

const fakeNames = [
  'Brian',
  'Jorgio',
  'Nate',
  'Minji'
];

const fakeTax = 0.0875;

const App = () => {
  const [tax, setTax] = useState(0);
  const [names, setNames] = useState([]);
  const [namesAndItems, setNamesAndItems] = useState({});

  useEffect(() => {
    fakeNames.map((name, index) => addNewNameObject(name, index));
    setTax(fakeTax)
    setNames(fakeNames);
  }, []);

  const addName = (newName) => {
    if (newName === ``) return
    const newNames = [...names];
    addNewNameObject(newName, newNames.length);
    newNames.push(newName);
    setNames(newNames);
  }

  const addNewNameObject = (name, index) => {
    setNamesAndItems(prevState => {
      return { ...prevState, [`${index}-${name}`]: [null,null,null,null] }
    })
  }

  const changeItem = (val, index, name) => {
    let priceArr = namesAndItems[name];
    if (val[0] === `$`) val = val.substring(1);
    priceArr[index] = parseFloat(val);

    setNamesAndItems(prevState => {
      return { ...prevState, [name]: priceArr}
    })
  }

  return names.length === 0 ? <View></View> : (
    <View style={styles.view}>
      <View style={styles.top}>
        {names.map((name, index) => (
          <NamesAndItems
            key={index}
            name={`${index}-${name}`}
            items={namesAndItems[`${index}-${name}`]}
            changeItem={changeItem}
          />
        ))}
      </View>
      <AddName style={styles.button} addName={addName} />
      <View style={styles.bottom} >
        <Categories />
        {names.map((name, index) => (
          <CheckMath
            key={index}
            name={name}
            tax={tax}
            items={namesAndItems[`${index}-${name}`]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  top: {
    flex: 9,
    // maxHeight: '50%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '5%',
  },
  button: {
    flex: 2,
  },
  bottom: {
    flex: 9,
  }
});

export default App;