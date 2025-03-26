import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/SystemManage/RegisterForm.styles';

const FIELDS = {
    elderly: [
        { key: 'name', label: '이름', placeholder: '이름' },
        { key: 'age', label: '나이', placeholder: '나이', keyboardType: 'numeric' },
        { key: 'gender', label: '성별', placeholder: '성별' },
        { key: 'address', label: '주소', placeholder: '주소' },
        { key: 'contact', label: '연락처', placeholder: '연락처' },
    ],
    worker: [
        { key: 'name', label: '이름', placeholder: '이름' },
        { key: 'gender', label: '성별', placeholder: '성별' },
        { key: 'age', label: '나이', placeholder: '나이', keyboardType: 'numeric' },
        { key: 'work_region', label: '근무 지역', placeholder: '근무 지역' },
        { key: 'contact', label: '연락처', placeholder: '연락처' },
    ],
};

const RegisterForm = ({ onSave, type }) => {
    const ROLE = type;
    const [newSubject, setNewSubject] = useState({});

    const handleSave = () => {
        const requiredFields = FIELDS[ROLE].map(f => f.key);
        for (const fieldKey of requiredFields) {
            if (!newSubject[fieldKey]) {
                Alert.alert('입력 오류', `${fieldKey} 항목을 모두 입력해주세요.`);
                return;
            }
        }
        onSave({ ...newSubject });
    };

    return (
        <View style={styles.container}>
            {FIELDS[ROLE].map(field => (
                <View key={field.key} style={styles.form}>
                    <Text style={styles.title}>{field.label}</Text>

                    {field.key === 'gender' ? (
                        <View style={styles.genderContainer}>
                            {['남성', '여성'].map(option => {
                                const isSelected = newSubject.gender === option;
                                return (
                                    <TouchableOpacity
                                        key={option}
                                        style={[
                                            styles.genderButton,
                                            isSelected && styles.genderButtonSelected,
                                        ]}
                                        onPress={() =>
                                            setNewSubject({ ...newSubject, gender: option })
                                        }
                                    >
                                        <Text
                                            style={[
                                                styles.genderButtonText,
                                                isSelected && styles.genderButtonTextSelected,
                                            ]}
                                        >
                                            {option}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    ) : (
                        <TextInput
                            style={styles.input}
                            placeholder={field.placeholder}
                            keyboardType={field.keyboardType || 'default'}
                            value={newSubject[field.key] || ''}
                            onChangeText={(text) =>
                                setNewSubject({ ...newSubject, [field.key]: text })
                            }
                        />
                    )}
                </View>
            ))}

            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>저장하기</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterForm;
