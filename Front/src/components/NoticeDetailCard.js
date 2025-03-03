import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/SystemManage/NoticeDetailCard.styles';

const NoticeDetailCard = ({ notice }) => {

    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.title}>공지사항 상세 보기</Text>

            <View style={styles.tableContainer}>
                {/* 1. 상단 제목 행 */}
                <View style={styles.tableRow}>
                    {/* 왼쪽: “제목” 라벨 */}
                    <View style={[styles.tableCell, styles.labelCell]}>
                        <Text style={styles.labelText}>제목</Text>
                    </View>
                    {/* 오른쪽: 제목 값 */}
                    <View style={styles.tableCell}>
                        <Text>{notice.title}</Text>
                    </View>
                </View>

                {/* 2. 작성자 / 등록 일시 행 (4칸) */}
                <View style={styles.tableRow}>
                    {/* 작성자 라벨 */}
                    <View style={[styles.tableCell, styles.labelCell]}>
                        <Text style={styles.labelText}>작성자</Text>
                    </View>
                    {/* 작성자 값 */}
                    <View style={styles.tableCell}>
                        <Text>{notice.author}</Text>
                    </View>
                    {/* 등록 일시 라벨 */}
                    <View style={[styles.tableCell, styles.labelCell, styles.leftDivider]}>
                        <Text style={styles.labelText}>등록 일시</Text>
                    </View>
                    {/* 등록 일시 값 */}
                    <View style={styles.tableCell}>
                        <Text>{notice.date}</Text>
                    </View>
                </View>

                {/* 3. 첨부 파일 행 */}
                <View style={styles.tableRow}>
                    {/* 첨부파일 라벨 */}
                    <View style={[styles.tableCell, styles.labelCell]}>
                        <Text style={styles.labelText}>첨부 파일</Text>
                    </View>
                    {/* 첨부파일 값 */}
                    <View style={styles.tableCell}>
                        <Text>{notice.attachment}</Text>
                    </View>
                </View>

                {/* 4. 내용 라벨 행 */}
                <View style={styles.tableRow}>
                    {/* “내용” 라벨만 표시 (왼쪽 칸) */}
                    <View style={[styles.tableCell, styles.labelCell]}>
                        <Text style={styles.labelText}>내용</Text>
                    </View>
                    {/* 오른쪽 칸은 비워둠 */}
                    <View style={styles.tableCell}>
                        <Text style={styles.contentText}>{notice.content}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default NoticeDetailCard;

