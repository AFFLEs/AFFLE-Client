import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchInput = ({ value, onChangeText, placeholder = '검색어 입력' }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={styles.input}
        textAlign="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 40,
    width: 250,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 0,
  },
});

export default SearchInput;