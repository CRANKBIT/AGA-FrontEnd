import { FC } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import PDFReport from './PDFReport/PDFReport'

interface Props {
  Year: string
  Make: string
  Model: string
  Rego: string
  Odometer: string
  CustomerName: string
  service: string[]
}
const ViewPDFReport: FC<Props> = ({ Year, Model, Odometer, Rego, Make, CustomerName, service }) => (
  <div className="h-screen">
    <PDFViewer
      height="100%"
      style={{
        border: 'none',
      }}
      width="100%"
    >
      <PDFReport
        Year={Year}
        Model={Model}
        Odometer={Odometer}
        Rego={Rego}
        Make={Make}
        CustomerName={CustomerName}
        service={service}
      />
    </PDFViewer>
  </div>
)

export default ViewPDFReport
