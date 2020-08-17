import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight } from 'react-native';

const options = [
  {label: '🤩', value: 0},
  {label: '😁', value: 1},
  {label: '🙂', value: 2},
  {label: '😐', value: 3},
  {label: '🤮', value: 4}
];

const TipSelector = ({ name, tipIndex, tipAdjust }) => {
  const [modalVisable, setModalVisable] = useState(false);

  const change = (value) => {
    if (value !== undefined) {
      tipAdjust(name, value);
    }
    setModalVisable(!modalVisable);
  }

  return (
    <View>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisable}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{marginBottom: 20, fontSize: 20}}>How was your meal?</Text>
              {options.map((option, index) => (
                <TouchableHighlight
                  key={index}
                  onPress={() => change(option.value)}
                >
                  <Text style={{fontSize: 50}}>{option.label}</Text>
                </TouchableHighlight>
              ))}
            </View>
          </View>
        </Modal>
      </View>
      <TouchableHighlight
        style={{
          maxHeight: 20
        }}
        onPress={() => change()}
      >
        <Text>{options[tipIndex].label}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    marginTop: 42,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

export default TipSelector;
