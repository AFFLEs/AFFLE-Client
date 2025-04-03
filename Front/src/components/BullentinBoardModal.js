import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Modal } from 'react-native';
import styles from '../styles/Monitoring/BullentinBoardModal.styles';

const BullentinBoardModal = ({ onClose, visible, children }) => {
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
            <Text style={styles.closeText}>{'x'}</Text>
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

export default BullentinBoardModal;