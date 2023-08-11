import { StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 24,
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  h2: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1.125,
  },
  h4: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.235,
  },
  h6: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.6,
  },
  subtitle2: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 1.57,
  },
  body2: {
    fontSize: 10,
    lineHeight: 1.43,
  },
  body3: {
    fontSize: 9,
    lineHeight: 1.35,
  },
  gutterBottom: {
    marginBottom: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tenant: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  items: {
    marginTop: 26,
  },
  notes: {
    marginTop: 32,
  },
  table: {
    display: 'flex',
    width: 'auto',
  },
  tableHeader: {},
  tableBody: {},
  tableRow: {
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    borderStyle: 'solid',
    flexDirection: 'row',
  },
  tableCell: {
    paddingVertical: 4,
  },
  textBoxWidth: {
    width: 180,
  },
  serviceItemWidth: {
    width: 260,
  },
  CommentWidth: {
    width: 280,
    marginLeft: 5,
  },
  alignRight: {
    textAlign: 'right',
  },
  alignCenter: {
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowWidth: {
    width: 55,
  },
})

export default styles
