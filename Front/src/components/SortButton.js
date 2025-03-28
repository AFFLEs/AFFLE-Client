import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SortButton = ({ selectedOption, onSelect }) => {
  const [open, setOpen] = React.useState(false);
  const options = [
    { key: 'recentVisit', label: '최신 방문순' },
    { key: 'name', label: '이름순' },
    { key: 'nextVisit', label: '다음 방문 일자순' },
  ];

  const selectedLabel = options.find(opt => opt.key === selectedOption)?.label || '정렬';

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={() => setOpen(!open)}>
        <Feather name="chevron-down" size={16} color="#000" style={{ marginRight: 4 }} />
        <Text style={styles.text}>{selectedLabel}</Text>
      </TouchableOpacity>
      {open && (
        <View style={styles.dropdown}>
          {options.map(option => (
            <TouchableOpacity
              key={option.key}
              style={styles.option}
              onPress={() => {
                onSelect(option.key);
                setOpen(false);
              }}
            >
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginLeft: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    height: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  dropdown: {
    position: 'absolute',
    top: 44,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    zIndex: 10,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  optionText: {
    fontSize: 14,
  },
});

export default SortButton;