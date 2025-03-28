import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#F4F6FA',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1F23',
  },
  statusTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  red: {
    backgroundColor: '#E55733',
  },
  yellow: {
    backgroundColor: '#F5BD33',
  },
  green: {
    backgroundColor: '#43A363',
  },
  selected: {
    borderWidth: 2,
    borderColor: '#333',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  tabCount: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  elderlyList: {
    gap: 14,
  },
  elderCard: {
    backgroundColor: '#EDF2F6',
    padding: 16,
    borderRadius: 8,
  },
  elderName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  elderSub: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },
  elderDetail: {
    fontSize: 13,
    color: '#333',
    marginBottom: 8,
  },
  alertButton: {
    backgroundColor: '#4369A3',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignSelf: 'flex-start'
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  }
});

export default styles;
