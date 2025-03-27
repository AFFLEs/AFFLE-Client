import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#F4F6FA',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 24,
  },
  groupCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  managerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1C1F23',
  },
  managerRegion: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#444',
    marginBottom: 6,
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
  elderlyName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
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
