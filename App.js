import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

import { useState } from "react";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] =  useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  
  const onHandleChangeText = text => {
    setTextItem(text);
    console.log(text);
  };

  const addItem = () => {
    setList(prevState => [
      ...prevState,
      {name: textItem, id: Math.random().toString() },
    ]);
    setTextItem('')
  };

  const onHandleDelete = id => {
    console.log('delete item')
    setList(prevState => prevState.filter(element => element !== id))
    setModalVisible(!modalVisible);
  }

  const onHandleModal = id => {
    console.log('setear el item al modal')
  }

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text>{item.name}</Text>
      <Button 
        title="X"
       // onPress={() => console.log('X')}
        onPress={onHandleDelete}
      />
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
          <Text style={styles.titleContainer}>
            LISTADO DE COMPRA
          </Text>
        <View style={styles.addItemContainer}>
            <TextInput
              placeholder="Ingrese un ITEM"
              style={styles.input}
              onChangeText={onHandleChangeText}
              value={textItem}
              />
            <Button title="Agregar" onPress={addItem} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listado}>LISTADO:</Text>
        <FlatList
              data={list}
              renderItem={renderItem}
              keyExtractor={item => item.id}
        />
      </View>
    </View>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 20,
    backgroundColor: "#FFF000",
  },
  
  inputContainer: {
    height: 150,
    paddingHorizontal: 30,
    paddingTop: 30,
  },

  titleContainer: {
    marginBottom: 30,
    fontSize: 25,
    fontWeight: 500,
  },

  addItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 200,
  },

  listContainer: {
    flex: 2,
    padding: 3,
  },

  listado:{
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 10,
  },

  renderItemStyle: {
    height: 60,
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 1 ,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 3,
  },
});
