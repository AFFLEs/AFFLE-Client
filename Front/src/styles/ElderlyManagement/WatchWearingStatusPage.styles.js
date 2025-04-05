import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
     flex: 1,
     padding: 15,
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

  searchInputTop: {
    width: 220,
  },

  statusTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
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

  alertButtonWrapper: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },

  alertButtonGlobal: {
    backgroundColor: '#4369A3',
    width: 150,
    height: 35,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  alertButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  elderlyListGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 12,
  },

  elderCard: {
    width: '48%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
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
});

export default styles;