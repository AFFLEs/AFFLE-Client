import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DocumentPicker from 'react-native-document-picker';
import styles from '../styles/SystemManage/RegisterNoticeCard.styles';

const RegisterNoticeCard = ({ target, onTargetChange, onRegisterComplete }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [fileName, setFileName] = useState('');

    // 첨부파일 추가
    const handleFilePick = async () => {
        try {
            const res = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.allFiles], // 이미지, PDF, 한글 등 모든 파일 가능
            });
            setFileName(res.name); // 파일명 표시
            console.log('선택된 파일:', res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('파일 선택이 취소되었습니다.');
            } else {
                console.error('파일 선택 오류:', err);
            }
        }
    };

    // 등록하기
    const handleRegister = async () => {
        console.log('등록하기 클릭:', { target, title, content, fileName });

        if (!content || (target === '검침원' && !title)) {
            Alert.alert('입력 오류', '필수 정보를 입력해주세요.');
            return;
        }

        try {
            const newNotice = {
                id: Date.now().toString(),
                title: target === '검침원' ? title : '(스마트워치 공지)',
                content,
                file: fileName,
                date: new Date().toISOString().slice(0, 10),
                author: '관리자'
            };

            if (target === '검침원') {
                // 검침원 대상자일 경우
                // API 요청 POST
                Alert.alert('등록 완료', '검침원에게 공지가 등록되었습니다.');
            } else {
                // 노인 대상자일 경우
                // API 요청 POST
                Alert.alert('등록 완료', '노인에게 공지가 전송되었습니다.');
            }

            onRegisterComplete && onRegisterComplete(newNotice);

            // 초기화
            setTitle('');
            setContent('');
            setFileName('');
        } catch (error) {
            console.error(error);
            Alert.alert('오류', '공지 등록 중 문제가 발생했습니다.');
        }
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

            {/* 안내 문구 */}
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
            <TouchableOpacity style={styles.Button} onPress={handleRegister}>
                <Text style={styles.ButtonText}>등록하기</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterNoticeCard;
