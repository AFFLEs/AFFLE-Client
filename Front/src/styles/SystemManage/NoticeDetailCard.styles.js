import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    /* 표 컨테이너: 전체 테두리 */
    tableContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginVertical: 15,
    },
    /* 가로줄 (행) */
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    /* 기본 셀 */
    tableCell: {
        flex: 1,
        padding: 10,
    },
    /* 왼쪽 라벨 셀: 세로줄(오른쪽) 추가 */
    labelCell: {
        borderRightWidth: 1,
        borderColor: '#ccc',
        maxWidth: 80, // 라벨 폭을 적당히 조정
    },
    labelText: {
        fontWeight: 'bold',
    },
    leftDivider: {
        borderLeftWidth: 1,
        borderColor: '#ccc',
    },
    contentText: {
        lineHeight: 20,
    },
});

export default styles;
