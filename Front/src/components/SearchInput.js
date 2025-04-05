import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchInput = ({ value, onChangeText, placeholder = '검색어 입력', itsme }) => {
  return (
    <View style={[styles.container,  itsme === 'Allinfo' && styles.absoluteContainer, itsme === 'MyInfo' && styles.absoluteContainer2]}>
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
  absoluteContainer: {
      position: 'absolute',
      top: -30,
      right: 28,
      zIndex: 10,
    },
  absoluteContainer2: {
    position: 'absolute',
    top: -30,
    right: 200,
    zIndex: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 0,
  },
});

export default SearchInput;