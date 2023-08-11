import { FC } from 'react'
import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import styles from './PDFStyles'
import mockData from './assets/mockData'

const PDFReport: FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View>
          <Image source="./svg/CompanyOne.png" style={styles.logo} />
        </View>
        <View>
          {' '}
          <Text style={styles.h2}>{mockData.Company.Domain}</Text>
        </View>
        <View>
          <Text style={styles.h4}>{mockData.Report.title}</Text>
          <Text style={styles.subtitle2}>Status: {mockData.Report.status}</Text>
        </View>
      </View>
      <View style={styles.tenant}>
        <View style={styles.textBoxWidth}>
          <Text style={[styles.h6, styles.gutterBottom]}>{mockData.Tenant.name}</Text>
          <Text style={styles.subtitle2}>{mockData.Tenant.email}</Text>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.flexRowWidth}>
            {' '}
            <Text style={styles.body2}>Vehicle:</Text>
            <Text style={styles.body2}>Rego:</Text>
            <Text style={styles.body2}>Odometer:</Text>
          </View>
          <View>
            {' '}
            <Text style={styles.body2}>
              {mockData.Vehicle.make} {mockData.Vehicle.make} {mockData.Vehicle.year}
            </Text>
            <Text style={styles.body2}>{mockData.Vehicle.rego}</Text>
            <Text style={styles.body2}>{mockData.Vehicle.odo}</Text>
          </View>
        </View>
      </View>
      <View style={styles.user}>
        <View>
          <Text style={[styles.subtitle2, styles.gutterBottom]}>Created At</Text>
          <Text style={[styles.body2]}>{mockData.Report.createdAt}</Text>
        </View>
      </View>
      <View style={styles.items}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.tableRow}>
              <View style={[styles.tableCell, styles.serviceItemWidth]}>
                <Text style={styles.h6}>Service Items</Text>
              </View>
              <View style={[styles.tableCell, styles.CommentWidth]}>
                <Text style={styles.h6}>Comments</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableBody}>
            {mockData.Report.service.map((item, index) => (
              <View style={styles.tableRow} key="">
                <View style={[styles.tableCell, styles.serviceItemWidth]}>
                  <Text style={styles.body3}>{item}</Text>
                </View>
                <View style={[styles.tableCell, styles.serviceItemWidth]}>
                  <Text style={styles.body3}>{mockData.Report.comments[index]}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
)

export default PDFReport
