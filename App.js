import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, StatusBar } from 'react-native';

import AddName from './client/AddName.js';
import Categories from './client/Categories.js';
import CheckMath from './client/math/CheckMath.js';
import CheckTotal from './client/CheckTotal.js';
import NamesAndItems from './client/NamesAndItems.js';

import * as Location from 'expo-location';
const { APIkey } = require('./config.js');
const axios = require('axios');

const fakeNames = [
  'Brian',
  'Jorgio',
  'Nate',
  'Minji'
];

const App = () => {
  const [tax, setTax] = useState(null);
  const [names, setNames] = useState([]);
  const [namesAndItems, setNamesAndItems] = useState({});

  useEffect(() => {
    fakeNames.map((name, index) => addNewNameObject(name, index));
    setNames(fakeNames);

    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        console.error('location permission denied')
      }
      let currLocation = await Location.getCurrentPositionAsync({});

      axios.get(`https://usgeocoder.com/api/get_info.php?lat=${currLocation.coords.latitude}&lon=${currLocation.coords.longitude}&authkey=${APIkey}&format=json`)
        .then(data => {
          setTax(parseFloat(data.data.usgeocoder.totalcollection_tax_summary.t_tax_total_tax) / 100)
        })
        .catch(err => {
          console.log('err')
        })
    })();
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
      return { ...prevState, [`${index}-${name}`]: {items: [null,null,null,null], tipPercent: 0.17, tipIndex: 2} }
    })
  }

  const tipAdjust = (name, index) => {
    let info = namesAndItems[name];
    const tipRates = {
      0: 0.23,
      1: 0.2,
      2: 0.17,
      3: 0.14,
      4: 0.11
    }
    info.tipPercent = tipRates[index];
    info.tipIndex = index;
    setNamesAndItems(prevState => {
      return { ...prevState, [name]: info};
    })
  }

  const changeItem = (val, index, name) => {
    // work in progress
    console.log(index)
    let info = namesAndItems[name];
    if (val !== null) {
      if (val[0] === `$`) {
        val = val.substring(1);
      }
      info.items[index] = parseFloat(val);
    } else {
      // if (info.items.length > 4) {
        console.log(index)
        info.items.splice(index, 1);
      // } else {
        // info.items[index] = null;
      // }
    }

    let full = true;
    let shrink = 0;

    for (let i = 0; i < info.items.length; i++) {
      if (info.items[i] === null) {
        full = false;
        break;
      }
    }

    if (full) {
      info.items.push(null);
    }
    setNamesAndItems(prevState => {
      return { ...prevState, [name]: info}
    })
  }

  return names.length === 0 ? <View></View> : (
    <SafeAreaView style={styles.view}>
      <View style={styles.top}>
        {names.map((name, index) => (
          <NamesAndItems
            key={index}
            name={`${index}-${name}`}
            items={namesAndItems[`${index}-${name}`].items}
            changeItem={changeItem}
          />
        ))}
      </View>
      <AddName
        style={styles.button}
        addName={addName}
      />
      <View style={styles.bottom} >
        <Categories />
        {names.map((name, index) => (
          <CheckMath
            key={index}
            taxRate={tax}
            name={`${index}-${name}`}
            info={namesAndItems[`${index}-${name}`]}
            tipAdjust={tipAdjust}
          />
        ))}
        <CheckTotal
          namesAndItems={namesAndItems}
          taxRate={tax}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  top: {
    flex: 9,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  button: {
    flex: 2,
  },
  bottom: {
    flex: 9,
  }
});

export default App;
