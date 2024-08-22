import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from './contexts';

export default function FormScreen2({ navigation }) {
  const { formData, setFormData } = useContext(FormContext);

  const handleNext = () => {
    navigation.navigate('FormScreen3');
  };

  return (
    <View style={styles.container}>
      <Text>Step 2: Enter your address</Text>
      <TextInput
        value={formData.address}
        onChangeText={(address) => setFormData({ ...formData, address })}
        style={styles.input}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});