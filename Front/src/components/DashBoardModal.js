// DashBoardModal.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Modal } from 'react-native';

const DashBoardModal = ({ onClose, children,visible }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* 닫기 버튼 */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>{'<'}</Text>
          </TouchableOpacity>

          {/* 페이지 내용 */}
          <View style={styles.content}>
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 90,
    right: 3,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height - 90,
    backgroundColor: 'white',
    padding: 20,
    zIndex: 999,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 13,
  },
  closeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    marginTop: 80,
    flex: 1,
  },
});

export default DashBoardModal;
