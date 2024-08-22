import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FormContext, ThemeContext } from './contexts';

export default function ProfileScreen() {
  const { formData } = useContext(FormContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.card}>
        <Text style={{ color: theme.textColor }}>Name: {formData.name}</Text>
      </View>
      <View style={styles.card}>
        <Text style={{ color: theme.textColor }}>Address: {formData.address}</Text>
      </View>
      <View style={styles.card}>
        <Text style={{ color: theme.textColor }}>Customize Theme:</Text>
        <Button title="Set Background Color to Blue" onPress={() => setTheme({ ...theme, backgroundColor: 'blue' })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});