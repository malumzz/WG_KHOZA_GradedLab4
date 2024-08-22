import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';

export default function CartScreen({ navigation }) {
  const [cart, setCart] = useState([]);

  const removeItem = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  };

  const updateQuantity = (item, quantity) => {
    setCart(cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity } : cartItem));
  };

  const clearCart = () => {
    setCart([]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>${item.price}</Text>
      <Button title="Remove" onPress={() => removeItem(item)} />
      <Button title="Increase" onPress={() => updateQuantity(item, item.quantity + 1)} />
      <Button title="Decrease" onPress={() => updateQuantity(item, item.quantity - 1)} />
    </View>
  );

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text>Total Cost: ${totalCost}</Text>
      <Button title="Proceed to Checkout" onPress={clearCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
});