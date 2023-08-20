import { FC } from 'react'
import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import styles from './PDFStyles'
import mockData from './assets/mockData'

interface Props {
  Year: string
  Make: string
  Model: string
  Rego: string
  Odometer: string
  CustomerName: string
  service: string[]
}
const PDFReport: FC<Props> = ({ Year, Model, Odometer, Rego, Make, CustomerName, service }) => (
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
          <Text style={styles.h4}>Service Report</Text>
        </View>
      </View>
      <View style={styles.tenant}>
        <View style={styles.textBoxWidth}>
          <Text style={[styles.h6, styles.gutterBottom]}>{mockData.Tenant.name}</Text>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.flexRowWidth}>
            {' '}
            <Text style={styles.body2}>Vehicle:</Text>
            <Text style={styles.body2}>Rego:</Text>
            <Text style={styles.body2}>Odometer:</Text>
            <Text style={styles.body2}>Name:</Text>
          </View>
          <View>
            {' '}
            <Text style={styles.body2}>
              {Make} {Model} {Year}
            </Text>
            <Text style={styles.body2}>{Rego}</Text>
            <Text style={styles.body2}>{Odometer}</Text>
            <Text style={styles.body2}>{CustomerName}</Text>
          </View>
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
            {service.map((item, index) => (
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
