import React, { useContext } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import { CartContext } from './contexts';

const foodItems = [
  { id: '1', name: 'Pizza', description: 'Delicious cheese pizza', price: 90, image: require('./assets/pizza.jpg') },
  { id: '2', name: 'Burger', description: 'Juicy beef burger', price: 40, image: require('./assets/burger.jpg') },
  { id: '3', name: 'Kota', description: 'Kasi best kota', price: 35, image: require('./assets/kota.jpg') },
  { id: '4', name: 'Salad', description: 'Fresh garden salad', price: 15, image: require('./assets/salad.jpg') },
  { id: '5', name: 'Beef', description: 'Creamy stew beef', price: 95, image: require('./assets/beef.jpg') },
  { id: '6', name: 'Wors', description: 'Grilled wors', price: 70, image: require('./assets/wors.jpg') },
  { id: '7', name: 'Mathumbu', description: 'Delicious beef offal', price: 95, image: require('./assets/offal.jpg') },
];

export default function MenuScreen({ navigation }) {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>${item.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
      <FlatList
        data={foodItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  item: {
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
});