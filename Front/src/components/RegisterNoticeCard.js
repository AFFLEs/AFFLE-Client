import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/SystemManage/RegisterNoticeCard.styles';

const RegisterNoticeCard = ({ target, onTargetChange }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [fileName, setFileName] = useState('');

    // 첨부파일 추가
    const handleFilePick = () => {
        setFileName('선택된_파일명.jpg');
    };

    // 등록하기
    const handleRegister = () => {
        console.log('등록하기 클릭:', { target, title, content, fileName });
    };

    return (
        <View style={styles.container}>
            {/* 공지 대상자 선택 */}
            <View style={styles.headerRow}>
                <Text style={styles.headerTitle}>공지 대상자 선택</Text>
                <View style={styles.pickerWrapper}>
                    <Picker
                        selectedValue={target}
                        onValueChange={(value) => onTargetChange(value)}
                        style={styles.picker}
                        mode="dropdown"
                        dropdownIconColor="#000"
                    >
                        <Picker.Item label="검침원" value="검침원" color="#000" />
                        <Picker.Item label="노인" value="노인" color="#000" />
                    </Picker>
                </View>
            </View>

            {/*안내 문구*/}
            {target === '노인' && (
                <Text style={styles.noticeText}>
                    * 스마트 워치를 통한 공지가 이루어지므로 간략하게 작성 부탁드립니다.
                </Text>
            )}

            {/* 입력 테이블 */}
            {target === '검침원' ? (
                <View style={styles.table}>
                    {/* 제목 */}
                    <View style={styles.tableRow}>
                        <View style={[styles.leftCell]}>
                            <Text style={styles.leftCellText}>제목</Text>
                        </View>
                        <View style={[styles.rightCell]}>
                            <TextInput
                                style={styles.input}
                                placeholder="공지 제목을 입력하세요."
                                value={title}
                                onChangeText={setTitle}
                            />
                        </View>
                    </View>

                    {/* 내용 */}
                    <View style={styles.tableRow}>
                        <View style={[styles.leftCell]}>
                            <Text style={styles.leftCellText}>내용</Text>
                        </View>
                        <View style={[styles.rightCell]}>
                            <TextInput
                                style={styles.textarea}
                                placeholder="공지 내용을 입력하세요."
                                multiline
                                value={content}
                                onChangeText={setContent}
                                textAlignVertical="top"
                            />
                        </View>
                    </View>

                    {/* 첨부 파일 */}
                    <View style={styles.tableRow}>
                        <View style={[styles.leftCell]}>
                            <Text style={styles.leftCellText}>첨부 파일</Text>
                        </View>
                        <View style={[styles.rightCell, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <Text style={{ flex: 1 }}>{fileName}</Text>
                            <TouchableOpacity style={styles.fileButton} onPress={handleFilePick}>
                                <Text style={{ color: '#333' }}>파일 선택</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ) : (
                <View style={styles.table}>
                    <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
                        <View style={[styles.leftCell]}>
                            <Text style={styles.leftCellText}>내용</Text>
                        </View>
                        <View style={[styles.rightCell]}>
                            <TextInput
                                style={styles.textarea}
                                placeholder="공지 내용을 입력하세요."
                                multiline
                                value={content}
                                onChangeText={setContent}
                                textAlignVertical="top"
                            />
                        </View>
                    </View>
                </View>
            )}

            {/* 등록하기 버튼 */}
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText} onPress={() => handleRegister}>등록하기</Text>
            </TouchableOpacity>

        </View>
    );
};

export default RegisterNoticeCard;

