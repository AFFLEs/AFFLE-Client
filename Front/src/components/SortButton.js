import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => setOpen(prev => !prev)}
        activeOpacity={0.8}
      >
        <Text style={styles.arrow}>▼</Text>
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 16,
    paddingHorizontal: 12,
    height: 40,
    width: 160,
  },
  arrow: {
    fontSize: 14,
    marginRight: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  dropdown: {
    position: 'absolute',
    top: 48,
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