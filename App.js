import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Alert} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: Math.random(), text: 'Milk'},
    {id: Math.random(), text: 'Eggs'},
    {id: Math.random(), text: 'Bread'},
    {id: Math.random(), text: 'Juice'},
    {id: Math.random(), text: 'Unga'},
    {id: Math.random(), text: 'Rice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    console.log(text);
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'OK'}]);
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
