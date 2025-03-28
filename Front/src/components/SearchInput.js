import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchInput = ({ value, onChangeText, placeholder = '검색어 입력' }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  input: {
    height: 36,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 14,
    width: 180,
  },
});

export default SearchInput;
