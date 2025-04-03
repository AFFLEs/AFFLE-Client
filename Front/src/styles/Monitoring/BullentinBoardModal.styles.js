import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles =StyleSheet.create( {
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    position: 'absolute',
    top: 65,
    right: 0,
    width: width * 0.39,
    height: height - 150,
    marginRight: 10,
    backgroundColor: 'white',
    padding: 20,
    zIndex: 999,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 30,
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

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    top: -75,
    marginBottom: 6,
  },
  scrollView: {
    marginTop: -70,
  },
  table: {
    borderColor: '#BEBEBE',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#BEBEBE',
  },
  tableHeaderCell: {
    borderRightWidth: 1,
    borderColor: '#BEBEBE',
    padding: 10,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  tableDataCell: {
    padding: 10,
    flex: 3,
    borderRightWidth: 0,
    borderRightColor: '#BEBEBE',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  dataText: {
    fontSize: 14,
  },
  fileLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  tableContentCell: {
    padding: 15,
    minHeight: 430,
  },
  contentText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
export default styles;
