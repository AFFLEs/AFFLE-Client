import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#F4F6FA',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    marginRight: 28,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  searchSortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    alignSelf: 'flex-end',
    marginBottom: 6,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 10,
  },
  groupCard: {
    width: '47%',
    margin: '1.5%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  managerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  managerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1F23',
  },
  managerRegion: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#444',
    marginLeft: 6,
  },
  elderlyList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  elderlyCard: {
    width: '47%',
    backgroundColor: '#E7EBF4',
    padding: 10,
    borderRadius: 8,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  elderlyName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  elderlySub: {
    fontSize: 13,
    color: '#444',
  },
  elderlyInfo: {
    fontSize: 12,
    color: '#444',
    marginBottom: 2,
  },
  countBadge: {
    marginTop: 4,
    fontSize: 12,
    color: '#888',
  },
});

export default styles;
