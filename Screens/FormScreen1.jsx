import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from './contexts';

export default function FormScreen1({ navigation }) {
  const { formData, setFormData } = useContext(FormContext);

  const handleNext = () => {
    navigation.navigate('FormScreen2');
  };

  return (
    <View style={styles.container}>
      <Text>Step 1: Enter your name</Text>
      <TextInput
        value={formData.name}
        onChangeText={(name) => setFormData({ ...formData, name })}
        style={styles.input}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}
